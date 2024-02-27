<template>
    <div>
        <header-default />
        <div class="px-4 py-5 my-5 text-center">
            <div class="appie-error-area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="appie-error-content ">
                                <img src="@/assets/images/error/building.svg" alt="" style="width:450px">
                                <span>Mohon maaf !</span>
                                <h3 class="text-dark">Halaman sedang dibangun</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer-default />
    </div>
</template>

<script>
import HeaderDefault from '@/components/Layout/Header/Header.vue'
import FooterDefault from '@/components/Layout/Footer/Footer.vue'
export default {
    components: {
        HeaderDefault,
        FooterDefault,
    },
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

<style></style>
