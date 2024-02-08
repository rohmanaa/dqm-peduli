<template>
<div>
    <title-area heading="Zakat Qurban" description="Zakat yang dikeluarkan individu maupun lembaga atas harta/penghasilan yang diperolehnya dengan syarat dan ketentuan yang sudah ditetapkan" />
    <section class="blogpage-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-7">
                    <index-qurban />
                </div>
                <div class="col-lg-4 col-md-7">
                    <side-qurban />
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import TitleArea from '@/components/Layout/TitleArea.vue'
import IndexQurban from '@/components/Qurban/IndexQurban.vue'
import SideQurban from '@/components/Qurban/SideQurban.vue'

export default {
    components: {
        TitleArea,
        SideQurban,
        IndexQurban
    },
    data() {
        return {
            sidebar: false,
        }
    },
}
</script>
