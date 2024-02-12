<template>
<div>
    <title-area heading="Zakat Sedekah" description="Zakat yang dikeluarkan individu maupun lembaga atas harta/penghasilan yang diperolehnya dengan syarat dan ketentuan yang sudah ditetapkan" />
    <section class="blogpage-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-7">
                    <index-sedekah />
                </div>
                <div class="col-lg-4 col-md-7">
                    <side-sedekah />
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import TitleArea from '@/components/Layout//Title/TitleArea.vue'
import IndexSedekah from '@/components/Sedekah/IndexSedekah.vue'
import SideSedekah from '@/components/Sedekah/SideSedekah.vue'

export default {
    components: {
        TitleArea,
        SideSedekah,
        IndexSedekah
    },
    data() {
        return {
        
        }
    },
}
</script>
