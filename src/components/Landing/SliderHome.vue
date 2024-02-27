<template>
<div>
    <div class="container pt-5">
        <b-carousel class="slider-home" id="carousel-1" v-model="slide" :interval="4000" controls indicators background="transparent" img-width="100" style="text-shadow: 1px 1px 2px">
            <b-carousel-slide img-src="https://digital-api.dompetdhuafa.org/storage/71068/conversions/e8906e51b954f522f5a1248f9eb3e230-large.jpeg"></b-carousel-slide>
            <b-carousel-slide img-src="https://digital-api.dompetdhuafa.org/storage/13451/conversions/dcc5e74b616544ab6095f592bfada663-large.jpg"></b-carousel-slide>
        </b-carousel>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            slide: 0
        }
    },

}
</script>
