

// src/components/Footer/Footer.tsx
import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Container } from '../common/Container';
import PAROONLogo from '../../assets/logo.png';
import { 
  AiOutlineInstagram, 
  AiOutlineLinkedin, 
  AiOutlineWhatsApp 
} from 'react-icons/ai';
import { RiFacebookLine } from 'react-icons/ri';

/**
 * Reusable Small Arrow component
 * Added 'active' prop to keep it visible when the route matches
 */
const SmallArrow = ({ active }: { active: boolean }) => (
  <img
    src="/icons/arrow-right.png"
    alt=""
    className={`w-3 h-3 object-contain transition-all duration-300 ${
      active 
        ? 'opacity-100 translate-x-0' 
        : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
    }`}
  />
);

/**
 * Custom NavLink sub-component
 * Uses NavLink's isActive state to apply highlighting colors
 */
const FooterNavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  // Check if this specific link is the current path
  const isLinkActive = location.pathname === to;

  return (
    <li>
      <NavLink 
        to={to} 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={({ isActive }) => `
          group flex items-center justify-start gap-2 transition-colors duration-300
          ${isActive ? 'text-[#924321]' : 'text-gray-400 hover:text-[#924321]'}
        `}
      >
        <span className="transition-colors">
          {label}
        </span>
        
        <SmallArrow active={isLinkActive} />
      </NavLink>
    </li>
  );
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-24 pb-12 transition-all duration-500 border-t border-gray-100">
      <Container>
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 lg:gap-12 items-start mb-24">
          
          {/* 1. BRANDING & LOGO */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-col items-start">
            <div 
              className="mb-14 group cursor-pointer" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img 
                src={PAROONLogo} 
                alt="PARQON" 
                className="h-12 w-auto mb-3 transition-transform duration-500 group-hover:scale-105" 
              />
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              {[
                { Icon: AiOutlineInstagram, href: "#" },
                { Icon: AiOutlineWhatsApp, href: "#" },
                { Icon: AiOutlineLinkedin, href: "#" },
                { Icon: RiFacebookLine, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="text-gray-400 hover:text-[#924321] transition-all duration-300 hover:-translate-y-1"
                >
                  <social.Icon size={26} strokeWidth={1} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. NAVIGATION LINKS */}
          <div className="md:col-span-6 lg:col-span-5 grid grid-cols-2 gap-8 lg:gap-16">
            
            {/* Column 1: Main Nav */}
            <div className="flex flex-col items-start">
              <h4 className="font-bold text-[#924321] text-dynamic-body mb-4 ">
                Menu
              </h4>
              <ul className="space-y-4 text-dynamic-body font-semibold">
                <FooterNavLink to="/" label="Home" />
                <FooterNavLink to="/about" label="About us" />
                <FooterNavLink to="/visualizer" label="Visualizer" />
                <FooterNavLink to="/contact" label="Contact us" />
              </ul>
            </div>

            {/* Column 2: Products Nav */}
            <div className="flex flex-col items-start">
              <h4 className="font-bold text-[#924321] text-dynamic-body mb-4 ">
                Products
              </h4>
              <ul className="space-y-4 text-dynamic-body font-semibold ">
                {/* Note: If these all point to "/products", they will all highlight 
                   simultaneously when you are on that page. To highlight individually, 
                   use unique paths like "/products/laminate".
                */}
                <FooterNavLink to="/products/engineered-wood" label="Engineered Wood" />
                <FooterNavLink to="/products/laminate" label="Laminate" />
                <FooterNavLink to="/products/vinyl" label="Vinyl" />
                <FooterNavLink to="/products/quartz" label="Quartz" />
              </ul>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <NavLink 
            to="/privacy" 
            className={({ isActive }) => `
              text-dynamic-small font-bold hover:underline underline-offset-4 tracking-tight
              ${isActive ? 'text-[#924321]' : 'text-gray-500'}
            `}
          >
            privacy policy.
          </NavLink>
          <div className="text-[#924321] text-dynamic-small font-semibold tracking-widest uppercase opacity-80">
            © {currentYear} TOTALITY. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};
