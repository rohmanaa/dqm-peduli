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
   
    <!--====== APPIE HEADER PART START ======-->
    

    
    <!--====== APPIE HEADER PART ENDS ======-->

    <!--====== APPIE HEADER PART ENDS ======-->

    <div class="appie-about-top-title-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="appie-about-top-title">
                        <h2 class="title">The leading people Management platform</h2>
                        <p>We offer you a panoply of cutting-edge options.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--====== APPIE HEADER PART ENDS ======-->


    <!--====== APPIE HEADER PART ENDS ======-->

    <section class="appie-about-page-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="appie-about-page-content">
                        <h3 class="title">Join our team to create the best digital solutions.</h3>
                        <p>He nicked it up the duff a load of old tosh bleeder butty bugger all mate cheeky bugger bodge tickety boo, mush well Richard geeza buggered haggle david you mug I, such a fibber my good sir knackered down the pub baking cakes chancer golly gosh. Car boot give us a bell bits and hanky panky me old mucker fantastic in my flat so I said nice one he lost his bottle.</p>
                        <a href="#"> View all Members <i class="fal fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--====== APPIE HEADER PART ENDS ======-->

    <!--====== APPIE SERRVICE 2 PART START ======-->
    
    <service-aboutus/>
    
    <!--====== APPIE SERRVICE 2 PART ENDS ======-->

    <!--====== APPIE TEAM PART START ======-->
    
   <team-aboutus/>
    
    <!--====== APPIE TEAM PART ENDS ======-->

    <!--====== APPIE SPONSER PART START ======-->
    
    
    <!--====== APPIE SPONSER PART ENDS ======-->

    <!--====== APPIE SPONSER PART ENDS ======-->
    <get-started/>

    <!--====== APPIE SPONSER PART ENDS ======-->

    <!--====== APPIE FOOTER PART START ======-->
    

    
    <!--====== APPIE FOOTER PART ENDS ======-->


    <!--====== APPIE BACK TO TOP PART ENDS ======-->

    <!--====== APPIE BACK TO TOP PART ENDS ======-->
  </div>
</template>

<script>


import GetStarted from './GetStarted.vue'
import ServiceAboutus from './ServiceAboutus.vue'
import TeamAboutus from './TeamAboutus.vue'
export default {
	components: {  ServiceAboutus, TeamAboutus, GetStarted},
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