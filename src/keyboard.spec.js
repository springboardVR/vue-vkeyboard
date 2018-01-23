import { shallow, createLocalVue } from 'vue-test-utils'
import Keyboard from './Keyboard.vue'
import Vue from 'vue'
// import jest from 'jest'

describe('Keyboard', () => {
  let wrapper
  Vue.util.warn = jest.fn()
  const localVue = createLocalVue()
  beforeEach(() => {
    wrapper = shallow(Keyboard, {
      propsData: {
        availableLayouts: [{
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
  it('render rows from layout', () => {
    const rows = wrapper.findAll('.row')
    expect(rows.length).toBe(2)
  })
  it('render buttons with keys from layout', () => {
    const key = wrapper.find('.keybtn')
    expect(key.text()).toBe('#')
  })

  //:mode
  it('should render keys accordingly to :mode', () => {
    wrapper.setProps({mode: 'shift'})
    const key = wrapper.find('.keybtn')
    expect(key.text()).toBe('|')
  })
  it('should warn if :mode isnt in layout', () => {
    wrapper.setProps({mode: 'foo'})
    expect(localVue.util.warn.mock.calls.length).toBe(1);
    expect(localVue.util.warn.mock.calls[0][0]).toBe('undefined mode: foo');
    wrapper.setProps({mode: 'bar'})
    expect(localVue.util.warn.mock.calls.length).toBe(2);
    expect(localVue.util.warn.mock.calls[1][0]).toBe('undefined mode: bar');
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
