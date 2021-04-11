import Vue from 'vue'
import App from './App.vue'
import router from "./router";

Vue.config.productionTip = false

//  ------------ グローバルフィルター -----------
Vue.filter('toUSD',function(jpy){
  return jpy / 100
})

Vue.filter('number',function(value){
  return value.toLocaleString()
})

Vue.filter('readMore', function(text, length, suffix){
  // 引数で動的に変化させれる
  return text.substring(0, length) + suffix
})
//  ---------------------------

new Vue({
  el: "#app",
  router,
  render: h => h(App),
  methods:{
  }
})
