<template>
    <div>
        <div class="px-4 py-5 my-5 text-center">
            <div class="appie-error-area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="appie-error-content ">
                                <img src="@/assets/images/error/building.svg" alt="" style="width:450px">
                                <span>Mohon maaf !</span>
                                <h3 class="text-dark">Halaman {{ components }} sedang dibangun</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>

export default {
    components: {
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
