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
                                    <span>Zakat Maal</span>
                                    <div class="text-justify content">
                                        <p><strong><em>Maal</em></strong>&nbsp;berasal dari kata bahasa Arab artinya harta atau kekayaan (<em>al-amwal</em>, jamak dari kata&nbsp;<em>maal</em>) adalah “segala hal yang diinginkan manusia untuk disimpan dan dimiliki” (<em>Lisan ul-Arab</em>). Menurut Islam sendiri, harta merupakan sesuatu yang boleh atau dapat dimiliki dan digunakan (dimanfaatkan) sesuai kebutuhannya.</p>
                                        <p>Oleh karena itu dalam pengertiannya, zakat maal berarti zakat yang dikenakan atas segala jenis harta, yang secara zat maupun substansi perolehannya tidak bertentangan dengan ketentuan agama.</p>
                                        <p>Sebagai contoh, zakat maal terdiri atas simpanan kekayaan seperti uang, emas, surat berharga, penghasilan profesi, aset perdagangan, hasil barang tambang atau hasil laut, hasil sewa aset dan lain sebagainya.</p>
                                        <p>Sebagaimana yang dijelaskan oleh Syaikh Dr. Yusuf Al-Qardhawi dalam kitabnya&nbsp;<em>Fiqh uz-Zakah</em>, zakat maal meliputi:</p>
                                        <p>1. Zakat simpanan emas, perak, dan barang berharga lainnya;</p>
                                        <p>2. Zakat atas aset perdagangan;</p>
                                        <p>3. Zakat atas hewan ternak;</p>
                                        <p>4. Zakat atas hasil pertanian;</p>
                                        <p>5. Zakat atas hasil olahan tanaman dan hewan;</p>
                                        <p>6. Zakat atas hasil tambang dan tangkapan laut;</p>
                                        <p>7. Zakat atas hasil penyewaan asset;</p>
                                        <p>8. Zakat atas hasil jasa profesi;</p>
                                        <p>9. Zakat atas hasil saham dan obligasi.</p>
                                        <p>Syarat harta yang terkena kewajiban zakat maal:</p>
                                        <p>1. Kepemilikan penuh</p>
                                        <p>2. Harta halal dan diperoleh secara halal</p>
                                        <p>3. Harta yang dapat berkembang atau diproduktifkan (dimanfaatkan)</p>
                                        <p>4. Mencukupi nishab</p>
                                        <p>5. Bebas dari hutang</p>
                                        <p>6. Mencapai haul</p>
                                        <p>7. Atau dapat ditunaikan saat panen</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div :class="[selectedTab==='ketentuan'?'active show':'']" class="tab-pane fade" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <div class="row align-items-center">
                            <div class="col-lg-9">
                                <div class="appie-features-content animated fadeInRight" data-wow-duration="2000ms" data-wow-delay="600ms">

                                    <span><strong>Ketentuan Zakat Tabungan</strong></span>
                                    <p>Uang simpanan dikenakan zakat dari jumlah saldo akhir bila telah mencapai nisab dan berjalan selama 1 tahun. Besarnya nisab senilai 85 gram emas. Kadar zakat yang dikeluarkan adalah 2,5%. Apabila uang simpanannya di bank konvensional, ketika akan membayar zakat, maka sisihkan terlebih dahulu bunga banknya karena bunga bank termasuk riba yang diharamkan. Dan apabila uang simpanannya di bank syariah, bagi hasil termasuk dalam komponen yang dihitung dalam penghitungan zakatnya karena bagi hasil bukan bunga bank yang diharamkan.</p>
                                    <p><strong>Ketentuan Zakat Deposito atau Saham</strong></p>
                                    <ul>
                                        <li>Penghitungan zakat deposito, pendekatannya adalah dengan zakat peniagaan, karena seseorang yang menyimpan uangnya sebagai deposito atau saham sudah berniat untuk mendapatkan keuntungan. Dan niat mendapatkan keuntungan adalah salah satu syarat dalam zakat perniagaan.</li>
                                        <li>Nisabnya setara dengan 85 gr emas</li>
                                        <li>Cukup haul 1 tahun</li>
                                        <li>Dari sumber yang halal (bunga bank tidak dihitung), jadi hanya deposito syariah saja yang dapat dibayarkan zakatnya.</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div :class="[selectedTab==='carahitung'?'active show':'']" class="tab-pane fade" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                        <div class="row align-items-center">
                            <div class="col-lg-9">
                                <div class="appie-features-content animated fadeInRight" data-wow-duration="2000ms" data-wow-delay="600ms">
                                    <span><strong>Cara Hitung Zakat Tabungan</strong></span>
                                    <p>Bapak Iwan adalah seorang karyawan sebuah perusahaan besar di salah satu kota besar di Indonesia, membuka rekening tabungannya pada awal Januari 2013 sebesar Rp50.000.000,- pada tanggal 24 Januari ia menyimpan lagi sebanyak Rp5.000.000,- kemudian dua hari setelah itu ia menyimpan kembali sebanyak Rp2.000.000,-Pada bulan Maret, ia mengambil untuk sebuah keperluan sebesar Rp5.000.000,- lalu mulai bulan April sampai bulan Desember ia menyisihkan uangnya untuk ditabung setiap bulannya sebesar Rp2.500.000,-. Berapa zakat yang dibayarkan karyawan tersebut? Asumsi harga emas adalah Rp500.000,-/gram.</p>
                                    <p>Jawab:</p>
                                    <p>Ketentuan zakat uang simpanan</p>
                                    <p>Zakat uang simpanan dianalogikan dengan zakat emas nisabnya adalah 85 gram emas, jika asumsi harga emas adalah Rp500.000,-/gram maka nisabnya 85 x 500.000 = Rp42.500.000,--</p>
                                    <p>Tarif atau kadarnya 2,5%.</p>
                                    <p>Haul 1 tahun</p>
                                    <p>Uang simpanan karyawan tersebut pada saat haul sebesar :</p>
                                    <ol>
                                        <li>Saldo awal bulan Januari 2013 Rp 60.000.000,-</li>
                                        <li>Menabung pada 24 Januari Rp 5.000.000,-</li>
                                        <li>Menabung pada 26 Januari Rp 2.000.000,-</li>
                                        <li>Diambil pada bulan Maret Rp 5.000.000,-</li>
                                        <li>Dari April-Desember Rp 2.500.000,- x 9 = Rp 22.500.000,-</li>
                                    </ol>
                                    <p>Penghitungan zakatnya&nbsp;adalah: (60.000.000 + 5.000.000 + 2.000.000 + 22.500.000) – 5.000.000 = 84.500.000</p>
                                    <p>Uang simpanan bapak Iwan sudah melebih nisab dan haulnya, sehingga wajib membayar zakat uang simpanan. Penghitungan zakatnya adalah 84.500.000 x 2,5% = 2.112.500</p>
                                    <p><strong>Cara Hitung Zakat Deposito</strong></p>
                                    <p>Penghitungan zakat deposito, pendekatannya adalah dengan zakat peniagaan, karena seseorang yang menyimpan uangnya sebagai deposito atau saham sudah berniat untuk mendapatkan keuntungan. Dan niat mendapatkan keuntungan adalah salah satu syarat dalam zakat perniagaan.</p>
                                    <ol>
                                        <li>Nisabnya setara dengan 85 gr emas</li>
                                        <li>Cukup haul 1 tahun</li>
                                        <li>Dari sumber yang halal (bunga bank tidak dihitung), jadi hanya deposito syariah saja yang dapat dibayarkan zakatnya.</li>
                                    </ol>
                                    <p>Cara penghitungannya: <strong>Nilai pokok deposito atau saham + bagi hasil x 2,5%</strong></p>
                                    <p><strong>Contoh zakat Deposito</strong></p>
                                    <p>Seseorang yang memiliki deposito Rp100.000.000 dengan bagi hasil selama setahun adalah Rp12.500.000,-.&nbsp;Maka zakatnya adalah Rp 100.000.000 + 12.500.000 x 2.5 % = Rp2.812.500,-</p>
                                    <p><strong>Cara Hitung Zakat Saham</strong></p>
                                    <p>Bapak H. Anton Santoso memiliki 500.000 lembar saham PT. SIK. Harga nominal Rp5000,-per lembar. Pada akhir tahun buku tiap lembar saham memperoleh deviden Rp300.-, berapa zakat saham Bapak. H. Anton?</p>
                                    <p>Jawab:</p>
                                    <p>Nilai saham: (500.000 x Rp5.000) = Rp2.500.000.000</p>
                                    <p>Deviden (500.000 x Rp 300) = Rp150.000.000</p>
                                    <p>Jumlah total = Rp2.650.000.000</p>
                                    <p>Cara menghiitungnya : Nilai saham + deviden x 2,5%</p>
                                    <p>Jadi 2.500.000.000 + 150.000.000 = Rp2.650.000.000 x 2,5% = Rp66.250.000</p>

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
