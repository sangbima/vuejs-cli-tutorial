import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

// Filters
Vue.filter('snippet', function(value) {
  return value.slice(0, 100) + '...'
})

// Custom directive
// Vue.directive('rainbow', {
//   bind(el, binding, vnode) {
//     el.style.color = "#" + Math.random().toString(16).slice(2, 8)
//   }
// })

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
