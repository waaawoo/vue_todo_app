import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//  ------------ グローバルフィルター -----------
Vue.filter('toUSD',function(jpy){
  return jpy / 100
})

Vue.filter('number',function(value){
  return value.toLocaleString()
})
//  ---------------------------

new Vue({
  el: "#app",
  render: h => h(App),
})
