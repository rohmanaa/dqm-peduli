<template>
<div>
    <header-default />
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
    <footer-default />
</div>
</template>

<script>
import TitleArea from '@/components/Layout/Title/TitleArea.vue'
import IndexWakaf from '@/components/Wakaf/IndexWakaf.vue'
import HeaderDefault from '@/components/Layout/Header/Header.vue'
import FooterDefault from '@/components/Layout/Footer/Footer.vue'

export default {
    components: {
        TitleArea,
        IndexWakaf,
        HeaderDefault,
        FooterDefault
    },
    data() {
        return {

        }
    },
}
</script>
