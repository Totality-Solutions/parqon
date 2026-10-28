import type { CollectionConfig } from 'payload'
import { isAdmin, loggedIn, visibleOrLoggedIn } from './access'
import { brandField, orderField, slugField, visibleField } from './fields'
import { revalidateHooks } from './revalidate'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'brand', 'series', 'visible', 'order'],
    group: 'Catalogue',
    listSearchableFields: ['title', 'slug']
  },
  defaultSort: 'order',
  hooks: revalidateHooks,
  access: { read: visibleOrLoggedIn, create: loggedIn, update: loggedIn, delete: isAdmin },
  fields: [
    { name: 'title', type: 'text', required: true },
    slugField('Used in the page address, e.g. /products/oaken/solid-wood. Unique within a brand.'),
    brandField,
    {
      name: 'series',
      type: 'select',
      options: ['Indoor', 'Outdoor'],
      admin: { position: 'sidebar', description: 'Groups categories in the header menu (optional).' }
    },
    visibleField,
    orderField,
    { name: 'image', type: 'upload', relationTo: 'media', admin: { description: 'Card image on the brand page.' } },
    { name: 'description', type: 'textarea', admin: { description: 'Shown on products that have no description of their own.' } },
    {
      name: 'types',
      type: 'array',
      labels: { singular: 'Type', plural: 'Types' },
      admin: { description: 'Optional sub-types with their own page, e.g. Engineered / Designer.', initCollapsed: true },
      fields: [
        { type: 'row', fields: [
          { name: 'name', type: 'text', required: true },
          { name: 'slug', type: 'text', required: true }
        ] },
        { name: 'image', type: 'upload', relationTo: 'media' }
      ]
    }
  ]
}
