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
            selected1: null,
            selected2: null,
            kategori: [{
                    value: null,
                    text: 'Please select an option'
                },
                {
                    value: 'a',
                    text: 'This is First option'
                },
                {
                    value: 'b',
                    text: 'Selected Option'
                },
                {
                    value: {
                        C: '3PO'
                    },
                    text: 'This is an option with object value'
                },
                {
                    value: 'd',
                    text: 'This one is disabled',
                    disabled: true
                }
            ],
            wilayah: [{
                    value: null,
                    text: 'Please select an option'
                },
                {
                    value: 'a',
                    text: 'This is First option'
                },
                {
                    value: 'b',
                    text: 'Selected Option'
                },
                {
                    value: {
                        C: '3PO'
                    },
                    text: 'This is an option with object value'
                },
                {
                    value: 'd',
                    text: 'This one is disabled',
                    disabled: true
                }
            ]
        }
    }

}
</script>

<style>
.anchor {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    padding: .75rem 2rem;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    color: #1A3257;
    background-color: #fff;
    border-color: #1A3257;
}

.anchor::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: .5em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid;
    border-right: .28em solid transparent;
    border-bottom: 0;
    border-left: .28em solid transparent;
}

.anchor:hover {
    color: #1A3257;
    background-color: #ffffff;
    border-color: #1A3257;
    cursor: pointer;
}
</style>
