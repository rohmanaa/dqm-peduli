<template>
<div>
    <title-area heading="Zakat Maal" description="Zakat yang dikeluarkan individu maupun lembaga atas harta/penghasilan yang diperolehnya dengan syarat dan ketentuan yang sudah ditetapkan" />
    <section class="blogpage-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <index-maal />
                </div>
                <div class="col-lg-4 col-md-12">
                    <side-maal />
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import TitleArea from '@/components/Layout//Title/TitleArea.vue'
import IndexMaal from '@/components/Zakat/Maal/IndexMaal.vue'
import SideMaal from '@/components/Zakat/Maal/SideMaal.vue'

export default {
    components: {
        TitleArea,
        SideMaal,
        IndexMaal
    },
    data() {
        return {
         
        }
    },
}
</script>
