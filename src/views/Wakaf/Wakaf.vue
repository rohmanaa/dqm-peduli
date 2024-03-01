<template>
<div>
    <title-area heading="Wakaf" description="Mari Bantu Mereka yang Membutuhkan" />
    <section class="blogpage-section">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <index-wakaf />
                </div>

            </div>
        </div>
    </section>

</div>
</template>

<script>
import TitleArea from '@/components/Layout/Title/TitleArea.vue'
import IndexWakaf from '@/components/Wakaf/IndexWakaf.vue'

export default {
    components: {
        TitleArea,
        IndexWakaf,
    },
    data() {
        return {

        }
    },
}
</script>
