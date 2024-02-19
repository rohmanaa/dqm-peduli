<template>
<div>
    <title-area heading="Mari Bantu Mereka yang Membutuhkan" description="Menampilkan 12 campaign dari 107 campaign" />
    <section class="blogpage-section">
        <div class="container">
          
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-xl-12">

                        <div class="row">
                            <!-- Kolom kiri untuk dua form select -->
                            <div class="col-md-4 mb-3">
                                <div class="d-flex flex-row mb-3">
                                    <!-- Form select pertama -->
                                    <multiselect v-model="valuekategori" :options="kategori" :multiple="true" :close-on-select="true" :clear-on-select="true" :preserve-search="true" :show-labels="false" placeholder="Pilih Kategori" label="name" track-by="name" class="me-2 w-100">
                                        <template slot="selection" slot-scope="{ values, isOpen }">
                                            <span class="multiselect__single" v-if="values.length" v-show="!isOpen">{{ values.length }} Dipilih</span>
                                        </template>
                                    </multiselect>

                                    <!-- Form select kedua -->
                                  <multiselect v-model="valueurutan" :options="urutan" :searchable="false" :close-on-select="false" :show-labels="false" placeholder="Pilih Urutan" class="w-100"></multiselect>
                                </div>
                            </div>

                            <!-- Kolom tengah kosong untuk desktop -->
                            <div class="col-md-4"></div>

                            <!-- Kolom kanan untuk satu form select -->
                            <div class="col-md-4">
                                <div class="flex">
                                    <!-- Form select ketiga -->
                                   
                                    <form class="search-form" action="#" method="post">
                                        <input type="search" name="s" placeholder="Cari...">
                                        <button type="submit"><i class="fal fa-search"></i></button>
                                    </form>
                              
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
        

            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <all-campaign />
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import TitleArea from '@/components/Layout//Title/TitleArea.vue'
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
            
            valueurutan: '',
            urutan: ['Terbaru', 'Terlama', 'Waktu Dekat']

        }
    },

}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
