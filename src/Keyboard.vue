<script>
import { formatKey, formatRow, translateText } from './helpers'
import Vue from 'vue'

const defaultLayout = 'msUSEnglish'

export default {
  name: 'Keyboard',
  props: {
    lang: {
      type: String,
    },
    layout: {
      type: String,
    },
    defaultLayout: {
      type: String,
      default: defaultLayout
    },
    typeset: {
      type: String,
      default: 'normal'
    },
    theme: {
      type: String,
      default: 'default'
    },
    classnames: {
      type: Object,
      default: () => ({
        wrapper: 'wrapper-class',
        row: 'row-class',
        key: 'key-class'
      })
    }
  },
  methods: {
    onKeyPress (value) {
      this.$emit('trigger', value)
      this.defaultActions(value)
    },
    defaultActions ({ type, value }) {
      if (type === 'action') { //toggle typeset
        const {
          name,
          lang,
          ...typesets
        } = this.currentLayout

        if (typesets.hasOwnProperty(value)) {
          this.internalTypeset =  this.internalTypeset === value ? 'normal' : value
        }
      }
    }
  },
  data: () => ({
    internalTypeset: null,
  }),
  watch: {
    typeset: {
      immediate: true,
      handler(typeset) { this.internalTypeset = typeset }
    }
  },
  inject: {
    injectedLocales: {
      from: '_vkeyboard_locales',
      // default: () => ({})
    },
    injectedLayouts: {
      from: '_vkeyboard_layouts',
      // default: () => ({})
    },
  },
  computed: {
    availableLocales() {
      return this.injectedLocales
    },
    availableLayouts() {
      return this.injectedLayouts
    },
    currentLayout () {
      if (!this.availableLayouts) {
        Vue.util.warn(`no layouts provided`)
        return
      }
      const hasLayout = this.layout && this.layout in this.availableLayouts
      if (!hasLayout) {
        Vue.util.warn(`no layout matching provided: falling back to the default: ${this.defaultLayout}`)
      }
      const layout = hasLayout
        ? this.layout
        : this.defaultLayout
      return this.availableLayouts[layout]
    },
    currentLang () {
      if (!this.currentLayout) return
      const hasLang = this.lang && this.currentLayout.lang.includes(this.lang)
      const lang = hasLang ? this.lang : this.currentLayout.lang[0]
      if (!hasLang) {
        Vue.util.warn(`no locale matching lang provided: falling back to ${lang}`)
      }
      return lang
    },
    rowsToDisplay () {
      if (!this.currentLayout) return []
      const locale = this.availableLocales[this.currentLang]
      let typeset = this.internalTypeset
      if (!([typeset] in this.currentLayout)) {
        Vue.util.warn(`undefined typeset: ${typeset}`)
        typeset = 'normal'
      }
      const rows = this.currentLayout[typeset].map((str) => {
        return formatRow(str, key => {
          const { type, value } = formatKey(key)
          return {
            type,
            value,
            translation: type === 'action' ? translateText(value, locale && locale.display[value]) : value
          }
        })
      })
      return rows
    }
  },
  components: {
    slotRenderer: {
      functional: true,
      props: {
        vnode: { required: true },
        args: { },
      },
      render(h, { parent, props, children }) {
        return props.vnode || children
      }
    },
  }
}
</script>

<template>
  <div class="v-keyboard" :class="[classnames.wrapper, `theme-${theme}`]">
    <template v-if="rowsToDisplay">
      <div class="row" :class="classnames.row" v-for="row in rowsToDisplay">
        <button
        class="keybtn"
        :class="[classnames.key, `key-${key.type}-${key.value}`, key.value === internalTypeset && key.type === 'action' ? '-active' : '']"
        type="button"
        @click="onKeyPress(key)"
        v-for="(key, i) in row"
        :key="i"
        >
          <slot-renderer :vnode="$scopedSlots[`${key.type}:${key.value}`] && $scopedSlots[`${key.type}:${key.value}`]({ args: key })">
            {{ key.translation }}
          </slot-renderer>
      </button>
    </div>
    </template>
  </div>
</template>
