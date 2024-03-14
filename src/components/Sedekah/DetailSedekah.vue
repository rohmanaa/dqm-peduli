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
                                    <span>Sedekah</span>
                                    <div class="text-justify content">
                                    
                                            <p>Sedekah merupakan amalan yang dicintai Allah SWT. Hal ini dibuktikan dengan banyaknya ayat Al-Qur’an yang menyebutkan tentang sedekah, salah satunya dalam surat Al-Baqarah ayat 271.</p>
                                            <p><em>“Jika kamu menampakkan sedekah (mu), maka itu adalah baik sekali. Dan jika kamu menyembunyikannya dan kamu berikan kepada orang-orang fakir, maka menyembunyikan itu lebih baik bagimu. Dan Allah akan menghapuskan dari kamu sebagian kesalahan-kesalahanmu, dan Allah mengetahui apa yang kamu kerjakan.”&nbsp;</em>(QS. Al-Baqarah: 271)</p>
                                            <p>Sejak tahun 1993, Dompet Dhuafa membentang kebaikan sedekah Anda kepada lebih dari 23 juta penerima manfaat.</p>
                                            <p>Rofiq misalnya, salah satu penerima manfaat penyaluran sedekah Sahabat Dompet Dhuafa, yang berasal dari Papua dan bercita-cita menjadi Menteri Pariwisata, disekolahkan di SMART Ekselensia dan kini menjadi mahasiswa UNPAD.</p>
                                            <p><strong>Keutamaan Sedekah:</strong></p>
                                            <p><strong>1. Menghapus Dosa</strong></p>
                                            <p>Nabi Muhammad صلى الله عليه وسلم bersabda, “Sedekah itu dapat menghapus dosa sebagaimana air itu memadamkan api.“ (HR. Tirmidzi)</p>
                                            <p><strong>&nbsp;2.</strong>&nbsp;<strong>Tidak Akan Mengurangi Harta</strong></p>
                                            <p>“Harta tidak akan berkurang dengan sedekah. Dan seorang hamba yang pemaaf pasti akan Allah tambahkan kewibawaan baginya.” (HR. Muslim)</p>
                                            <p>&nbsp;<strong>3. Melipatgandakan Pahala</strong></p>
                                            <p>“Perumpamaan orang-orang yang mendermakan (shodaqoh) harta bendanya di jalan Allah, seperti sebutir biji yang menumbuhkan tujuh untai dan tiap-tiap untai terdapat seratus biji dan Allah melipat gandakan kepada orang yang dikehendaki, dan Allah Maha Luas (anugrah-Nya) lagi Maha Mengetahui.“ (QS. Al-Baqarah: 261)</p>
                                            <p>&nbsp;<strong>4. Mencegah Maksiat dalam Jual-Beli (Perdagangan)</strong></p>
                                            <p>“Wahai para pedagang, sesungguhnya setan dan dosa keduanya hadir dalam jual-beli. Maka hiasilah jual-beli kalian dengan sedekah.” (HR. Tirmidzi)</p>
                                            <p><strong>&nbsp;5.</strong>&nbsp;<strong>Membebaskan dari Api Neraka</strong></p>
                                            <p>“Jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma. Jika kamu tidak punya, maka bisa dengan kalimah thayyibah.” (HR. Bukhari)</p>
                                            <p><strong>&nbsp;6. Mendapat Naungan di Hari Akhir</strong></p>
                                            <p>“Naungan orang beriman di hari Kiamat adalah sedekahnya.” (HR Ahmad)</p>
                                    
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
