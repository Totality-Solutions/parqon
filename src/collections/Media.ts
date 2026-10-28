import type { CollectionConfig } from 'payload'
import { isAdmin, loggedIn } from './access'

// Every uploaded file: product photos, category/brand images, certificate logos, brochure covers and PDFs
export const Media: CollectionConfig = {
  slug: 'media',
  admin: { group: 'Settings', description: 'All uploaded images and PDFs.' },
  access: { read: () => true, create: loggedIn, update: loggedIn, delete: isAdmin },
  upload: {
    mimeTypes: ['image/*', 'application/pdf'],
    imageSizes: [
      { name: 'thumbnail', width: 400, height: 400, position: 'centre' },
      { name: 'card', width: 900 },
      { name: 'large', width: 1800 }
    ],
    adminThumbnail: 'thumbnail'
  },
  fields: [{ name: 'alt', type: 'text', label: 'Alt text (describe the image)' }]
}
