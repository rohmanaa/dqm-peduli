<template>
<div>
    <div class="container pt-5">
        <b-carousel class="slider-home" id="carousel-1" v-model="slide" :interval="4000" controls indicators background="transparent" img-width="100" style="text-shadow: 1px 1px 2px">
			<b-carousel-slide  v-for="product in produkDonasi.data" :key="product.id" :img-src="product.url"></b-carousel-slide>
        </b-carousel>
    </div>
</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
            return {
                slide:0,
				produkDonasi: [],
				shopAPI: process.env.VUE_APP_SHOPURL,
			};
		},
		created() {
			axios.get(process.env.VUE_APP_SHOPURL + "/api/product?categoryid=1679091c5a880faf6fb5e6087eb1b2dc").then((response) => {
				this.produkDonasi = response.data;
				console.log(response.data);
			}).catch((error) => {
				console.error("Error:", error);
			});
		},
	};
</script>