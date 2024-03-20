<template>
<section class="contact-section" id="HitungZakat">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="contact-form">
                    <h4>Kalkulator Zakat Fidyah</h4>
                    <p></p>
                    <div class="row">
                        <div class="col-md-6">
                            <span>Jumlah Hari tidak puasa <span class="text-danger">*</span></span>
                        </div>

                        <div class="shop-buttons block align-items-center mb-3 mt-2">
                            <div id="quantity" class="product-quantity">
                                <b-form-spinbutton v-model="jumlahtidakpuasa" min="1" max="1000"></b-form-spinbutton>
                            </div>
                        </div>

                        <hr />

                        <div class="col-md-12">
                            <span>Jumlah yang saya harus bayar</span>

                            <input type="text" :value="formatNumber(totalfidyah)" disabled v-money="money" />

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <button type="button" class="btn btn-dqm" @click="resetForm">
                                <span class="text-white">Hitung Ulang</span>
                            </button>
                        </div>
                    </div>
                    <div class="service-download-widget mt-3 bg-white" v-if="totalfidyah != 0">
                        <div class="donasi-form pt-3 pb-3">
                            <h5>Profil Donatur</h5>
                            <div class="row">
                                <div class="col-lg-12">
                                    <input :id="'nama_' + productid" :name="'nama_' + productid" placeholder="Masukan Nama Donatur" type="text" class="form-control" v-model="namaDonatur" />
                                    <input :id="'nowa_' + productid" :name="'nowa_' + productid" placeholder="Masukan Nomor WhatsApp Aktif" type="text" class="form-control" v-model="nomorWhatsApp" />
                                </div>
                                <div class="text-center">
                                    <button type="button" class="btn btn-dqm w-100 text-white fw-6" @click="donate(productid)" :disabled="!namaDonatur || !nomorWhatsApp">
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

            <div class="col-md-4">

                <div class="single-info">
                    <div class="service-details-sidebar">
                        <div class="service-category-widget bg-dqm text-white">

                            <h5 class="text-white">Niat Zakat Fidyah</h5>
                            <h5 class="text-white">Untuk wanita hamil/menyusui</h5>
                            <p>
                                <span class="mb-2 text-white text-end" style="font-size:1.2rem">نَوَيْتُ أَنْ أُخْرِجَ فِدْيَةَالْمُرْضِعِ فَرْضًاشَرْعًا
                                    لِلّٰهِ تَعَالٰى
                                </span>

                            </p>
                            <span style="font-size:.8rem"> <br />
                                “Nawaitu an ukhrija zakata maali fardha llillahi ta’aala”<br />
                                Saya berniat mengeluarkan zakat harta milikku karena Allah
                                Ta’ala</span>

                            <h5 class="text-white">Untuk Orang Sakit</h5>
                            <p>
                                <span class="mb-2 text-white text-end" style="font-size:1.2rem">
                                    نَوَيْتُ أَنْ أُخْرِجَ فِدْيَةَالْمَرَضِ الَّذِيْ لاَ يُرْجٰى
                                    بَرَؤُهُ فَرْضًاشَرْعًا لِلّٰهِ تَعَالٰى
                                </span>

                            </p>
                            <span style="font-size:.8rem"> <br />
                                “Nawaitu an ukhrija zakata maali fardha llillahi ta’aala”<br />
                                Saya berniat mengeluarkan zakat harta milikku karena Allah
                                Ta’ala</span>
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
              isSubmitting: false,
            productid: 'd82c8d1619ad8176d665453cfb2e55f0',
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
            jumlahtidakpuasa: 0, // Nilai awal untuk jumlahtidakpuasa
            totalfidyah: 0,
            isZakatRequired: false,
            showAside: false,
        }
    },
    watch: {
        jumlahtidakpuasa: function (newValue) {
            this.totalfidyah = newValue * 40000;
        }
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

        formatNumber(value) {
            return value.toFixed(0);
        },
        resetForm() {
            this.totalfidyah = '0';
            this.jumlahtidakpuasa = '';
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
                price: this.totalfidyah.toFixed(0)
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
button:disabled{
    background-color: #b12323;
    border-radius: 8px;
    color: #646464;
    cursor: not-allowed;
    font-size: 16px;
    font-style: normal;
    line-height: 20px;
    padding: 10.5px 0;
    text-align: center;
    cursor: not-allowed;
    width: 100%;
}
</style>
