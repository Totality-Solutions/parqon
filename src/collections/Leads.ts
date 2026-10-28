import type { CollectionConfig } from 'payload'
import { isAdmin, loggedIn } from './access'

// Quote / sample / brochure / enquiry requests from the website. Created by the site's server, never by visitors directly.
export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['createdAt', 'kind', 'name', 'phone', 'email', 'about', 'status'],
    group: 'Leads',
    listSearchableFields: ['name', 'email', 'phone', 'about']
  },
  defaultSort: '-createdAt',
  access: { read: loggedIn, create: () => false, update: loggedIn, delete: isAdmin },
  fields: [
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Converted', value: 'converted' },
        { label: 'Closed', value: 'closed' }
      ],
      admin: { position: 'sidebar' }
    },
    {
      name: 'kind',
      type: 'select',
      required: true,
      options: [
        { label: 'Quote', value: 'quote' },
        { label: 'Sample', value: 'sample' },
        { label: 'Brochure', value: 'brochure' },
        { label: 'Enquiry', value: 'enquiry' },
        { label: 'Contact form', value: 'contact' }
      ],
      admin: { position: 'sidebar', readOnly: true }
    },
    { type: 'row', fields: [
      { name: 'name', type: 'text', required: true, admin: { readOnly: true } },
      { name: 'phone', type: 'text', admin: { readOnly: true } },
      { name: 'email', type: 'email', admin: { readOnly: true } }
    ] },
    { name: 'about', type: 'text', admin: { readOnly: true, description: 'Product or brochure the request is about.' } },
    { name: 'message', type: 'textarea', admin: { readOnly: true } },
    { name: 'details', type: 'textarea', admin: { readOnly: true, description: 'Product details sent with the request.' } },
    { type: 'row', fields: [
      { name: 'source', type: 'text', admin: { readOnly: true } },
      { name: 'page', type: 'text', admin: { readOnly: true } }
    ] },
    { name: 'notes', type: 'textarea', admin: { description: 'Internal notes (not sent anywhere).' } }
  ]
}
