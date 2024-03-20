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
                                    <span>Zakat Emas</span>

                                    <p>Syariat Islam memandang emas merupakan harta yang potensial. Di samping dapat berfungsi sebagai perhiasan yang indah, emas juga dapat berfungsi sebagai alat tukar dari masa ke masa. Dalam fikih , emas ini merupakan penentu nilai (ats-tsaman); nilai harta diukur dengan standar emas. Oleh karenanya sifat emas sebagai harta ini sangat jelas, bahkan disebut an-naqdain (cash) atau ats-tsamanain (dua pilar mata uang) yang merupakan alat ukur dan standar nilai.</p>
                                    <p>Imam Ghazali menyatakan, siapa yang memiliki emas dan perak seolah -olah dia memiiliki dunia ini; karena apapun dapat dibeli dengan emas dan perak. Dengan sifat harta emas yang merupakan alat ukur dan nilai tersebut maka harta emas menjadi salah satu objek zakat. Oleh sebab itu syariat Islam memandang perlunya dikeluarkan zakat emas ini.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div :class="[selectedTab==='ketentuan'?'active show':'']" class="tab-pane fade" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <div class="row align-items-center">
                            <div class="col-lg-9">
                                <div class="appie-features-content animated fadeInRight" data-wow-duration="2000ms" data-wow-delay="600ms">

                                    <span><strong>Ketentuan Zakat Tabungan</strong></span>

                                    <div>
                                        <p>Setiap muslim yang memiliki simpanan emas selama satu tahun dan mencapai 85 gram emas, maka wajib mengeluarkan zakat sebanyak 2,5 persen</p>
                                        <ol>
                                            <li>Nisab zakat emas adalah 85 gram emas.</li>
                                            <li>Haul selama 1 tahun</li>
                                            <li>Kadar yang wajib dikeluarkan zakatnya adalah 2,5%</li>
                                            <li>Perhiasan yang wajib dikeluarkan zakat adalah perhiasan yang disimpan dan tidak dipakai, selain itu maka tidak wajib dikeluarkan zakat.</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div :class="[selectedTab==='carahitung'?'active show':'']" class="tab-pane fade" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                        <div class="row align-items-center">
                            <div class="col-lg-9">
                                <div class="appie-features-content animated fadeInRight" data-wow-duration="2000ms" data-wow-delay="600ms">
                                    <span><strong>Cara Hitung Zakat Emas</strong></span>

                                    <div>
                                        <p><strong>Contoh :</strong></p>
                                        <p>Ibu Shafiyah memiliki perhiasan emas sebanyak 150 gram, yang biasa dipergunakan adalah sebanyak 40 gram. Setelah berjalan 1 tahun, berapa zakat yang harus dikeluarkannya?</p>
                                        <p><strong>Jawab :</strong></p>
                                        <p>Ketentuan zakatnya:</p>
                                        <ol>
                                            <p>Nisab zakat emas adalah = 85 gram</p>
                                            <p>Jumlah perhiasan emas = 150 gram</p>
                                            <p>Yang dipergunakan (dipakai) = 40 gram</p>
                                            <p>Emas yang disimpan = 150 – 40 = 110 gram</p>
                                        </ol>
                                        <p>Perhiasan emas yang dimiliki oleh ibu Shafiyah sudah wajib dizakati karena melebihi nisab dan mencapai haul.</p>
                                        <p>Cara menghitungnya adalah: 110 x 2,5% = 2,75 gram atau jika dinilai dengan uang adalah sebagai berikut:</p>
                                        <p>Jika harga 1 gram emas adalah Rp 500.000,- maka 110 gram emas = Rp 55.000.000,-, maka zakatnya adalah 55.000.000 x 2,5% = Rp1.375.000,- Jadi zak atnya: adalah 2 , 7 5 gram atau Rp. 1.375.000,-</p>
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
