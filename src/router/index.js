import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../views/Landing.vue'
import News from '../views/News.vue'
import Campaign from '../views/Campaign/Campaign.vue'
import DetailCampaign from '../views/Campaign/DetailCampaign.vue'
import SingleNews from '../views/SingleNews.vue'
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
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/single-news',
    name: 'SingleNews',
    component: SingleNews
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/error',
    name: 'Error',
    component: Error
  }

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
