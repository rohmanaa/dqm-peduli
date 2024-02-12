<template>
<div>
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
</div>
</template>

<script>
import TitleArea from '@/components/Layout//Title/TitleArea.vue'
import IndexFidyah from '@/components/Zakat/Fidyah/IndexFidyah.vue'
import SideFidyah from '@/components/Zakat/Fidyah/SideFidyah.vue'

export default {
    components: {
        TitleArea,
        SideFidyah,
        IndexFidyah
    },
    data() {
        return {
          
        }
    },
}
</script>
