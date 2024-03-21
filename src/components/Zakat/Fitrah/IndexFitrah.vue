<template>
<div>
    <title-fitrah />
    <kalkulator-fitrah />
    <detail-fitrah />
</div>
</template>

<script>
import TitleFitrah from "./TitleFitrah.vue"
import DetailFitrah from "./DetailFitrah.vue"
import KalkulatorFitrah from "./KalkulatorFitrah.vue"

export default {
    components: {
        TitleFitrah,DetailFitrah,KalkulatorFitrah
    },
   
    data() {
        return {
           
        }
    },
}
</script>

<style scoped>

</style>
