<template>
<div>
    <header-default />
    <title-area heading="Zakat Penghasilan" description="Zakat yang dikeluarkan individu maupun lembaga atas harta/penghasilan yang diperolehnya dengan syarat dan ketentuan yang sudah ditetapkan" />
    <section class="blogpage-section">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 col-md-12">
                    <index-penghasilan />
                </div>
                <div class="col-xl-4 col-md-12">
                    <side-penghasilan />
                </div>
            </div>
        </div>
    </section>
    <footer-default />
</div>
</template>

<script>
import TitleArea from '@/components/Layout//Title/TitleArea.vue'
import IndexPenghasilan from '@/components/Zakat/Penghasilan/IndexPenghasilan.vue'
import SidePenghasilan from '@/components/Zakat/Penghasilan/SidePenghasilan.vue'
import HeaderDefault from '@/components/Layout/Header/Header.vue'
import FooterDefault from '@/components/Layout/Footer/Footer.vue'

export default {
    components: {
        TitleArea,
        SidePenghasilan,
        IndexPenghasilan,
        HeaderDefault,
        FooterDefault
    },
    data() {
        return {

        }
    },
}
</script>
