<template lang="html">
  <div class="pa5 flex">
    <div class="example ba bw1 example-1">
      <input class="pa2 w-100 black bw0" type="text" v-model="text" placeholder="Type anything">
      <KeyboardWithProvider
        :classnames="{
          wrapper: 'wrapper-class tc',
          row: 'row-class',
          key: 'key-class pa2'
        }"
        :layout="currentLayout"
        :lang="currentLang"
        @trigger="onKeyboardTrigger">
        <span slot="action:shift">⇧</span>
        <span slot="action:bksp">⌫</span>
        <span slot="input:q" slot-scope="{args}">{{args.value}} (with scoped-slot)</span>
        <span slot="action:shift" slot-scope="{args}">⇧</span>
      </KeyboardWithProvider>
    </div>
    <div class="w-25 ml3">
      <select class="w-100" v-model="currentLayout">
        <option v-for="(value, name) in layouts" :value="name">{{name}}</option>
      </select>
      <select class="w-100" v-model="currentLang">
        <option v-for="(value, name) in locales" :value="name">{{name}}</option>
      </select>
    </div>
  </div>
</template>

<script>
import * as layouts from '@/layouts/index.js'
import * as locales from '@/locales/index.js'

export default {
  data: () => ({
    text: '',
    currentLang: '',
    currentLayout: 'msUSEnglish',
    layouts,
    locales,
  }),
  methods: {
    onKeyboardTrigger({ value, type }) {
      if (type === 'input') {
        this.text = `${this.text}${value}`
      } else if (type === 'action') {
        switch (value) {
          case 'bksp':
            this.text = this.text.slice(0,-1)
            break;
          case 'space':
            this.text = `${this.text} `
            break;
          default:
        }
      }
    }
  }
}
</script>

<style lang="css">
@import "https://unpkg.com/tachyons";
</style>
