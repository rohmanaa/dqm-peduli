<template>
<div>
    <title-area heading="Logotype Masterclass with Jessica Hische" description="Lost the plot morish bleeder absolutely bladdered my lady chinwag"/>
    <section class="blogpage-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-7">
                    <detail-campaign />
                </div>
                <div class="col-lg-4 col-md-7">
                    <side-campaign />
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import TitleArea from '@/components/Layout/TitleArea.vue'
import DetailCampaign from '@/components/Campaign/DetailCampaign.vue'
import SideCampaign from '@/components/Campaign/SideCampaign.vue'

export default {
    components: {
        TitleArea,
        SideCampaign,
        DetailCampaign
    },
    data() {
        return {
            sidebar: false,
        }
    },
}
</script>
