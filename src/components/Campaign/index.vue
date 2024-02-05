<template>
<div>
    <!--====== PRELOADER PART START ======-->

    <!--====== PART ENDS ======-->

    <!--====== APPIE PAGE TITLE PART START ======-->

    <title-area heading="Mari Bantu Mereka yang Membutuhkan" description="Menampilkan 12 campaign dari 107 campaign" />

    <!--====== APPIE PAGE TITLE PART ENDS ======-->
    <!-- Blog Start -->
    <section class="blogpage-section">
        <div class="container">
            <div class="row">
                <div class="container mb-5">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                            <div class="d-flex justify-content-start align-items-center">
                                <MultiSelect v-model="selectedCategories" display="chip" :options="categories" optionLabel="name" placeholder="Pilih Kategori" :maxSelectedLabels="3" style="width:20rem;" />
                                <MultiSelect v-model="selectedCities" display="chip" :options="cities" optionLabel="name" placeholder="Pilih Wilayah" :maxSelectedLabels="3" class="ms-2" style="width:20rem;" />
                            </div>

                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 mb-3">

                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12 mb-3">
                            <div class="d-flex justify-content-end align-items-center">
                                <SplitButton label="Filter" icon="pi pi-sort-alt" :model="items" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-md-7">
                    <all-campaign />
                </div>
            </div>
        </div>
    </section>
    <!-- Blog End -->

    <!--====== APPIE FOOTER PART START ======-->

    <!--====== APPIE FOOTER PART ENDS ======-->

    <!--====== APPIE BACK TO TOP PART ENDS ======-->

    <!--====== APPIE BACK TO TOP PART ENDS ======-->
</div>
</template>

<script>

import TitleArea from '../Layout/TitleArea.vue'
import AllCampaign from './AllCampaign.vue'
export default {
    components: {
        TitleArea,

        AllCampaign
    },

    data() {

        return {
            selectedCategories: null,
            selectedCities: null,
            cities: [{
                    name: 'New York',
                    code: 'NY'
                },
                {
                    name: 'Rome',
                    code: 'RM'
                },
                {
                    name: 'London',
                    code: 'LDN'
                },
                {
                    name: 'Istanbul',
                    code: 'IST'
                },
                {
                    name: 'Paris',
                    code: 'PRS'
                }
            ],
            categories: [{
                    name: 'Pendidikan',
                    code: 'pe'
                },
                {
                    name: 'Kemanusiaan',
                    code: 'RM'
                },
                {
                    name: 'Kesehatan',
                    code: 'LDN'
                },
                {
                    name: 'Ekonomi',
                    code: 'IST'
                },
                {
                    name: 'Paris',
                    code: 'PRS'
                }
            ],
            items: [{
                    label: 'Terbaru',
                    icon: 'pi pi-sort-amount-up'

                },
                {
                    label: 'Terlama',
                    icon: 'pi pi-sort-amount-down'
                    // command: () => {
                    //     this.$toast.add({
                    //         severity: 'warn',
                    //         summary: 'Delete',
                    //         detail: 'Data Deleted',
                    //         life: 3000
                    //     });
                    // }
                },
                {
                    label: 'Sisa Hari Terdekat',
                    icon: 'pi pi-clock'
                }
            ]

        }
    },
    methods: {
        save() {
            this.$toast.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Data Saved',
                life: 3000
            });
        }
    }

}
</script>
