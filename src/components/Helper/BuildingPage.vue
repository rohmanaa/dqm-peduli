<template>
    <div>


        <div class="appie-error-area">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="appie-error-content text-center">
                            <img src="@/assets/images/error.png" alt="">
                            <span>Maaf!</span>
                            <h3 class="title">Halaman yang dicari tidak ada</h3>
                            <p>Halaman yang Anda cari tidak tersedia. Coba dengan halaman lain atau gunakan tombol kembali
                                ke beranda di bawah ini.</p>
                            <router-link to="/">Kembali Ke Beranda<i class="fal fa-arrow-right"></i></router-link>
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


        }
    },
    mounted() {

    },
    methods: {

    }

}
</script>

<style></style>