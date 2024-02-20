<template>
<div>
    <header-default />
    <Campaign />
    <footer-default />
</div>
</template>

<script>
import Campaign from '@/components/Campaign/index'
import HeaderDefault from '@/components/Layout/Header/Header.vue'
import FooterDefault from '@/components/Layout/Footer/Footer.vue'
export default {
    components: {
        Campaign,
        HeaderDefault,
        FooterDefault
    },

}
</script>

<style>

</style>
