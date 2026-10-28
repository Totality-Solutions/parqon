import { revalidateTag } from 'next/cache';
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, GlobalAfterChangeHook } from 'payload';

// Cache tag of the website's CMS data (src/lib/catalog/server.ts)
export const CATALOG_TAG = 'catalog';

// Saving or deleting anything the website shows refreshes its cached copy, so changes appear straight away
const refresh = () => {
  try {
    revalidateTag(CATALOG_TAG, { expire: 0 });
  } catch {
    // outside a Next.js request (e.g. the seed script) there is no cache to refresh
  }
};

export const revalidateAfterChange: CollectionAfterChangeHook = ({ doc }) => {
  refresh();
  return doc;
};

export const revalidateAfterDelete: CollectionAfterDeleteHook = ({ doc }) => {
  refresh();
  return doc;
};

export const revalidateGlobal: GlobalAfterChangeHook = ({ doc }) => {
  refresh();
  return doc;
};

export const revalidateHooks = { afterChange: [revalidateAfterChange], afterDelete: [revalidateAfterDelete] };
