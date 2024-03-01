<template>
<div> 
    <title-area heading="Qurban" description="Tebar Hewan Kurban 1445 H" />
    <section class="blogpage-section">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-md-8">
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
        IndexQurban,

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
