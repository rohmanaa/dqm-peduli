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
                                        <div class="col-sm-4" v-for="(milestone, index) in milestones" :key="index">
                                            <div class="appie-fun-fact-item">
                                                <div class="icon">
                                                    <img :src="milestone.img" alt="" style="width:70px">
                                                </div>
                                                <h4 class="title">
                                                    {{ milestone.total}}
                                                </h4>
                                                <span>{{ milestone.desc}}</span>
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
import axios from "axios";
import ImgResponsif from '@/assets/images/landing/market/suitable.svg'
import ImgSustainable from '@/assets/images/landing/market/kerjasama.svg'
import ImgCredibility from '@/assets/images/landing/market/percaya.svg'
export default {
    data() {
        return {
            ImgResponsif: ImgResponsif,
            ImgSustainable: ImgSustainable,
            ImgCredibility: ImgCredibility,
            milestones: [{
                    img: ImgResponsif,
                    total: '3',
                    desc: 'CAMPAIGN'
                },
                {
                    img: ImgSustainable,
                    total: '81.332.516.570',
                    desc: 'DONASI TERKUMPUL'
                },
                {
                    img: ImgCredibility,
                    total: '50',
                    desc: 'TRANSAKSI CAMPAIGN'
                },
            ]
        }
    },
     created() {
        axios.get(process.env.VUE_APP_SHOPURL + "/api/product?categoryid=1679091c5a880faf6fb5e6087eb1b2dc").then((response) => {
            this.produkDonasi = response.data;
            console.log(response.data);
        }).catch((error) => {
            console.error("Error:", error);
        });
    },
}
</script>

<style>

</style>
