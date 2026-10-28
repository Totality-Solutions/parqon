import type { GlobalConfig } from 'payload'
import { revalidateGlobal } from '../collections/revalidate'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site settings',
  admin: { group: 'Settings' },
  access: { read: () => true, update: ({ req }) => req.user?.role === 'admin' },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    {
      name: 'showBrochures',
      type: 'checkbox',
      defaultValue: false,
      label: 'Show brochures on the website',
      admin: { description: 'Shows the Brochures page and the brochure buttons in the header, footer and product pages.' }
    },
    {
      name: 'leadEmails',
      type: 'array',
      labels: { singular: 'E-mail', plural: 'E-mails' },
      admin: { description: 'Not used yet: leads are e-mailed through the existing AWS endpoint and saved under Leads.' },
      fields: [{ name: 'email', type: 'email', required: true }]
    }
  ]
}
