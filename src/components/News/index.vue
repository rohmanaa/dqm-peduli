<template>
  <div>
      <!--====== PRELOADER PART START ======-->


    <!--====== PART ENDS ======-->

    <!--====== APPIE PAGE TITLE PART START ======-->
    
    <title-area/>
    
    <!--====== APPIE PAGE TITLE PART ENDS ======-->

        <!-- Blog Start -->
        <section class="blogpage-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-7">
                        <all-blogs/>
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
import TitleArea from '../News/TitleArea.vue'
import AllBlogs from '../Blogs/AllBlogs.vue'
import BlogSidebar from '../BlogSidebar.vue'
export default {
	components: {TitleArea, AllBlogs, BlogSidebar },
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