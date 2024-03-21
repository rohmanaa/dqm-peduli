<template>
<section class="appie-features-area pt-100 pb-100" id="HukumZakat">
    <div class="container">
        <div class="row align-items-start">
            <div class="col-lg-3">
                <div class="appie-features-tabs-btn">
                    <div class="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                        <a @click.prevent="selectFeature('detail')" class="nav-link" :class="[selectedTab==='detail'?'active':'']" data-toggle="pill" role="tab" aria-controls="v-pills-home" aria-selected="true"><i class="fas fa-cog"></i> Deskripsi </a>
                        <a @click.prevent="selectFeature('ketentuan')" class="nav-link" :class="[selectedTab==='ketentuan'?'active':'']" data-toggle="pill" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i class="fas fa-exclamation-triangle"></i> Ketentuan</a>
                        <a @click.prevent="selectFeature('carahitung')" class="nav-link" :class="[selectedTab==='carahitung'?'active':'']" data-toggle="pill" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="fas fa-bell"></i> Cara Hitung</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-9">
                <div class="tab-content">
                    <div :class="[selectedTab==='detail'?'active show':'']" class="tab-pane fade " role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <div class="row align-items-start">
                            <div class="col-lg-9">
                                <div class="appie-features-content wow animated fadeInRight" data-wow-duration="2000ms" data-wow-delay="600ms">
                                    <span>Zakat Fitrah</span>
                                    <div class="text-justify content">
                                       
                                            <p><b>Zakat fitrah adalah zakat (sedekah) jiwa. Istilah tersebut diambil dari kata fitrah yang merupakan asal dari kejadian. Zakat fitrah adalah zakat yang wajib ditunaikan oleh seorang muslim, anak-anak maupun dewasa, orang merdeka maupun hamba sahaya, laki-laki dan perempuan sebesar 1 sha atau 2,176 kg beras atau dibulatkan menjadi 2,5 kg atau 3,5 liter beras, sebelum hari raya idul fitri.</b></p>
                                            <p>Dari Ibnu Umar ra. Beliau berkata : </p>
                                            <blockquote>”Rasulullah Saw. Telah memfardhukan zakat fitrah 1 sha’ dari kurma atau gandum atas budak,orang merdeka, laki-laki danperempuan, anak kecil dan orang tua dari seluruh kaum muslimin. Dan beliau perintahkan supaya dikeluarkan sebelum orang-orang keluar untuk shalat ‘Id.”<b> (HR. Bukhori)</b></blockquote>
                                        
                                            <p><b><span style="font-size: 18px;">Waktu Pembayaran</span></b></p>
                                            <p><b>Waktu pembayaran zakat fitrah</b> terbagi kepada dua waktu, yaitu:</p>
                                            <p><b>1. Waktu Sempit (al-mudhayiq) yaitu</b> waktu wajib membayar zakat fitrah. Ditandai dengan tenggelamnya matahari di akhir bulan Ramadhan sampai sebelum shalat ‘Id.</p>
                                            <p><b>2. &nbsp;Waktu Luas (al-muwassi’) yaitu</b> boleh mendahulukan atau mempercepat pembayaran zakat fitrah dari waktu wajib tersebut, yaitu selama bulan Ramadhan.</p>
                                            <p>Untuk kepentingan efektifitas pengelolaan dan efektifitas manfaat distribusi, dianjurkan untuk membayarnya pada waktu luas.</p>
                                            <p><b><span style="font-size: 18px;">Waktu Distribusi</span></b></p>
                                            <p>&nbsp; &nbsp; Adalah waktu yang mashlahat bagi penerima, amil berusaha semaksimal mungkin mendistribusikannya sebelum shalat ‘Id.<br><br>
                                            <b><span style="font-size: 18px;">NOTE :</span><br>
                                            <span style="font-size: 18px;">Transaksi Zakat Fitrah diluar dari waktu yang ditentukan akan dicatat sebagai Infaq</span></b></p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div :class="[selectedTab==='ketentuan'?'active show':'']" class="tab-pane fade" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <div class="row align-items-center">
                            <div class="col-lg-9">
                                <div class="appie-features-content animated fadeInRight" data-wow-duration="2000ms" data-wow-delay="600ms">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div :class="[selectedTab==='carahitung'?'active show':'']" class="tab-pane fade" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                        <div class="row align-items-center">
                            <div class="col-lg-9">
                                <div class="appie-features-content animated fadeInRight" data-wow-duration="2000ms" data-wow-delay="600ms">

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            showQuestion: 1,
            switchPlan: true,
            selectedTab: 'detail',

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

    },

}
</script>

<style scoped>
input:disabled {
    box-shadow: #646464;
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #fff;
    color: #646464;
    cursor: not-allowed;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -.02em;
    line-height: 21px;
    padding: 11.5px 0;
    text-align: center;
    width: 100%;
}
</style>
