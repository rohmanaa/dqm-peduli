<template>
<div>
    <title-area heading="Mari Bantu Mereka yang Membutuhkan" description="" />
    <section class="blogpage-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <all-campaign />
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>

import TitleArea from '@/components/Layout//Title/TitleArea.vue'
import AllCampaign from './AllCampaign.vue'
export default {
    components: {
        TitleArea,
        AllCampaign
    },

    data() {

        return {
           

        }
    },
    

}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
