<template>
<div>
    <title-area heading="Zakat Wakaf" description="Zakat yang dikeluarkan individu maupun lembaga atas harta/penghasilan yang diperolehnya dengan syarat dan ketentuan yang sudah ditetapkan" />
    <section class="blogpage-section">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <index-wakaf/>
                </div>

            </div>
        </div>
    </section>
</div>
</template>

<script>
import TitleArea from '@/components/Layout/TitleArea.vue'
import IndexWakaf from '@/components/Wakaf/IndexWakaf.vue'


export default {
    components: {
        TitleArea,
        IndexWakaf
    },
    data() {
        return {
            sidebar: false,
        }
    },
}
</script>
