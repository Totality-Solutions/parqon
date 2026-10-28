// Lead / enquiry submissions: the Contact page form and the quote / sample / enquiry form all post here.
export const LEAD_ENDPOINT = 'https://vgiwdmx3zpohc62m5gqsnnj3ee0owsue.lambda-url.ap-south-1.on.aws/';

export type LeadKind = 'quote' | 'sample' | 'brochure' | 'enquiry';

export const LEAD_TITLES: Record<LeadKind, string> = {
  quote: 'Get a Quote',
  sample: 'Request a Sample',
  brochure: 'Request a Brochure',
  enquiry: 'Talk to Our Experts'
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

/**
 * Sends a lead. The endpoint takes { name, email, message }, so the phone number, request type and
 * product details go into the message text.
 */
export const sendLead = async (lead: LeadInput, context: LeadContext) => {
  const message = [
    `Request: ${LEAD_TITLES[context.kind]}${context.about ? ` (${context.about})` : ''}`,
    ...(context.details ?? []).filter((d) => d.value).map((d) => `${d.label}: ${d.value}`),
    '',
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `E-mail: ${lead.email}`,
    `Message: ${lead.message?.trim() || '(none)'}`,
    '',
    `Sent from: ${context.source ?? 'Website'} (${window.location.href})`
  ].join('\n');

  const res = await fetch(LEAD_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: lead.name, email: lead.email, message })
  });
  if (!res.ok) throw new Error(`Lead endpoint returned ${res.status}`);
};
