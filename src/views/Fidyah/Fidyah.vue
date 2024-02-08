<template>
<div>
    <title-area heading="Zakat Fidyah" description="Zakat yang dikeluarkan individu maupun lembaga atas harta/penghasilan yang diperolehnya dengan syarat dan ketentuan yang sudah ditetapkan" />
    <section class="blogpage-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-7">
                    <index-fidyah />
                </div>
                <div class="col-lg-4 col-md-7">
                    <side-fidyah />
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import TitleArea from '@/components/Layout/TitleArea.vue'
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
            sidebar: false,
        }
    },
}
</script>
