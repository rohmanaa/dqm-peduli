<template>
<section class="contact-section" id="HitungZakat">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="contact-form">
                    <h4>Kalkulator Zakat</h4>
                    <p></p>
                    <div class="row">
                        <div class="col-md-6">
                            <span>Gaji saya per bulan<span class="text-danger">*</span></span>
                            <input type="text" v-model="salary" @input="calculateZakat" />
                        </div>

                        <div class="col-md-6">
                            <span>Penghasilan lain-lain saya per bulan</span>
                            <input type="text" v-model="otherIncome" @input="calculateZakat" />
                        </div>

                        <div class="col-md-6">
                            <span>Hutang/Cicilan saya untuk kebutuhan pokok</span>
                            <input type="text" v-model="debt" @input="calculateZakat" />
                        </div>

                        <div class="col-md-6">
                            <span>Masukkan harga emas saat ini (per gram)<span class="text-danger">*</span></span>
                            <input type="text" v-model="goldPrice" @input="calculateZakat" />
                        </div>

                        <hr />
                        <div class="col-md-6">
                            <span>Total Gaji</span>
                            <input type="text" :value="totalIncome" disabled v-money="money" />
                        </div>

                        <div class="col-md-6 ">
                            <span>Besarnya Nisab Zakat</span>
                            <input type="text" :value="formatNumber(nisabAmount)" disabled v-money="money" />
                        </div>

                        <div class="col-md-6 ">
                            <span>Apakah saya wajib berzakat?</span>
                            <input type="text" :value="isZakatRequired ? 'Ya' : 'Tidak'" disabled />
                        </div>

                        <div class="col-md-6 ">
                            <span>Jumlah yang saya harus bayar per bulan</span>
                            <input type="text" :value="formatNumber(zakatAmount)" disabled v-money="money" />
                        </div>

                        <div class="col-md-6 text-right">
                            <button type="button" class="btn btn-dqm" @click="resetForm">
                                <span class="text-white">Hitung Ulang</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="single-info">
                    <div class="service-details-sidebar">
                        <div class="service-category-widget bg-dqm text-white">
                            <h5 class="text-white">Niat Zakat Penghasilan</h5>
                            <p>
                                <span class="text-white text-end" style="font-size:1.2rem"> نَوَيْتُ أَنْ أُخْرِجَ زَكاَةَ مَالِي فَرْضًالِلهِ تَعَالَى</span>
                            </p>
                            <span style="font-size:.8rem"> <br />
                                “Nawaitu an ukhrija zakata maali fardha llillahi ta’aala”<br />
                                Saya berniat mengeluarkan zakat harta milikku karena Allah
                                Ta’ala</span>
                        </div>
                        <div class="service-download-widget"><a href="#"><i class="fal fa-download"></i><span>Total Zakat Perlu Dibayar/bulan</span></a></div>
                        <div class="service-download-widget"><input type="text" :value="formatNumber(zakatAmount)" class="zakat" disabled v-money="money" /></div>
                        <div class="service-download-widget mt-3 bg-white" v-if="isZakatRequired">
                            <div class="donasi-form pt-3 ps-3 pe-3 pb-3">
                                <h5>Profil Donatur</h5>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <input :id="'nama_' + idpro" :name="'nama_' + idpro" placeholder="Masukan Nama Donatur" type="text" class="form-control" v-model="namaDonatur" />

                                        <input :id="'nowa_' + idpro" :name="'nowa_' + idpro" placeholder="Masukan Nomor WhatsApp Aktif" type="text" class="form-control" v-model="nomorWhatsApp" />
                                    </div>
                                    <div class="text-center">
                                        <button type="button" class="btn btn-dqm w-100 text-white fw-6" @click="payZakat">
                                            <span v-if="!isSubmitting">BAYAR ZAKAT</span>
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
            showNotification: false,
            shopAPI: process.env.VUE_APP_SHOPURL,
            donasi: '',
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
