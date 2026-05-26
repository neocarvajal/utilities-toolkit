export function truncate(str, maxLength) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string')
  }

  if (typeof maxLength !== 'number') {
    throw new Error('Max length must be a number')
  }

  if (str.length <= maxLength) {
    return str
  }

  return str.slice(0, maxLength) + '...'
}