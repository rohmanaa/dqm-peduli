<template>
<div>
    <zakat-title />
    <kalkulator-zakat />
    <detail-zakat />
</div>
</template>

<script>
import ZakatTitle from "./TitleZakat.vue"
import DetailZakat from "./DetailZakat.vue"
import KalkulatorZakat from "./KalkulatorZakat.vue"

export default {
    components: {
        ZakatTitle,DetailZakat,KalkulatorZakat
    },
   
    data() {
        return {
           
        }
    },
}
</script>

<style scoped>

</style>
