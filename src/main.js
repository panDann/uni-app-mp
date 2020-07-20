import Vue from 'vue'
import App from './App'

import './styles/common.styl'
import '@src/static/iconfont/iconfont.css'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
