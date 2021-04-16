import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'






// ui相关
// elementUI
import './ui'
import 'element-ui/lib/theme-chalk/index.css'
// css
import './styles/reset.css'  //css初始化
import './styles/common.scss' //公共css样式






Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
