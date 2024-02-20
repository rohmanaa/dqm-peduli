<template>
<div class="px-4 py-5 my-5 text-center">
        <div class="appie-error-area ">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="appie-error-content ">
                            <img src="@/assets/images/error/404.svg" alt="" style="width:300px">
                            <span>Maaf!</span>
                            <h3 class="title">Halaman yang dicari tidak ada</h3>
                            <p>Halaman yang Anda cari tidak tersedia. Coba dengan halaman lain atau gunakan tombol kembali ke beranda di bawah ini.</p>
                            <router-link to="/" class="btn-dqm text-white">Kembali Ke Beranda<i class="fal fa-arrow-right ms-2"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
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

<style>

</style>
