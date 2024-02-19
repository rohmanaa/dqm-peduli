<template>
<div>
    <div>
        <b-dropdown id="dropdown-form" variant="light" text="Batas Harga (Rp.)" ref="dropdown" class="pb-4">
            <b-dropdown-form>
                <b-form-group label="minimal" label-for="dropdown-form-minimal">
                    <b-form-input id="dropdown-form-minimal" size="sm" placeholder="Minimal"></b-form-input>
                </b-form-group>

                <b-form-group label="maxi" label-for="dropdown-form-maxi">
                    <b-form-input id="dropdown-form-maxi" type="maxi" size="sm" placeholder="Maximal"></b-form-input>
                </b-form-group>
                <b-form-group class="mt-2 mb-2">
                    <b-form-radio-group id="btn-radios-2" button-variant="outline-success" v-model="selected" :options="options" size="sm" class="text-nowrap" name="radios-btn-default" buttons></b-form-radio-group>
                </b-form-group>
                <b-dropdown-divider></b-dropdown-divider>
                <div class="row pt-2 text-center">
                    <div class="col-6">
                        <b-button class="btn-dqm" size="md">Simpan</b-button>
                    </div>
                    <div class="col-6">
                        <b-button variant="danger" size="md">Hapus</b-button>
                    </div>
                </div>

            </b-dropdown-form>
        </b-dropdown>
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
                <div class="col-xl-4">
                    <div class="post-item-1">
                        <img src="https://digital-api.dompetdhuafa.org/storage/68520/conversions/3f309fb8e7d18db7b033fc833ca9fc63-standard.jpg" alt="">
                        <div class="b-post-details">
                            <h3>
                                <router-link to="/detail-qurban">Domba/Kambing Standar</router-link>
                            </h3>
                            <span class="mb-3">Bobot 23 - 25 kg</span>

                            <div class="d-flex justify-content-between">
                                <span style="font-size:.8rem">
                                    Harga/Ekor
                                </span>
                            </div>
                            <div class="bp-meta d-flex justify-content-between">
                                <span class="text-dqm2 fw-bold">
                                    <b-icon icon="suit-heart-fill" class="me-2"></b-icon>Rp 18.093.043
                                </span>
                            </div>
                            <b-button block href="/detail-qurban" class="btn-dqm w-100">QURBAN SEKERANG</b-button>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="post-item-1">
                        <img src="https://digital-api.dompetdhuafa.org/storage/68520/conversions/3f309fb8e7d18db7b033fc833ca9fc63-standard.jpg" alt="">
                        <div class="b-post-details">
                            <h3>
                                <router-link to="/detail-qurban">Domba/Kambing Standar</router-link>
                            </h3>
                            <span class="mb-3">Bobot 23 - 25 kg</span>

                            <div class="d-flex justify-content-between">
                                <span style="font-size:.8rem">
                                    Harga/Ekor
                                </span>
                            </div>
                            <div class="bp-meta d-flex justify-content-between">
                                <span class="text-dqm2 fw-bold">
                                    <b-icon icon="suit-heart-fill" class="me-2"></b-icon>Rp 18.093.043
                                </span>
                            </div>
                            <b-button block href="/detail-qurban" class="btn-dqm w-100">QURBAN SEKERANG</b-button>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4">
                    <div class="post-item-1">
                        <img src="https://digital-api.dompetdhuafa.org/storage/68520/conversions/3f309fb8e7d18db7b033fc833ca9fc63-standard.jpg" alt="">
                        <div class="b-post-details">
                            <h3>
                                <router-link to="/detail-qurban">Domba/Kambing Standar</router-link>
                            </h3>
                            <span class="mb-3">Bobot 23 - 25 kg</span>

                            <div class="d-flex justify-content-between">
                                <span style="font-size:.8rem">
                                    Harga/Ekor
                                </span>
                            </div>
                            <div class="bp-meta d-flex justify-content-between">
                                <span class="text-dqm2 fw-bold">
                                    <b-icon icon="suit-heart-fill" class="me-2"></b-icon>Rp 18.093.043
                                </span>
                            </div>
                            <b-button block href="/detail-qurban" class="btn-dqm w-100">QURBAN SEKERANG</b-button>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4">
                    <div class="post-item-1">
                        <img src="https://digital-api.dompetdhuafa.org/storage/68520/conversions/3f309fb8e7d18db7b033fc833ca9fc63-standard.jpg" alt="">
                        <div class="b-post-details">
                            <h3>
                                <router-link to="/detail-qurban">Domba/Kambing Standar</router-link>
                            </h3>
                            <span class="mb-3">Bobot 23 - 25 kg</span>

                            <div class="d-flex justify-content-between">
                                <span style="font-size:.8rem">
                                    Harga/Ekor
                                </span>
                            </div>
                            <div class="bp-meta d-flex justify-content-between">
                                <span class="text-dqm2 fw-bold">
                                    <b-icon icon="suit-heart-fill" class="me-2"></b-icon>Rp 18.093.043
                                </span>
                            </div>
                            <b-button block href="/detail-qurban" class="btn-dqm w-100">QURBAN SEKERANG</b-button>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4">
                    <div class="post-item-1">
                        <img src="https://digital-api.dompetdhuafa.org/storage/68520/conversions/3f309fb8e7d18db7b033fc833ca9fc63-standard.jpg" alt="">
                        <div class="b-post-details">
                            <h3>
                                <router-link to="/detail-qurban">Domba/Kambing Standar</router-link>
                            </h3>
                            <span class="mb-3">Bobot 23 - 25 kg</span>

                            <div class="d-flex justify-content-between">
                                <span style="font-size:.8rem">
                                    Harga/Ekor
                                </span>
                            </div>
                            <div class="bp-meta d-flex justify-content-between">
                                <span class="text-dqm2 fw-bold">
                                    <b-icon icon="suit-heart-fill" class="me-2"></b-icon>Rp 18.093.043
                                </span>
                            </div>
                            <b-button block href="/detail-qurban" class="btn-dqm w-100">QURBAN SEKERANG</b-button>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4">
                    <div class="post-item-1">
                        <img src="https://digital-api.dompetdhuafa.org/storage/68520/conversions/3f309fb8e7d18db7b033fc833ca9fc63-standard.jpg" alt="">
                        <div class="b-post-details">
                            <h3>
                                <router-link to="/detail-qurban">Domba/Kambing Standar</router-link>
                            </h3>
                            <span class="mb-3">Bobot 23 - 25 kg</span>

                            <div class="d-flex justify-content-between">
                                <span style="font-size:.8rem">
                                    Harga/Ekor
                                </span>
                            </div>
                            <div class="bp-meta d-flex justify-content-between">
                                <span class="text-dqm2 fw-bold">
                                    <b-icon icon="suit-heart-fill" class="me-2"></b-icon>Rp 18.093.043
                                </span>
                            </div>
                            <b-button block href="/detail-qurban" class="btn-dqm w-100">QURBAN SEKERANG</b-button>
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
// import the styles

export default {
    components: {

    },
    data() {
        return {
            loading: true,
            value: 45,
            max: 100,

            selected: 'radio1',
            options: [{
                    text: '1jt - 1.2jt',
                    value: 'radio1'
                },
                {
                    text: '2jt - 2.8jt',
                    value: 'radio2'
                },
                {
                    text: '3.2jt - 5jt',
                    value: 'radio4'
                }
            ]

        };
    },
    mounted() {
        // Untuk simulasi waktu, atur loading ke false setelah 5 detik
        setTimeout(() => {
            this.loading = false;
        }, 2000); // 5000 milidetik atau 5 detik
    }

};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
