<template>
<!--====== APPIE ABOUT PART START ======-->

<section class="appie-fun-fact-area pb-100 pt-100 ">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="appie-about-box wow animated fadeInUp rounded" data-wow-duration="2000ms" data-wow-delay="200ms">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="about-thumb">
                                <img src="@/assets/images/about-thumb.png" alt="">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="appie-about-content">
                                <span>FUNDRAISER</span>
                                <h4 class="title">JADI AFFILIATE FUNDRAISER</h4>
                                <span>Mari Bantu Mereka yang Membutuhkan dengan Menjadi Fundraiser</span>
                                  <div class="icon mt-20">
                                        <a class="main-btn" href="#">Jadi Fundraiser</a>
                                    </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!--====== APPIE ABOUT PART ENDS ======-->
</template>

<script>
export default {
    props: {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
    }

}
</script>

<style></style>
