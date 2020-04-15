/*
 * @Author: your name
 * @Date: 2020-04-09 18:37:11
 * @LastEditTime: 2020-04-14 17:13:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dragUI-master\main.js
 */
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import store from './store'

Vue.config.productionTip = false
import uView from "@/uview";
Vue.use(uView);
Vue.use(ElementUI)
App.mpType = 'app'
Vue.prototype.$store = store
Vue.use(uView);
const app = new Vue({
    ...App
})
app.$mount()
