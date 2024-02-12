<template>
<!--====== APPIE SHOWCASE PART START ======-->

<section class="appie-showcase-area">
    <div class="container">
        <div class="row">
            <vue-easy-lightbox scrollDisabled escDisabled moveDisabled :visible="visible" :imgs="imgs" :index="index" @hide="handleHide"></vue-easy-lightbox>
            <div class="col-lg-12">
                <div class="appie-section-title text-center">
                    <h3 class="appie-title">Campaign</h3>
                    <p>Pilih Donasi Kebaikanmu disini</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="row">

                    <div class="col-lg-4">
                        <div class="post-item-1">
                            <img src="https://digital-api.dompetdhuafa.org/storage/61650/conversions/aa8a308de15417edb854c3adf9001962-large.png" alt="">
                            <div class="b-post-details">
                                <h3>
                                    <router-link to="/detail-campaign">Hadiah Alat Bantu Dengar untuk Teman Tuli</router-link>
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
                                  <b-button block href="/detail-campaign" class="btn-dqm w-100">DONASI</b-button>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="post-item-1">
                            <img src="https://digital-api.dompetdhuafa.org/storage/68791/conversions/8f40fc0922dd3eeed393bea08029cd4e-large.jpg" alt="">
                            <div class="b-post-details">
                                <h3>
                                    <router-link to="/detail-campaign">Hadiah Alat Bantu Dengar untuk Teman Tuli</router-link>
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
                                  <b-button block href="/detail-campaign" class="btn-dqm w-100">DONASI</b-button>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="post-item-1">
                            <img src="https://digital-api.dompetdhuafa.org/storage/71068/conversions/e8906e51b954f522f5a1248f9eb3e230-large.jpeg" alt="">
                            <div class="b-post-details">
                                <h3>
                                    <router-link to="/detail-campaign">Hadiah Alat Bantu Dengar untuk Teman Tuli</router-link>
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
                                  <b-button block href="/detail-campaign" class="btn-dqm w-100">DONASI</b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="text-center">
                      <b-button block href="/campaign" class="btn-dqm">Lihat Semua Campaign<i class="fal fa-arrow-right ms-2"></i></b-button>
             
                </div>
            </div>
        </div>
    </div>

</section>

<!--====== APPIE SHOWCASE PART ENDS ======-->
</template>

<script>
export default {
    components: {

    },
    data() {
        return {

            value: 45,
            max: 100

        };
    },

};
</script>

<style>
.slick-slide {
    padding: 0 16px
}
</style>
