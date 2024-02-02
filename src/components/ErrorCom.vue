<template>
  <div>
    <!--====== PRELOADER PART START ======-->



    <!--====== PART ENDS ======-->

    <div class="appie-error-area">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="appie-error-content text-center">
                        <img src="@/assets/images/error.png" alt="">
                        <span>Sorry!</span>
                        <h3 class="title">The page can’t be found.</h3>
                        <p>The page you're looking for isn't available. Try with another page or use the go home button below</p>
                        <router-link to="/">Back to Home <i class="fal fa-arrow-right"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    <!--====== PART ENDS ======-->

    <!--====== APPIE FOOTER PART START ======-->
    
    
    <!--====== APPIE FOOTER PART ENDS ======-->


    <!--====== APPIE BACK TO TOP PART ENDS ======-->

    <!--====== APPIE BACK TO TOP PART ENDS ======-->


  </div>
</template>

<script>

export default {
	components: {  },
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