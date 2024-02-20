<template>
<div>
    <header-default />
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
    <footer-default />
</div>
</template>

<script>
import HeaderDefault from '@/components/Layout/Header/Header.vue'
import FooterDefault from '@/components/Layout/Footer/Footer.vue'

// import DetailBerita from '@/components/Berita/DetailBerita.vue'
import DetailBerita from  '@/components/404/Build'
import SideBerita from '@/components/Berita/SideBerita.vue'

export default {
    components: {
        HeaderDefault,
        FooterDefault,
        SideBerita,
        DetailBerita
    },
    data() {
        return {

        }
    },
}
</script>
