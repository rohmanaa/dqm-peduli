<template>
    <!--====== APPIE SHOWCASE PART START ======-->

    <section class="appie-showcase-area">
        <div class="container">
            <div class="row">
                <vue-easy-lightbox scrollDisabled escDisabled moveDisabled :visible="visible" :imgs="imgs" :index="index"
                    @hide="handleHide"></vue-easy-lightbox>
                <div class="col-lg-12">
                    <div class="appie-section-title text-center">
                        <h3 class="appie-title">Highlight Kisah Kasih</h3>
                        <p>Berani berbuat baik, karena kebaikan itu akan kembali kepadamu suatu saat nanti</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="post-item-1">
                                <img src="https://digital-api.dompetdhuafa.org/storage/39176/conversions/3551826e17e6f42f745816d51c08bd8b-large.jpg" alt="">
                                <div class="b-post-details">
                                    <div class="bp-meta">
                                        <a href="#"><i class="fal fa-clock"></i>April 22, 2020</a>
                                        <a href="#"><i class="fal fa-comments"></i>6 Comments</a>
                                    </div>
                                    <h3><a href="/detail-berita">Build A Full Web Chat App From Scratch.</a></h3>
                                    <a class="read-more" href="/detail-berita">Read More<i
                                            class="fal fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="post-item-1">
                                <img src="https://digital-api.dompetdhuafa.org/storage/61650/conversions/aa8a308de15417edb854c3adf9001962-large.png" alt="">
                                <div class="b-post-details">
                                    <div class="bp-meta">
                                        <a href="#"><i class="fal fa-clock"></i>April 22, 2020</a>
                                        <a href="#"><i class="fal fa-comments"></i>6 Comments</a>
                                    </div>
                                    <h3><a href="/detail-berita">Insights on How to Improve Your Teaching.</a></h3>
                                    <a class="read-more" href="/detail-berita">Read More<i
                                            class="fal fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="post-item-1">
                                <img src="https://digital-api.dompetdhuafa.org/storage/71068/conversions/e8906e51b954f522f5a1248f9eb3e230-large.jpeg" alt="">
                                <div class="b-post-details">
                                    <div class="bp-meta">
                                        <a href="#"><i class="fal fa-clock"></i>April 22, 2020</a>
                                        <a href="#"><i class="fal fa-comments"></i>6 Comments</a>
                                    </div>
                                    <h3><a href="/detail-berita">Brush Strokes Energize Trees In Paintings</a></h3>
                                    <a class="read-more" href="/detail-berita">Read More<i
                                            class="fal fa-arrow-right"></i></a>
                                            
                                </div>
                                
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="text-center">
                                  <b-button block href="/berita" class="btn-dqm">Lihat Semua Berita<i class="fal fa-arrow-right ms-2"></i></b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <!--====== APPIE SHOWCASE PART ENDS ======-->
</template>

<script>

</script>

<style>
.slick-slide {
    padding: 0 16px
}</style>
