<template>
<div>
    <title-area heading="Zakat Emas" description="Zakat yang dikeluarkan individu maupun lembaga atas harta/penghasilan yang diperolehnya dengan syarat dan ketentuan yang sudah ditetapkan" />
    <section class="blogpage-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-7">
                    <index-emas />
                </div>
                <div class="col-lg-4 col-md-7">
                    <side-emas/>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import TitleArea from '@/components/Layout/TitleArea.vue'
import IndexEmas from '@/components/Zakat/Emas/IndexEmas.vue'
import SideEmas from '@/components/Zakat/Emas/SideEmas.vue'

export default {
    components: {
        TitleArea,
        SideEmas,
        IndexEmas
    },
    data() {
        return {
            sidebar: false,
        }
    },
}
</script>
