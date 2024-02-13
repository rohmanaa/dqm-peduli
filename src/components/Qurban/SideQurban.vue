<template>
<div>

    <div class="blog-sidebar">

        <aside class="widget widget-categories">
            <h3 class="widget-title">Niat Zakat Maal</h3>
            <p class="d-flex justify-content-end">نَوَيْتُ أَنْ أُخْرِجَ زَكاَةَ مَالِي فَرْضًالِلهِ تَعَالَى</p>
            <p>“Nawaitu an ukhrija zakata maali fardha llillahi ta’aala”</p>
            <span>Saya berniat mengeluarkan zakat harta milikku karena Allah Ta’ala</span>
        </aside>
        <div class="mb-3 ">
            <!-- Via multiple directive modifiers -->
            <b-button @click="toggleCollapse" class="w-100 bg-dqm d-flex justify-content-between">
                <b-icon icon="calculator" scale="1" variant="white"></b-icon> Kalkulator Zakat Maal <b-icon :icon="collapseIcon" scale="1" variant="white"></b-icon>
            </b-button>
            <!-- Elements to collapse -->
            <b-collapse id="collapse-a" v-model="collapseState" @shown="updateCollapseIcon" @hidden="updateCollapseIcon">

                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk tabungan/giro/deposito*</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="TEXT HERE"></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk tabungan/giro/deposito*</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="TEXT HERE"></b-form-input>
                </div>

                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk tabungan/giro/deposito*</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="TEXT HERE"></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk tabungan/giro/deposito*</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="TEXT HERE"></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk tabungan/giro/deposito*</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="TEXT HERE"></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk tabungan/giro/deposito*</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="TEXT HERE"></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk tabungan/giro/deposito*</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="TEXT HERE"></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk tabungan/giro/deposito*</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="TEXT HERE"></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk tabungan/giro/deposito*</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="TEXT HERE"></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk tabungan/giro/deposito*</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="TEXT HERE"></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk tabungan/giro/deposito*</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="TEXT HERE"></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk tabungan/giro/deposito*</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="TEXT HERE"></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk tabungan/giro/deposito*</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="TEXT HERE"></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk tabungan/giro/deposito*</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="TEXT HERE"></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk tabungan/giro/deposito*</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="TEXT HERE"></b-form-input>
                </div>
                <div class="mb-2 mt-2">
                    <span>Harta dalam bentuk tabungan/giro/deposito*</span>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="TEXT HERE"></b-form-input>
                </div>

                <b-button block class="btn-dqm w-100 mt-3">HITUNG</b-button>

            </b-collapse>
        </div>
        <aside class="widget">
            <h3 class="widget-title">Dukungan atau Doamu (Optional)</h3>

            <div class="row">
                <div class="col-lg-12">
                    <b-button block class="btn-dqm w-100">Lanjutkan</b-button>
                </div>
            </div>

        </aside>

    </div>
</div>
</template>

<script>
export default {

    components: {

    },
    data() {
        return {
            collapseState: false
        };
    },
    computed: {
        collapseIcon() {
            return this.collapseState ? 'dash' : 'plus';
        }
    },
    methods: {
        toggleCollapse() {
            this.collapseState = !this.collapseState;
        },
        updateCollapseIcon() {
            // Fungsi ini akan dipanggil ketika collapse diubah statusnya
            // dan akan mengubah ikon sesuai dengan status collapse
        }
    }
}
</script>

<style>
</style>
