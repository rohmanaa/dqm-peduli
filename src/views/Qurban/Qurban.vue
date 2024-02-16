<template>
<div>
    <title-area heading="Zakat Qurban" description="Zakat yang dikeluarkan individu maupun lembaga atas harta/penghasilan yang diperolehnya dengan syarat dan ketentuan yang sudah ditetapkan" />
    <section class="blogpage-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-8">
                   
                    <index-qurban />
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>

import TitleArea from '@/components/Layout/Title/TitleArea.vue'
import IndexQurban from '@/components/Qurban/IndexQurban.vue'


export default {
    components: {
        TitleArea,
        IndexQurban
   
    },
    data() {
        return {
            slider: [
                48,
                1000
            ],

        }
    },
}
</script>

