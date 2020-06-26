import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import global_ from '@/util/Global'
Vue.prototype.GLOBAL = global_

import global1_ from '@/util/Global1'
Vue.prototype.GLOBAL1 = global1_

// axios
import axios from 'axios'
Vue.prototype.$axios = axios

import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)
// 高德地图
import Amap from 'vue-amap'
Vue.use(Amap)
Amap.initAMapApiLoader({
  key: '0d11e415a8c4087b8f3014b9a924adfa',
  plugin: ['AMap.Geolocation', 'AMap.Geocoder', 'AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4',
})

//缩略图
import VuePreview from 'vue-preview'
// import { configs } from "eslint-plugin-prettier";
Vue.use(VuePreview)
// 引入Vant
// import Vant from "vant";
// import "vant/lib/index.css";uhfyg
// Vue.use(Vant);

// import Video from 'video.js'
// import 'video.js/dist/video-js.css'

// Vue.prototype.$video = Video

Vue.config.productionTip = false

// 全局请求管理
axios.interceptors.request.use((config) => {
  // 全局axios请求自带请求头
  config.headers = {
    Token: localStorage.getItem('token'),
  }
  return config
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
