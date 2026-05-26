export function slugify(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string')
  }

  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}