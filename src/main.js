import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueAMap from 'vue-amap'
import animate from 'animate.css'

import '@/utils/rem'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.css'
import '@/assets/styles/index.css'

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.use(animate)
Vue.use(VueAMap)

VueAMap.initAMapApiLoader({
  key: '0725ea6be12d1e1cf6ac41ec215c891f',
  plugin: [
    'AMap.Scale', 
    'AMap.OverView', 
    'AMap.ToolBar', 
    'AMap.MapType'
  ],
  v: '1.4.4',
  uiVersion: '1.0.11',
  protocol: 'http'
});
window._AMapSecurityConfig = {
  securityJsCode: '712a023965d076221d4f67ac8496f75d',
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
