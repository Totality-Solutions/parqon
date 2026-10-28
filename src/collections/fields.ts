import type { Field } from 'payload'

export const BRAND_OPTIONS = ['Oaken', 'Nordwood', 'Heatwood']

export const brandField: Field = {
  name: 'brand',
  type: 'select',
  required: true,
  options: BRAND_OPTIONS,
  admin: { position: 'sidebar' }
}

export const visibleField: Field = {
  name: 'visible',
  type: 'checkbox',
  defaultValue: true,
  label: 'Show on website',
  admin: { position: 'sidebar', description: 'Untick to hide it from the website without deleting it.' }
}

export const orderField: Field = {
  name: 'order',
  type: 'number',
  defaultValue: 0,
  admin: { position: 'sidebar', description: 'Lower numbers are shown first.' }
}

// URL slug: lower-case words joined by dashes
export const slugField = (description?: string): Field => ({
  name: 'slug',
  type: 'text',
  required: true,
  unique: true,
  index: true,
  admin: { position: 'sidebar', description },
  validate: (value: unknown) =>
    typeof value === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value) ? true : 'Use lower-case letters, numbers and dashes only'
})
