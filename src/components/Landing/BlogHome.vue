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
                                <img src="@/assets/images/blog/1.jpg" alt="">
                                <div class="b-post-details">
                                    <div class="bp-meta">
                                        <a href="#"><i class="fal fa-clock"></i>April 22, 2020</a>
                                        <a href="#"><i class="fal fa-comments"></i>6 Comments</a>
                                    </div>
                                    <h3><a href="single-post.html">Build A Full Web Chat App From Scratch.</a></h3>
                                    <a class="read-more" href="single-post.html">Read More<i
                                            class="fal fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="post-item-1">
                                <img src="@/assets/images/blog/2.jpg" alt="">
                                <div class="b-post-details">
                                    <div class="bp-meta">
                                        <a href="#"><i class="fal fa-clock"></i>April 22, 2020</a>
                                        <a href="#"><i class="fal fa-comments"></i>6 Comments</a>
                                    </div>
                                    <h3><a href="single-post.html">Insights on How to Improve Your Teaching.</a></h3>
                                    <a class="read-more" href="single-post.html">Read More<i
                                            class="fal fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="post-item-1">
                                <img src="@/assets/images/blog/3.jpg" alt="">
                                <div class="b-post-details">
                                    <div class="bp-meta">
                                        <a href="#"><i class="fal fa-clock"></i>April 22, 2020</a>
                                        <a href="#"><i class="fal fa-comments"></i>6 Comments</a>
                                    </div>
                                    <h3><a href="single-post.html">Brush Strokes Energize Trees In Paintings</a></h3>
                                    <a class="read-more" href="single-post.html">Read More<i
                                            class="fal fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="bisylms-pagination text-center">
                                <a class="next" href="#">Lihat Semua Highlight<i class="fal fa-arrow-right"></i></a>
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
