<template>
<div>
    <title-area heading="Alirkan Pahala Wakaf Sumur untuk Bunda" description=""/>
    <section class="blogpage-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <detail-wakaf/>
                </div>
                <div class="col-lg-4 col-md-12">
                    <side-wakaf />
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import TitleArea from '@/components/Layout/Title/TitleArea.vue'
import DetailWakaf from '@/components/Wakaf/DetailWakaf.vue'
import SideWakaf from '@/components/Wakaf/SideWakaf.vue'


export default {
    components: {
        TitleArea,
        SideWakaf,
        DetailWakaf

    },
    data() {
        return {
            
        }
    },
}
</script>
