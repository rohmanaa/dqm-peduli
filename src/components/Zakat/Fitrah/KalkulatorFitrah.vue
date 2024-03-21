<template>
<section class="contact-section" id="HitungZakat">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="contact-form">
                    <h4>Kalkulator Zakat Fitrah</h4>
                    <p></p>
                    <div class="row">
                        <div class="col-md-6">
                            <span>Jumlah Orang Berzakat <span class="text-danger">*</span></span>
                        </div>

                        <div class="shop-buttons block align-items-center mb-3 mt-2">
                            <div id="quantity" class="product-quantity">
                                <b-form-spinbutton v-model="jumlahorangberzakat" min="1" max="1000"></b-form-spinbutton>
                            </div>
                        </div>

                        <hr />

                        <div class="col-md-12">
                            <span>Jumlah yang saya harus bayar</span>

                            <input type="text" :value="formatNumber(totalFitrah)" disabled v-money="money" />

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <button type="button" class="btn btn-dqm" @click="resetForm">
                                <span class="text-white">Hitung Ulang</span>
                            </button>
                        </div>
                    </div>
                    <div class="service-download-widget mt-3 bg-white" v-if="totalFitrah != 0">
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

                            <h5 class="text-white">Niat Zakat Fitrah</h5><hr/>
                            <h5 class="text-white">Untuk diri sendiri</h5>
                            <p>
                                <span class="mb-2 text-white text-end" style="font-size:1.2rem">نويت ان اجرج زكاة الفطر عن نفسي فرضا لله تعالا
                                </span>

                            </p>
                            <span style="font-size:.8rem"> <br />
                               “Nawaitu an ukhrija zakaatal fitri ‘an nafsii fadhan lillahi ta’aala”<br />
                                Saya niat mengeluarkan zakat fitrah dari diriku sendiri fardu karena Allah Ta’ala.</span>

                            <h5 class="text-white">Untuk Diri Sendiri dan Keluarga</h5>
                            <p>
                                <span class="mb-2 text-white text-end" style="font-size:1.2rem">
                                   ﻧَﻮَﻳْﺖُ ﺃَﻥْ ﺃُﺧْﺮِﺝَ ﺯَﻛَﺎﺓَ ﺍﻟْﻔِﻄْﺮِ ﻋَنِّيْ ﻭَﻋَﻦْ ﺟَﻤِﻴْﻊِ ﻣَﺎ ﻳَﻠْﺰَﻣُنِيْ ﻧَﻔَﻘَﺎﺗُﻬُﻢْ ﺷَﺮْﻋًﺎ ﻓَﺮْﺿًﺎ ِﻟﻠﻪِ ﺗَﻌَﺎﻟَﻰ
                                </span>

                            </p>
                            <span style="font-size:.8rem"> <br />
                               Nawaitu an ukhrija zakaatal fithri 'anni wa 'an jamii'i ma yalzamunii nafaqaatuhum syar'an fardhan lillaahi ta'aalaa<br />
                               Aku niat mengeluarkan zakat fitrah untuk diriku dan seluruh orang yang nafkahnya menjadi tanggunganku, fardu karena Allah Ta'âlâ."</span>
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
            productid: '2838023a778dfaecdc212708f721b788',
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
            jumlahorangberzakat: 0, // Nilai awal untuk jumlahorangberzakat
            totalFitrah: 0,
            isZakatRequired: false,
            showAside: false,
        }
    },
    watch: {
        jumlahorangberzakat: function (newValue) {
            this.totalFitrah = newValue * 43200;
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
            this.totalFitrah = '0';
            this.jumlahorangberzakat = '';
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
                price: this.totalFitrah.toFixed(0)
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
