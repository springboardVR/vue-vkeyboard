import { shallow } from 'vue-test-utils'
import { formatKey } from './helpers.js'

describe('#formatKey', () => {

  it('should return non-special chars', () => {
    const result = formatKey('a')
    expect(result).toEqual({
      value: 'a',
      type: 'input'
    })
  })
  it('should return special chars', () => {
    const result = formatKey('{shift}')
    expect(result).toEqual({
      value: 'shift',
      type: 'action'
    })
  })


})
