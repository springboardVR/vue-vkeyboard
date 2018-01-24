import Keyboard from './Keyboard'
import KeyboardProvider from './KeyboardProvider'

const plugin = (Vue, { layouts = [], locales = []} = {}) => {
  const KeyboardWithProvider = {
    name: 'KeyboardWithProvider',
    functional: true,
    render: (h, { data }) => h(KeyboardProvider, [h(Keyboard, data)]),
  }
  Vue.component(KeyboardWithProvider.name, KeyboardWithProvider)
}

export default plugin
export { Keyboard }
export { KeyboardProvider }
