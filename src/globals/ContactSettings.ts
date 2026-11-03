import type { GlobalConfig } from 'payload'
import { revalidateGlobal } from '../collections/revalidate'

// Addresses, e-mails and phone shown on the Contact page and in the footer
export const ContactSettings: GlobalConfig = {
  slug: 'contact-settings',
  label: 'Contact details',
  admin: { group: 'Content' },
  access: { read: () => true, update: ({ req }) => Boolean(req.user) },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    {
      name: 'addresses',
      type: 'array',
      labels: { singular: 'Address', plural: 'Addresses' },
      admin: { description: 'Shown on the Contact page (with map) and in the footer.' },
      fields: [
        { name: 'label', type: 'text', required: true, admin: { description: 'e.g. Corporate Office, Display Centre' } },
        { name: 'lines', type: 'textarea', required: true, admin: { description: 'One line per row.' } }
      ]
    },
    {
      name: 'emails',
      type: 'array',
      labels: { singular: 'E-mail', plural: 'E-mails' },
      fields: [{ name: 'email', type: 'email', required: true }]
    },
    {
      name: 'phones',
      type: 'array',
      labels: { singular: 'Phone number', plural: 'Phone numbers' },
      admin: { description: 'All are shown on the Contact page and in the footer. The first one is also used for WhatsApp.' },
      fields: [{ name: 'number', type: 'text', required: true, admin: { description: 'e.g. +91 79775 62130' } }]
    },
    { name: 'whatsappHours', type: 'text', defaultValue: '10:00 am to 6:00 pm' },
    {
      name: 'social',
      type: 'group',
      fields: [
        { name: 'instagram', type: 'text' },
        { name: 'linkedin', type: 'text' },
        { name: 'facebook', type: 'text' }
      ]
    }
  ]
}
