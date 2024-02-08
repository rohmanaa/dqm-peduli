<template>
<div>
    <!--====== PRELOADER PART START ======-->

    <!--====== PART ENDS ======-->

    <!--====== APPIE PAGE TITLE PART START ======-->

    <title-area heading="Mari Bantu Mereka yang Membutuhkan" description="Menampilkan 12 campaign dari 107 campaign" />

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

            <div class="row">

                <div class="col-lg-12 col-md-7">
                    <all-campaign />
                </div>
            </div>
        </div>
    </section>
    <!-- Blog End -->

    <!--====== APPIE FOOTER PART START ======-->

    <!--====== APPIE FOOTER PART ENDS ======-->

    <!--====== APPIE BACK TO TOP PART ENDS ======-->

    <!--====== APPIE BACK TO TOP PART ENDS ======-->
</div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import TitleArea from '../Layout/TitleArea.vue'
import AllCampaign from './AllCampaign.vue'
export default {
    components: {
        TitleArea,
        Multiselect,
        AllCampaign
    },

    data() {

        return {
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

        }
    },

}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
