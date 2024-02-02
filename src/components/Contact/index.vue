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

    
    <!--====== PART ENDS ======-->

    <!--====== APPIE PAGE TITLE PART START ======-->
    
    <!-- reference by news -->
    <title-area/>
    
    <!--====== APPIE PAGE TITLE PART ENDS ======-->

        <!-- Contact Start -->
        <contact-inputs/>
        <!-- Contact End -->

        <!-- Gamps Start -->
        <div class="bisylms-map">
            <iframe src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;coord=39.966528,-75.158284&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=p&amp;z=16&amp;iwloc=B&amp;output=embed"  ></iframe>
        </div>
        <!-- Gamps Start -->

    <!--====== APPIE FOOTER PART START ======-->
    

    
    <!--====== APPIE FOOTER PART ENDS ======-->


    <!--====== APPIE BACK TO TOP PART ENDS ======-->

    <!--====== APPIE BACK TO TOP PART ENDS ======-->

  </div>
</template>

<script>
import TitleArea from '../News/TitleArea.vue'
import ContactInputs from './ContactInputs.vue'

export default {
	components: { TitleArea, ContactInputs },
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