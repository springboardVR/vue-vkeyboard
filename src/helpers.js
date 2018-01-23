
export const formatKey = (str) => {
  const pattern = /\{(.*)\}/
  const [, specialChar] = str.match(pattern) || []
  return {
    value: specialChar || str,
    type: specialChar ? 'action' : 'input'
  }
}
