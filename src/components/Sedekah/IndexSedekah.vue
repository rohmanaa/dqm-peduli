<template>
<div>
    <title-sedekah />
    <kalkulator-sedekah />
    <detail-sedekah />
</div>
</template>

<script>
import TitleSedekah from "./TitleSedekah.vue"
import DetailSedekah from "./DetailSedekah.vue"
import KalkulatorSedekah from "./KalkulatorSedekah.vue"

export default {
    components: {
        TitleSedekah,DetailSedekah,KalkulatorSedekah
    },
   
    data() {
        return {
           
        }
    },
}
</script>

<style scoped>

</style>
