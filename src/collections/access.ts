import type { Access } from 'payload'

// Anyone logged in to the CMS
export const loggedIn: Access = ({ req }) => Boolean(req.user)

// Only admins (editors can add and change content but not delete it or manage users)
export const isAdmin: Access = ({ req }) => req.user?.role === 'admin'

// Public website reads only visible items; CMS users see everything
export const visibleOrLoggedIn: Access = ({ req }) => (req.user ? true : { visible: { equals: true } })
