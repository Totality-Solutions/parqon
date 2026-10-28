// Lead / enquiry types shared by the forms and the server action (src/lib/leads.ts).

export type LeadKind = 'quote' | 'sample' | 'brochure' | 'enquiry' | 'contact';

export const LEAD_TITLES: Record<LeadKind, string> = {
  quote: 'Get a Quote',
  sample: 'Request a Sample',
  brochure: 'Request a Brochure',
  enquiry: 'Talk to Our Experts',
  contact: 'Contact form'
};

export interface LeadContext {
  kind: LeadKind;
  // what it's about, e.g. the product name; shown under the form title
  about?: string;
  // extra lines included in the message (product, brand, category, finish...)
  details?: { label: string; value?: string }[];
  // where on the site the form was opened from
  source?: string;
}

export interface LeadInput {
  name: string;
  phone: string;
  email: string;
  message?: string;
}
