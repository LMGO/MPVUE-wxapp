import Vue from 'vue'
import store from './store/store'
import App from './App'
import Fly from  'flyio/dist/npm/wx'
import './css/common.css'
import './../static/iconfont/iconfont.css'
import qs from 'qs'

//设置Vue的提示功能关闭
Vue.config.productionTip = false
App.mpType = 'app'

//将store对象放置在vue原型上，让每个实例都可以用
Vue.prototype.$store=store
Vue.prototype.$qs = qs;


let fly=new Fly
Vue.prototype.$fly = fly // 将fly实例挂在vue原型上

const app = new Vue(App)

app.$mount()