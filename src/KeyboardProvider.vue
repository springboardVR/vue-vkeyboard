<script>
import * as layouts from './layouts/index.js'
import * as locales from './locales/index.js'


export default {
  name: 'KeyboardProvider',
  provide: {
    _vkeyboard_locales: locales,
    _vkeyboard_layouts: layouts,
  },
  render(h) {
    return h('div', this.$slots.default)
  }
}
</script>
