<template>
<div>
    <header-default />
    <div v-if="product">
        <title-area :heading="product.product" />
        <section class="blogpage-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12">
                        <detail-campaign :deskripsi="product.desc" :gambar="product.url" />
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <side-campaign :totalterkumpul="product.total" />
                    </div>
                </div>
            </div>

            <!-- <div class="shop-details-info-area pt-85 pb-100">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="shop-details-box">
                                <ul id="pills-tab" role="tablist" class="nav nav-pills mb-35">
                                    <li role="presentation" class="nav-item"><a id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true" class="nav-link">Description</a></li>
                                    <li role="presentation" class="nav-item"><a id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false" class="nav-link active">Reviews (2)</a></li>
                                </ul>
                                <div id="pills-tabContent" class="tab-content">
                                    <div id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" class="tab-pane fade">
                                        <div class="shop-description">
                                            <p> Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because. </p>
                                            <p> Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective limpet. </p>
                                            <h4 class="title">Packaging &amp; Delivery</h4>
                                            <p> Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly. </p>
                                            <p> Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund. </p>
                                        </div>
                                    </div>
                                    <div id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" class="tab-pane fade show active">
                                        <div class="review-rating-box">
                                            <div class="top-rating-result">
                                                <h3 class="title">2 Reviews for Watch</h3>
                                                <div class="rating-result-box">
                                                    <div class="thumb"><img src="/img/testimonial-user-2.ab830a45.png" alt=""></div>
                                                    <div class="content">
                                                        <ul>
                                                            <li><i class="fas fa-star"></i></li>
                                                            <li><i class="fas fa-star"></i></li>
                                                            <li><i class="fas fa-star"></i></li>
                                                            <li><i class="fas fa-star"></i></li>
                                                            <li><i class="fas fa-star-half-alt"></i></li>
                                                        </ul>
                                                        <div class="shop-meta">
                                                            <div class="author-user-name"><a href="#">Will Barrow</a></div>
                                                            <div class="date"><span>March 15, 2022</span></div>
                                                        </div>
                                                        <p> That arse over tit a load of old tosh pardon you wellies amongst william my good sir grub your bike mate james bond morish a blinding. </p>
                                                    </div>
                                                </div>
                                                <div class="rating-result-box">
                                                    <div class="thumb"><img src="/img/testimonial-user-1.02a040af.png" alt=""></div>
                                                    <div class="content">
                                                        <ul>
                                                            <li><i class="fas fa-star"></i></li>
                                                            <li><i class="fas fa-star"></i></li>
                                                            <li><i class="fas fa-star"></i></li>
                                                            <li><i class="fas fa-star"></i></li>
                                                            <li><i class="fas fa-star-half-alt"></i></li>
                                                        </ul>
                                                        <div class="shop-meta">
                                                            <div class="author-user-name"><a href="#">Elon Gated</a></div>
                                                            <div class="date"><span>April 24, 2022</span></div>
                                                        </div>
                                                        <p> Lost the plot twit the full monty down the pub Why off his nut cheers say a blinding shot happy days bog argy bargy. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="review-box">
                                                <div class="review-title">
                                                    <h4 class="title">Add a Review</h4>
                                                    <p> Your email address will not be published.Required fields are marked* </p>
                                                </div>
                                                <div class="add-review-star"><span>Rate this product:</span>
                                                    <ul>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fal fa-star"></i></li>
                                                        <li><i class="fal fa-star"></i></li>
                                                        <li><i class="fal fa-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="rating-form-box">
                                                <form action="#">
                                                    <div class="input-box"><label for="#">Name *</label><input type="text" placeholder="Username"></div>
                                                    <div class="input-box"><label for="#">Email *</label><input type="email" placeholder="E-mail address"></div>
                                                    <div class="input-box"><label for="#">Your review </label><textarea name="#" id="#" cols="30" rows="10" placeholder="Type you message"></textarea></div>
                                                    <div class="input-box">
                                                        <div class="condition-check pb-15"><input id="terms-conditions" type="checkbox"><label for="terms-conditions">Save my name, email, and website in this browser for the next time I comment</label></div><button type="submit" class="main-btn"> Submit Review </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->

        </section>
    </div>
    <div v-else>
        <div class="py-5 text-center">
            <div class="container">
                <div class="col-lg-12">
                    <b-spinner type="grow" label="Loading..." variant="info"></b-spinner>
                    <h3 class="text-dqm"></h3>
                    <span>Loading...</span>
                </div>
            </div>
        </div>
    </div>
    
    <footer-default />
</div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

import TitleArea from '@/components/Layout/Title/TitleArea.vue'
import SideCampaign from '@/components/Campaign/SideCampaign.vue'
import DetailCampaign from '@/components/Campaign/DetailCampaign.vue'
import HeaderDefault from '@/components/Layout/Header/Header.vue'
import FooterDefault from '@/components/Layout/Footer/Footer.vue'
export default {
    components: {
        TitleArea,
        SideCampaign,
        DetailCampaign,
        HeaderDefault,
        FooterDefault
    },
    data() {
        return {
            value: 45,
            max: 100,
            product: null,
            proid: null,
            donationAmount: 0,
            isLoading: false,
            shopAPI: process.env.VUE_APP_SHOPURL,

        }
    },
    mounted() {
        // Mendapatkan proid dari URL menggunakan Vue Router
        this.proid = this.$route.query.proid;
        if (this.proid) {
            this.fetchProduct(this.proid);
        }
    },
    created() {
        this.customerNama = this.$route.query["customer[nama]"] || "";
        this.customerNohp = this.$route.query["customer[nohp]"] || "";
    },
    methods: {
        async donate(productid) {
            const dataToSend = {
                product_id: productid,
                nama: document.querySelector(`[name="nama_${productid}"]`).value,
                nohp: document.querySelector(`[name="nowa_${productid}"]`).value,
                price: document.querySelector(`[name="price_${productid}"]`).value
            };
            try {
                this.isLoading = true;
                const response = await axios.post(process.env.VUE_APP_SHOPURL + "/api/transaction/request", dataToSend);
                if (response.status == 200) {
                    var win = window.open(response.data.data.paymenturl, 'PEMBAYARAN DQ PEDULI', 'width=350, height=700')
                    var timer = setInterval(function () {
                        if (win.closed) {
                            clearInterval(timer)
                            location.reload()
                        }
                    }, 1000);
                }
            } catch (error) {
                console.error(error);
                await Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Terjadi kesalahan saat mengirim data ke server.",
                });
            } finally {
                this.isLoading = false;
            }
        },
        resetForm() {
            this.donationAmount = 0;
        },
        async fetchProduct(proid) {
            try {
                const response = await axios.get(`https://shop.dq.akses.live/api/product?productid=${proid}`);
                this.product = response.data.data[0]; // Menggunakan struktur yang benar
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        },
    },

}
</script>
