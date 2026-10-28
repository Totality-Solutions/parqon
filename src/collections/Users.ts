import type { CollectionConfig } from 'payload'
import { isAdmin, loggedIn } from './access'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: { useAsTitle: 'email', group: 'Settings' },
  access: {
    read: loggedIn,
    create: isAdmin,
    update: ({ req, id }) => req.user?.role === 'admin' || req.user?.id === id,
    delete: isAdmin
  },
  hooks: {
    // The very first account (created on the CMS's first visit) becomes the admin
    beforeChange: [
      async ({ data, operation, req }) => {
        if (operation !== 'create') return data
        const { totalDocs } = await req.payload.count({ collection: 'users', overrideAccess: true })
        return totalDocs === 0 ? { ...data, role: 'admin' } : data
      }
    ]
  },
  fields: [
    { name: 'name', type: 'text' },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      options: [
        { label: 'Admin (full access)', value: 'admin' },
        { label: 'Editor (add and edit, no deleting)', value: 'editor' }
      ],
      access: { update: ({ req }) => req.user?.role === 'admin' }
    }
  ]
}
