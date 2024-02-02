<template>
<div>
    <div class="blog-sidebar">

        <aside class="widget widget-categories">
            <div class="mb-10">
                <div class="row">
                    <div class="col-6">
                        <h5 class="fw-bold text-dqm mb-10">Rp. 19000000</h5>
                    </div>
                    <div class="col-6 text-end">
                        <span class="text-dqm mb-10" style="font-size: 0.6rem;"> <i class="fal fa-users"></i> 145 Donatur</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <VueJsProgress  :percentage="13" customBgColor="#1a3257" :delay="600" :striped="true" :animation="true"></VueJsProgress>
                    </div>
                </div>
                <div class="row mt-10">
                    <div class="col-6">
                        <span class="text-dqm mb-10" style="font-size: 0.6rem;">13.68% dari target Rp 100.000.000</span>
                    </div>
                    <div class="col-6 text-end">
                        <span class="text-dqm mb-10" style="font-size: 0.6rem;"> <i class="fal fa-clock"></i> 0 hari lagi</span>
                    </div>
                </div>
            </div>
            <div class="mt-15 mb-10">
                <span>Masukan Nominal Donasi</span>
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
                <span>Atau Pilih Nominal</span>
                <div class="overview-radio">
                    <div class="row boxed-check-group boxed-check-success">
                        <div class="col-12 col-sm-6">
                            <label class="boxed-check">
                                <input class="boxed-check-input" type="radio" name="radio-overview" value="10000" @change="updateInputValue">
                                <div class="boxed-check-label text-center">10.000</div>
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
            <div class="popular-post">
                <router-link to="/single-news"><img src="@/assets/images/blog/p1.jpg" alt=""></router-link>
                <h5>
                    <router-link to="/single-news">Using creative problem Solving</router-link>
                </h5>
                <span>March 10, 2020</span>
            </div>
            <div class="popular-post">
                <router-link to="/single-news"><img src="@/assets/images/blog/p2.jpg" alt=""></router-link>
                <h5>
                    <router-link to="/single-news">Fundamentals of UI Design</router-link>
                </h5>
                <span>Jan 14, 2020</span>
            </div>
            <div class="popular-post">
                <router-link to="/single-news"><img src="@/assets/images/blog/p3.jpg" alt=""></router-link>
                <h5>
                    <router-link to="/single-news">Making music with Other people</router-link>
                </h5>
                <span>April 12, 2020</span>
            </div>
            <div class="popular-post">
                <router-link to="/single-news"><img src="@/assets/images/blog/p4.jpg" alt=""></router-link>
                <h5>
                    <router-link to="/single-news">Brush strokes energize Trees in paintings</router-link>
                </h5>
                <span>July 4, 2020</span>
            </div>
        </aside>
        <aside class="widget">
            <h3 class="widget-title">Popular Tags</h3>
            <div class="tags">
                <a href="#">Bisy LMS</a>
                <a href="#">Design</a>
                <a href="#">General</a>
                <a href="#">Online</a>
                <a href="#">Prevention</a>
                <a href="#">Artist</a>
                <a href="#">Education</a>
                <a href="#">Motivation</a>
                <a href="#">Politico</a>
                <a href="#">Live Cases</a>
            </div>
        </aside>
    </div>
</div>
</template>

<script>

import VueJsProgress from 'vue-js-progress'
export default {

    components: {
        VueJsProgress
    },
    data() {

        return {
            selectedValue: '',
            showNotification: false

        }
    },
   
    methods: {
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
.boxed-check-group,
.boxed-check-group .boxed-check {
    position: relative;
    margin-bottom: 10px;
}

.boxed-check-group .boxed-check {
    display: block;
}

.boxed-check-group .boxed-check:last-child {
    margin-bottom: 10px;
}

.boxed-check-group .boxed-check.boxed-check-inline {
    display: inline-block;
    margin-bottom: 0;
}

.boxed-check-group .boxed-check .boxed-check-input {
    -webkit-appearance: none;
    -moz-appearance: none;
    display: none;
}

.boxed-check-group .boxed-check .boxed-check-input:disabled+.boxed-check-label {
    border: 1px dashed #bec2c6;
    opacity: .4;
    cursor: not-allowed;
}

.boxed-check-group .boxed-check .boxed-check-input:checked+.boxed-check-label,
.boxed-check-group .boxed-check .boxed-check-input:not(:disabled)+.boxed-check-label:hover {
    border-color: #1A3257 !important;
}

.boxed-check-group .boxed-check .boxed-check-input:checked+.boxed-check-label::before {
    content: ' ';
    position: absolute;
    width: 7px;
    height: 6px;
    border-width: 0 0 2px 2px;
    border-style: solid;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    right: 2px;
    top: 1px;
}

.boxed-check-group .boxed-check .boxed-check-label {
    display: block;
    background-color: #ffffff;
    border: 1px solid #ced4da;
    padding: .3rem;
    margin: 0;
    border-radius: .25rem;
    cursor: pointer;
}

.boxed-check-group.boxed-check-outline-default .boxed-check .boxed-check-input:checked+.boxed-check-label,
.boxed-check-group.boxed-check-outline-default .boxed-check .boxed-check-input:not(:disabled)+.boxed-check-label:hover {
    border-color: #1A3257 !important;
    background-color: #ffffff;
}

.boxed-check-group.boxed-check-outline-default .boxed-check .boxed-check-input:checked+.boxed-check-label::before {
    border-color: #1A3257 !important;
}

/* boxed-check colorful success theme */
.boxed-check-group.boxed-check-success .boxed-check .boxed-check-input:checked+.boxed-check-label * {
    color: #ffffff;
}

.boxed-check-group.boxed-check-success .boxed-check .boxed-check-input:checked+.boxed-check-label {
    color: #ffffff;
    background-color: #1A3257 !important;
}
</style>
