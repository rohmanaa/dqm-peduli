<template>
<div>
    <title-maal />
    <kalkulator-maal />
    <detail-maal />
</div>
</template>

<script>
import TitleMaal from "./TitleMaal.vue"
import DetailMaal from "./DetailMaal.vue"
import KalkulatorMaal from "./KalkulatorMaal.vue"

export default {
    components: {
        TitleMaal,DetailMaal,KalkulatorMaal
    },
   
    data() {
        return {
           
        }
    },
}
</script>

<style scoped>

</style>
