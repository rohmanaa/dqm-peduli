import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueMoney from 'v-money';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/css/magnific-popup.css'
import '../src/assets/css/magnific-popup.css'
import '../src/assets/css/font-awesome.min.css'
import '../src/assets/css/custom-animated.css'
import '../src/assets/css/default.css'
import '../src/assets/css/style.css'
import '../src/assets/css/main.css'


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueMoney);
Vue.use(router);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
