<template>

<section class="bg-error d-flex justify-content-center align-items-center">
    <div class="py-5 text-center">
        <div class="appie-error-area">
            <div class="container">
                <div class="col-lg-12">
                    <div class="appie-error-content">
                        <img src="@/assets/images/error/404.svg" alt="" style="width:450px">
                        <span>Mohon maaf !</span>
                        <h3 class="title">Halaman yang sedang Anda cari tidak tersedia</h3>

                        <router-link to="/" class="btn btn-info text-white" size="sm">Kembali Ke Beranda<i class="fal fa-arrow-right ms-2"></i></router-link>
                    </div>
                </div>

            </div>
        </div>
    </div>

</section>

</template>

<script>
export default {
    components: {},
    data() {
        return {
            sidebar: false,

        }
    },
    mounted() {

    },
    methods: {

    }

}
</script>