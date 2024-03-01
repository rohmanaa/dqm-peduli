<template>
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
            <div class="row mb-3">
                <div class="col-lg-12 col-md-12 col-xl-12">

                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <div class="d-flex flex-row">
                                <multiselect v-model="valueurutan" :options="urutan" :searchable="false" :close-on-select="false" :show-labels="false" placeholder="Pilih Urutan" class="w-100"></multiselect>
                            </div>
                        </div>

                        <div class="col-md-4"></div>
                        <div class="col-md-4">
                            <div class="flex">
                                <form class="search-form" @submit.prevent="searchProducts">
                                    <input v-model="searchQuery" type="search" name="s" placeholder="Cari...">
                                    <button type="submit"><i class="fal fa-search"></i></button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="row" v-if="filteredProducts.length > 0">
                <div class="col-lg-4" v-for="product in filteredProducts" :key="product.id">
                    <div class="post-item-1">
                        <img :src="product.url" alt="">
                        <div class="b-post-details">
                            <h3>
                                <router-link :to="`/detail-campaign?proid=${product.id}`">
                                    {{ product.product }}
                                </router-link>
                            </h3>
                            <span style="font-size:.8rem" class="mb-3">{{ product.desc }}</span>
                            <div>
                                <VueJsProgress :percentage="13" customBgColor="#1a3257" :delay="600" :striped="true" :animation="true"></VueJsProgress>
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
                                    <b-icon icon="suit-heart-fill" class="me-2"></b-icon>Rp. {{ product.total }}
                                </span>
                                <span class="text-dqm2 fw-bold">
                                    <b-icon icon="clock" class="me-2"></b-icon>-
                                </span>
                            </div>
                            <router-link :to="`/detail-campaign?proid=${product.id}`" class="submit-dqm text-white">
                                DONASI
                            </router-link>
                        </div>

                    </div>
                </div>
            </div>

            <div v-else class="row">

                <div class="py-5 text-center">
                    <div class="container">
                        <div class="col-lg-12">
                            <h3 class="text-dqm">Mohon maaf !</h3>
                            <span>Data Yang Dicari Tidak Tersedia</span>
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
</template>

<script>
import Multiselect from 'vue-multiselect'
import VueJsProgress from 'vue-js-progress'
import axios from "axios";
import {
    VMoney
} from 'v-money'
export default {
    components: {
        VueJsProgress,
        Multiselect
    },
    data() {
        return {
            valueurutan: null,
            urutan: ['Terbaru', 'Terlama'],
            searchQuery: '',
            produkDonasi: {
                data: []
            },
            value: 45,
            max: 100,

        };
    },

    computed: {
        filteredProducts() {
            let filtered = this.produkDonasi.data;

            // Filter based on search query
            const query = this.searchQuery.toLowerCase();
            filtered = filtered.filter(product => product.product.toLowerCase().includes(query));

            // Sort based on selected option
            if (this.valueurutan === 'Terbaru') {
                filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
            } else if (this.valueurutan === 'Terlama') {
                filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
            }

            return filtered;
        },
    },
    mounted() {
        // Initial request without search query
        this.fetchProducts();
    },
    methods: {
        searchProducts() {
            axios.get(process.env.VUE_APP_SHOPURL + "/api/product", {
                    params: {
                        categoryid: '1679091c5a880faf6fb5e6087eb1b2dc',
                        search: this.searchQuery,
                        sort: this.valueurutan === 'Terbaru' ? 'desc' : 'asc',
                    },
                })
                .then((response) => {
                    this.produkDonasi = response.data;
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        fetchProducts() {
            axios.get(process.env.VUE_APP_SHOPURL + "/api/product?categoryid=1679091c5a880faf6fb5e6087eb1b2dc")
                .then((response) => {
                    this.produkDonasi = response.data;
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },

    },
    created() {

        axios.get(process.env.VUE_APP_SHOPURL + "/api/product?categoryid=1679091c5a880faf6fb5e6087eb1b2dc").then((response) => {
            this.produkDonasi = response.data;
            console.log(response.data);
        }).catch((error) => {
            console.error("Error:", error);
        });
    },
    directives: {
        money: VMoney
    }

};
</script>

<style>

</style>
