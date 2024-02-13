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
                    <!-- <a href="#">Read More <i class="fal fa-arrow-right"></i></a> -->
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
                            <router-link to="/zakat-Fidyah">Fidyah</router-link>
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
                        <li><a href="#">DQM Web</a></li>
                        <li><a href="#">STIU DQM</a></li>
                        <li><a href="#">DQM Akses</a></li>

                    </ul>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="footer-widget-info">
                    <h4 class="title">Get In Touch</h4>
                    <ul>
                        <li><a href="mailto:sekret@darulquran.sch.id"><i class="fal fa-envelope"></i> sekret@darulquran.sch.id</a></li>
                        <li><a href="#"><i class="fal fa-phone"></i> 082125466187</a></li>
                        <li><a href="#"><i class="fal fa-map-marker-alt"></i> Darul Quran Mulia, Gunungsindur, Kab. Bogor</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="footer-copyright d-flex align-items-center justify-content-between pt-35">
                    <div class="apps-download-btn">
                        <!-- <ul>
                            <li><a href="#"><i class="fab fa-apple"></i> Download for iOS</a></li>
                            <li><a class="item-2" href="#"><i class="fab fa-google-play"></i> Download for Android</a>
                            </li>
                        </ul> -->
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
