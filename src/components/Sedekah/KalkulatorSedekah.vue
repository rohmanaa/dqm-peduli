<template>
<section class="contact-section" id="HitungZakat">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="contact-form">
                    <h4>Sedekah</h4>

                    <div class="row">
                        <div id="chooseDonasi" class="choose-sedekah">
                            <h5 class="title_choose-sedekah">Mau Sedekah Berapa ?</h5>
                            <div class="overview-radio">
                                <div class="row boxed-check-group boxed-check-success">
                                    <div class="col-lg-6 ">
                                        <label class="boxed-check">
                                            <input class="boxed-check-input" type="radio" name="radio-overview" value="50000" @change="updateInputValue">
                                            <div class="boxed-check-label text-center">50.000</div>
                                        </label>
                                    </div>
                                    <div class="col-lg-6 ">
                                        <label class="boxed-check">
                                            <input class="boxed-check-input" type="radio" name="radio-overview" value="100000" @change="updateInputValue">
                                            <div class="boxed-check-label text-center">100.000</div>
                                        </label>
                                    </div>
                                    <div class="col-lg-6 ">
                                        <label class="boxed-check">
                                            <input class="boxed-check-input" type="radio" name="radio-overview" value="200000" @change="updateInputValue">
                                            <div class="boxed-check-label text-center">200.000</div>
                                        </label>
                                    </div>
                                    <div class="col-lg-6 ">
                                        <label class="boxed-check">
                                            <input class="boxed-check-input" type="radio" name="radio-overview" value="500000" @change="updateInputValue">
                                            <div class="boxed-check-label text-center">500.000</div>
                                        </label>
                                    </div>

                                    <div class="col-lg-6 ">
                                        <label class="boxed-check">
                                            <input class="boxed-check-input" type="radio" name="radio-overview" value="1000000" @change="updateInputValue">
                                            <div class="boxed-check-label text-center">1000.000</div>
                                        </label>
                                    </div>

                                    <div class="col-lg-6 ">
                                        <label class="boxed-check">
                                            <input class="boxed-check-input" type="radio" name="radio-overview" value="2000000" @change="updateInputValue">
                                            <div class="boxed-check-label text-center">2000.000</div>
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <span>Masukan Nominal Sedekah<span class="text-danger">*</span></span>
                            <input type="text" v-model="sedekah" v-money="money" />
                            <h5>Profil Donatur</h5>
                            <input :id="'nama_' + idpro" :name="'nama_' + idpro" placeholder="Masukan Nama Donatur" type="text" class="form-control" v-model="namaDonatur" />
                            <input :id="'nowa_' + idpro" :name="'nowa_' + idpro" placeholder="Masukan Nomor WhatsApp Aktif" type="text" class="form-control" v-model="nomorWhatsApp" />
                            <div class="text-center">
                                <div class="text-center">
                                    <button type="button" class="btn btn-dqm w-100 text-white fw-6" @click="donate(productid)" :disabled="!namaDonatur || !nomorWhatsApp">
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
    data() {
        return {
            productid: 'a684eceee76fc522773286a895bc8436',
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
            sedekah: '',
            showAside: false,
            isSubmitting: false,
        }
    },
    computed: {
        jumlahDonasi: function () {
            return this.sedekah;
        },
        isB1uttonDisabled() {
            return !this.sedekah || this.sedekah < 10000 || !this.namaDonatur || !this.nomorWhatsApp;
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

        async donate(productid) {
            this.isSubmitting = true;
            setTimeout(() => {
                this.isSubmitting = false;
            }, 2000);
            const dataToSend = {
                product_id: productid,
                nama: this.namaDonatur,
                nohp: this.nomorWhatsApp,
                price: this.sedekah,
            };

            try {
                this.isLoading = true;
                const response = await axios.post(process.env.VUE_APP_SHOPURL + "/api/transaction/request", dataToSend);
                if (response.status === 200) {
                    var win = window.open(response.data.data.paymenturl, 'PEMBAYARAN DQM PEDULI', 'width=350, height=700');
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

        updateInputValue(event) {
            this.sedekah = event.target.value;
        },

        directives: {
            money: VMoney
        },

    },
    created() {
        this.customerNama = this.$route.query["customer[nama]"] || "";
        this.customerNohp = this.$route.query["customer[nohp]"] || "";
    },

}
</script>

<style scoped>
button:disabled {
    background-color: #b12323;
    border-radius: 8px;
    color: #646464;
    cursor: not-allowed;
    font-size: 16px;
    font-style: normal;
    line-height: 20px;
    padding: 10.5px 0;
    text-align: center;
    width: 100%;
}
</style>
