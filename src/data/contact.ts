// Contact details shared by the Contact page and the footer.

export interface Address {
  label: string;
  lines: string[];
}

// TODO: replace the placeholder lines with the real office and showroom addresses
export const ADDRESSES: Address[] = [
  {
    label: 'Office Address',
    lines: ['Office address line 1', 'Office address line 2', 'City, State PIN']
  },
  {
    label: 'Showroom Address',
    lines: ['Showroom address line 1', 'Showroom address line 2', 'City, State PIN']
  }
];

// Opens the address in Google Maps
export const mapLink = (address: Address) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.lines.join(', '))}`;

// Embeddable Google Map for the address (no API key needed)
export const mapEmbed = (address: Address) =>
  `https://www.google.com/maps?q=${encodeURIComponent(address.lines.join(', '))}&output=embed`;

export const EMAILS = ['bdm@parqon.co.in', 'horizoninterspace@gmail.com'];

export const PHONE ='+91 96631 02951';
export const PHONE_LINK = `tel:${PHONE.replace(/\s/g, '')}`;
export const WHATSAPP_LINK = `https://wa.me/${PHONE.replace(/\D/g, '')}`;
