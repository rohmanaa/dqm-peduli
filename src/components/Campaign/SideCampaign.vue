<template>
<div>
    <aside>
        <div class="card-donasi" style="">
            <div class="donasi-header">
                <div class="status"> 27 <i>%</i>
                </div>
                <h5> Rp. {{ totalterkumpul }} </h5>
            </div>
            <div class="p-2">
                <VueJsProgress :percentage="13" customBgColor="#1a3257" :delay="600" :striped="true" :animation="true"></VueJsProgress>
            </div>
            <div class="description-donasi" style="">
                <div class="desc-item">
                    <div class="label">Donasi yang diperlukan</div>
                    <div class="nominal"> - </div>
                </div>
                <div class="desc-item">
                    <div class="label">Kekurangan</div>
                    <div class="nominal decrease"> - </div>
                </div>
            </div>
            <hr />

            <div id="chooseDonasi" class="choose-donasi p-2">
                <h5 class="title_choose-donasi">Mau Donasi Berapa?</h5>
                <div class="overview-radio">
                    <div class="row boxed-check-group boxed-check-success">
                        <div class="col-12 col-sm-6">
                            <label class="boxed-check">
                                <input class="boxed-check-input" type="radio" name="radio-overview" value="100000" @change="updateInputValue">
                                <div class="boxed-check-label text-center"> 100.000</div>
                            </label>
                        </div>
                        <div class="col-12 col-sm-6">
                            <label class="boxed-check">
                                <input class="boxed-check-input" type="radio" name="radio-overview" value="200000" @change="updateInputValue">
                                <div class="boxed-check-label text-center">200.000</div>
                            </label>
                        </div>
                        <div class="col-12 col-sm-6">
                            <label class="boxed-check">
                                <input class="boxed-check-input" type="radio" name="radio-overview" value="500000" @change="updateInputValue">
                                <div class="boxed-check-label text-center">500.000</div>
                            </label>
                        </div>
                        <div class="col-12 col-sm-6">
                            <label class="boxed-check">
                                <input class="boxed-check-input" type="radio" name="radio-overview" value="1000000" @change="updateInputValue">
                                <div class="boxed-check-label text-center">1000.000</div>
                            </label>
                        </div>

                    </div>
                </div>
                <h5 class="title_choose-donasi">Atau Masukkan Nominal</h5>
                <input :id="'price_' + idpro" :name="'price_' + idpro" type="number" v-model="donasi" placeholder="Nominal lain - minimal Rp 10.000" class="input-donasi-lain" v-money="money" @input="checkMinAmount" />
                <div v-if="showNotification" style="color: red;">Transaksi minimal 10.000</div>
            </div>
            <div class="p-2">
                <h5 class="title_choose-donasi">Profil Donatur</h5>
                <div class="row">
                    <div class="col-lg-12 mb-3">
                        <input :id="'nama_' + idpro" :name="'nama_' + idpro" placeholder="Masukan Nama Donatur" type="text" class="input-donasi-lain" />
                    </div>
                    <div class="col-lg-12">
                        <input :id="'nowa_' + idpro" :name="'nowa_' + idpro" placeholder="Masukan Nomor WhatsApp Aktif" type="text" class="input-donasi-lain" />
                    </div>

                </div>
            </div>
            <div class="total-donasi mt-3">
                <div class="nominal-donasi">
                    <h5>Saya Mau Donasi</h5>
                    <h4>Rp. {{ jumlahDonasi }}</h4>
                </div>
                <button type="button" class="submit-donasi w-100" @click="donate(idpro)" :style="{ backgroundColor: donasi < 10000 ? '#ddd' : '', cursor: donasi < 10000 ? 'not-allowed' : 'pointer' }" :disabled="donasi === '' || donasi < 10000">
                    <span v-if="!isSubmitting">Donasi Sekarang</span>
                    <span v-if="isSubmitting">Mohon Tunggu Sebentar</span>
                </button>
            </div>
        </div>
    </aside>

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
            isSubmitting: false,
            shopAPI: process.env.VUE_APP_SHOPURL,
            donasi: '',
            selectedValue: '',
            showNotification: false,
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
        }
    },
    created() {
        this.customerNama = this.$route.query["customer[nama]"] || "";
        this.customerNohp = this.$route.query["customer[nohp]"] || "";
    },
    methods: {
        async donate(idpro) {
            this.isSubmitting = true;
            await new Promise(resolve => setTimeout(resolve, 2000));
            this.isSubmitting = false;
            const dataToSend = {
                product_id: idpro,
                nama: document.querySelector(`[name="nama_${idpro}"]`).value,
                nohp: document.querySelector(`[name="nowa_${idpro}"]`).value,
                price: document.querySelector(`[name="price_${idpro}"]`).value
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
            // Update showNotification based on the input value
            this.showNotification = this.donasi !== '' && this.donasi < 10000;
        },
        directives: {
            money: VMoney
        },
    }
}
</script>

<style>
</style>
