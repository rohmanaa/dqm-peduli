<template>
<div>
    <title-area heading="Zakat Penghasilan" description="Zakat yang dikeluarkan individu maupun lembaga atas harta/penghasilan yang diperolehnya dengan syarat dan ketentuan yang sudah ditetapkan" />
    <section class="blogpage-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-7">
                    <index-penghasilan />
                </div>
                <div class="col-lg-4 col-md-7">
                    <side-penghasilan />
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import TitleArea from '@/components/Layout/TitleArea.vue'
import IndexPenghasilan from '@/components/Zakat/Penghasilan/IndexPenghasilan.vue'
import SidePenghasilan from '@/components/Zakat/Penghasilan/SidePenghasilan.vue'

export default {
    components: {
        TitleArea,
        SidePenghasilan,
        IndexPenghasilan
    },
    data() {
        return {
            sidebar: false,
        }
    },
}
</script>
