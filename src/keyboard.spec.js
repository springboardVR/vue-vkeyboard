import { shallow, createLocalVue } from 'vue-test-utils'
import KeyboardProvider from './KeyboardProvider.vue'
import Keyboard from './Keyboard.vue'
import * as defaultLayouts from '../test/fixtures/layouts'
import * as defaultLocales from '../test/fixtures/locales'
import Vue from 'vue'
// import jest from 'jest'

describe('Keyboard', () => {
  let wrapper
  let localVue = createLocalVue()
  beforeEach(() => {
    Vue.util.warn = jest.fn()
    wrapper = shallow(Keyboard, {
      localVue,
      propsData: {
        layout: 'fr_CA',
        lang: 'fr_CA',
      },
      provide: {
        _vkeyboard_layouts: defaultLayouts,
        _vkeyboard_locales: defaultLocales,
      }
    })
  })

  //render
  it('render correct amount of rows', () => {
    const rows = wrapper.findAll('.row')
    expect(rows.length).toBe(5)
  })
  it('render correct amount of keys', () => {
    const rows = wrapper.find('.row')
    expect(rows.findAll('.keybtn').length).toBe(14)
  })
  it('render buttons with keys from layout', () => {
    const key = wrapper.find('.keybtn')
    expect(key.text()).toBe('#')
  })
  it('should add custom :classnames to elements', () => {
    wrapper.setProps({
      classnames: {
        wrapper: 'wrapper-custom-class',
        row: 'row-custom-class',
        key: 'key-custom-class'
      }
    })
    const wrapperEl = wrapper.find('.wrapper-custom-class')
    expect(wrapperEl.exists()).toBe(true)
    const rowEl = wrapper.find('.row-custom-class')
    expect(rowEl.exists()).toBe(true)
    const keyEl = wrapper.find('.key-custom-class')
    expect(keyEl.exists()).toBe(true)
  })
  it('should apply theme class', () => {
    wrapper.setProps({
      theme: 'black'
    })

    expect(wrapper.classes()).toContain('theme-black')
  })

  it('should warn if no provided layouts or locales', () => {
    wrapper = shallow(Keyboard, {
      provide: {
      }
    })
    expect(Vue.util.warn.mock.calls[0][0]).toBe('no layout matching provided');
    wrapper = shallow(Keyboard, {
      propsData: {
        layout: 'fr_CA',
        lang: 'fr_CA',
      },
      provide: {
        _vkeyboard_layouts: defaultLayouts,
      }
    })
    expect(Vue.util.warn.mock.calls[1][0]).toBe('no locale matching lang provided');
    expect(Vue.util.warn.mock.calls.length).toBe(2);
  })

  //locale
  it('should display translated text', () => {
    const text = wrapper.find('.key-action-enter').text()
    expect(text).toBe('Entr\u00e9e')
  })
  it('should not translate input', () => {
    const text = wrapper.find('.key-input-a').text()
    expect(text).toBe('a')
  })

  //events
  it('emit @trigger when button clicked', () => {
    wrapper.find('.keybtn').trigger('click')
    expect(wrapper.emitted().trigger).toBeTruthy()
    expect(wrapper.emitted().trigger[0][0]).toEqual({
      value: '#',
      translation: '#',
      type: 'input',
    })
  })

  //set
  describe('typeset', () => {
    it('should render correct :typeset', () => {
      const key = wrapper.find('.keybtn')
      expect(key.text()).toBe('#')
      wrapper.setProps({
        typeset: 'shift',
      })
      expect(key.text()).toBe('|')
    })
    it('should toggle typeset by default when clicking on a action btn', () => {
      const key = wrapper.find('.keybtn')
      expect(key.text()).toBe('#')
      wrapper.find('.key-action-shift').trigger('click')
      expect(key.text()).toBe('|')
      wrapper.find('.key-action-shift').trigger('click')
      expect(key.text()).toBe('#')
    })
    it('should warn if :typeset isnt in layout', () => {
      //HACK vue-test-utils triggers two rendering
      wrapper.setProps({typeset: 'foo'})
      expect(Vue.util.warn.mock.calls.length).toBe(1);
      expect(Vue.util.warn.mock.calls[0][0]).toBe('undefined typeset: foo');
    })
  })
})
