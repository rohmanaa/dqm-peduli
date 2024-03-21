<template>
<!--====== APPIE FOOTER PART START ======-->

<section class="appie-footer-area footer-dqm">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="footer-about-widget">
                    <div class="logo">
                        <router-link to="/"><img src="@/assets/images/logo/footer-logo.png" alt="footer logo" style="height:70px"></router-link>
                    </div>
                    <p>Darul Quran Mulia merupakan Lembaga Pendidikan Islam yang Unggul dengan sistem pembelajaran terpadu yaitu pembelajaran akademik, pembinaan karakter, dan pengajaran Al-Quran.</p>
                    <a href="#">Read More <i class="fal fa-arrow-right"></i></a>
                    <div class="social mt-30">
                        <ul>
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-6">
                <div class="footer-navigation">
                    <h4 class="title">Zakat</h4>
                    <ul>
                        <li>
                            <router-link to="/zakat-maal">Maal</router-link>
                        </li>
                        <li>
                            <router-link to="/zakat-penghasilan">Penghasilan</router-link>
                        </li>
                                                <li>
                            <router-link to="/zakat-fitrah">Fitrah</router-link>
                        </li>
                        <li>
                            <router-link to="/zakat-Fidyah">Fidyah</router-link>
                        </li>
                                                <li>
                            <router-link to="/zakat-perak">Perak</router-link>
                        </li>
                        <li>
                            <router-link to="/zakat-emas">Emas</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="footer-navigation">
                    <h4 class="title">Web Terkait</h4>
                    <ul>
                        <li><a href="https://www.dqm.sch.id/" target="_blank">DQM Web</a></li>
                        <li><a href="https://stiudq.ac.id/" target="_blank">STIU DQM</a></li>
                        <li><a href="https://dq.akses.live/" target="_blank">DQM Akses</a></li>
                        <li><a href="https://izi.or.id/" target="_blank">IZI</a></li>
                        

                    </ul>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="footer-widget-info">
                    <h4 class="title">Hubungi Kami</h4>
                    <ul>
                        <li><a href="mailto:sekret@darulquran.sch.id" target="_blank"><b-icon icon="envelope" variant="info" aria-hidden="true"></b-icon> sekret@darulquran.sch.id</a></li>
                        <li><a href="https://wa.me/6281212427687" target="_blank"><b-icon icon="whatsapp" variant="info" aria-hidden="true"></b-icon> 0812 1242 7687</a></li>
                        <li><a href="https://maps.app.goo.gl/WRURnSkiUmn8f4tP9" target="_blank"><b-icon icon="pin-map" variant="info" aria-hidden="true"></b-icon> Darul Quran Mulia, Gunungsindur, Kab. Bogor</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="footer-copyright d-flex align-items-center justify-content-between pt-35">
                    <div class="apps-download-btn">
                        <ul>
                            <li><img src="https://izi.or.id/wp-content/uploads/2022/03/logo.png" style="height:50px"/></li>
                            <li><img src="@/assets/images/logo/footer-logo.png" style="height:50px">
                            </li>
                        </ul>
                    </div>
                    
                    <div class="copyright-text">
                        <p>&copy; {{ new Date().getFullYear() }}. DQM Peduli</p>
                    </div>
                </div>
            </div>
        </div>
  
    </div>

    <div class="back-to-top back-to-top-3">
        <a href="#"><i class="fal fa-arrow-up"></i></a>
    </div>
</section>

<!--====== APPIE FOOTER PART ENDS ======-->
</template>

<script>
export default {
    mounted() {
        document.addEventListener('scroll', this.topToBottom)
    },

    methods: {
        topToBottom() {
            const result = document.querySelector('.back-to-top')
            if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
                result.style.display = "block";
            } else {
                result.style.display = "none";
            }
        },
        toggleSidebar() {
            this.sidebar = !this.sidebar
        },
    }
}
</script>

<style></style>
