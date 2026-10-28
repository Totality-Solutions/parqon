'use server';
// Saves a lead in the CMS (Leads) and e-mails it through the existing AWS Lambda endpoint.
import config from '@payload-config';
import { headers } from 'next/headers';
import { getPayload } from 'payload';
import { LEAD_TITLES, type LeadContext, type LeadInput } from '@/data/leads';

const LEAD_ENDPOINT = process.env.LEAD_ENDPOINT || 'https://vgiwdmx3zpohc62m5gqsnnj3ee0owsue.lambda-url.ap-south-1.on.aws/';

const clean = (value: unknown, max: number) => String(value ?? '').trim().slice(0, max);

export async function submitLead(input: LeadInput, context: LeadContext): Promise<{ ok: boolean; error?: string }> {
  const lead = {
    name: clean(input.name, 120),
    phone: clean(input.phone, 40),
    email: clean(input.email, 160),
    message: clean(input.message, 4000)
  };
  // the contact form asks for "e-mail or phone"; the quote / sample forms need both
  const missing = context.kind === 'contact' ? !lead.email && !lead.phone : !lead.email || !lead.phone;
  if (!lead.name || missing) {
    return { ok: false, error: 'Please fill in your name, phone number and e-mail.' };
  }

  const details = (context.details ?? [])
    .filter((d) => d.value)
    .map((d) => `${clean(d.label, 60)}: ${clean(d.value, 300)}`)
    .join('\n');
  const page = clean((await headers()).get('referer'), 500);
  const about = clean(context.about, 200);
  const source = clean(context.source, 200) || 'Website';

  // 1. Save it, so nothing is lost even if the e-mail fails
  let saved = false;
  try {
    const payload = await getPayload({ config });
    await payload.create({
      collection: 'leads',
      overrideAccess: true, // visitors can't create leads through the API, only through this action
      data: { kind: context.kind, ...lead, email: lead.email || undefined, about, details, source, page, status: 'new' }
    });
    saved = true;
  } catch (err) {
    console.error('Could not save lead:', err);
  }

  // 2. E-mail it. The endpoint takes { name, email, message }, so everything else goes into the message.
  const message = [
    `Request: ${LEAD_TITLES[context.kind]}${about ? ` (${about})` : ''}`,
    details,
    '',
    `Name: ${lead.name}`,
    `Phone: ${lead.phone || '-'}`,
    `E-mail: ${lead.email}`,
    `Message: ${lead.message || '(none)'}`,
    '',
    `Sent from: ${source}${page ? ` (${page})` : ''}`
  ]
    .filter((line, i, all) => line !== '' || all[i - 1] !== '')
    .join('\n');

  let mailed = false;
  try {
    const res = await fetch(LEAD_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: lead.name, email: lead.email, message })
    });
    mailed = res.ok;
    if (!res.ok) console.error('Lead e-mail endpoint returned', res.status);
  } catch (err) {
    console.error('Could not e-mail lead:', err);
  }

  return saved || mailed ? { ok: true } : { ok: false, error: 'Sending failed.' };
}
