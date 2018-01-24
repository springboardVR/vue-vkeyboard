import Vue from 'vue'
import App from './App.vue'
import vKeyboardPlugin from '@/index.js'

Vue.use(vKeyboardPlugin)

new Vue({
  el: '#app',
  render: (h) => h(App)
})
