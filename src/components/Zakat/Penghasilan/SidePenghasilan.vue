<template>
<div>
    <section class="appie-pricing-2-area pb-100">
        <div class="container">

            <div class="row">
                <div class="col-lg-12">
                    <aside class="mb-3">
                        <div class="card-donasi" style="">
                            <div class="donasi-header">
                                <div class="status"> 100 <i>%</i>
                                </div>
                                <h5> Rp. {{ totalterkumpulzakat }} </h5>
                            </div>
                            <div class="p-2">
                                <VueJsProgress :percentage="100" customBgColor="#1a3257" :delay="600" :striped="true" :animation="true">
                                </VueJsProgress>
                            </div>
                            <h5 class="title_choose-donasi p-2">Total Zakat Terkumpul</h5>
                        </div>
                    </aside>
                    <aside class="mb-3">
                        <div class="card-donasi" style="">
                            <div class="pt-3 ps-2">
                                <h5 class="title_choose-donasi">Kalkulator Zakat Penghasilan</h5>
                            </div>
                            <hr />
                            <div class="ps-2 pe-2">
                                <!-- Input for Monthly Salary -->
                                <div class="mb-2">
                                    <span>Penghasilan/Gaji saya per bulan<span class="text-danger">*</span></span>
                                    <input type="text" v-model="salary" class="input-donasi-lain" />
                                </div>

                                <!-- Input for Other Monthly Income -->
                                <div class="mb-2 mt-2">
                                    <span>Penghasilan lain-lain saya per bulan</span>
                                    <input type="text" v-model="otherIncome" class="input-donasi-lain" />
                                </div>

                                <!-- Input for Monthly Debt for Basic Needs -->
                                <div class="mb-2 mt-2">
                                    <span>Hutang/Cicilan saya untuk kebutuhan pokok
                                        <v-b-tooltip.hover title="Yang dimaksud Kebutuhan Pokok adalah kebutuhan sandang, pangan, papan, pendidikan, kesehatan dan alat transportasi primer.">
                                            <b-icon icon="exclamation-circle" animation="throb" scale="1"></b-icon>
                                        </v-b-tooltip.hover>
                                    </span>
                                    <input type="text" v-model="basicNeedsDebt" class="input-donasi-lain"  />
                                </div>

                                <!-- Display Total Monthly Income -->
                                <div class="mb-2 mt-2">
                                    <span>Jumlah penghasilan per bulan</span>
                                    <input type="text" :value="totalIncome" class="input-donasi-lain" disabled v-money="money" />
                                </div>

                                <!-- Display Zakat Amount -->
                                <div class="mb-2 mt-2">
                                    <span>Jumlah yang saya harus bayar per bulan</span>
                                    <input type="text" :value="zakatAmount" class="input-donasi-lain" disabled v-money="money" />
                                </div>

                                <!-- Button to Calculate Zakat -->

                            </div>
                            <div class="total-donasi mt-3">
                                <button type="button" class="submit-donasi" @click="calculateZakat">
                                    <span v-if="!isCalculating">HITUNG</span>
                                    <span v-else>
                                        <b-spinner small variant="white" label="Spinning"></b-spinner> Mohon Tunggu...
                                    </span>
                                </button>
                            </div>
                        </div>
                    </aside>

                    <!-- Result Section -->
                    <aside v-if="showResult">
                        <div class="card-donasi">
                            <div id="chooseDonasi" class="choose-donasi p-2">
                                <h5 class="title_choose-donasi">Total Zakat</h5>
                                <div class="col-lg-12 mb-2">
                                    <input type="text" class="input-donasi-lain" v-model="totalZakat" disabled v-money="money" />
                                </div>
                            </div>

                            <!-- Profile Section -->
                            <div class="p-2">
                                <h5 class="title_choose-donasi">Profil Donatur</h5>
                                <div class="row">
                                    <div class="col-lg-12 mb-2">
                                        <input :id="'nama_' + idpro" :name="'nama_' + idpro" placeholder="Masukan Nama Donatur" type="text" class="input-donasi-lain" v-model="namaDonatur" />
                                    </div>
                                    <div class="col-lg-12">
                                        <input :id="'nowa_' + idpro" :name="'nowa_' + idpro" placeholder="Masukan Nomor WhatsApp Aktif" type="text" class="input-donasi-lain" v-model="nomorWhatsApp" />
                                    </div>
                                </div>
                            </div>

                            <!-- Button to Pay Zakat -->
                            <div class="total-donasi mt-3">
                                <button type="button" class="submit-donasi" @click="payZakat">
                                    <span v-if="!isSubmitting">BAYAR ZAKAT</span>
                                    <span v-else>
                                        <b-spinner small variant="white" label="Spinning"></b-spinner> Mohon Tunggu...
                                    </span>
                                </button>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    </section>

</div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import VueJsProgress from 'vue-js-progress'
import {
    VMoney
} from 'v-money'
export default {
    components: {
        VueJsProgress,
    },
    data() {
        return {
            switchPlan: true,
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
            salary: '',
            otherIncome: '',
            basicNeedsDebt: '',
            totalIncome: 0,
            zakatAmount: 0,
            isCalculating: false,
            showResult: false,
            totalZakat: 0,
            isSubmitting: false,

        }
    },
    props: {
        idpro: {
            type: String,
        },
        totalterkumpul: {
            type: String,
        },
    },
    computed: {
        jumlahDonasi: function () {
            return this.donasi;
        },
        isB1uttonDisabled() {
            return !this.donasi || this.donasi < 10000 || !this.namaDonatur || !this.nomorWhatsApp;
        },

    },
    created() {
        this.customerNama = this.$route.query["customer[nama]"] || "";
        this.customerNohp = this.$route.query["customer[nohp]"] || "";
    },
    methods: {
        calculateZakat: function () {
            // Mengambil nilai dari input dan mengkonversi ke tipe float
            var salary = parseFloat(this.salary) || 0;
            var otherIncome = parseFloat(this.otherIncome) || 0;
            var basicNeedsDebt = parseFloat(this.basicNeedsDebt) || 0;

            // Menghitung total pemasukan
            var totalIncome = salary + otherIncome - basicNeedsDebt;

            // Menghitung jumlah zakat
            var zakatAmount = 0.025 * totalIncome;

            // Menetapkan nilai hasil perhitungan ke variabel data
            this.totalIncome = totalIncome; // Pembulatan ke 2 desimal
            this.zakatAmount = zakatAmount; // Pembulatan ke 2 desimal

            this.totalZakat = zakatAmount;
            this.showResult = true;
        },

        change_plan() {
            this.switchPlan = !this.switchPlan
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
        resetForm() {
            this.donationAmount = 0;
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
    }
}
</script>

<style scoped>
.disabled-button {
    background-color: #ccc;
    border-radius: 8px;
    color: #fff;
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
