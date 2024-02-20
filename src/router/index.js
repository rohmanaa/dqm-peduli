import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../views/Landing.vue'

import Campaign from '../views/Campaign/Campaign.vue'
import DetailCampaign from '../views/Campaign/DetailCampaign.vue'
import ZakatMaal from '../views/Maal/Maal.vue'
import ZakatPenghasilan from '../views/Penghasilan/Penghasilan.vue'
import ZakatFidyah from '../views/Fidyah/Fidyah.vue'
import ZakatEmas from '../views/Emas/Emas.vue'
import Sedekah from '../views/Sedekah/Sedekah.vue'

import Wakaf from '../views/Wakaf/Wakaf.vue'
import DetailWakaf from '../views/Wakaf/DetailWakaf.vue'

import Qurban from '../views/Qurban/Qurban.vue'
import DetailQurban from '../views/Qurban/DetailQurban.vue'

import Berita from '../views/Berita/Berita.vue'
import DetailBerita from '../views/Berita/DetailBerita.vue'

import Contact from '../views/Contact.vue'
import ServiceDetails from '../views/ServiceDetails'
import Error from '../views/Error.vue'

import AboutUs from '../views/About.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
    {
    path: '/Campaign',
    name: 'Campaign',
    component: Campaign
  },
        {
    path: '/detail-campaign',
    name: 'Detail Campaign',
    component: DetailCampaign
  },
      {
    path: '/zakat-maal',
    name: 'Zakat Maal',
    component: ZakatMaal
  },
        {
    path: '/zakat-penghasilan',
    name: 'Zakat Penghasilan',
    component: ZakatPenghasilan
  },
          {
    path: '/zakat-fidyah',
    name: 'Zakat Fidyah',
    component: ZakatFidyah
  },
            {
    path: '/zakat-emas',
    name: 'Zakat Emas',
    component: ZakatEmas
  },
    {
    path: '/sedekah',
    name: 'Sedekah',
    component: Sedekah
  },
      {
    path: '/wakaf',
    name: 'Wakaf',
    component: Wakaf
  },
  {
    path: '/detail-wakaf',
    name: 'Detail Wakaf',
    component: DetailWakaf
  },
        {
    path: '/qurban',
    name: 'Qurban',
    component:Qurban
  },
    {
    path: '/detail-qurban',
    name: 'Detail Qurban',
    component: DetailQurban
  },
  {
    path: '/berita',
    name: 'Berita Terbaru',
    component:Berita
  },
    {
    path: '/detail-berita',
    name: 'Detail Berita',
    component:DetailBerita
  },
  {
    path: '/service-details',
    name: 'ServiceDetails',
    component: ServiceDetails
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  },

  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
 
  { path: "*", component: Error }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // stop stop cache
  scrollBehavior() {
      document.getElementById('app').scrollIntoView();
  }
})

export default router
