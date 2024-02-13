<template>
<div>

    <div class="blog-sidebar">

        <div class="mb-3 ">
            <!-- Via multiple directive modifiers -->
            <b-button @click="toggleCollapse" class="w-100 bg-dqm d-flex justify-content-between">
                <b-icon icon="calculator" scale="1" variant="white"></b-icon> Kalkulator Zakat Maal <b-icon :icon="collapseIcon" scale="1" variant="white"></b-icon>
            </b-button>
            <!-- Elements to collapse -->
            <b-collapse id="collapse-a" v-model="collapseState" @shown="updateCollapseIcon" @hidden="updateCollapseIcon">

                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk tabungan/giro/deposito*</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder=""></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk logam mulia</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder=""></b-form-input>
                </div>

                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk surat berharga
                        <v-b-tooltip.hover title="Surat Berharga antara lain nilai tunai dari Reksadana, Saham, Obligasi, Unit Link, dll.">
                            <b-icon icon="exclamation-circle" animation="throb" scale="1"></b-icon>
                        </v-b-tooltip.hover>
                    </span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder=""></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk properti
                        <v-b-tooltip.hover title="Rumah (properti) yang digunakan sehari-hari, TIDAK DIKENAKAN ZAKAT.">
                            <b-icon icon="exclamation-circle" animation="throb" scale="1"></b-icon>
                        </v-b-tooltip.hover>
                    </span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder=""></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk kendaraan
                        <v-b-tooltip.hover title="Kendaraan yang digunakan sehari-hari, TIDAK DIKENAKAN ZAKAT.">
                            <b-icon icon="exclamation-circle" animation="throb" scale="1"></b-icon>
                        </v-b-tooltip.hover>
                    </span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder=""></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk koleksi seni & barang antik
                        <v-b-tooltip.hover title="Nilai Koleksi dapat ditaksir sendiri, bila dimungkinkan dapat dibantu kurator seni.">
                            <b-icon icon="exclamation-circle" animation="throb" scale="1"></b-icon>
                        </v-b-tooltip.hover>
                    </span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder=""></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk stok barang dagangan
                        <v-b-tooltip.hover title="Contoh bagi pedagang yang harus melunasi cicilan hutang atas barang yang diperdagangkan.">
                            <b-icon icon="exclamation-circle" animation="throb" scale="1"></b-icon>
                        </v-b-tooltip.hover>
                    </span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder=""></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk lainnya</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder=""></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk piutang lancar</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder=""></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Jumlah Harta</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="" disabled></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Hutang jatuh tempo saat membayar kewajiban zakat</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder=""></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Jumlah harta yang dihitung zakatnya</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="" disabled></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Masukan harga emas saat ini (dalam gram)*</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder=""></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Besar nisab zakat maal per tahun</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="" disabled></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Apakah saya wajib membayar zakat maal?</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="" disabled></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Jumlah yang saya harus bayar per tahun</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="" disabled></b-form-input>
                </div>

                <b-button block class="btn-dqm w-100 mt-3">HITUNG</b-button>

            </b-collapse>
        </div>

        <div class="p-3 mb-2 w-100 bg-secondary text-white rounded">
            <div class="row">
                <div class="col-lg-12">
                    <span>Jumlah Zakat Maal Dibayarkan</span>
                    <b-form-input v-model="selectedValue" type="text" @input="checkValue" disabled />
                </div>
            </div>
        </div>

        <aside class="widget widget-trend-post">
            <h3 class="widget-title">Metode Pembayaran</h3>

            <div class="overview-radio">
                <div class="row boxed-check-group boxed-check-success">

                    <div class="col-12 col-sm-6">
                        <label class="boxed-check">
                            <input class="boxed-check-input" type="radio" name="pembayaran">
                            <div class="boxed-check-label text-center">
                                <img src="https://down-id.img.susercontent.com/file/9a08d3abab3dd059fff945c72ca372d9" alt="BSI" class="radio-image" /></div>
                        </label>
                    </div>
                    <div class="col-12 col-sm-6">
                        <label class="boxed-check">
                            <input class="boxed-check-input" type="radio" name="pembayaran">
                            <div class="boxed-check-label text-center">
                                <img src="https://down-id.img.susercontent.com/file/e7865f5fb066b8b5e73f9d5c36fc7154" alt="BSI" class="radio-image" /></div>
                        </label>
                    </div>
                    <div class="col-12 col-sm-6">
                        <label class="boxed-check">
                            <input class="boxed-check-input" type="radio" name="pembayaran">
                            <div class="boxed-check-label text-center">
                                <img src="https://down-id.img.susercontent.com/file/0cf8caa250763eefc3d79bb1f8c08e73" alt="BSI" class="radio-image" /></div>
                        </label>
                    </div>

                </div>
            </div>

        </aside>

        <aside class="widget">
            <h3 class="widget-title">Profil Donatur</h3>
            <div class="row">
                <div class="col-lg-12 mb-3">
                    <b-input-group>
                        <b-form-input type="text" placeholder="Nama Donatur"></b-form-input>
                    </b-input-group>
                </div>

                <div class="col-lg-12 mb-3">
                    <b-input-group>
                        <b-form-input type="text" placeholder="Email Donatur"></b-form-input>
                    </b-input-group>
                </div>

                <div class="col-lg-12 mb-3">
                    <b-input-group>
                        <b-form-input type="text" placeholder="Nomor WA Donatur"></b-form-input>
                    </b-input-group>
                </div>

                <div class="d-flex justify-content-start mt-2">
                    <b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
                        <span class="ms-2">Tampilkan sebagai Anonim</span>
                    </b-form-checkbox>
                </div>
            </div>
        </aside>

        <aside class="widget widget-categories">
            <h3 class="widget-title">Niat Zakat Emas</h3>
            <p class="d-flex justify-content-end mt-3">نَوَيْتُ أَنْ أُخْرِجَ زَكاَةَ مَالِي فَرْضًالِلهِ تَعَالَى</p>
            <p class="text-dqm2 mt-2">“Nawaitu an ukhrija zakata maali fardha llillahi ta’aala”</p>
            <span class="mt-2" style="font-size:.9rem">Saya berniat mengeluarkan zakat harta milikku karena Allah Ta’ala</span>
        </aside>
        <div class="row">
            <div class="col-lg-12">
                <b-button block class="btn-dqm w-100">BAYAR ZAKAT</b-button>
            </div>
        </div>

    </div>
</div>
</template>

<script>
export default {

    components: {

    },
    data() {
        return {
            collapseState: false
        };
    },
    computed: {
        collapseIcon() {
            return this.collapseState ? 'dash' : 'plus';
        }
    },
    methods: {
        toggleCollapse() {
            this.collapseState = !this.collapseState;
        },
        updateCollapseIcon() {
            // Fungsi ini akan dipanggil ketika collapse diubah statusnya
            // dan akan mengubah ikon sesuai dengan status collapse
        }
    }
}
</script>

<style>
</style>
