// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from "vuex"
//绑定插件
Vue.use(Vuex);
//实例化
let store=new Vuex.Store({
  //设置数值
  state:{
    n:0
  },
  mutations:{
    changeStateN(state,num){
      state.n=num;
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
//注册信息
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: { App }
})
