// Site-wide search over products, categories and pages.
import { CATEGORIES, CATEGORY_PRODUCTS, categoryPath, type Product } from './products';

export interface SearchResult {
  kind: 'product' | 'category' | 'page';
  title: string;
  url: string;
  breadcrumb: string[];
  snippet: string;
  image?: string;
  score: number;
}

interface Entry extends Omit<SearchResult, 'score'> {
  // weighted text fields; title matches count most
  fields: { text: string; weight: number }[];
}

const SITE_PAGES: { title: string; url: string; snippet: string; keywords: string }[] = [
  { title: 'Home', url: '/', snippet: 'Parqon premium wood flooring, wall panels, decking and cladding.', keywords: 'home parqon' },
  { title: 'About Us', url: '/about', snippet: 'Parqon brings the natural soul of wood into refined living spaces.', keywords: 'about company story parqon' },
  { title: 'Applications', url: '/applications', snippet: 'Where Parqon surfaces are used, with answers to common questions.', keywords: 'applications usage faq thermowood' },
  { title: 'Contact Us', url: '/contact', snippet: 'Call, e-mail or WhatsApp us, or visit our office and showroom.', keywords: 'contact phone email whatsapp address office showroom map' },
  { title: 'Projects', url: '/projects', snippet: 'Projects completed with Parqon wood surfaces.', keywords: 'projects portfolio' },
  { title: 'Catalog', url: '/catalog', snippet: 'Download the Parqon brochures.', keywords: 'catalog catalogue brochure pdf download' }
];

const productUrl = (p: Product) => {
  const category = CATEGORIES.find((c) => c.brand === p.brand && c.slug === p.categorySlug);
  return `${category ? categoryPath(category, p.type) : '/products'}?product=${p.id}`;
};

const ENTRIES: Entry[] = [
  ...CATEGORY_PRODUCTS.map((p): Entry => {
    const category = CATEGORIES.find((c) => c.brand === p.brand && c.slug === p.categorySlug);
    const typeName = category?.types?.find((t) => t.slug === p.type)?.name;
    const specs = (p.specs ?? []).map((s) => s.value).join(' ');
    return {
      kind: 'product',
      title: p.title,
      url: productUrl(p),
      breadcrumb: ['Parqon', p.brand, p.category, ...(typeName ? [typeName] : [])],
      snippet: p.description ?? '',
      image: p.image,
      fields: [
        { text: p.title, weight: 10 },
        { text: `${p.collection ?? ''} ${p.category} ${typeName ?? ''}`, weight: 4 },
        { text: `${p.brand} ${p.subCategory ?? ''} ${specs}`, weight: 2 },
        { text: p.description ?? '', weight: 1 }
      ]
    };
  }),
  ...CATEGORIES.map((c): Entry => {
    const count = CATEGORY_PRODUCTS.filter((p) => p.brand === c.brand && p.categorySlug === c.slug).length;
    return {
      kind: 'category',
      title: `${c.title} — ${c.brand}`,
      url: categoryPath(c),
      breadcrumb: ['Parqon', 'Products', c.brand, ...(c.series ? [c.series] : [])],
      snippet: `${c.brand} ${c.title}${c.types ? ` (${c.types.map((t) => t.name).join(', ')})` : ''}. ${count ? `${count} products.` : 'Products coming soon.'}`,
      image: c.image,
      fields: [
        { text: c.title, weight: 12 },
        { text: `${c.brand} ${c.series ?? ''} ${(c.types ?? []).map((t) => t.name).join(' ')}`, weight: 4 }
      ]
    };
  }),
  ...SITE_PAGES.map((p): Entry => ({
    kind: 'page',
    title: p.title,
    url: p.url,
    breadcrumb: ['Parqon', p.title],
    snippet: p.snippet,
    fields: [
      { text: p.title, weight: 8 },
      { text: p.keywords, weight: 3 },
      { text: p.snippet, weight: 1 }
    ]
  }))
];

const normalize = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

export const queryTerms = (query: string) => normalize(query).split(/[^a-z0-9]+/).filter(Boolean);

// Every term has to appear somewhere (word starts count, so "herr" finds "Herringbone")
export function search(query: string, limit = Infinity): SearchResult[] {
  const terms = queryTerms(query);
  if (!terms.length) return [];

  const results: SearchResult[] = [];
  for (const entry of ENTRIES) {
    let score = 0;
    let allFound = true;
    for (const term of terms) {
      const wordStart = new RegExp(`(^|[^a-z0-9])${term}`);
      let best = 0;
      for (const f of entry.fields) {
        const text = normalize(f.text);
        if (wordStart.test(text)) best = Math.max(best, f.weight * 2);
        else if (text.includes(term)) best = Math.max(best, f.weight);
      }
      if (!best) { allFound = false; break; }
      score += best;
    }
    if (!allFound) continue;
    // exact title match ranks first; categories slightly above single products
    if (normalize(entry.title).startsWith(normalize(query.trim()))) score += 15;
    if (entry.kind === 'category') score += 3;
    const { fields: _fields, ...result } = entry;
    results.push({ ...result, score });
  }
  return results.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title)).slice(0, limit);
}
