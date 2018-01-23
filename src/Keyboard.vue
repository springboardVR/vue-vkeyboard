<script>
import { frCALayout, frCALocale } from './config/index.js'
import { keyBy } from 'lodash-es'
import { formatKey } from './helpers'
import Vue from 'vue'


export default {
  name: 'Keyboard',
  props: {
    availableLocales: {
      default: () => ([ frCALocale ])
    },
    availableLayouts: {
      default: () => ([ frCALayout ])
    },
    locale: {
      default: 'fr_CA'
    },
    layout: {
      default: 'fr_CA'
    },
    mode: {
      default: 'normal'
    }
  },
  methods: {
    onKeyPress (value) {
      this.$emit('trigger', value)
    }
  },
  computed: {
    availableLayoutsByName () {
      return keyBy(this.availableLayouts, 'name')
    },
    currentLayout () {
      const layout = this.availableLayoutsByName[this.layout]
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
  <div class="keyboard">
    <div class="row" v-for="row in currentLayout.rows">
      <button
        class="keybtn"
        type="button"
        @click="onKeyPress(key)"
        v-for="key in row">
        {{ key.value }}
      </button>
    </div>
  </div>
</template>
