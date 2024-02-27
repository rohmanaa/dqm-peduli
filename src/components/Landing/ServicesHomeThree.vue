<template>
    <!--====== APPIE SERVICES PART START ======-->

    <section class="appie-service-area appie-service-3-area pt-100 pb-100" id="service">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="appie-section-title text-center">
                        <h3 class="appie-title">{{ judul }}</h3>
                        <p>{{desc}}</p>
                    </div>
                </div>
            </div>
            <div class="row">

                <div class="col-lg-3 col-md-6" v-for="(program, index) in programs" :key="index">
                    <div class="appie-single-service appie-single-services-3 text-center item-2 mt-30 wow animated fadeInUp"
                        data-wow-duration="2000ms" data-wow-delay="200ms">
                        <div class="icon">
                           <img :src="program.img" alt=""> <img src="" alt="">
                        </div>
                        <h4 class="appie-title">{{ program.title }}</h4>
                        <p>{{ program.desc }}</p>
                       
                    </div>
                </div>
                
            </div>
        </div>
    </section>

    <!--====== APPIE SERVICES PART ENDS ======-->
</template>

<script>
import ImgDonasi from '@/assets/images/landing/program/donasi.svg'
import ImgSedekah from '@/assets/images/landing/program/sedekah.svg'
import ImgWakaf from '@/assets/images/landing/program/wakaf.svg'
import ImgQurban from '@/assets/images/landing/program/qurban.svg'
export default {
    data(){
        return {
            judul: 'PROGRAM KAMI',
            desc :'Pilih Donasi Kebaikanmu di Sini',
            ImgDonasi: ImgDonasi,
            ImgSedekah: ImgSedekah,
            ImgWakaf: ImgWakaf,
            ImgQurban: ImgQurban,
            programs: [
                {
                    img: ImgDonasi,
                    title: 'Donasi',
                    desc: 'Ulurkan tangan Anda untuk meringankan beban mereka.'
                },
                {
                    img: ImgSedekah,
                    title: 'Sedekah',
                    desc: 'Sedekahkan sebagian harta benda Anda bagi mereka yang membutuhkan.'
                },
                {
                    img: ImgWakaf,
                    title: 'Wakaf',
                    desc: 'Sedekahkan sebagian harta benda Anda bagi kepentingan umat banyak.'
                },
                {
                    img: ImgQurban,
                    title: 'Qurban',
                    desc: 'Tunaikan kewajiban kurban sesuai syarat Islam bersama kami.'
                },
            ]
    }
 }
}
</script>

<style></style>