import type { CollectionConfig } from 'payload'
import { isAdmin, loggedIn, visibleOrLoggedIn } from './access'
import { brandField, orderField, visibleField } from './fields'

export const Brochures: CollectionConfig = {
  slug: 'brochures',
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'brand', 'visible', 'order'], group: 'Content' },
  defaultSort: 'order',
  access: { read: visibleOrLoggedIn, create: loggedIn, update: loggedIn, delete: isAdmin },
  fields: [
    { name: 'title', type: 'text', required: true },
    brandField,
    visibleField,
    orderField,
    { name: 'description', type: 'textarea' },
    { name: 'cover', type: 'upload', relationTo: 'media', required: true, admin: { description: 'Card image.' } },
    {
      name: 'pdf',
      type: 'upload',
      relationTo: 'media',
      filterOptions: { mimeType: { equals: 'application/pdf' } },
      admin: { description: 'The brochure PDF. Leave empty to show a "Request brochure" button instead.' }
    },
    { name: 'fileName', type: 'text', admin: { description: 'Name of the downloaded file, e.g. Parqon Oaken Brochure.pdf' } }
  ]
}
