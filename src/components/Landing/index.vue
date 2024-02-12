<template>
<div>
    <slider-home />
    <services-home-three />
    <about-home-three />
    <campaign-home />
    <market-home />
    <blog-home-three />
    <fundaiser-home />
</div>
</template>

<script>


import SliderHome from './SliderHome.vue'
import AboutHomeThree from './AboutHomeThree.vue'
import BlogHomeThree from './BeritaHome.vue'
import MarketHome from './MarketHome.vue'
import FundaiserHome from './Fundaiser.vue'
import ServicesHomeThree from './ServicesHomeThree.vue'
import CampaignHome from './CampaignHome.vue'
export default {
    components: {
        SliderHome,
        ServicesHomeThree,
        MarketHome,
        AboutHomeThree,
        CampaignHome,
        BlogHomeThree,
        FundaiserHome
    },
    data() {
        return {

            
        }
    }

}
</script>

<style>

</style>
