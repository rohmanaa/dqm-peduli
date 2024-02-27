<template>
<div>
    <header-default />
    <title-area heading="Zakat Fidyah" description="Fidyah adalah sejumlah harta benda dalam kadar tertentu yang wajib diberikan kepada fakir miskin sebagai ganti suatu ibadah yang telah ditinggalkan." />
    <section class="blogpage-section">
        <div class="container">
            <div class="row">
                <div class="col-xl-8">
                    <index-fidyah />
                </div>
                <div class="col-xl-4">
                    <side-fidyah />
                </div>
            </div>
        </div>
    </section>
    <footer-default />
</div>
</template>

<script>
import TitleArea from '@/components/Layout//Title/TitleArea.vue'
import IndexFidyah from '@/components/Zakat/Fidyah/IndexFidyah.vue'
import SideFidyah from '@/components/Zakat/Fidyah/SideFidyah.vue'
import HeaderDefault from '@/components/Layout/Header/Header.vue'
import FooterDefault from '@/components/Layout/Footer/Footer.vue'

export default {
    components: {
        TitleArea,
        SideFidyah,
        IndexFidyah,
        HeaderDefault,
        FooterDefault
    },
    data() {
        return {

        }
    },
}
</script>
