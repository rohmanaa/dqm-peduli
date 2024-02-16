<template>
    <div>
        <title-area heading="Tebar Hewan Kurban 1445 H" description="" />
        <section class="blogpage-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12">
                        <detail-qurban />
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <side-qurban />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import TitleArea from '@/components/Layout/Title/TitleArea.vue'
import DetailQurban from '@/components/Qurban/DetailQurban.vue'
import SideQurban from '@/components/Qurban/SideQurban.vue'


export default {
    components: {
        TitleArea,
        SideQurban,
        DetailQurban

    },
    data() {
        return {

        }
    },
}
</script>
