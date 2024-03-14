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
                                    <span>Zakat Fidyah</span>
                                    <div class="text-justify content">
                                      
                                            <p>Fidyah diambil dari kata&nbsp;<em>“fadaa”</em>&nbsp;artinya mengganti atau menebus. Bagi beberapa orang yang tidak mampu menjalankan ibadah puasa dengan kriteria tertentu, diperbolehkan tidak berpuasa serta tidak harus menggantinya di lain waktu. Namun, sebagai gantinya diwajibkan untuk membayar fidyah.</p>
                                            <p>Ada ketentuan tentang siapa saja yang boleh tidak berpuasa. Hal ini tertuang dalam surat Al-Baqarah ayat 184.</p>
                                            <blockquote><em>”(yaitu) dalam beberapa hari yang tertentu. Maka barangsiapa diantara kamu ada yang sakit atau dalam perjalanan (lalu ia berbuka), maka (wajiblah baginya berpuasa) sebanyak hari yang ditinggalkan itu pada hari-hari yang lain. Dan wajib bagi orang-orang yang berat menjalankannya (jika mereka tidak berpuasa) membayar fidyah, (yaitu): memberi makan seorang miskin. Barangsiapa yang dengan kerelaan hati mengerjakan kebajikan, maka itulah yang lebih baik baginya. Dan berpuasa lebih baik bagimu jika kamu mengetahui.”</em>&nbsp;(Q.S. Al Baqarah: 184)</blockquote>
                                            <p>Kriteria orang yang bisa membayar fidyah di antaranya:</p>
                                            <p>1. Orang tua renta yang tidak memungkinkannya untuk berpuasa</p>
                                            <p>2. Orang sakit parah yang kecil kemungkinan sembuh</p>
                                            <p>3. Ibu hamil atau menyusui yang jika berpuasa khawatir dengan kondisi diri atau bayinya (atas rekomendasi dokter).</p>
                                            <p>Fidyah wajib dilakukan untuk mengganti ibadah puasa dengan membayar sesuai jumlah haripuasa yang ditinggalkan untuk satu orang. Nantinya, makanan itu disumbangkan kepada orang-orang yang membutuhkan.</p>
                                      
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
