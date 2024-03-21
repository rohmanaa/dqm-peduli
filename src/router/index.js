import Vue from 'vue'
import VueRouter from 'vue-router'

import AppHeader from "../components/Layout/Header/Header";
import AppFooter from "../components/Layout/Footer/Footer";

import Landing from '../views/Landing.vue'
import Campaign from '../views/Campaign/Campaign.vue'
import DetailCampaign from '../views/Campaign/DetailCampaign.vue'
import ZakatMaal from '../views/Zakat/Maal/Maal.vue'
import ZakatPenghasilan from '../views/Zakat/Penghasilan/Penghasilan.vue'
import ZakatFidyah from '../views/Zakat/Fidyah/Fidyah.vue'
import ZakatFitrah from '../views/Zakat/Fitrah/Fitrah.vue'
import ZakatPerak from '../views/Zakat/Perak/Perak.vue'
import ZakatEmas from '../views/Zakat/Emas/Emas.vue'
import Sedekah from '../views/Sedekah/Sedekah.vue'
import Wakaf from '../views/ComingSoon.vue'
import DetailWakaf from '../views/ComingSoon.vue'
import Qurban from '../views/ComingSoon.vue'
import DetailQurban from '../views/ComingSoon.vue'
import Berita from '../views/ComingSoon.vue'
import DetailBerita from '../views/ComingSoon.vue'
import Error from '../views/Error.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: "/",
      name: "Landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
    path: '/Campaign',
    name: 'Campaign',
    components:
      {
        header: AppHeader,
        default: Campaign,
        footer: AppFooter
      },
    meta:
      {
        breadcrumb: 'Campaign'  
      }
    },
    {
      path: '/detail-campaign',
      components:
      {
        header: AppHeader,
        default: DetailCampaign,
        footer: AppFooter
      },
      name: 'detail-campaign',
    },
      {
    path: '/zakat-maal',
    name: 'Zakat Maal',
      components:
      {
        header: AppHeader,
        default: ZakatMaal,
        footer: AppFooter
      },
    },
    {
    path: '/zakat-penghasilan',
    name: 'Zakat Penghasilan',
    components:
      {
        header: AppHeader,
        default: ZakatPenghasilan,
        footer: AppFooter
      },
    },
    {
    path: '/zakat-fidyah',
    name: 'Zakat Fidyah',
    components:
      {
        header: AppHeader,
        default: ZakatFidyah,
        footer: AppFooter
      },
  },
  {
    path: '/zakat-fitrah',
    name: 'Zakat Fitrah',
    components:
      {
        header: AppHeader,
        default: ZakatFitrah,
        footer: AppFooter
      },
  },
     {
    path: '/zakat-perak',
    name: 'Zakat Perak',
    components:
      {
        header: AppHeader,
        default: ZakatPerak,
        footer: AppFooter
      },
    },
    {
    path: '/zakat-emas',
    name: 'Zakat Emas',
    components:
      {
        header: AppHeader,
        default: ZakatEmas,
        footer: AppFooter
      },
    },
    {
    path: '/sedekah',
    name: 'Sedekah',
    components:
      {
        header: AppHeader,
        default: Sedekah,
        footer: AppFooter
      },
    },
      {
    path: '/wakaf',
    name: 'Wakaf',
    components:
      {
        header: AppHeader,
        default: Wakaf,
        footer: AppFooter
      },
    },
    {
    path: '/detail-wakaf',
    name: 'Detail Wakaf',
    components:
      {
        header: AppHeader,
        default: DetailWakaf,
        footer: AppFooter
      },
    },
    {
    path: '/qurban',
    name: 'Qurban',
    components:
      {
        header: AppHeader,
        default: Qurban,
        footer: AppFooter
      },
    },
    {
    path: '/detail-qurban',
    name: 'Detail Qurban',
    components:
      {
        header: AppHeader,
        default: DetailQurban,
        footer: AppFooter
      },
    },
    {
    path: '/berita',
    name: 'Berita Terbaru',
    components:
      {
        header: AppHeader,
        default: Berita,
        footer: AppFooter
      },
    },
    {
    path: '/detail-berita',
    name: 'Detail Berita',
    components:
      {
        header: AppHeader,
        default: DetailBerita,
        footer: AppFooter
      },
    },
  { path: "*", component: Error }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
      document.getElementById('app').scrollIntoView();
  }
})

export default router
