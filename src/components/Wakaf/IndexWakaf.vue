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

        <div class="row">

            <div class="col-lg-12 col-md-7">
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
                                <div class="col-lg-4">
                                    <div class="post-item-1">
                                        <img src="@/assets/images/blog/1.jpg" alt="">
                                        <div class="b-post-details">
                                            <div class="bp-meta">
                                                <a href="#"><i class="fal fa-clock"></i>April 22, 2020</a>
                                                <a href="#"><i class="fal fa-comments"></i>6 Comments</a>
                                            </div>
                                            <h3><a href="/detail-campaign">Build A Full Web Chat App From Scratch.</a></h3>
                                            <a class="read-more" href="/detail-campaign">Read More<i class="fal fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="post-item-1">
                                        <img src="@/assets/images/blog/2.jpg" alt="">
                                        <div class="b-post-details">
                                            <div class="bp-meta">
                                                <a href="#"><i class="fal fa-clock"></i>April 22, 2020</a>
                                                <a href="#"><i class="fal fa-comments"></i>6 Comments</a>
                                            </div>
                                            <h3><a href="/detail-campaign">Insights on How to Improve Your Teaching.</a></h3>
                                            <a class="read-more" href="/detail-campaign">Read More<i class="fal fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="post-item-1">
                                        <img src="@/assets/images/blog/3.jpg" alt="">
                                        <div class="b-post-details">
                                            <div class="bp-meta">
                                                <a href="#"><i class="fal fa-clock"></i>April 22, 2020</a>
                                                <a href="#"><i class="fal fa-comments"></i>6 Comments</a>
                                            </div>
                                            <h3><a href="/detail-campaign">Brush Strokes Energize Trees In Paintings</a></h3>
                                            <a class="read-more" href="/detail-campaign">Read More<i class="fal fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="post-item-1">
                                        <img src="@/assets/images/blog/4.jpg" alt="">
                                        <div class="b-post-details">
                                            <div class="bp-meta">
                                                <a href="#"><i class="fal fa-clock"></i>April 22, 2020</a>
                                                <a href="#"><i class="fal fa-comments"></i>6 Comments</a>
                                            </div>
                                            <h3><a href="/detail-campaign">Learning Python for Data Analysis.</a></h3>
                                            <a class="read-more" href="/detail-campaign">Read More<i class="fal fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="post-item-1">
                                        <img src="@/assets/images/blog/5.jpg" alt="">
                                        <div class="b-post-details">
                                            <div class="bp-meta">
                                                <a href="#"><i class="fal fa-clock"></i>April 22, 2020</a>
                                                <a href="#"><i class="fal fa-comments"></i>6 Comments</a>
                                            </div>
                                            <h3><a href="/detail-campaign">Logotype Masterclass with Jessica Hische</a></h3>
                                            <a class="read-more" href="/detail-campaign">Read More<i class="fal fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="post-item-1">
                                        <img src="@/assets/images/blog/6.jpg" alt="">
                                        <div class="b-post-details">
                                            <div class="bp-meta">
                                                <a href="#"><i class="fal fa-clock"></i>April 22, 2020</a>
                                                <a href="#"><i class="fal fa-comments"></i>6 Comments</a>
                                            </div>
                                            <h3><a href="/detail-campaign">Build A Full Web Chat App From Scratch.</a></h3>
                                            <a class="read-more" href="/detail-campaign">Read More<i class="fal fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="bisylms-pagination">
                                        <span class="current">01</span>
                                        <a href="#">02</a>
                                        <a class="next" href="#">next<i class="fal fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </b-skeleton-wrapper>
                </div>
            </div>
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
        }, 5000); // 5000 milidetik atau 5 detik
    }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
