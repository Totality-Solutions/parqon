// // src/components/Footer/Footer.tsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container } from '../common/Container';
// import PAROONLogo from '../../assets/logo.png';
// import { 
//   AiOutlineInstagram, 
//   AiOutlineLinkedin, 
//   AiOutlineWhatsApp 
// } from 'react-icons/ai';
// import { RiFacebookLine } from 'react-icons/ri';

// /**
//  * Custom NavLink sub-component aligned to the left
//  */
// const FooterNavLink = ({ to, label }: { to: string; label: string }) => (
//   <li>
//     <Link 
//       to={to} 
//       onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//       // Changed justify-end to justify-start
//       className="group flex items-center justify-start gap-1.5 transition-colors duration-300"
//     >
//       <span className="text-gray-400 group-hover:text-gray-900 transition-colors">
//         {label}
//       </span>
//       {/* North-East Angled Hover Arrow */}
//       <span className="opacity-0 -translate-x-2 -translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
//          <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
//           <path 
//             d="M1 13L13 1M13 1H3.5M13 1V10.5" 
//             stroke="#837B55" 
//             strokeWidth="2.5" 
//             strokeLinecap="round" 
//             strokeLinejoin="round"
//           />
//         </svg>
//       </span>
//     </Link>
//   </li>
// );

// export const Footer: React.FC = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-white pt-24 pb-12 transition-all duration-500 border-t border-gray-100">
//       <Container>
//         {/* Main Footer Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 lg:gap-12 items-start mb-24">
          
//           {/* 1. BRANDING & LOGO */}
//           <div className="md:col-span-6 lg:col-span-7 flex flex-col items-start">
//             <div 
//               className="mb-14 group cursor-pointer" 
//               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//             >
//               <img src={PAROONLogo} alt="PARQON" className="h-12 w-auto mb-3 transition-transform duration-500 group-hover:scale-105" />
//             </div>

//             {/* Social Icons */}
//             <div className="flex items-center gap-6">
//               {[
//                 { Icon: AiOutlineInstagram, href: "#" },
//                 { Icon: AiOutlineWhatsApp, href: "#" },
//                 { Icon: AiOutlineLinkedin, href: "#" },
//                 { Icon: RiFacebookLine, href: "#" }
//               ].map((social, i) => (
//                 <a 
//                   key={i} 
//                   href={social.href} 
//                   className="text-gray-400 hover:text-parqon-brown transition-all duration-300 hover:-translate-y-1"
//                 >
//                   <social.Icon size={26} strokeWidth={1} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* 2. NAVIGATION LINKS - All columns aligned to the left */}
//           <div className="md:col-span-6 lg:col-span-5 grid grid-cols-2 gap-8 lg:gap-16">
            
//             {/* Column 1: Main Nav */}
//             <div className="flex flex-col items-start">
//               {/* Optional Header for Column 1 to match Column 2 */}
//               <h4 className="font-bold text-parqon-brown text-dynamic-body tracking-widest mb-4 ">
//                 Menu
//               </h4>
//               <ul className="space-y-4 text-dynamic-body tracking-wider font-semibold">
//                 <FooterNavLink to="/" label="Home" />
//                 <FooterNavLink to="/about" label="About us" />
//                 <FooterNavLink to="/visualizer" label="Visualizer" />
//                 <FooterNavLink to="/contact" label="Contact us" />
//               </ul>
//             </div>

//             {/* Column 2: Products Nav */}
//             <div className="flex flex-col items-start">
//               <h4 className="font-bold text-parqon-brown text-dynamic-body tracking-widest mb-4 ">
//                 Products
//               </h4>
//               <ul className="space-y-4 text-dynamic-body tracking-wider text-gray-400 font-semibold ">
//                 {['Engineered Wood', 'Laminate', 'Vinyl', 'Quartz'].map((item) => (
//                   <li key={item}>
//                     <Link 
//                       to="/products" 
//                       className="hover:text-gray-900 transition-colors block"
//                     >
//                       {item}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* FOOTER BOTTOM */}
//         <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
//           <Link 
//             to="/privacy" 
//             className="text-parqon-brown text-dynamic-small font-bold hover:underline underline-offset-4 tracking-tight"
//           >
//             privacy policy.
//           </Link>
//           <div className="text-parqon-brown text-dynamic-small font-semibold tracking-widest uppercase opacity-80">
//             © {currentYear} TOTALITY. All rights reserved.
//           </div>
//         </div>
//       </Container>
//     </footer>
//   );
// };



// src/components/Footer/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import PAROONLogo from '../../assets/logo.png';
import { 
  AiOutlineInstagram, 
  AiOutlineLinkedin, 
  AiOutlineWhatsApp 
} from 'react-icons/ai';
import { RiFacebookLine } from 'react-icons/ri';

/**
 * Reusable Small Arrow component matching the ProductSubmenu style
 */
const SmallArrow = () => (
  <img
    src="/icons/arrow-right.png"
    alt=""
    className="w-3 h-3 object-contain opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
  />
);

/**
 * Custom NavLink sub-component
 */
const FooterNavLink = ({ to, label }: { to: string; label: string }) => (
  <li>
    <Link 
      to={to} 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="group flex items-center justify-start gap-2 transition-colors duration-300"
    >
      {/* The animated line matching your submenu style */}
      {/* <span className="h-[1px] w-0 opacity-0 bg-gray-900 transition-all duration-300 group-hover:w-6 group-hover:opacity-100"></span> */}
      
      <span className="text-gray-400 group-hover:text-[#924321] transition-colors">
        {label}
      </span>
      
      <SmallArrow />
    </Link>
  </li>
);

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
              <img src={PAROONLogo} alt="PARQON" className="h-12 w-auto mb-3 transition-transform duration-500 group-hover:scale-105" />
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
              <h4 className="font-bold text-[#924321] text-dynamic-body  mb-4 ">
                Menu
              </h4>
              <ul className="space-y-4 text-dynamic-body  font-semibold">
                <FooterNavLink to="/" label="Home" />
                <FooterNavLink to="/about" label="About us" />
                <FooterNavLink to="/visualizer" label="Visualizer" />
                <FooterNavLink to="/contact" label="Contact us" />
              </ul>
            </div>

            {/* Column 2: Products Nav */}
            <div className="flex flex-col items-start">
              <h4 className="font-bold text-[#924321] text-dynamic-body  mb-4 ">
                Products
              </h4>
              <ul className="space-y-4 text-dynamic-body  font-semibold ">
                {['Engineered Wood', 'Laminate', 'Vinyl', 'Quartz'].map((item) => (
                  <FooterNavLink key={item} to="/products" label={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <Link 
            to="/privacy" 
            className="text-[#924321] text-dynamic-small font-bold hover:underline underline-offset-4 tracking-tight"
          >
            privacy policy.
          </Link>
          <div className="text-[#924321] text-dynamic-small font-semibold tracking-widest uppercase opacity-80">
            © {currentYear} TOTALITY. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};
