import Keyboard from './Keyboard.vue'
import KeyboardProvider from './KeyboardProvider.vue'
import './themes/default.css'

const plugin = (Vue, { layouts, locales } = {}) => {
  const KeyboardWithProvider = {
    name: 'KeyboardWithProvider',
    functional: true,
    render: (h, { parent, data, slots, children }) => {return h(KeyboardProvider, {
      props: {
        layouts,
        locales,
      }
    },[parent.$createElement(Keyboard, data, children)])}, //HACK use the parent rendering context to support named slots (see: https://github.com/vuejs/vue/issues/5759)
  }
  Vue.component(KeyboardWithProvider.name, KeyboardWithProvider)
}

export default plugin
