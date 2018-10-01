import { shallow } from '@vue/test-utils'
import { formatKey, formatRow, translateText } from '../helpers.js'

describe('#formatRow', () => {

  it('should trim white space', () => {
    const cb = jest.fn()
    const result = formatRow('a  b', cb)
    expect(cb.mock.calls[0][0]).toBe('a')
    expect(cb.mock.calls[1][0]).toBe('b')
  })

})

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

describe('#translateText', () => {

  it('should return translated string', () => {
    const result = translateText('action', 'translated:info')
    expect(result).toEqual('translated')
  })
  it('should return keyId if no translation available', () => {
    const result = translateText('action', 'translated:info')
    expect(result).toEqual('translated')
  })

})
