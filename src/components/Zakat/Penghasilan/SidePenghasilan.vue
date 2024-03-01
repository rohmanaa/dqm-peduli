<template>
<div>
    <section class="appie-pricing-2-area pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="appie-section-title text-center">
                        <div class="appie-pricing-tab-btn">
                            <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation" @click.prevent="change_plan">
                                    <a class="nav-link" :class="[switchPlan ? 'active' : '']" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                                        <b-icon icon="calculator" font-scale="1"></b-icon> Hitung
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation" :class="[switchPlan ? 'on' : 'off']" @click.prevent="change_plan">
                                    <a class="nav-link" :class="[switchPlan === false ? 'active' : '']" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
                                        <b-icon icon="credit-card" font-scale="1"></b-icon> Bayar
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade" :class="[switchPlan ? 'active show' : '']" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <aside>
                                <div class="card-donasi" style="">
                                    <div class="donasi-header">

                                        <h5> Zakat Pendapatan </h5>
                                    </div>

                                    <hr />
                                    <div class="p-2">
                                        <div class="mb-2">
                                            <span>Penghasilan/Gaji saya per bulan<span class="text-danger">*</span></span>
                                            <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder=""></b-form-input>
                                        </div>
                                        <div class="mb-2 mt-2">
                                            <span>Penghasilan lain-lain saya per bulan</span>
                                            <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder=""></b-form-input>
                                        </div>

                                        <div class="mb-2 mt-2">
                                            <span>Hutang/Cicilan saya untuk kebutuhan pokok
                                                <v-b-tooltip.hover title="Yang dimaksud Kebutuhan Pokok adalah kebutuhan sandang, pangan, papan, pendidikan, kesehatan dan alat transportasi primer.">
                                                    <b-icon icon="exclamation-circle" animation="throb" scale="1"></b-icon>
                                                </v-b-tooltip.hover>
                                            </span>
                                            <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder=""></b-form-input>
                                        </div>

                                        <div class="mb-2 mt-2">
                                            <span>Jumlah penghasilan per bulan</span>
                                            <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="" disabled></b-form-input>
                                        </div>

                                        <div class="mb-2">
                                            <span>Masukan harga emas saat ini (per gram)*</span>
                                            <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder=""></b-form-input>
                                        </div>
                                        <div class="mb-2 mt-2">
                                            <span>Besarnya nishab zakat penghasilan per bulan</span>
                                            <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="" disabled></b-form-input>
                                        </div>
                                        <div class="mb-2 mt-2">
                                            <span>Apakah saya wajib membayar zakat penghasilan?</span>
                                            <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="" disabled></b-form-input>
                                        </div>
                                        <div class="mb-2 mt-2">
                                            <span>Jumlah yang saya harus bayar per bulan</span>
                                            <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="" disabled></b-form-input>
                                        </div>
                                    </div>

                                    <div class="total-donasi mt-3">

                                        <button type="button" :class="{ 'submit-donasi': !isSubmitting, 'disabled-button': isButtonDisabled || isSubmitting }" :disabled="isButtonDisabled || isSubmitting" @click="donate(idpro)">
                                            <span v-if="!isSubmitting">HITUNG ZAKAT</span>
                                            <span v-else>
                                                <b-spinner small variant="white" label="Spinning"></b-spinner> Mohon Tunggu...
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div class="tab-pane fade" :class="[switchPlan === false ? 'active show' : '']" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <aside>
                                <div class="card-donasi" style="">
                                    <div class="donasi-header">
                                        <div class="status"> 100 <i>%</i>
                                        </div>
                                        <h5> Rp. {{ totalterkumpul }} </h5>
                                    </div>
                                    <div class="p-2">
                                        <VueJsProgress :percentage="100" customBgColor="#1a3257" :delay="600" :striped="true" :animation="true">
                                        </VueJsProgress>
                                    </div>

                                    <hr />

                                    <div id="chooseDonasi" class="choose-donasi p-2">
                                        <h5 class="title_choose-donasi">Total Zakat</h5>
                                        <div class="col-lg-12 mb-2">
                                            <input :id="'price_' + idpro" :name="'price_' + idpro" type="number" v-model="donasi" class="input-donasi-lain" @input="checkMinAmount" disabled />
                                        </div>
                                    </div>
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
                                    <div class="total-donasi mt-3">
                                        <div class="nominal-donasi">
                                            <h5>Total Zakat</h5>
                                            <h4>Rp. {{ jumlahDonasi }}</h4>
                                        </div>
                                        <button type="button" :class="{ 'submit-donasi': !isSubmitting, 'disabled-button': isButtonDisabled || isSubmitting }" :disabled="isButtonDisabled || isSubmitting" @click="donate(idpro)">
                                            <span v-if="!isSubmitting">ZAKAT</span>
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
            isSubmitting: false,
            showNotification: false,
            shopAPI: process.env.VUE_APP_SHOPURL,
            donasi: '',
            selectedValue: '',
            money: {
                decimal: ',',
                thousands: '.',
                prefix: '',
                suffix: '',
                precision: 0,
                masked: false
            },

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
        isButtonDisabled() {
            return !this.donasi || this.donasi < 10000 || !this.namaDonatur || !this.nomorWhatsApp;
        }
    },
    created() {
        this.customerNama = this.$route.query["customer[nama]"] || "";
        this.customerNohp = this.$route.query["customer[nohp]"] || "";
    },
    methods: {
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
