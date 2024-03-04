<template>
<div>

    <!--====== APPIE FUN FACT PART START ======-->

    <section class="appie-fun-fact-area pt-100 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="appie-fun-fact-box wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="400ms">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="appie-fun-fact-content">
                                    <div class="row text-center">
                                        <div class="col-sm-4">
                                            <div class="appie-fun-fact-item">
                                                <div class="icon">
                                                    <img :src="campaign.imgcampaign" alt="" style="width:70px">
                                                </div>
                                                <h4 class="title">
                                                    {{ campaign.totalcampaign }}
                                                </h4>
                                                <span>{{ campaign.desc }}</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="appie-fun-fact-item">
                                                <div class="icon">
                                                    <img :src="donasi.imgdonasi" alt="" style="width:70px">
                                                </div>
                                                <h4 class="title">
                                                    {{ donasi.totaldonasi }}
                                                </h4>
                                                <span>{{ donasi.desc }}</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="appie-fun-fact-item">
                                                <div class="icon">
                                                    <img :src="trans.imgtrans" alt="" style="width:70px">
                                                </div>
                                                <h4 class="title">
                                                    {{ trans.totaltrans }}
                                                </h4>
                                                <span>{{ trans.desc }}</span>
                                            </div>
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

    <!--====== APPIE FUN FACT PART ENDS ======-->
</div>
</template>

<script>
import axios from 'axios'
import ImgResponsif from '@/assets/images/landing/market/suitable.svg'
import ImgSustainable from '@/assets/images/landing/market/kerjasama.svg'
import ImgCredibility from '@/assets/images/landing/market/percaya.svg'
export default {
    data() {
        return {
            ImgResponsif: ImgResponsif,
            ImgSustainable: ImgSustainable,
            ImgCredibility: ImgCredibility,

            produkDonasi: [], // Assuming this is where your API response is stored
            campaign: {
                imgcampaign: ImgResponsif,
                totalcampaign: 0,
                desc: 'Campaign'
            },
            donasi: {
                imgdonasi: ImgSustainable,
                totaldonasi: 0,
                desc: 'Jumlah Donasi'
            },
            trans: {
                imgtrans: ImgCredibility,
                totaltrans: 0,
                desc: 'Transaksi'
            }
        }
    },
   created() {
    this.fetchData();
  },
    methods: {
        fetchData() {
            axios
                .get(process.env.VUE_APP_SHOPURL + "/api/product?categoryid=1679091c5a880faf6fb5e6087eb1b2dc")
                .then((response) => {
                    this.produkDonasi = response.data;
                    this.calculateTotals();
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        calculateTotals() {
            this.produkDonasi.forEach((product) => {
                const totalValue = parseFloat(product.total.replace(/\./g, '').replace(',', '.'));

                switch (product.product.toLowerCase()) {
                    case 'campaign':
                        this.campaign.totalcampaign += totalValue;
                        break;
                    case 'donasi':
                        this.donasi.totaldonasi += totalValue;
                        break;
                    case 'trans':
                        this.trans.totaltrans += totalValue;
                        break;
                }
            });
        }
    }

}
</script>

<style>

</style>
