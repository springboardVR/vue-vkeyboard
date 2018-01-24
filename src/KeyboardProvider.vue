<script>
import { fr_CA as frCALayout } from './layouts/index.js'
import { fr_CA as frCALocale } from './locales/index.js'


export default {
  name: 'KeyboardProvider',
  provide: {
    _vkeyboard_locales: [frCALocale],
    _vkeyboard_layouts: [frCALayout],
  },
  render(h) {
    return h('div', this.$slots.default)
  }
}
</script>
