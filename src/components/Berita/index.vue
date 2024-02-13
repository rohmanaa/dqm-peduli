<template>
    <div>
        <title-area heading="Berita Terbaru"/>
        <section class="blogpage-section">
            <div class="container">
                <div class="container mb-5">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">

                            <div class="row">
                                <!-- Kolom kiri untuk dua form select -->
                                <div class="col-md-4 mb-3">
                                    <div class="d-flex flex-row mb-3">

                                        <!-- Form select kedua -->
                                        <multiselect v-model="valueurutan" :options="urutan" :searchable="false"
                                            :close-on-select="false" :show-labels="false" placeholder="Pilih Urutan"
                                            class="w-100"></multiselect>
                                            
                                    </div>
                                </div>

                                <!-- Kolom tengah kosong untuk desktop -->
                                <div class="col-md-4"></div>

                                <!-- Kolom kanan untuk satu form select -->
                                <div class="col-md-4">
                                    <div class="flex">
                                        <!-- Form select ketiga -->
                                        <form class="search-form" action="#" method="post">
                                            <input type="search" placeholder="Cari...">
                                            <button type="submit"><i class="fal fa-search"></i></button>
                                        </form>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <all-berita />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import TitleArea from '@/components/Layout//Title/TitleArea.vue'
import AllBerita from './AllBerita.vue'
export default {
    components: {
        TitleArea,
        Multiselect,
        AllBerita
    },

    data() {

        return {

            valueurutan: '',
            urutan: ['Terbaru', 'Terlama', 'Waktu Dekat']

        }
    },

}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
