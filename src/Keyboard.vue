<script>
import { keyBy } from 'lodash-es'
import { formatKey } from './helpers'
import Vue from 'vue'


export default {
  name: 'Keyboard',
  props: {
    locale: {
      type: String,
      default: 'fr_CA'
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
    currentLayout () {
      const layout = this.availableLayoutsByName[this.layout]
      if (!layout) {
        Vue.util.warn(`no layouts provided`)
        return
      }
      let mode = this.mode
      if (!([this.mode] in layout)) {
        Vue.util.warn(`undefined mode: ${this.mode}`)
        mode = 'normal'
      }
      const rows = layout[mode].map((str) => {
        return str.split(' ').map(key => formatKey(key))
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
        :class="classnames.key"
        type="button"
        @click="onKeyPress(key)"
        v-for="key in row">
        {{ key.value }}
      </button>
    </div>
    </template>
  </div>
</template>
