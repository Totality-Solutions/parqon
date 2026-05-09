import React from 'react';
import { Container } from './Container';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#924321] mb-6 mt-14">
    {children}
  </h2>
);

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-[13px] font-bold tracking-[0.15em] uppercase text-gray-800 mb-3 mt-8">
    {children}
  </h3>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <p className="text-gray-500 text-[14px] leading-[1.9] font-medium">
    {children}
  </p>
);

const Divider = () => (
  <div className="w-full h-px bg-gray-100 my-10" />
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 mt-3">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-gray-500 text-[14px] leading-[1.9] font-medium">
        <span className="mt-[10px] w-1 h-1 rounded-full bg-[#924321] flex-shrink-0" />
        {item}
      </li>
    ))}
  </ul>
);

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-36 pb-32">
      <Container>
        <div className="max-w-2xl">

          {/* Header */}
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#924321] mb-5">
            Parqon
          </p>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
            Privacy &<br />Legal
          </h1>
          <p className="text-gray-400 text-[14px] leading-relaxed font-medium max-w-md">
            A considered approach to your data, your rights, and our commitments.
          </p>

          <Divider />

          {/* Legal */}
          <SectionTitle>Legal</SectionTitle>
          <Body>
            Access to this website signifies your agreement to these terms. If you do not agree, we advise discontinuing use.
          </Body>
          <div className="mt-5 space-y-4">
            <Body>
              All content presented—text, visuals, identity, and structure—belongs exclusively to Parqon, unless otherwise stated. It is protected and may not be reproduced, distributed, or repurposed without prior written consent. Limited personal, non-commercial viewing is permitted.
            </Body>
            <Body>
              This website is offered as a curated experience. While we aim for precision and continuity, Parqon does not guarantee uninterrupted or error-free access. We reserve the right to evolve, modify, or withdraw content at any time.
            </Body>
            <Body>
              Parqon is not liable for any direct or indirect consequences arising from the use—or inability to use—this website.
            </Body>
            <Body>
              External links may be present for reference. These exist beyond our control, and Parqon assumes no responsibility for their content or practices.
            </Body>
            <Body>
              All names, marks, and visual assets remain the intellectual property of Parqon or their respective owners. No rights are granted without explicit permission.
            </Body>
          </div>

          <Divider />

          {/* Privacy */}
          <SectionTitle>Privacy</SectionTitle>
          <Body>
            At Parqon, privacy is approached with intention. We collect only what is necessary, use it with restraint, and protect it with care.
          </Body>

          <SubTitle>What We Collect</SubTitle>

          <p className="text-gray-700 text-[13px] font-bold tracking-wide mb-2">1. Passive Data</p>
          <Body>When you visit, certain information is quietly collected:</Body>
          <BulletList items={[
            'Device and browser details',
            'IP address',
            'Interaction patterns',
            'Cookies',
          ]} />
          <p className="text-gray-400 text-[13px] leading-relaxed font-medium mt-3">
            This allows us to refine performance and elevate your experience.
          </p>

          <p className="text-gray-700 text-[13px] font-bold tracking-wide mt-6 mb-2">2. Provided Data</p>
          <Body>When you engage with us, we may receive:</Body>
          <BulletList items={[
            'Name',
            'Email',
            'Contact details',
          ]} />
          <p className="text-gray-400 text-[13px] leading-relaxed font-medium mt-3">
            This occurs through inquiries, subscriptions, or service interactions.
          </p>

          <SubTitle>How It's Used</SubTitle>
          <Body>Your information is used to:</Body>
          <BulletList items={[
            'Deliver and improve our services',
            'Respond with clarity and relevance',
            'Personalize your experience',
            'Share thoughtful updates (only when invited)',
            'Maintain integrity and security',
          ]} />

          <SubTitle>Sharing</SubTitle>
          <Body>We do not sell or trade your data.</Body>
          <p className="text-gray-500 text-[14px] leading-[1.9] font-medium mt-3">Information may be shared only:</p>
          <BulletList items={[
            'With your consent',
            'With trusted partners operating under strict confidentiality',
            'When legally required or necessary for protection',
          ]} />
          <p className="text-gray-400 text-[13px] leading-relaxed font-medium mt-3">
            We may use anonymized, aggregated insights to understand patterns and improve our work.
          </p>

          <SubTitle>Storage</SubTitle>
          <Body>
            Information may be processed across locations where Parqon or its partners operate. By engaging with us, you accept this flow of data.
          </Body>

          <SubTitle>Security</SubTitle>
          <Body>
            We maintain deliberate safeguards to protect your information. Access is limited, monitored, and handled with responsibility.
          </Body>

          <SubTitle>Your Control</SubTitle>
          <Body>You retain control over your information. You may:</Body>
          <BulletList items={[
            'Request access or updates',
            'Ask for removal, where applicable',
            'Opt out of communications at any time',
          ]} />

          <SubTitle>Cookies</SubTitle>
          <Body>
            We use cookies subtly—to remember, to understand, to improve. You may adjust or disable them through your browser settings.
          </Body>

          <SubTitle>External Presence</SubTitle>
          <Body>
            Links to external spaces may exist. Their practices are independent, and we encourage you to review them before engaging.
          </Body>

          <SubTitle>Evolution</SubTitle>
          <Body>
            This policy may evolve—quietly and thoughtfully. Updates will always be reflected here.
          </Body>

          <Divider />

          {/* Contact */}
          <SectionTitle>Contact</SectionTitle>
          <Body>For any questions or requests:</Body>
          <div className="mt-5 space-y-1">
            <p className="text-gray-900 text-[14px] font-bold tracking-wide">Parqon</p>
            <a
              href="mailto:support@parqon.com"
              className="text-[#924321] text-[14px] font-medium hover:underline underline-offset-4"
            >
              support@parqon.com
            </a>
          </div>

          <Divider />

          {/* Cookie Declaration */}
          <SectionTitle>Cookie Declaration</SectionTitle>
          <Body>
            Parqon uses cookies to shape a smoother, more considered digital experience. By continuing to browse, you accept their use.
          </Body>

        </div>
      </Container>
    </div>
  );
};
