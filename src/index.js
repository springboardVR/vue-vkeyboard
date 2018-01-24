import Keyboard from './Keyboard.vue'
import KeyboardProvider from './KeyboardProvider.vue'

const plugin = (Vue, { layouts = [], locales = []} = {}) => {
  const KeyboardWithProvider = {
    name: 'KeyboardWithProvider',
    functional: true,
    render: (h, { data }) => h(KeyboardProvider, [h(Keyboard, data)]),
  }
  Vue.component(KeyboardWithProvider.name, KeyboardWithProvider)
}

export default plugin
