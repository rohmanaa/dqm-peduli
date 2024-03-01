<template>
<div>

      <div v-if="!isLoading">
        <section class="blogpage-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12">
                        <detail-campaign :deskripsi="product.desc" :gambar="product.url" :judul="product.product" />
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <side-campaign :totalterkumpul="product.total" :idpro="product.id" class="position-sticky" />
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div v-else>
        <div class="py-5 text-center">
            <div class="container">
                <div class="col-lg-12">
                    <b-spinner label="Loading..." variant="info"></b-spinner>
                    <h3 class="text-dqm"></h3>
                    <span>Loading...</span>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import axios from "axios";
import SideCampaign from '@/components/Campaign/SideCampaign.vue'
import DetailCampaign from '@/components/Campaign/DetailCampaign.vue'

export default {
    components: {
        SideCampaign,
        DetailCampaign,
    },
    data() {
        return {
            
            value: 100,
            max: 100,
            product: null,
            proid: null,
            donationAmount: 0,
            isLoading: true,
            shopAPI: process.env.VUE_APP_SHOPURL,
        }
    },
    mounted() {
        // Mendapatkan proid dari URL menggunakan Vue Router
        this.proid = this.$route.query.proid;
        if (this.proid) {
            this.fetchProduct(this.proid);
        }

        setTimeout(() => {
            this.isLoading = false;
        }, 1000)
        
    },
    methods: {
        async fetchProduct(proid) {
            try {
                const response = await axios.get(`https://shop.dq.akses.live/api/product?productid=${proid}`);
                this.product = response.data.data[0]; 
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        },
    },

}
</script>
