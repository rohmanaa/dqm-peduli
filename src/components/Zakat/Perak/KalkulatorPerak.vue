<template>
<div>
    <section class="appie-pricing-2-area contact-section pb-15" id="HitungZakat">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="row">
                        <div class="appie-section-title text-center">
                            <div class="appie-pricing-tab-btn">
                                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                    <li class="nav-item" role="presentation" @click.prevent="change_plan">
                                        <a class="nav-link" :class="[switchPlan?'active':'']" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Emas</a>
                                    </li>
                                    <li class="nav-item" role="presentation" :class="[switchPlan?'on':'off']" @click.prevent="change_plan">
                                        <a class="nav-link" :class="[switchPlan === false?'active':'']" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Perak</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-8">

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade" :class="[switchPlan?'active show':'']" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div class="row justify-content-center">
                                        <div class="contact-form">
                                            <h4>Kalkulator Zakat Emas</h4>
                                            <p></p>
                                            <div class="row">

                                                <div class="col-md-6">
                                                    <span>Emas yang dimiliki</span>
                                                    <input type="text" v-model="emasmilik" @input="calculateZakat" />
                                                </div>

                                                <div class="col-md-6">
                                                    <span>Harga Emas saat ini</span>
                                                    <input type="text" v-model="hargaemas" />
                                                </div>

                                                <hr />

                                                <div class="col-md-6 ">
                                                    <span>Apakah saya wajib berzakat?</span>
                                                    <input type="text" :value="isZakatEmasRequired ? 'Ya' : 'Tidak'" disabled />
                                                </div>

                                                <div class="col-md-6 ">
                                                    <span>Wajib Zakat Emas Anda</span>
                                                    <input type="text" :value="formatNumber(TotalBayarEmas)" disabled  v-money="money"/>
                                                </div>

                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <button type="button" class="btn btn-dqm" @click="resetForm" >
                                                        <span class="text-white">Hitung Ulang</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="tab-pane fade" :class="[switchPlan=== false?'active show':'']" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div class="row justify-content-center">

                                        <div class="contact-form">
                                            <h4>Kalkulator Zakat Perak</h4>
                                            <p></p>
                                            <div class="row">

                                                <div class="col-md-6">
                                                    <span>Perak yang dimiliki </span>
                                                    <input type="text" />
                                                </div>

                                                <div class="col-md-6">
                                                    <span>Harga Perak saat ini</span>
                                                    <input type="text" value="13600" v-money="money" />
                                                </div>

                                                <hr />

                                                <div class="col-md-6 ">
                                                    <span>Apakah saya wajib berzakat?</span>
                                                    <input type="text" :value="isZakatRequired ? 'Ya' : 'Tidak'" disabled />
                                                </div>

                                                <div class="col-md-6 ">
                                                    <span>Wajib Zakat Perak Anda</span>
                                                    <input type="text" :value="formatNumber(zakatAmount)" disabled v-money="money" />
                                                </div>

                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <button type="button" class="btn btn-dqm" @click="resetForm">
                                                        <span class="text-white">Hitung Ulang</span>
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
                <div class="col-4">

                    <div class="single-info">
                        <div class="service-details-sidebar">
                            <div class="service-category-widget bg-dqm text-white">
                                <h5 class="text-white">Niat Zakat Emas</h5>
                                <p>
                                    <span class="text-white text-end" style="font-size:1.2rem"> نَوَيْتُ أَنْ أُخْرِجَ زَكاَةَ مَالِي فَرْضًالِلهِ تَعَالَى </span>
                                </p>
                                <span style="font-size:.8rem"> <br />
                                    “Nawaitu an ukhrija zakata maali fardha llillahi ta’aala”<br />
                                    Saya berniat mengeluarkan zakat harta milikku karena Allah
                                    Ta’ala</span>
                            </div>
                            <div class="service-download-widget mt-3 bg-white">
                                <div class="donasi-form pt-3 ps-3 pe-3 pb-3">
                                    <h5>Profil Donatur</h5>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <input :id="'nama_' + idpro" :name="'nama_' + idpro" placeholder="Masukan Nama Donatur" type="text" class="form-control" v-model="namaDonatur" />

                                            <input :id="'nowa_' + idpro" :name="'nowa_' + idpro" placeholder="Masukan Nomor WhatsApp Aktif" type="text" class="form-control" v-model="nomorWhatsApp" />
                                        </div>
                                        <div class="text-center">
                                            <button type="button" class="btn btn-dqm w-100 text-white fw-6" >
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
</div>
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
            emasmilik: 0,
            hargaemas: 970000,
            TotalBayarEmas: 0,
            money: {
                decimal: ',',
                thousands: '.',
                prefix: 'Rp ',
                precision: 0,
                masked: false
            },
            isZakatRequired: false,
            zakatAmount: 0,
            showAside: false,
        }
    },
    computed: {
        isZakatEmasRequired() {
            return this.emasmilik >= 85;
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
            if (this.emasmilik >= 85) {
                this.TotalBayarEmas = this.emasmilik * 0.025 * this.hargaemas;
            } else {
                this.TotalBayarEmas = 0;
            }
        },
        formatNumber(number) {
            // Format number function if needed
            return number.toLocaleString();
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
        watch: {
            hargaemas(newValue, oldValue) {
                if (isNaN(newValue) || newValue <= 0) {
                    this.hargaemas = oldValue;
                }
            }
        }

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
