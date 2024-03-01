<template>
<div>
    <title-area heading="Zakat Emas" description="Zakat emas wajib dikenakan zakat jika emas yang tersimpan telah mencapai atau melebihi nisabnya" />
    <section class="blogpage-section">
        <div class="container">
            <div class="row">
                <div class="col-xl-8">
                    <index-emas />
                </div>
                <div class="col-xl-4">
                    <side-emas />
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import TitleArea from '@/components/Layout//Title/TitleArea.vue'
import IndexEmas from '@/components/Zakat/Emas/IndexEmas.vue'
import SideEmas from '@/components/Zakat/Emas/SideEmas.vue'

export default {
    components: {
        TitleArea,
        SideEmas,
        IndexEmas,

    },
    data() {
        return {

        }
    },
}
</script>
