// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store'

import './mock/mockServer'  // 加载mockServer即可
import loading from './common/imgs/loading.gif'
import './filters' // 加载过滤器

Vue.use(VueLazyload, {// 内部自定义一个指令Lazy
  loading
})
// 注册全局组建标签
Vue.component(Button.name, Button)  // <mt-button>
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
