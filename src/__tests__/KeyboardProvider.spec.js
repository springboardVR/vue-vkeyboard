import { mount, createLocalVue } from 'vue-test-utils'
import KeyboardProvider from '../KeyboardProvider.vue'
import Keyboard from '../Keyboard.vue'
import * as defaultLayouts from '../../test/fixtures/layouts'
import * as defaultLocales from '../../test/fixtures/locales'
import Vue from 'vue'
// import jest from 'jest'

describe('KeyboardProvider', () => {
  let wrapper
  let localVue = createLocalVue()
  beforeEach(() => {
    Vue.util.warn = jest.fn()

    const KeyboardWithProvider = {
      name: 'KeyboardWithProvider',
      functional: true,
      render: (h, { parent, data, slots, children }) => {return h(KeyboardProvider, {
        props: {
          layouts: {
             test: 'test',
          },
          locales: {
            test: 'test',
          },
        }
      },[parent.$createElement(Keyboard, data, children)])}, //HACK use the parent rendering context to support named slots (see: https://github.com/vuejs/vue/issues/5759)
    }
    const mounted = mount(KeyboardWithProvider, {
      localVue,
      propsData: {
        layouts: defaultLayouts,
        locales: defaultLocales,
      },
    })
    wrapper = mounted.find({ name: 'KeyboardProvider' })
  })

  //render
  it('render', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find({ name: 'Keyboard' }).exists()).toBe(true)
  })
  it('provide layouts and locales to keyboard', () => {
    const Keyboard = wrapper.find({ name: 'Keyboard' })
    expect(Keyboard.vm.injectedLocales).toEqual({ test: 'test' })
    expect(Keyboard.vm.injectedLayouts).toEqual({ test: 'test' })
  })
})
