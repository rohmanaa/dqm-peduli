<template>
  <div>
      <!--====== PRELOADER PART START ======-->

    <!-- <div class="loader-wrap">
        <div class="preloader"><div class="preloader-close">Preloader Close</div></div>
        <div class="layer layer-one"><span class="overlay"></span></div>
        <div class="layer layer-two"><span class="overlay"></span></div>        
        <div class="layer layer-three"><span class="overlay"></span></div>        
    </div> -->

    <!--====== PRELOADER PART ENDS ======-->

    <!--====== OFFCANVAS MENU PART START ======-->



    <!--====== OFFCANVAS MENU PART ENDS ======-->
   
    <!--====== PART START ======-->

  
    
    <!--====== PART ENDS ======-->

    <!--====== APPIE PAGE TITLE PART START ======-->
    <!-- use TitleArea component with props -->
    <div class="appie-page-title-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="appie-page-title-item">
                        <h3 class="title">Blog Details</h3>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Blog</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Blog Details</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!--====== APPIE PAGE TITLE PART ENDS ======-->

        <!-- Blog Start -->
        <section class="blogpage-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-7">
                        <single-blog/>
                    </div>
                    <div class="col-lg-4 col-md-5">
                        <blog-sidebar/>
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
import SingleBlog from '../Blogs/SingleBlog.vue'
import BlogSidebar from '../BlogSidebar.vue'

export default {
	components: {  SingleBlog, BlogSidebar },
            data(){
        return{
            sidebar:false,
        }
    },
     mounted() {
        document.addEventListener('scroll', this.topToBottom)
    },
    methods:{
        topToBottom(){
        const result = document.querySelector('.back-to-top')
           if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight ) {
                result.style.display = "block";
            } else {
                result.style.display = "none";
            }
        },
         toggleSidebar(){
           this.sidebar = !this.sidebar
        },  
    }

}
</script>

<style>

</style>