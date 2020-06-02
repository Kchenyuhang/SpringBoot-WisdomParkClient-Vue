import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'

import global_ from '@/util/Global'
Vue.prototype.GLOBAL = global_
// axios
import axios from "axios";
Vue.prototype.$axios = axios;

// // 引入高德地图
//     // 高德地图组件使用
//     import VueAMap from 'vue-amap'
    
//     Vue.config.productionTip = false
//     Vue.use(VueAMap);
//     VueAMap.initAMapApiLoader({
//       key: '71b3dc0173908ca2f96892a03f7e5aa6', 
//       plugin: [
//       'AMap.Autocomplete', 
//       'AMap.PlaceSearch', // POI搜索插件
//       'AMap.Scale', // 右下角缩略图插件 比例尺
//       'AMap.OverView', 
//       'AMap.ToolBar', // 地图工具条
//       'AMap.MapType', 
//       'AMap.PolyEditor', 
//       'AMap.CircleEditor',// 圆形编辑器插件
//       'AMap.Geolocation'// 定位控件，用来获取和展示用户主机所在的经纬度位置
//       ],
//       // 默认高德 sdk 版本为 1.4.4
//       v: '1.4.4'
//     });
    
// 引入Vant
// import Vant from "vant";
// import "vant/lib/index.css";
// Vue.use(Vant);

// import Video from 'video.js'
// import 'video.js/dist/video-js.css'

// Vue.prototype.$video = Video

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


