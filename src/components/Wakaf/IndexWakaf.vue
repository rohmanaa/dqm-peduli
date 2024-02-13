<template>
    <div>
<!--====== APPIE PAGE TITLE PART ENDS ======-->
<!-- Blog Start -->
<section class="blogpage-section">
    <div class="container">
        <div class="container mb-5">
            <div class="row">
                <div class="col-12">

                    <div class="row">
                        <!-- Kolom kiri untuk dua form select -->
                        <div class="col-md-4 mb-3">
                            <div class="d-flex flex-row mb-3">
                                <!-- Form select pertama -->
                                <multiselect v-model="valuekategori" :options="kategori" :multiple="true" :close-on-select="true" :clear-on-select="true" :preserve-search="true" :show-labels="false" placeholder="Pilih Kategori" label="name" track-by="name" class="me-2 w-100">
                                    <template slot="selection" slot-scope="{ values, search, isOpen }">
                                        <span class="multiselect__single" v-if="values.length" v-show="!isOpen">{{ values.length }} Dipilih</span>
                                    </template>
                                </multiselect>

                                <!-- Form select kedua -->
                                <multiselect v-model="valuewilayah" :options="wilayah" :multiple="true" :close-on-select="false" :clear-on-select="true" :preserve-search="true" :show-labels="false" placeholder="Pilih Wilayah" label="name" track-by="name" class="w-100">
                                    <template slot="selection" slot-scope="{ values, search, isOpen }">
                                        <span class="multiselect__single" v-if="values.length" v-show="!isOpen">{{ values.length }} Dipilih</span>
                                    </template>
                                </multiselect>
                            </div>
                        </div>

                        <!-- Kolom tengah kosong untuk desktop -->
                        <div class="col-md-4"></div>

                        <!-- Kolom kanan untuk satu form select -->
                        <div class="col-md-4">
                            <div class="d-flex flex-row-reverse">
                                <!-- Form select ketiga -->
                                <multiselect v-model="valueurutan" :options="urutan" :searchable="false" :close-on-select="false" :show-labels="false" placeholder="Pilih Urutan" class="w-100"></multiselect>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    <div>
        <b-skeleton-wrapper :loading="loading">
            <template #loading>
                <div class="col-lg-12">
                    <b-row>
                        <b-col class="col-4 mb-3">
                            <b-skeleton-img class="rounded"></b-skeleton-img>
                            <b-card>
                                <b-skeleton width="85%" variant="text"></b-skeleton>
                                <b-skeleton width="55%" variant="text"></b-skeleton>
                                <b-skeleton width="70%" variant="text"></b-skeleton>
                            </b-card>
                        </b-col>
                        <b-col class="col-4 mb-3">
                            <b-skeleton-img class="rounded"></b-skeleton-img>
                            <b-card>
                                <b-skeleton width="85%" variant="text"></b-skeleton>
                                <b-skeleton width="55%" variant="text"></b-skeleton>
                                <b-skeleton width="70%" variant="text"></b-skeleton>
                            </b-card>
                        </b-col>
                        <b-col class="col-4 mb-3">
                            <b-skeleton-img class="rounded"></b-skeleton-img>
                            <b-card>
                                <b-skeleton width="85%" variant="text"></b-skeleton>
                                <b-skeleton width="55%" variant="text"></b-skeleton>
                                <b-skeleton width="70%" variant="text"></b-skeleton>
                            </b-card>
                        </b-col>
                        <b-col class="col-4 mb-3">
                            <b-skeleton-img class="rounded"></b-skeleton-img>
                            <b-card>
                                <b-skeleton width="85%" variant="text"></b-skeleton>
                                <b-skeleton width="55%" variant="text"></b-skeleton>
                                <b-skeleton width="70%" variant="text"></b-skeleton>
                            </b-card>
                        </b-col>
                        <b-col class="col-4 mb-3">
                            <b-skeleton-img class="rounded"></b-skeleton-img>
                            <b-card>
                                <b-skeleton width="85%" variant="text"></b-skeleton>
                                <b-skeleton width="55%" variant="text"></b-skeleton>
                                <b-skeleton width="70%" variant="text"></b-skeleton>
                            </b-card>
                        </b-col>
                        <b-col class="col-4 mb-3">
                            <b-skeleton-img class="rounded"></b-skeleton-img>
                            <b-card>
                                <b-skeleton width="85%" variant="text"></b-skeleton>
                                <b-skeleton width="55%" variant="text"></b-skeleton>
                                <b-skeleton width="70%" variant="text"></b-skeleton>
                            </b-card>
                        </b-col>

                    </b-row>
                </div>
            </template>
            <div class="col-lg-12">
                <div class="row">
                    <div class="col-xl-4">
                        <div class="post-item-1">
                            <img src="https://digital-api.dompetdhuafa.org/storage/61650/conversions/aa8a308de15417edb854c3adf9001962-large.png" alt="">
                            <div class="b-post-details">
                                <h3>
                                    <router-link to="/detail-wakaf">Hadiah Alat Bantu Dengar untuk Teman Tuli</router-link>
                                </h3>
                                <span class="mb-3">"Wujudkan Mimpi Mendengar Normal untuk Anak-anak Tuna Rungu Indonesia! Ayo Berikan Hadiah Alat Bantu Dengar!"</span>
                                <div>
                                    <b-progress :value="value" :max="max" show-progress animated></b-progress>
                                </div>
                                <div class="d-flex justify-content-between mt-3">
                                    <span style="font-size:.8rem">
                                        Terkumpul
                                    </span>
                                    <span style="font-size:.8rem">Sisa Hari
                                    </span>
                                </div>
                                <div class="bp-meta d-flex justify-content-between">
                                    <span class="text-dqm2 fw-bold">
                                        <b-icon icon="suit-heart-fill" class="me-2"></b-icon>Rp 18.093.043
                                    </span>
                                    <span class="text-dqm2 fw-bold">
                                        <b-icon icon="clock" class="me-2"></b-icon>326
                                    </span>
                                </div>
                                <b-button block href="/detail-wakaf" class="btn-dqm w-100">WAKAF</b-button>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4">
                        <div class="post-item-1">
                            <img src="https://digital-api.dompetdhuafa.org/storage/68791/conversions/8f40fc0922dd3eeed393bea08029cd4e-large.jpg" alt="">
                            <div class="b-post-details">
                                <h3>
                                    <router-link to="/detail-wakaf">Hadiah Alat Bantu Dengar untuk Teman Tuli</router-link>
                                </h3>
                                <span class="mb-3">"Wujudkan Mimpi Mendengar Normal untuk Anak-anak Tuna Rungu Indonesia! Ayo Berikan Hadiah Alat Bantu Dengar!"</span>
                                <div>
                                    <b-progress :value="value" :max="max" show-progress animated></b-progress>
                                </div>
                                <div class="d-flex justify-content-between mt-3">
                                    <span style="font-size:.8rem">
                                        Terkumpul
                                    </span>
                                    <span style="font-size:.8rem">Sisa Hari
                                    </span>
                                </div>
                                <div class="bp-meta d-flex justify-content-between">
                                    <span class="text-dqm2 fw-bold">
                                        <b-icon icon="suit-heart-fill" class="me-2"></b-icon>Rp 18.093.043
                                    </span>
                                    <span class="text-dqm2 fw-bold">
                                        <b-icon icon="clock" class="me-2"></b-icon>326
                                    </span>
                                </div>
                                <b-button block href="/detail-wakaf" class="btn-dqm w-100">WAKAF</b-button>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4">
                        <div class="post-item-1">
                            <img src="https://digital-api.dompetdhuafa.org/storage/71068/conversions/e8906e51b954f522f5a1248f9eb3e230-large.jpeg" alt="">
                            <div class="b-post-details">
                                <h3>
                                    <router-link to="/detail-wakaf">Hadiah Alat Bantu Dengar untuk Teman Tuli</router-link>
                                </h3>
                                <span class="mb-3">"Wujudkan Mimpi Mendengar Normal untuk Anak-anak Tuna Rungu Indonesia! Ayo Berikan Hadiah Alat Bantu Dengar!"</span>
                                <div>
                                    <b-progress :value="value" :max="max" show-progress animated></b-progress>
                                </div>
                                <div class="d-flex justify-content-between mt-3">
                                    <span style="font-size:.8rem">
                                        Terkumpul
                                    </span>
                                    <span style="font-size:.8rem">Sisa Hari
                                    </span>
                                </div>
                                <div class="bp-meta d-flex justify-content-between">
                                    <span class="text-dqm2 fw-bold">
                                        <b-icon icon="suit-heart-fill" class="me-2"></b-icon>Rp 18.093.043
                                    </span>
                                    <span class="text-dqm2 fw-bold">
                                        <b-icon icon="clock" class="me-2"></b-icon>326
                                    </span>
                                </div>
                                <b-button block href="/detail-wakaf" class="btn-dqm w-100">WAKAF</b-button>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4">
                        <div class="post-item-1">
                            <img src="https://digital-api.dompetdhuafa.org/storage/58534/conversions/015afefbcdfaea28c4a610a48697829f-large.jpg" alt="">
                            <div class="b-post-details">
                                <h3>
                                    <router-link to="/detail-wakaf">Hadiah Alat Bantu Dengar untuk Teman Tuli</router-link>
                                </h3>
                                <span class="mb-3">"Wujudkan Mimpi Mendengar Normal untuk Anak-anak Tuna Rungu Indonesia! Ayo Berikan Hadiah Alat Bantu Dengar!"</span>
                                <div>
                                    <b-progress :value="value" :max="max" show-progress animated></b-progress>
                                </div>
                                <div class="d-flex justify-content-between mt-3">
                                    <span style="font-size:.8rem">
                                        Terkumpul
                                    </span>
                                    <span style="font-size:.8rem">Sisa Hari
                                    </span>
                                </div>
                                <div class="bp-meta d-flex justify-content-between">
                                    <span class="text-dqm2 fw-bold">
                                        <b-icon icon="suit-heart-fill" class="me-2"></b-icon>Rp 18.093.043
                                    </span>
                                    <span class="text-dqm2 fw-bold">
                                        <b-icon icon="clock" class="me-2"></b-icon>326
                                    </span>
                                </div>
                                <b-button block href="/detail-wakaf" class="btn-dqm w-100">WAKAF</b-button>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4">
                        <div class="post-item-1">
                            <img src="https://digital-api.dompetdhuafa.org/storage/65836/conversions/a7e1f1a392c3cb24fb95acb08742a2c6-large.jpg" alt="">
                            <div class="b-post-details">
                                <h3>
                                    <router-link to="/detail-wakaf">Hadiah Alat Bantu Dengar untuk Teman Tuli</router-link>
                                </h3>
                                <span class="mb-3">"Wujudkan Mimpi Mendengar Normal untuk Anak-anak Tuna Rungu Indonesia! Ayo Berikan Hadiah Alat Bantu Dengar!"</span>
                                <div>
                                    <b-progress :value="value" :max="max" show-progress animated></b-progress>
                                </div>
                                <div class="d-flex justify-content-between mt-3">
                                    <span style="font-size:.8rem">
                                        Terkumpul
                                    </span>
                                    <span style="font-size:.8rem">Sisa Hari
                                    </span>
                                </div>
                                <div class="bp-meta d-flex justify-content-between">
                                    <span class="text-dqm2 fw-bold">
                                        <b-icon icon="suit-heart-fill" class="me-2"></b-icon>Rp 18.093.043
                                    </span>
                                    <span class="text-dqm2 fw-bold">
                                        <b-icon icon="clock" class="me-2"></b-icon>326
                                    </span>
                                </div>
                                <b-button block href="/detail-wakaf" class="btn-dqm w-100">WAKAF</b-button>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4">
                        <div class="post-item-1">
                            <img src="https://digital-api.dompetdhuafa.org/storage/39176/conversions/3551826e17e6f42f745816d51c08bd8b-large.jpg" alt="">
                            <div class="b-post-details">
                                <h3>
                                    <router-link to="/detail-wakaf">Hadiah Alat Bantu Dengar untuk Teman Tuli</router-link>
                                </h3>
                                <span class="mb-3">"Wujudkan Mimpi Mendengar Normal untuk Anak-anak Tuna Rungu Indonesia! Ayo Berikan Hadiah Alat Bantu Dengar!"</span>
                                <div>
                                    <b-progress :value="value" :max="max" show-progress animated></b-progress>
                                </div>
                                <div class="d-flex justify-content-between mt-3">
                                    <span style="font-size:.8rem">
                                        Terkumpul
                                    </span>
                                    <span style="font-size:.8rem">Sisa Hari
                                    </span>
                                </div>
                                <div class="bp-meta d-flex justify-content-between">
                                    <span class="text-dqm2 fw-bold">
                                        <b-icon icon="suit-heart-fill" class="me-2"></b-icon>Rp 18.093.043
                                    </span>
                                    <span class="text-dqm2 fw-bold">
                                        <b-icon icon="clock" class="me-2"></b-icon>326
                                    </span>
                                </div>
                                <b-button block href="/detail-wakaf" class="btn-dqm w-100">WAKAF</b-button>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="bisylms-pagination">
                            <span class="current">01</span>
                            <router-link to="#">02</router-link>
                            <a class="next" href="#">next<i class="fal fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </b-skeleton-wrapper>
    </div>
    </div>
