<template>
<div>

    <div class="blog-sidebar">

            <aside class="widget widget-categories">
                <div class="mb-10">
                    <h3 class="widget-title">Masukan Nominal Donasi</h3>
                    <div class="row">
                        <div class="col-lg-12">

                            <b-input-group prepend="Rp.">
                                <b-form-input v-model="selectedValue" type="number" @input="checkValue"></b-form-input>
                            </b-input-group>
                            <span v-if="showNotification" style="color: red;">Mohon isi Rp 10.000 atau lebih</span>
                        </div>
                    </div>
                </div>

                <div class="mt-15 mb-10">
                    
                    <h3 class="widget-title">Atau Pilih Nominal</h3>
                    <div class="overview-radio">
                        <div class="row boxed-check-group boxed-check-success">
                            <div class="col-12 col-sm-6">
                                <label class="boxed-check">
                                    <input class="boxed-check-input" type="radio" name="radio-overview" value="10000" @change="updateInputValue">

                                    <div class="boxed-check-label text-center"> 10.000</div>
                                </label>
                            </div>
                            <div class="col-12 col-sm-6">
                                <label class="boxed-check">
                                    <input class="boxed-check-input" type="radio" name="radio-overview" value="20000" @change="updateInputValue">
                                    <div class="boxed-check-label text-center">20.000</div>
                                </label>
                            </div>
                            <div class="col-12 col-sm-6">
                                <label class="boxed-check">
                                    <input class="boxed-check-input" type="radio" name="radio-overview" value="50000" @change="updateInputValue">
                                    <div class="boxed-check-label text-center">50.000</div>
                                </label>
                            </div>
                            <div class="col-12 col-sm-6">
                                <label class="boxed-check">
                                    <input class="boxed-check-input" type="radio" name="radio-overview" value="100000" @change="updateInputValue">
                                    <div class="boxed-check-label text-center">100.000</div>
                                </label>
                            </div>
                            <div class="col-12 col-sm-6">
                                <label class="boxed-check">
                                    <input class="boxed-check-input" type="radio" name="radio-overview" value="200000" @change="updateInputValue">
                                    <div class="boxed-check-label text-center">200.000</div>
                                </label>
                            </div>
                            <div class="col-12 col-sm-6">
                                <label class="boxed-check">
                                    <input class="boxed-check-input" type="radio" name="radio-overview" value="500000" @change="updateInputValue">
                                    <div class="boxed-check-label text-center">500.000</div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

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
                        <span v-if="showNotification" style="color: red;">Mohon isi Rp 10.000 atau lebih</span>
                    </div>

                    <div class="col-lg-12 mb-3">
                        <b-input-group>
                            <b-form-input type="text" placeholder="Email Donatur"></b-form-input>
                        </b-input-group>
                        <span v-if="showNotification" style="color: red;">Mohon isi Rp 10.000 atau lebih</span>
                    </div>

                    <div class="col-lg-12 mb-3">
                        <b-input-group>
                            <b-form-input type="text" placeholder="Nomor WA Donatur"></b-form-input>
                        </b-input-group>
                        <span v-if="showNotification" style="color: red;">Mohon isi Rp 10.000 atau lebih</span>
                    </div>

                    <div class="d-flex justify-content-start mt-2">

                        <b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
                            <span class="ms-2">Tampilkan sebagai Anonim</span>
                        </b-form-checkbox>

                    </div>
                </div>

            </aside>

            <aside class="widget">
                <h3 class="widget-title">Dukungan atau Doamu (Optional)</h3>
                <div class="row">
                    <div class="col-lg-12 mb-3">
                        <div>
                            <b-form-textarea id="textarea" v-model="text" placeholder="Tuliskan Pesanmu" rows="3" max-rows="6"></b-form-textarea>

                            <pre class="mt-3 mb-0">{{ text }}</pre>
                        </div>
                    </div>
                </div>

                <div class="p-3 mb-2 w-100 bg-secondary text-white rounded">
                    <div class="row">
                        <div class="col-lg-12">
                            <span>Total</span>
                            <b-form-input v-model="selectedValue" type="text" @input="checkValue" disabled />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <b-button block class="btn-dqm w-100">Lanjutkan</b-button>
                    </div>
                </div>

            </aside>


    </div>
</div>
</template>

<script>

export default {

    components: {
  

    },
    data() {

        return {

            selectedValue: '',
            showNotification: false,

        }
    },

    methods: {
        load() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        },
        updateInputValue(event) {
            if (this.selectedValue === event.target.value) {
                // Jika nilai input radio sama dengan yang sudah dipilih, hapus seleksi
                this.selectedValue = '';
                this.showNotification = false; // Sembunyikan notifikasi jika ada
            } else {
                // Jika nilai input radio berbeda, perbarui nilai input dengan nilai radio yang dipilih
                this.selectedValue = event.target.value;
                this.showNotification = false; // Sembunyikan notifikasi jika ada
            }
        },
        checkValue() {
            // Periksa apakah nilai input kurang dari 10.000
            if (parseInt(this.selectedValue) < 10000) {
                this.showNotification = true; // Tampilkan notifikasi jika kurang dari 10.000
            } else {
                this.showNotification = false; // Sembunyikan notifikasi jika tidak kurang dari 10.000
            }
        }
    }
}
</script>

<style>
</style>
