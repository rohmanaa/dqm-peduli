<template>
<!--====== APPIE ABOUT 3 PART START ======-->

<section class="appie-about-3-area pt-100 pb-100" id="features">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-4">
                <div class="appie-about-thumb-3 wow animated fadeInLeft" data-wow-duration="2000ms" data-wow-delay="400ms">
                    <img :src="judulimage" alt="" style="padding:5px">
                </div>
            </div>
            <div class="col-lg-8">
                <div class="appie-traffic-title">
                    <h3 class="title">{{judul}}</h3>
                </div>
                <div class="row">

                    <div class="col-sm-4" v-for="(tentang, index) in tentangs" :key="index">
                        <div class="appie-traffic-service item-2 mb-30">
                            <div class="icon">
                                <img :src="tentang.img" alt="" style="padding:5px">
                            </div>
                            <h5 class="title">{{ tentang.title }}</h5>
                            <p>{{ tentang.desc }}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</section>

<!--====== APPIE ABOUT 3 PART ENDS ======-->
</template>

<script>
import ImgResponsif from '@/assets/images/landing/market/suitable.svg'
import ImgSustainable from '@/assets/images/landing/market/kerjasama.svg'
import ImgCredibility from '@/assets/images/landing/market/percaya.svg'
export default {
    data() {
        return {
            judul: 'Mengapa Berbagi Bersama DQMPeduli ?',
            judulimage: 'https://cloud.dqakses.id/apps/files_sharing/publicpreview/YQGTfWNQt9L4wyJ?file=/&fileId=2841143&x=1920&y=971&a=true',
            ImgResponsif: ImgResponsif,
            ImgSustainable: ImgSustainable,
            ImgCredibility: ImgCredibility,
            tentangs: [{
                    img: ImgResponsif,
                    title: 'Responsif',
                    desc: 'Merespon kebutuhan masyarakat dengan cepat dan tepat'
                },
                {
                    img: ImgSustainable,
                    title: 'Sustainable',
                    desc: 'Program jangka panjang untuk kemandirian umat'
                },
                {
                    img: ImgCredibility,
                    title: 'Credibility',
                    desc: 'Bertanggung jawab penuh menjalankan amanah program'
                },
            ]
        }
    }
}
</script>

<style>

</style>
