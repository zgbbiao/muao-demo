/*
 * @Author: your name
 * @Date: 2020-04-09 18:37:11
 * @LastEditTime: 2020-05-09 13:57:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dragUI-master\main.js
 */
import '@/src/tools/pc.js'
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import store from './store';
import expand from '@/src/components/common/expand.js';
Vue.config.productionTip = false;
import uView from 'uview-ui';
Vue.use(uView);
Vue.use(ElementUI);
App.mpType = 'app';
Vue.prototype.$store = store;
Vue.use(uView);
Vue.component('expand', expand);
const app = new Vue({
  ...App,
});
app.$mount();
