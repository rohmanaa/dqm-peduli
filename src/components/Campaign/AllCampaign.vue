<template>
<div>
    <div class="row g-2 row-cols-1 row-cols-lg-3 mb-5">
        <div class="col-md d-flex align-items-center mb-2 d-sm">
            <span class="me-2">Filter</span>

            <treeselect v-model="value" :multiple="true" :options="options" :limit="3" class="w-50 ms-2 d-none d-xs-block d-sm-block d-md-none" />
        </div>
        <div class="col-md d-none d-lg-block d-xl-none">
            <treeselect v-model="value" :multiple="true" :options="options" :limit="3" class="w-50 ms-2" />
        </div>
        <div class="col-md d-flex justify-content-end align-items-center mb-2" xs="12">
            <span class="me-2">Urutan</span>
            <treeselect v-model="value" :multiple="true" :options="options" :limit="3" />
        </div>
    </div>

    <div class="shop-grid-topbar d-flex justify-content-between align-items-center">
         <div>
            <span class="me-2">Filter</span>
            <treeselect v-model="value" :multiple="true" :options="options" :limit="3" class="w-50" />
        </div>
            <div>
                <span class="me-2">Filter</span>
                <treeselect v-model="value" :multiple="true" :options="options" :limit="3" class="w-50" />
            </div>
                    <div>
                <span class="me-2">Filter</span>
                <treeselect v-model="value" :multiple="true" :options="options" :limit="3" class="w-50" />
            </div>
    </div>

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
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
    components: {
        Treeselect
    },
    data() {
        return {
            loading: true,
            value: null,
            // define options
            options: [{
                id: 'a',
                label: 'a',
                children: [{
                    id: 'aa',
                    label: 'aa',
                }, {
                    id: 'ab',
                    label: 'ab',
                }],
            }, {
                id: 'b',
                label: 'b',
            }, {
                id: 'c',
                label: 'c',
            }],
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

<style>

</style>
