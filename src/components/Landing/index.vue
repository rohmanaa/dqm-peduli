<template>
<div>
    <slider-home />

    <services-home-three />

    <market-home />
    <campaign-home />
    <about-home-three />

    

    <blog-home-three  :blogs="blogs" />

    <fundaiser-home />

</div>
</template>

<script>
import blogImgFour from '@/assets/images/blog-4.jpg'
import blogImgFive from '@/assets/images/blog-5.jpg'
import blogImgSix from '@/assets/images/blog-6.jpg'
import blogImgSeven from '@/assets/images/blog-7.jpg'

import SliderHome from './SliderHome.vue'
import AboutHomeThree from './AboutHomeThree.vue'
import BlogHomeThree from './BlogHome.vue'

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
            sidebar: false,

            blogImgFour: blogImgFour,
            blogImgFive: blogImgFive,
            blogImgSix: blogImgSix,
            blogImgSeven: blogImgSeven,
            blogs: [{
                    img: blogImgFour,
                    title: 'How to Improve Your App Store Position',
                    date: 'July 14, 2022',
                    comment_date: 'July 14, 2022'
                },
                {
                    img: blogImgFive,
                    title: 'Introducing New App Design for our iOS App',
                    date: 'July 14, 2022',
                    comment_date: 'July 14, 2022'
                },
                {
                    img: blogImgSix,
                    title: 'Engineering job is Becoming More interesting.',
                    date: 'July 14, 2022',
                    comment_date: 'July 14, 2022'
                },
            ]
        }
    }

}
</script>

<style>

</style>
