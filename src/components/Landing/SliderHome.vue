<template>
<div>

    <b-carousel class="slider-home" id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab" img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
        <!-- Text slides with image -->
        <b-carousel-slide img-src="https://digital-api.dompetdhuafa.org/storage/71068/conversions/e8906e51b954f522f5a1248f9eb3e230-large.jpeg"></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://digital-api.dompetdhuafa.org/storage/13451/conversions/dcc5e74b616544ab6095f592bfada663-large.jpg"></b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://digital-api.dompetdhuafa.org/storage/70087/conversions/8e833741d979124471cfc4286ba518ee-large.jpeg"></b-carousel-slide>

    </b-carousel>

</div>
</template>

<script>
export default {
    data() {
        return {
            slide: 0,
            sliding: null
        }
    },

}
</script>
