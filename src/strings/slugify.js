export function slugify(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string')
  }

  return str
    .trim()
    .toLowerCase()
}