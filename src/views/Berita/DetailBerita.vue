<template>
<div>
    <section class="blogpage-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-7">
                    <detail-berita />
                </div>
                <div class="col-lg-4 col-md-7">
                    <side-berita />
                </div>
            </div>
        </div>
    </section>

</div>
</template>

<script>
import DetailBerita from '@/components/Berita/DetailBerita.vue'
import SideBerita from '@/components/Berita/SideBerita.vue'

export default {
    components: {

        SideBerita,
        DetailBerita
    },
    data() {
        return {

        }
    },
}
</script>
