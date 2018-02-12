<script>
import * as layouts from './layouts/index.js'
import * as locales from './locales/index.js'

export default {
  name: 'KeyboardProvider',
  props: {
    locales: {
      default() {return locales },
      type: Object,
    },
    layouts: {
      default() {return layouts },
      type: Object,
    },
  },
  provide() {
    const provide = {}
    Object.defineProperty(provide, '_vkeyboard_locales', {
      get:() => this.locales,
      enumerable: true,
    })
    Object.defineProperty(provide, '_vkeyboard_layouts', {
      get:() => this.layouts,
      enumerable: true,
    })
    return provide
  },
  render(h) {
    return h('div', this.$slots.default)
  }
}
</script>
