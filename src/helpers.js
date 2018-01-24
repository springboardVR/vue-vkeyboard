
export const formatKey = (str) => {
  const pattern = /\{(.*)\}/
  const [, specialChar] = str.match(pattern) || []
  return {
    value: specialChar || str,
    type: specialChar ? 'action' : 'input'
  }
}

export const formatRow = (str, iterator) => {
  const trimed = str.split(/\s+/)
  return trimed.map(iterator)
}

export const translateText = (keyId, locale = '') => {
  const [translation] = locale.split(':')
  return translation || keyId
}
