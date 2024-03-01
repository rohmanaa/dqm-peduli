<template>
<div>
    <title-area heading="Mari bersedekah Melalui DQM Peduli" description="Sedekah adalah mengeluarkan harta yang pokok. mencakup zakat dan non-zakat" />
    <section class="blogpage-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <index-sedekah />
                </div>
                <div class="col-lg-4 col-md-12">
                    <side-sedekah />
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import TitleArea from '@/components/Layout/Title/TitleArea.vue'
import IndexSedekah from '@/components/Sedekah/IndexSedekah.vue'
import SideSedekah from '@/components/Sedekah/SideSedekah.vue'


export default {
    components: {
        TitleArea,
        SideSedekah,
        IndexSedekah,
    },
    data() {
        return {
        
        }
    },
}
</script>
