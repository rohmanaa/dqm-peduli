<template>
<div>
    <title-emas />
    <kalkulator-emas />
    <detail-emas />
</div>
</template>

<script>
import TitleEmas from "./TitleEmas.vue"
import DetailEmas from "./DetailEmas.vue"
import KalkulatorEmas from "./KalkulatorEmas.vue"

export default {
    components: {
        TitleEmas,DetailEmas,KalkulatorEmas
    },
   
    data() {
        return {
           
        }
    },
}
</script>

<style scoped>

</style>
