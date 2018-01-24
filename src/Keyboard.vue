<script>
import { keyBy } from 'lodash-es'
import { formatKey, translateText } from './helpers'
import Vue from 'vue'


export default {
  name: 'Keyboard',
  props: {
    lang: {
      type: String,
    },
    layout: {
      type: String,
      default: 'fr_CA'
    },
    mode: {
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
    availableLayoutsByName () {
      return keyBy(this.availableLayouts, 'name')
    },
    availableLocalesByName () {
      return keyBy(this.availableLocales, 'name')
    },
    currentLayout () {
      const layout = this.availableLayoutsByName[this.layout]
      if (!layout) {
        Vue.util.warn(`no layouts provided`)
        return
      }
      const locale = this.availableLocalesByName[this.lang ? this.lang : layout.lang[0]]
      if (!locale) {
        Vue.util.warn(`no locale matching lang provided`)
        return
      }
      let mode = this.mode
      if (!([this.mode] in layout)) {
        Vue.util.warn(`undefined mode: ${this.mode}`)
        mode = 'normal'
      }
      const rows = layout[mode].map((str) => {
        return str.split(' ').map(key => {
          const { type, value } = formatKey(key)
          return {
            type,
            value,
            translation: type === 'action' ? translateText(value, locale.display[value]) : value
          }
        })
      })
      return {
        rows
      }
    }
  }
}
</script>

<template>
  <div class="keyboard" :class="[classnames.wrapper, `theme-${theme}`]">
    <template v-if="currentLayout">
      <div class="row" :class="classnames.row" v-for="row in currentLayout.rows">
        <button
        class="keybtn"
        :class="[classnames.key, `key-${key.type}-${key.value}`]"
        type="button"
        @click="onKeyPress(key)"
        v-for="key in row">
        {{ key.translation }}
      </button>
    </div>
    </template>
  </div>
</template>
