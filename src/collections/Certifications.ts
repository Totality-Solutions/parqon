import type { CollectionConfig } from 'payload'
import { isAdmin, loggedIn, visibleOrLoggedIn } from './access'
import { orderField, visibleField } from './fields'

export const Certifications: CollectionConfig = {
  slug: 'certifications',
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'detail', 'brands', 'visible', 'order'], group: 'Content' },
  defaultSort: 'order',
  access: { read: visibleOrLoggedIn, create: loggedIn, update: loggedIn, delete: isAdmin },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'detail', type: 'text', admin: { description: 'e.g. "Responsible forestry" or the standard numbers.' } },
    { name: 'logo', type: 'upload', relationTo: 'media', required: true },
    {
      name: 'brands',
      type: 'select',
      hasMany: true,
      options: ['Oaken', 'Nordwood', 'Heatwood'],
      admin: { description: 'Product pages of these brands show this logo. All certificates appear in the footer.' }
    },
    visibleField,
    orderField
  ]
}
