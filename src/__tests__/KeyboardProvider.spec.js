import { shallowMount, createLocalVue } from '@vue/test-utils'
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


    wrapper = shallowMount(KeyboardProvider, {
      localVue,
      props: {
        layouts: defaultLayouts,
        locales: defaultLocales,
      },
      slots: {
        default: [Keyboard],
      }
    })
  })

  //render
  it('render', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find({ name: 'Keyboard' }).exists()).toBe(true)
  })
  it('provide layouts and locales to keyboard', async () => {
    const Keyboard = wrapper.find({ name: 'Keyboard' })
    setTimeout(() => {
      expect(Keyboard.vm.injectedLocales).toEqual({ test: 'test' })
      expect(Keyboard.vm.injectedLayouts).toEqual({ test: 'test' })
    },0)
  })
})
