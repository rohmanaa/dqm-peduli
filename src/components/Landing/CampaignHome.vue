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
                                <router-link :to="`/detail-campaign?proid=${product.id}`" class="submit-dqm w-100 text-white">
                                    DONASI
                                </router-link>

                            </div>
                        </div>
                    </div>


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
