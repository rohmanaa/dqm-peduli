<template>
<div>
    <header-default />
    <Berita />
    <footer-default />
</div>
</template>

<script>
// import Berita from '@/components/Berita/index'
import Berita from '@/components/404/Build'
import HeaderDefault from '@/components/Layout/Header/Header.vue'
import FooterDefault from '@/components/Layout/Footer/Footer.vue'
export default {
    components: {
        Berita,
        HeaderDefault,
        FooterDefault,
    },

}
</script>

<style></style>
