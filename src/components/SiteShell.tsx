'use client';
// Header, footer and the lead form around every website page
import React from 'react';
import { Navbar } from './Navbar/Navbar';
import { Footer } from './Footer/Footer';
import { LeadFormProvider } from './lead/LeadForm';

export const SiteShell = ({ children }: { children: React.ReactNode }) => (
  <LeadFormProvider>
    <Navbar />
    {children}
    <Footer />
  </LeadFormProvider>
);
