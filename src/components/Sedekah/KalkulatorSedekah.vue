<template>
<section class="contact-section" id="HitungZakat">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="contact-form">
                    <h4>Sedekah</h4>

                    <div class="row">
                        <div class="col-md-12">
                            <span>Masukan Nominal Sedekah<span class="text-danger">*</span></span>
                            <input type="text" v-model="sedekah" />

                            <h5>Profil Donatur</h5>

                            <input :id="'nama_' + idpro" :name="'nama_' + idpro" placeholder="Masukan Nama Donatur" type="text" class="form-control" v-model="namaDonatur" />

                            <input :id="'nowa_' + idpro" :name="'nowa_' + idpro" placeholder="Masukan Nomor WhatsApp Aktif" type="text" class="form-control" v-model="nomorWhatsApp" />

                            <div class="text-center">
                                <button type="button" class="btn btn-dqm w-100 text-white fw-6" @click="payZakat">
                                    <span v-if="!isSubmitting">LANJUTKAN PEMBAYARAN</span>
                                    <span v-else>
                                        <b-spinner small variant="white" label="Spinning"></b-spinner> Mohon Tunggu...
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

import {
    VMoney
} from 'v-money'
export default {
    components: {

    },
    props: {
        idpro: {
            type: String,
        },
        totalterkumpul: {
            type: String,
        },
    },
    data() {
        return {
            showQuestion: 1,
            switchPlan: true,
            selectedTab: 'hukum',
            namaDonatur: '',
            nomorWhatsApp: '',
            shopAPI: process.env.VUE_APP_SHOPURL,
            selectedValue: '',
            money: {
                decimal: "",
                thousands: ".",
                prefix: "Rp. ",
                precision: '',
                masked: false,
            },
            salary: 0,
            otherIncome: 0,
            debt: 0,
            goldPrice: 0,
            totalIncome: 0,
            nisabAmount: 0,
            isZakatRequired: false,
            zakatAmount: 0,
            showAside: false,
        }
    },
    computed: {
        jumlahDonasi: function () {
            return this.donasi;
        },
        isB1uttonDisabled() {
            return !this.donasi || this.donasi < 10000 || !this.namaDonatur || !this.nomorWhatsApp;
        },

    },
    methods: {
        OpenQuestion(value) {
            this.showQuestion = value
        },
        change_plan() {
            this.switchPlan = !this.switchPlan
        },
        selectFeature(name) {
            this.selectedTab = name
        },
        calculateZakat() {
            // Calculate Total Income
            this.totalIncome =
                parseFloat(this.salary) + parseFloat(this.otherIncome) - parseFloat(this.debt);

            // Calculate Nisab Amount (Gold Price * 7.083333333333333)
            this.nisabAmount = parseFloat(this.goldPrice) * 7.083333333333333;

            // Check if Zakat is required
            this.isZakatRequired = this.nisabAmount <= this.totalIncome;

            // Calculate Zakat Amount (2.5% of Total Income)
            this.zakatAmount = this.isZakatRequired ? this.totalIncome * 0.025 : 0;
        },

        formatNumber(value) {
            return value.toFixed(0);
        },
        resetForm() {
            this.salary = '';
            this.otherIncome = '';
            this.debt = '';
            this.goldPrice = '';
            this.totalIncome = '';
            this.showAside = false;
            this.totalterkumpul = '';
            this.nisabAmount = '';
        },

        async donate(idpro) {
            this.isSubmitting = true;

            // Simulasi proses submit (gantilah dengan logika sesuai kebutuhan)
            await new Promise(resolve => setTimeout(resolve, 2000));

            this.isSubmitting = false;

            const dataToSend = {
                product_id: idpro,
                nama: this.namaDonatur,
                nohp: this.nomorWhatsApp,
                price: this.donasi
            };

            try {
                this.isLoading = true;
                const response = await axios.post(process.env.VUE_APP_SHOPURL + "/api/transaction/request", dataToSend);
                if (response.status === 200) {
                    var win = window.open(response.data.data.paymenturl, 'PEMBAYARAN DQ PEDULI', 'width=350, height=700');
                    var timer = setInterval(function () {
                        if (win.closed) {
                            clearInterval(timer);
                            location.reload();
                        }
                    }, 1000);
                }
            } catch (error) {
                console.error(error);
                await Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Terjadi kesalahan saat mengirim data ke server.",
                });
            } finally {
                this.isLoading = false;
            }
        },
        closeMenu() {
            const navbarCollapse = document.querySelector(".navbar-collapse");
            navbarCollapse.classList.remove("show");
        },
        load() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        },
        updateInputValue(event) {
            this.donasi = event.target.value;
        },
        checkMinAmount() {
            this.showNotification = this.donasi < 10000 && this.donasi !== null;
        },
        directives: {
            money: VMoney
        },
        payZakat() {
            // Your payment logic goes here
            // For example, you can make an API call to process the payment
            // Display loading spinner during the payment process
            this.isSubmitting = true;

            // Simulating a payment process with a delay (you should replace this with your actual payment logic)
            setTimeout(() => {
                this.isSubmitting = false;
                alert("Zakat payment successful!");
                // Reset the form or redirect to a thank you page
            }, 2000);
        },
    },
    created() {
        this.recalculateZakat();
        this.customerNama = this.$route.query["customer[nama]"] || "";
        this.customerNohp = this.$route.query["customer[nohp]"] || "";
    },

}
</script>

<style scoped>
.zakat {
    background-color: #ddd;
    border-radius: 8px;
    border: 1px solid #fff;
    color: #646464;
    cursor: not-allowed;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -.02em;
    line-height: 21px;
    padding: 11.5px 0;
    text-align: center;
    width: 100%;
}
</style>