</section></div>
</template>

<script>
// import the styles
import Multiselect from 'vue-multiselect'

export default {
    components: {
     
        Multiselect,
    },
    data() {
        return {
                        value: 45,
            max: 100,
            loading: true,
            valuekategori: [],
            kategori: [{
                    name: 'Vue.js'

                },
                {
                    name: 'Adonis'
                },
                {
                    name: 'Rails'
                },
                {
                    name: 'Sinatra'
                },
                {
                    name: 'Laravel'
                },
                {
                    name: 'Phoenix'
                }
            ],
            valuewilayah: [],
            wilayah: [{
                    name: 'Vue.js',
                    language: 'JavaScript'
                },
                {
                    name: 'Adonis',
                    language: 'JavaScript'
                },
                {
                    name: 'Rails',
                    language: 'Ruby'
                },
                {
                    name: 'Sinatra',
                    language: 'Ruby'
                },
                {
                    name: 'Laravel',
                    language: 'PHP'
                },
                {
                    name: 'Phoenix',
                    language: 'Elixir'
                }
            ],
            valueurutan: '',
            urutan: ['Terbaru', 'Terlama', 'Waktu Dekat']

        };
    },
    mounted() {
        // Untuk simulasi waktu, atur loading ke false setelah 5 detik
        setTimeout(() => {
            this.loading = false;
        }, 1000); // 5000 milidetik atau 5 detik
    }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
