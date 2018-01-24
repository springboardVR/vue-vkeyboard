import { shallow, createLocalVue } from 'vue-test-utils'
import KeyboardProvider from './KeyboardProvider.vue'
import Keyboard from './Keyboard.vue'
import Vue from 'vue'
// import jest from 'jest'

describe('Keyboard', () => {
  let wrapper
  let localVue = createLocalVue()
  beforeEach(() => {
    wrapper = shallow(Keyboard, {
      localVue,
      provide: {
        _vkeyboard_layouts: [{
          'normal': [
            '# 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
            '{tab} q w e r t y u i o p ^ \u00b8 <',
          ],
          'shift': [
            '| ! " / $ % ? & * ( ) _ + {bksp}',
            '{tab} Q W E R T Y U I O P ^ \u00a8 >',
            "{shift} \u00bb Z X C V B N M ' . / {shift}"
          ],
          name: 'fr_CA',
        }]
      }
    })
  })

  //render
  it('render correct amount of rows', () => {
    const rows = wrapper.findAll('.row')
    expect(rows.length).toBe(2)
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

  //:mode
  it('should render keys accordingly to :mode', () => {
    wrapper.setProps({mode: 'shift'})
    const key = wrapper.find('.keybtn')
    expect(key.text()).toBe('|')
  })
  it('should warn if :mode isnt in layout', () => {
    Vue.util.warn = jest.fn()
    //HACK vue-test-utils triggers two rendering
    wrapper.setProps({mode: 'foo'})
    expect(Vue.util.warn.mock.calls.length).toBe(2);
    expect(Vue.util.warn.mock.calls[0][0]).toBe('undefined mode: foo');
    wrapper.setProps({mode: 'bar'})
    expect(Vue.util.warn.mock.calls.length).toBe(4);
    expect(Vue.util.warn.mock.calls[2][0]).toBe('undefined mode: bar');
  })
  it('should warn if no provided layouts', () => {
    Vue.util.warn = jest.fn()
    wrapper = shallow(Keyboard, {
      provide: {
      }
    })
    expect(Vue.util.warn.mock.calls.length).toBe(1);
    expect(Vue.util.warn.mock.calls[0][0]).toBe('no layouts provided');
  })

  //events
  it('emit @trigger when button clicked', () => {
    wrapper.find('.keybtn').trigger('click')
    expect(wrapper.emitted().trigger).toBeTruthy()
    expect(wrapper.emitted().trigger[0][0]).toEqual({
      value: '#',
      type: 'input'
    })
  })
})
