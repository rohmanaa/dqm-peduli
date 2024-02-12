<template>
<div id="app">

        <header-default />
        <router-view />
        <footer-default />
    
</div>
</template>

<script>
import FooterDefault from './components/Layout/Footer/Footer.vue';
import HeaderDefault from './components/Layout/Header/Header.vue';


export default {
    components: {
        HeaderDefault,
        FooterDefault,
    }

}
</script>
