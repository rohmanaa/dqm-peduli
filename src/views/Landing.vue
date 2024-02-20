<template>
<div>
    <header-default />
    <home-Three />
    <footer-default />
</div>
</template>

<script>
import HomeThree from '../components/Landing/index'
import HeaderDefault from '@/components/Layout/Header/Header.vue'
import FooterDefault from '@/components/Layout/Footer/Footer.vue'

export default {
    components: {
        HomeThree,
        HeaderDefault,
        FooterDefault
    },

}
</script>

<style>

</style>
