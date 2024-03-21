<template>
        <section class="appie-features-area pt-100 pb-100" id="HukumZakat">
        <div class="container">
            <div class="row align-items-start">
                <div class="col-lg-3">
                    <div class="appie-features-tabs-btn">
                        <div class="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                            <a @click.prevent="selectFeature('hukum')" class="nav-link" :class="[selectedTab==='hukum'?'active':'']" data-toggle="pill" role="tab" aria-controls="v-pills-home" aria-selected="true"><i class="fas fa-cog"></i> Hukum</a>
                            <a @click.prevent="selectFeature('ketentuan')" class="nav-link" :class="[selectedTab==='ketentuan'?'active':'']" data-toggle="pill" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i class="fas fa-exclamation-triangle"></i> Ketentuan</a>
                            <a @click.prevent="selectFeature('carahitung')" class="nav-link" :class="[selectedTab==='carahitung'?'active':'']" data-toggle="pill" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="fas fa-bell"></i> Cara Hitung</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="tab-content">
                        <div :class="[selectedTab==='hukum'?'active show':'']" class="tab-pane fade " role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <div class="row align-items-start">
                                <div class="col-lg-9">
                                    <div class="appie-features-content wow animated fadeInRight" data-wow-duration="2000ms" data-wow-delay="600ms">
                                        <span>Hukum Zakat</span>
                                        <p>Zakat penghasilan atau zakat profesi adalah zakat yang dikenakan pada setiap pekerjaan atau keahlian professional tertentu, baik yang dilakukan sendirian maupun bersama orang/ lembaga lain, yang mendatangkan penghasilan (uang) halal yang memenuhi nisab (batas minimum untuk wajib zakat).</p>
                                        <p>Hukum zakat penghasilan ulama fiqh berbeda pendapat. Mayoritas ulama’ Madzhab empat tidak mewajibkan zakat penghasilan pada saat menerima kecuali sudah mencapai nisab dan setahun (haul). Namun para ulama’ mutaakhirin seperti Syekh Abdur rahman Hasan, Syeh Muhammad Abu Zahro, Syekh Abdul Wahhab Khallaf, Syekh Yusuf Al- Qardlowi, Syekh Wahbah Az- Zuhaili, hasil kajian majma’ fiqh dan fatwa MUI Nomor 3 tahun 2003 menegaskan bahwa: zakat penghasilan itu hukumnya Wajib.</p>
                                        <p>Hal ini mengacu pada firman Allah SWT: “ … ambillah olehmu zakat dari sebagian harta mereka, dengan zakat itu kamu membersihkan dan mensucikan mereka … (QS. Al- Taubah: 103)</p>
                                        <blockquote>Dan firman Allah SWT: “ … Hai orang- orang yang beriman! Nafkahkanlah sebagian dari hasil usahamu yang baik- baik ….” (QS. Al- Baqarah: 267)</blockquote>
                                        <p>Juga berdasarkan sebuah hadits shahih riwayat</p>
                                            <blockquote>imam Tirmidzi bahwa Rasulallah SAW bersabda: “ Keluarkanlah olehmu sekalian zakat dari harta kamu sekalian”. Dan hadist dari Abu Hurairah ra, Rasulallah SAW bersabda: “Sedekah hanyalah dikeluarkan dari kelebihan/kebutuhan. Tangan di atas lebih baik daripada tangan di bawah. Mulailah (dalam membelanjakan harta) dengan orang yang menjadi tanggung jawabmu.” (HR. Ahmad)</blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div :class="[selectedTab==='ketentuan'?'active show':'']" class="tab-pane fade" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <div class="row align-items-center">
                                <div class="col-lg-9">
                                    <div class="appie-features-content animated fadeInRight" data-wow-duration="2000ms" data-wow-delay="600ms">
                                        <span>Ketentuan Zakat</span>
                                        <p>Ketentuan zakat pendapatan mengukuti Peraturan Menteri Agama (PMA) No. 31 Tahun 2019 tentang Perubahan Kedua Peraturan Menteri Agama Nomor 52 Tahun 2014 mengenai zakat pendapatan. Juga Opini Dewan Pengawas Syariah (DPS) LAZNAS IZI Nomor IZI-P/090.DPS.VIII/SK/2021 tentang Penetapan Ketentuan Zakat Pendapatan. Dengan rincian sebagai berikut:</p>
                                        <ol>
                                            <li>Nisab zakat pendapatan senilai 85 gram emas.</li>
                                            <li>Kadar zakat pendapatan senilai 2,5%.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div :class="[selectedTab==='carahitung'?'active show':'']" class="tab-pane fade" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                            <div class="row align-items-center">
                                <div class="col-lg-9">
                                    <div class="appie-features-content animated fadeInRight" data-wow-duration="2000ms" data-wow-delay="600ms">
                                        <span>Cara Hitung Zakat Penghasilan</span>
                                        <p>Rumus zakat pendapatan adalah: [Jumlah Penghasilan] x 2,5%</p>
                                        <p><strong>Ketentuan:</strong></p>
                                        <ol>
                                            <li>Nishab. Jika harga emas adalah Rp. 1.000.000,- per gram, maka 85 gram emas sama dengan Rp. 85.000.000,-</li>
                                            <li>Kadar zakat pendapatan adalah 2,5%.</li>
                                        </ol><br/>
                                        <p>Terdapat 2 cara perhitungan zakat pendapatan berdasarkan waktu pembayaran:</p>
                                        <p><strong>Pembayaran Zakat Pendapatan per Tahun</strong></p>
                                        <p>Dalam satu tahun, Pak Ahmad memperoleh pendapatan total Rp. 100.000.000,-, maka zakat pendapatan yang harus
                                            dibayarkan Pak Ahmad adalah Rp. 100.000.000,- x 2,5% = Rp. 2.500.000,- di akhir tahun.</p>
                                        <p><strong>Pembayaran Zakat Pendapatan per Bulan</strong></p>
                                        <p>Pendapatan Pak Mukhlis dalam satu tahun adalah Rp. 120.000.000,-. Maka zakat pendapatan Pak Mukhlis jika ingin
                                            membayarnya setiap bulan adalah: (120.000.000 x 2,5%) / 12 = Rp. 250.000,-</p>
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
    components: {
    },
    data() {
        return {
            showQuestion: 1,
            switchPlan: true,
            selectedTab: 'hukum',

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