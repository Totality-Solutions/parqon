import type { CollectionConfig } from 'payload'
import { isAdmin, loggedIn, visibleOrLoggedIn } from './access'
import { brandField, orderField, slugField, visibleField } from './fields'

// Spec labels the product filters use (pattern / profile / wood species)
export const FILTER_SPECS = ['Pattern', 'Profile', 'Wood Specie']

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'brand', 'category', 'type', 'visible'],
    group: 'Catalogue',
    listSearchableFields: ['title', 'slug', 'collection'],
    pagination: { defaultLimit: 50 }
  },
  defaultSort: 'order',
  access: { read: visibleOrLoggedIn, create: loggedIn, update: loggedIn, delete: isAdmin },
  fields: [
    { name: 'title', type: 'text', required: true },
    slugField('Used in the product link, e.g. /product/oak-loire-beige.'),
    brandField,
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      admin: { position: 'sidebar' },
      filterOptions: ({ data }) => (data?.brand ? { brand: { equals: data.brand } } : true)
    },
    {
      name: 'type',
      type: 'text',
      admin: { position: 'sidebar', description: 'Type slug within the category (e.g. engineered, designer, wpc). Leave empty if the category has no types.' }
    },
    visibleField,
    orderField,
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Details',
          fields: [
            { name: 'collection', type: 'text', admin: { description: 'Collection / series line shown above the title.' } },
            { name: 'environment', type: 'text', admin: { description: 'e.g. Indoor, Outdoor.' } },
            { name: 'description', type: 'textarea' },
            {
              name: 'specs',
              type: 'array',
              labels: { singular: 'Spec', plural: 'Specs' },
              admin: { description: `Label / value rows. "${FILTER_SPECS.join('", "')}" are also used by the filters.` },
              fields: [
                { type: 'row', fields: [
                  { name: 'label', type: 'text', required: true },
                  { name: 'value', type: 'text', required: true }
                ] }
              ]
            }
          ]
        },
        {
          label: 'Images',
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media', admin: { description: 'Main image.' } },
            { name: 'gallery', type: 'upload', relationTo: 'media', hasMany: true, admin: { description: 'Extra images shown as thumbnails.' } }
          ]
        },
        {
          label: 'Finishes',
          fields: [
            {
              name: 'finishes',
              type: 'array',
              admin: { description: 'Optional colour / finish options.' },
              fields: [
                { type: 'row', fields: [
                  { name: 'name', type: 'text', required: true },
                  { name: 'color', type: 'text', admin: { description: 'Swatch colour, e.g. #a07850' } }
                ] },
                { name: 'image', type: 'upload', relationTo: 'media' }
              ]
            }
          ]
        }
      ]
    }
  ]
}
