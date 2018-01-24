<template lang="html">
  <div class="pa5 flex">
    <div class="example ba bw1 example-1">

      <input class="pa2 w-100 black bw0" type="text" v-model="text" placeholder="Type anything">
      <KeyboardWithProvider :classnames="{
        wrapper: 'tc',
        row: '',
        key: 'pa2'
        }" @trigger="onKeyboardTrigger"/>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    text: ''
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
