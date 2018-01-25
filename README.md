# Vue VKeyboard
[![npm](https://img.shields.io/npm/v/vue-vkeyboard.svg)]()

Virtual keyboard with multi-layouts and i18n support designed to follow [Mottie keyboard syntax](https://github.com/Mottie/Keyboard/wiki/Layout).

[Demo](https://springboardvr.github.io/vue-vkeyboard/)

### Features
- Fully customisable but shipped with defaults 
- No dependencies
- Unstyled keyboard (Bring your own style)

## Usage
```
npm install vue-vkeyboard
yarn add vue-vkeyboard
```

## API
### Keyboard 
Default props: 
```
lang: {
  type: String,
},
layout: {
  type: String,
  default: 'french-azerty-1'
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

```

## Currently supported languages
- English
- French
- German
- Spanish
- Polish
- Portuguese
- and all you can find [here](https://github.com/springboardVR/vue-vkeyboard/tree/master/src/layouts/content)

## TODO
- Custom themes


----
<div style="background-color: grey">
test
</div>
![springboardvr-logo](http://springboardvr.com/assets/img/logos/springboardvr-wide-ondark-new.png)

SpringboardVR - 2018
