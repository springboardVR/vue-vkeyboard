<script>
import { formatKey, formatRow, translateText } from './helpers'
import omit from 'lodash.omit'
import Vue from 'vue'


export default {
  name: 'Keyboard',
  props: {
    lang: {
      type: String,
    },
    layout: {
      type: String,
      default: 'french-azerty-1'
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
        const typesets = omit(this.currentLayout, ['name', 'lang'])
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
      default: () => ([])
    },
    injectedLayouts: {
      from: '_vkeyboard_layouts',
      default: () => ([])
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
      return this.availableLayouts[this.layout]
    },
    rowsToDisplay () {
      if (!this.availableLayouts) {
        Vue.util.warn(`no layouts provided`)
        return
      }
      const layout = this.currentLayout
      if (!layout) {
        Vue.util.warn(`no layout matching provided`)
        return
      }
      const locale = this.availableLocales[this.lang ? this.lang : layout.lang[0]]
      if (!locale) {
        Vue.util.warn(`no locale matching lang provided`)
      }
      let typeset = this.internalTypeset
      if (!([typeset] in layout)) {
        Vue.util.warn(`undefined typeset: ${typeset}`)
        typeset = 'normal'
      }
      const rows = layout[typeset].map((str) => {
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
        v-for="key in row">
        {{ key.translation }}
      </button>
    </div>
    </template>
  </div>
</template>
