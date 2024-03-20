<template>
<div>
    <title-perak />
    <kalkulator-perak />
    <detail-perak />
</div>
</template>

<script>
import TitlePerak from "./TitlePerak.vue"
import DetailPerak from "./DetailPerak.vue"
import KalkulatorPerak from "./KalkulatorPerak.vue"

export default {
    components: {
        TitlePerak,DetailPerak,KalkulatorPerak
    },
   
    data() {
        return {
           
        }
    },
}
</script>

<style scoped>

</style>
