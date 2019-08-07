// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
// require('vue-animate/dist/vue-animate.min.css')
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import Vuex from 'vuex'
Vue.use(Vuex)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
/* eslint-disable no-new */

// VANT
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
