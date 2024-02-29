<template>
<!--====== APPIE SHOWCASE PART START ======-->

<section class="appie-showcase-area">
    <div class="container">
        <div class="row">

            <div class="col-lg-12">
                <div class="appie-section-title text-center">
                    <h3 class="appie-title">Campaign</h3>
                    <p>Pilih Donasi Kebaikanmu disini</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="row">

                    <div class="col-lg-4" v-for="product in produkDonasi.data" :key="product.id">
                        <div class="post-item-1">
                            <img :src="product.url" alt="">
                            <div class="b-post-details">
                                <h3>
                                    <router-link :to="`/detail-campaign?proid=${product.id}`">
                                        {{ product.product }}
                                    </router-link>
                                </h3>
                                <span style="font-size:.8rem" class="mb-3">{{ product.desc}}</span>
                                <div>
                                    <VueJsProgress :percentage="13" customBgColor="#1a3257" :delay="600" :striped="true" :animation="true"></VueJsProgress>
                                </div>

                                <div class="d-flex justify-content-between mt-3">
                                    <span style="font-size:.8rem">
                                        Terkumpul
                                    </span>
                                    <span style="font-size:.8rem">Sisa Hari
                                    </span>
                                </div>
                                <div class="bp-meta d-flex justify-content-between">
                                    <span class="text-dqm2 fw-bold">
                                        <b-icon icon="suit-heart-fill" class="me-2"></b-icon>Rp. {{ product.total }}
                                    </span>
                                    <span class="text-dqm2 fw-bold">
                                        <b-icon icon="clock" class="me-2"></b-icon>-
                                    </span>
                                </div>
                                <router-link :to="`/detail-campaign?proid=${product.id}`" class="btn btn-dqm w-100 text-white">
                                    DONASI
                                </router-link>

                            </div>
                        </div>
                    </div>

                    <!-- <div class="container py-5">
                        <div class="row justify-content-center">
                            <div class="col-xl-4 col-md-4 col-12" v-for="product in produkDonasi.data" :key="product.id">
                                <div class="card mb-3">
                                    <img :src="product.url" class="card-img-top" alt="" />
                                    <div class="card-body opacity-dqm">
                                        <div class="text-center">
                                            <p class="card-text mb-3">
                                                <strong>{{ product.desc }}</strong>
                                            </p>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label mb-0" style="font-size: 10px!important;">
                                                <strong>Nama Donatur</strong>
                                            </label>
                                            <input :id="'nama_' + product.id" :name="'nama_' + product.id" type="text" class="form-control form-control-sm" />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label mb-0" style="font-size: 10px!important;">
                                                <strong>No WhatsApp</strong>
                                            </label>
                                            <input :id="'nowa_' + product.id" :name="'nowa_' + product.id" type="text" class="form-control form-control-sm" />
                                        </div>
                                        <div class="input-group input-group-sm mb-3">
                                            <span class="input-group-text">RP. </span>
                                            <input :id="'price_' + product.id" :name="'price_' + product.id" class="form-control form-control-sm" v-money="money" />
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button class="btn text-white btn-sm w-100" style="background-color: #1a3257 !important" type="button" @click="donate(product.id)"> DONASI </button>
                                        </div>
                                    </div>
                                    <div class="card-footer text-white opacity-30 text-center">
                                        <small class="mb-0">
                                            <strong>Terkumpul Saat Ini</strong>
                                        </small>
                                        <button type="button" class="btn btn-sm btn-success w-100">Rp. {{ product.total }}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->

                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="text-center">
                    <b-button block href="/campaign" class="btn-dqm">Lihat Semua Campaign<i class="fal fa-arrow-right ms-2"></i></b-button>
                </div>
            </div>
        </div>
    </div>

</section>

<!--====== APPIE SHOWCASE PART ENDS ======-->
</template>

<script>
import VueJsProgress from 'vue-js-progress'
import axios from "axios";
import Swal from "sweetalert2";
import {
    VMoney
} from 'v-money'
export default {
    components: {
        VueJsProgress
    },
    data() {
        return {
            value: 45,
            max: 100,
            produkDonasi: [],
            donationAmount: 0,
            isLoading: false,
            shopAPI: process.env.VUE_APP_SHOPURL,
            money: {
                decimal: ',',
                thousands: '.',
                prefix: '',
                suffix: '',
                precision: 0,
                masked: false
            }

        };
    },
    methods: {
        async donate(productid) {
            const dataToSend = {
                product_id: productid,
                nama: document.querySelector(`[name="nama_${productid}"]`).value,
                nohp: document.querySelector(`[name="nowa_${productid}"]`).value,
                price: document.querySelector(`[name="price_${productid}"]`).value
            };
            try {
                this.isLoading = true;
                const response = await axios.post(process.env.VUE_APP_SHOPURL + "/api/transaction/request", dataToSend);
                if (response.status == 200) {
                    var win = window.open(response.data.data.paymenturl, 'PEMBAYARAN DQ PEDULI', 'width=350, height=700')
                    var timer = setInterval(function () {
                        if (win.closed) {
                            clearInterval(timer)
                            location.reload()
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
        resetForm() {
            this.donationAmount = 0;
        }
    },
    created() {
        this.customerNama = this.$route.query["customer[nama]"] || "";
        this.customerNohp = this.$route.query["customer[nohp]"] || "";
        axios.get(process.env.VUE_APP_SHOPURL + "/api/product?categoryid=1679091c5a880faf6fb5e6087eb1b2dc").then((response) => {
            this.produkDonasi = response.data;
            console.log(response.data);
        }).catch((error) => {
            console.error("Error:", error);
        });
    },
    directives: {
        money: VMoney
    }

};
</script>

<style>
.slick-slide {
    padding: 0 16px
}
</style>
