<template>
<div>

    <div class="blog-sidebar">

        <div class="mb-3 ">
            <div>
                <b-button v-b-modal.modal-scrollable class="w-100 bg-dqm d-flex justify-content-between">
                    <b-icon icon="calculator" scale="1" variant="white"></b-icon> Kalkulator Emas <b-icon icon="tag-fill" scale="1" variant="white"></b-icon>
                </b-button>

                <b-modal id="modal-scrollable" size="xl" scrollable title="Hitung Zakat Emas">
                    <div class="mt-3">

                        <b-tabs pills content-class="mt-3" justified>
                            <b-tab title="EMAS">
                                <b-card-text>
                                    <div class="mb-2 mt-2">
                                        <span>Emas yang dimiliki
                                            <v-b-tooltip.hover title="Nishab Zakat Emas 85 Gr">
                                                <b-icon icon="exclamation-circle" animation="throb" scale="1"></b-icon>
                                            </v-b-tooltip.hover></span>
                                        <b-form-input type="number" placeholder="Masukan Angka"></b-form-input>
                                    </div>
                                    <div class="mb-2 mt-2">
                                        <span>Harga Emas Saat Ini</span>
                                        <b-form-input type="number" value="970000"></b-form-input>
                                    </div>
                                    <div class="mb-2 mt-2">
                                        <span>Apakah Anda Wajib Bayar Zakat</span>
                                        <b-form-input type="text" disabled></b-form-input>
                                    </div>
                                    <div class="mb-2 mt-2">
                                        <span>Wajib Zakat Emas Anda</span>
                                        <b-form-input type="text" disabled></b-form-input>
                                    </div>

                                </b-card-text>
                            </b-tab>
                            <b-tab title="PERAK">
                                <b-card-text>
                                    <div class="mb-2 mt-2">
                                        <span>Perak yang dimiliki
                                            <v-b-tooltip.hover title="Nishab Zakat Perak 595 Gr">
                                                <b-icon icon="exclamation-circle" animation="throb" scale="1"></b-icon>
                                            </v-b-tooltip.hover></span>
                                        <b-form-input type="number" placeholder="Masukan Angka"></b-form-input>
                                    </div>
                                    <div class="mb-2 mt-2">
                                        <span>Harga Perak Saat Ini</span>
                                        <b-form-input type="number" value="13600"></b-form-input>
                                    </div>
                                    <div class="mb-2 mt-2">
                                        <span>Apakah Anda Wajib Bayar Zakat</span>
                                        <b-form-input type="text" disabled></b-form-input>
                                    </div>
                                    <div class="mb-2 mt-2">
                                        <span>Wajib Zakat Perak Anda</span>
                                        <b-form-input type="text" disabled></b-form-input>
                                    </div>

                                </b-card-text>
                            </b-tab>
                        </b-tabs>

                    </div>

                    <b-button block class="btn-dqm w-100 mt-3">HITUNG ZAKAT</b-button>
                </b-modal>
            </div>
        </div>


        <div class="p-3 mb-2 w-100 bg-secondary text-white rounded">
            <div class="row">
                <div class="col-lg-12">
                    <span>Jumlah Zakat Dibayarkan</span>
                    <b-form-input disabled />
                </div>
            </div>
        </div>

        <div class="mb-3 mt-3">

            <b-button v-b-modal.modal-pembayaran class="w-100 bg-dqm d-flex justify-content-between">
                <b-icon icon="tag-fill" scale="1" variant="white"></b-icon> Pilih Pembayaran <b-icon icon="info-circle-fill" scale="1" variant="white"></b-icon>
            </b-button>

            <b-modal id="modal-pembayaran" scrollable title="Pilih Pembayaran">
                <div class="overview-radio">
                    <div class="row boxed-check-group boxed-check-success">
                        <div class="col-12">
                            <label class="boxed-check">
                                <input class="boxed-check-input" type="radio" name="pembayaran">
                                <div class="boxed-check-label text-center">
                                    <img src="https://down-id.img.susercontent.com/file/9a08d3abab3dd059fff945c72ca372d9" alt="BSI" class="radio-image" />
                                </div>
                            </label>
                        </div>
                        <div class="col-12">
                            <label class="boxed-check">
                                <input class="boxed-check-input" type="radio" name="pembayaran">
                                <div class="boxed-check-label text-center">
                                    <img src="https://down-id.img.susercontent.com/file/e7865f5fb066b8b5e73f9d5c36fc7154" alt="BSI" class="radio-image" />
                                </div>
                            </label>
                        </div>
                        <div class="col-12">
                            <label class="boxed-check">
                                <input class="boxed-check-input" type="radio" name="pembayaran">
                                <div class="boxed-check-label text-center">
                                    <img src="https://down-id.img.susercontent.com/file/0cf8caa250763eefc3d79bb1f8c08e73" alt="BSI" class="radio-image" />
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </b-modal>
        </div>

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
                    <b-form-checkbox id="checkbox-1" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
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

        };
    },
    computed: {

    },
    methods: {

    }
}
</script>

<style>
</style>
