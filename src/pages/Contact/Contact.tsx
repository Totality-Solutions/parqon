// // // src/pages/Contact/Contact.tsx
// // import React from 'react';
// // import { Container } from '../../components/common/Container';

// // // Import Icons
// // import emailIconImg from '../../assets/icons/email.png';
// // import phoneIconImg from '../../assets/icons/phone.png';
// // import whatsappIconImg from '../../assets/icons/whatsapp.png';
// // import resetIconImg from '../../assets/icons/reset-arrow.png';

// // const ContactInfoCard = ({ title, detail, imageSrc }: { title: string; detail: string; imageSrc: string }) => (
// //   <div className="flex items-center justify-between w-full border border-gray-100 rounded-none p-2 pl-4 md:pl-6 bg-white group cursor-pointer transition-all hover:border-parqon-brown">
// //     <div className="flex items-center gap-4 md:gap-6">
// //       <div className="w-12 h-12 md:w-14 md:h-14 rounded-none bg-[#837B55] flex items-center justify-center overflow-hidden">
// //         <img 
// //           src={imageSrc} 
// //           alt={title} 
// //           className="w-6 h-6 md:w-7 md:h-7 object-contain brightness-0 invert" 
// //         />
// //       </div>
// //       <div>
// //         <h4 className="text-[14px] md:text-[16px] font-bold text-gray-900 leading-tight tracking-tight">
// //           {title}
// //         </h4>
// //         <p className="text-[13px] md:text-[15px] text-gray-500 font-medium lowercase">
// //           {detail}
// //         </p>
// //       </div>
// //     </div>

// //     <div className="w-8 h-8 md:w-10 md:h-10 rounded-none bg-[#837B55] flex items-center justify-center mr-2 md:mr-3 transition-transform group-hover:translate-x-1">
// //       <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white rotate-[15deg]">
// //         <path d="M21,2.5c-0.2-0.2-0.5-0.3-0.8-0.2l-17,6c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l7.5,2.5l2.5,7.5 c0.1,0.4,0.5,0.7,0.9,0.7c0,0,0,0,0,0c0.4,0,0.8-0.3,0.9-0.7l6-17C21.3,3,21.2,2.7,21,2.5z" />
// //       </svg>
// //     </div>
// //   </div>
// // );

// // export const ContactPage: React.FC = () => {
// //   return (
// //     <div className="bg-white  min-h-screen pt-33 pb-32 ">
// //       <Container>
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
// //           <div className="lg:col-span-5 space-y-12">
// //             <div>
// //               <h1 className="text-dynamic-h1 font-bold text-gray-900 mb-6 tracking-tight capitalize">Get in touch</h1>
// //               <p className="text-gray-500 text-dynamic-body leading-relaxed max-w-md font-medium">
// //                 A practical guide to selecting efficient, high-performance lighting systems for offices.
// //               </p>
// //             </div>

// //             <div className="space-y-6">
// //               <ContactInfoCard title="E-mail" detail="info@parqon.com" imageSrc={emailIconImg} />
// //               <ContactInfoCard title="Call us" detail="+91 96631 02951" imageSrc={phoneIconImg} />
// //               <ContactInfoCard title="Msg on Whatsapp" detail="10:00 am to 6:00 pm" imageSrc={whatsappIconImg} />
// //             </div>
// //           </div>

// //           <div className="lg:col-span-7">
// //             <form className="space-y-6">
// //               <input 
// //                 type="text" 
// //                 placeholder="Name" 
// //                 className="w-full h-16 px-8 rounded-none border border-gray-100 bg-transparent placeholder-gray-400 focus:outline-none focus:border-parqon-brown transition-colors" 
// //               />
// //               <input 
// //                 type="text" 
// //                 placeholder="E-mail / Contact no." 
// //                 className="w-full h-16 px-8 rounded-none border border-gray-100 bg-transparent placeholder-gray-400 focus:outline-none focus:border-parqon-brown transition-colors" 
// //               />
// //               <textarea 
// //                 placeholder="Message" 
// //                 rows={8} 
// //                 className="w-full px-8 py-6 rounded-none border border-gray-100 bg-transparent placeholder-gray-400 focus:outline-none focus:border-parqon-brown transition-colors resize-none" 
// //               />

// //               <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-6">
// //                 {/* RESET BUTTON GROUP */}
// //                 <div className="flex items-stretch h-12 cursor-pointer group w-full sm:w-auto">
// //                   <button
// //                     type="reset"
// //                     className="bg-[#EEEEEE] px-8 flex items-center justify-center text-sm font-bold text-black tracking-wider transition-colors group-hover:bg-gray-200 rounded-none"
// //                   >
// //                     Reset
// //                   </button>
// //                   <div className="bg-[#7D774F] w-12 flex items-center justify-center transition-all rounded-none">
// //                     <img 
// //                       src={resetIconImg} 
// //                       alt="Reset" 
// //                       className="w-5 h-5 brightness-0 invert transition-transform group-hover:rotate-[-45deg]" 
// //                     />
// //                   </div>
// //                 </div>

// //                 {/* SUBMIT BUTTON GROUP */}
// //                 <button type="submit" className="flex items-stretch h-12 group w-full sm:w-auto">
// //                   <div className="bg-[#EEEEEE] px-8 flex items-center justify-center text-sm font-bold text-black tracking-wider transition-colors group-hover:bg-white rounded-none border-y border-l border-transparent group-hover:border-gray-100">
// //                     Submit Inquiry
// //                   </div>
// //                   <div className="bg-[#7D774F] w-12 flex items-center justify-center transition-all group-hover:bg-[#8e875e] rounded-none">
// //                     <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
// //                       <path d="M21,2.5c-0.2-0.2-0.5-0.3-0.8-0.2l-17,6c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l7.5,2.5l2.5,7.5 c0.1,0.4,0.5,0.7,0.9,0.7c0,0,0,0,0,0c0.4,0,0.8-0.3,0.9-0.7l6-17C21.3,3,21.2,2.7,21,2.5z" />
// //                     </svg>
// //                   </div>
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       </Container>
// //     </div>
// //   );
// // };

// // export default ContactPage;

// // import React, { useState, useRef } from 'react';
// // import emailjs from '@emailjs/browser';
// // import { Container } from '../../components/common/Container';

// // // Import Icons
// // import emailIconImg from '../../assets/icons/email.png';
// // import phoneIconImg from '../../assets/icons/phone.png';
// // import whatsappIconImg from '../../assets/icons/whatsapp.png';
// // import resetIconImg from '../../assets/icons/reset-arrow.png';

// // // --- Sub-component for Info Cards ---
// // const ContactInfoCard = ({ title, detail, imageSrc }: { title: string; detail: string; imageSrc: string }) => (
// //   <div className="flex items-center justify-between w-full border border-gray-100 rounded-none p-2 pl-4 md:pl-6 bg-white group cursor-pointer transition-all hover:border-[#837B55]">
// //     <div className="flex items-center gap-4 md:gap-6">
// //       <div className="w-12 h-12 md:w-14 md:h-14 rounded-none bg-[#837B55] flex items-center justify-center overflow-hidden">
// //         <img 
// //           src={imageSrc} 
// //           alt={title} 
// //           className="w-6 h-6 md:w-7 md:h-7 object-contain brightness-0 invert" 
// //         />
// //       </div>
// //       <div>
// //         <h4 className="text-[14px] md:text-[16px] font-bold text-gray-900 leading-tight tracking-tight">
// //           {title}
// //         </h4>
// //         <p className="text-[13px] md:text-[15px] text-gray-500 font-medium lowercase">
// //           {detail}
// //         </p>
// //       </div>
// //     </div>
// //     <div className="w-8 h-8 md:w-10 md:h-10 rounded-none bg-[#837B55] flex items-center justify-center mr-2 md:mr-3 transition-transform group-hover:translate-x-1">
// //       <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white rotate-[15deg]">
// //         <path d="M21,2.5c-0.2-0.2-0.5-0.3-0.8-0.2l-17,6c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l7.5,2.5l2.5,7.5 c0.1,0.4,0.5,0.7,0.9,0.7c0,0,0,0,0,0c0.4,0,0.8-0.3,0.9-0.7l6-17C21.3,3,21.2,2.7,21,2.5z" />
// //       </svg>
// //     </div>
// //   </div>
// // );

// // // --- Main Page Component ---
// // export const ContactPage: React.FC = () => {
// //   const formRef = useRef<HTMLFormElement>(null);
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     // Your confirmed EmailJS IDs
// //     const SERVICE_ID = "service_2rdde1h"; 
// //     const TEMPLATE_ID = "template_znrwxdi";
// //     const PUBLIC_KEY = "vQgZ8a61Cat3WwNDv";

// //     if (formRef.current) {
// //       emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
// //         .then(() => {
// //           alert("Success! Your message has been sent to ujjwalbytes@gmail.com.");
// //           formRef.current?.reset();
// //         })
// //         .catch((error) => {
// //           console.error("EmailJS Error:", error);
// //           alert("Oops! Something went wrong. Check the console for details.");
// //         })
// //         .finally(() => setLoading(false));
// //     }
// //   };

// //   return (
// //     <div className="bg-white min-h-screen pt-32 pb-32">
// //       <Container>
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
// //           {/* Left Side: Contact Info */}
// //           <div className="lg:col-span-5 space-y-12">
// //             <div>
// //               <h1 className="text-dynamic-h1 font-bold text-gray-900 mb-6 tracking-tight capitalize">Get in touch</h1>
// //               <p className="text-gray-500 text-dynamic-body leading-relaxed max-w-md font-medium">
// //                 Whether you have a question about our lighting systems or need technical support, our team is ready to help.
// //               </p>
// //             </div>
// //             <div className="space-y-6">
// //               <ContactInfoCard title="E-mail" detail="info@parqon.com" imageSrc={emailIconImg} />
// //               <ContactInfoCard title="Call us" detail="+91 96631 02951" imageSrc={phoneIconImg} />
// //               <ContactInfoCard title="Msg on Whatsapp" detail="10:00 am to 6:00 pm" imageSrc={whatsappIconImg} />
// //             </div>
// //           </div>

// //           {/* Right Side: Form */}
// //           <div className="lg:col-span-7">
// //             <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
// //               <input 
// //                 name="user_name" 
// //                 type="text" 
// //                 required
// //                 placeholder="Name" 
// //                 className="w-full h-16 px-8 rounded-none border border-gray-100 bg-transparent placeholder-gray-400 focus:outline-none focus:border-[#837B55] transition-colors" 
// //               />
// //               <input 
// //                 name="user_contact" 
// //                 type="text" 
// //                 required
// //                 placeholder="E-mail / Contact no." 
// //                 className="w-full h-16 px-8 rounded-none border border-gray-100 bg-transparent placeholder-gray-400 focus:outline-none focus:border-[#837B55] transition-colors" 
// //               />
// //               <textarea 
// //                 name="message"
// //                 placeholder="Message" 
// //                 required
// //                 rows={8} 
// //                 className="w-full px-8 py-6 rounded-none border border-gray-100 bg-transparent placeholder-gray-400 focus:outline-none focus:border-[#837B55] transition-colors resize-none" 
// //               />

// //               <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-6">
                
// //                 {/* Reset Button */}
// //                 <div className="flex items-stretch h-12 cursor-pointer group w-full sm:w-auto">
// //                   <button
// //                     type="reset"
// //                     disabled={loading}
// //                     className="bg-[#EEEEEE] px-8 flex items-center justify-center text-sm font-bold text-black tracking-wider transition-colors group-hover:bg-gray-200 rounded-none w-full"
// //                   >
// //                     Reset
// //                   </button>
// //                   <div className="bg-[#7D774F] w-12 flex items-center justify-center transition-all rounded-none">
// //                     <img 
// //                       src={resetIconImg} 
// //                       alt="Reset" 
// //                       className="w-5 h-5 brightness-0 invert transition-transform group-hover:rotate-[-45deg]" 
// //                     />
// //                   </div>
// //                 </div>

// //                 {/* Submit Button */}
// //                 <button 
// //                   type="submit" 
// //                   disabled={loading}
// //                   className={`flex items-stretch h-12 group w-full sm:w-auto ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
// //                 >
// //                   <div className="bg-[#EEEEEE] px-8 flex items-center justify-center text-sm font-bold text-black tracking-wider transition-colors group-hover:bg-white rounded-none border-y border-l border-transparent group-hover:border-gray-100">
// //                     {loading ? 'Sending...' : 'Submit Inquiry'}
// //                   </div>
// //                   <div className="bg-[#7D774F] w-12 flex items-center justify-center transition-all group-hover:bg-[#8e875e] rounded-none">
// //                     <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
// //                       <path d="M21,2.5c-0.2-0.2-0.5-0.3-0.8-0.2l-17,6c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l7.5,2.5l2.5,7.5 c0.1,0.4,0.5,0.7,0.9,0.7c0,0,0,0,0,0c0.4,0,0.8-0.3,0.9-0.7l6-17C21.3,3,21.2,2.7,21,2.5z" />
// //                     </svg>
// //                   </div>
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       </Container>
// //     </div>
// //   );
// // };

// // export default ContactPage;



// import React, { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { Container } from '../../components/common/Container';

// // Import Icons
// import emailIconImg from '../../assets/icons/email.png';
// import phoneIconImg from '../../assets/icons/phone.png';
// import whatsappIconImg from '../../assets/icons/whatsapp.png';
// import resetIconImg from '../../assets/icons/reset-arrow.png';

// const ContactInfoCard = ({ title, detail, imageSrc }: { title: string; detail: string; imageSrc: string }) => (
//   <div className="flex items-center justify-between w-full border border-gray-100 rounded-none p-2 pl-4 md:pl-6 bg-white group cursor-pointer transition-all hover:border-[#837B55]">
//     <div className="flex items-center gap-4 md:gap-6">
//       <div className="w-12 h-12 md:w-14 md:h-14 rounded-none bg-[#837B55] flex items-center justify-center overflow-hidden">
//         <img 
//           src={imageSrc} 
//           alt={title} 
//           className="w-6 h-6 md:w-7 md:h-7 object-contain brightness-0 invert" 
//         />
//       </div>
//       <div>
//         <h4 className="text-[14px] md:text-[16px] font-bold text-gray-900 leading-tight tracking-tight">
//           {title}
//         </h4>
//         <p className="text-[13px] md:text-[15px] text-gray-500 font-medium lowercase">
//           {detail}
//         </p>
//       </div>
//     </div>
//     <div className="w-8 h-8 md:w-10 md:h-10 rounded-none bg-[#837B55] flex items-center justify-center mr-2 md:mr-3 transition-transform group-hover:translate-x-1">
//       <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white rotate-[15deg]">
//         <path d="M21,2.5c-0.2-0.2-0.5-0.3-0.8-0.2l-17,6c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l7.5,2.5l2.5,7.5 c0.1,0.4,0.5,0.7,0.9,0.7c0,0,0,0,0,0c0.4,0,0.8-0.3,0.9-0.7l6-17C21.3,3,21.2,2.7,21,2.5z" />
//       </svg>
//     </div>
//   </div>
// );

// export const ContactPage: React.FC = () => {
//   const formRef = useRef<HTMLFormElement>(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     // const SERVICE_ID = "service_2rdde1h"; 
//     // const TEMPLATE_ID = "template_bt9z4ah";
//     // const PUBLIC_KEY = "vQgZ8a61Cat3WwNDv";`



//      const SERVICE_ID = "service_2rdde1h"; 
//      const TEMPLATE_ID = "template_znrwxdi";
//     const PUBLIC_KEY = "vQgZ8a61Cat3WwNDv";

//     if (formRef.current) {
//       // 1. Manually create the date string
//       const currentDate = new Date().toLocaleString('en-IN', {
//         day: '2-digit',
//         month: 'short',
//         year: 'numeric',
//         hour: '2-digit',
//         minute: '2-digit',
//         hour12: true
//       });

//       // 2. Prepare the data object (keys must match your {{template_variables}})
//       const templateParams = {
//         user_name: formRef.current.user_name.value,
//         user_contact: formRef.current.user_contact.value,
//         message: formRef.current.message.value,
//         date: currentDate, // This maps to {{date}} in your HTML
//       };

//       // 3. Send via emailjs.send (better for custom objects)
//       emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
//         .then(() => {
//           alert("Success! Your message has been sent.");
//           formRef.current?.reset();
//         })
//         .catch((error) => {
//           console.error("EmailJS Error:", error);
//           alert("Failed to send message. Check console.");
//         })
//         .finally(() => setLoading(false));
//     }
//   };

//   return (
//     <div className="bg-white min-h-screen pt-32 pb-32">
//       <Container>
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
//           <div className="lg:col-span-5 space-y-12">
//             <div>
//               <h1 className="text-dynamic-h1 font-bold text-gray-900 mb-6 tracking-tight capitalize">Get in touch</h1>
//               <p className="text-gray-500 text-dynamic-body leading-relaxed max-w-md font-medium">
//                 Our team is ready to provide expert guidance on your architectural flooring needs.
//               </p>
//             </div>
//             <div className="space-y-6">
//               <ContactInfoCard title="E-mail" detail="info@parqon.com" imageSrc={emailIconImg} />
//               <ContactInfoCard title="Call us" detail="+91 96631 02951" imageSrc={phoneIconImg} />
//               <ContactInfoCard title="Msg on Whatsapp" detail="10:00 am to 6:00 pm" imageSrc={whatsappIconImg} />
//             </div>
//           </div>

//           <div className="lg:col-span-7">
//             <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
//               <input 
//                 name="user_name" 
//                 type="text" 
//                 required
//                 placeholder="Name" 
//                 className="w-full h-16 px-8 rounded-none border border-gray-100 bg-transparent focus:outline-none focus:border-[#837B55] transition-colors" 
//               />
//               <input 
//                 name="user_contact" 
//                 type="text" 
//                 required
//                 placeholder="E-mail / Contact no." 
//                 className="w-full h-16 px-8 rounded-none border border-gray-100 bg-transparent focus:outline-none focus:border-[#837B55] transition-colors" 
//               />
//               <textarea 
//                 name="message"
//                 placeholder="Message" 
//                 required
//                 rows={8} 
//                 className="w-full px-8 py-6 rounded-none border border-gray-100 bg-transparent focus:outline-none focus:border-[#837B55] transition-colors resize-none" 
//               />

//              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
  
//   {/* Reset Button Container */}
//   <div className="group flex h-12 w-full cursor-pointer items-stretch sm:w-auto">
//     <button
//       type="reset"
//       className="flex flex-1 items-center justify-center bg-[#EEEEEE] px-8 text-dynamic-body font-semibold tracking-wider text-black transition-colors group-hover:bg-gray-200 sm:flex-none sm:min-w-[160px]"
//     >
//       Reset
//     </button>
//     <div className="flex w-14 items-center justify-center bg-[#7D774F] transition-colors group-hover:bg-[#8e875e]">
//       <img
//         src={resetIconImg}
//         alt="Reset"
//         className="h-5 w-5 brightness-0 invert transition-transform duration-300 group-hover:rotate-[-45deg]"
//       />
//     </div>
//   </div>

//   {/* Submit Button Container */}
//   <button
//     type="submit"
//     disabled={loading}
//     className={`group flex h-12 w-full items-stretch transition-opacity sm:w-auto ${
//       loading ? "opacity-50" : "opacity-100"
//     }`}
//   >
//     <div className="flex flex-1 items-center justify-center bg-[#EEEEEE] px-8 text-dynamic-body font-semibold tracking-wider text-black transition-colors group-hover:bg-gray-200 sm:flex-none sm:min-w-[180px]">
//       {loading ? "Sending..." : "Submit Inquiry"}
//     </div>
//     <div className="flex w-14 items-center justify-center bg-[#7D774F] transition-colors group-hover:bg-[#8e875e]">
//       <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
//         <path d="M21,2.5c-0.2-0.2-0.5-0.3-0.8-0.2l-17,6c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l7.5,2.5l2.5,7.5 c0.1,0.4,0.5,0.7,0.9,0.7c0,0,0,0,0,0c0.4,0,0.8-0.3,0.9-0.7l6-17C21.3,3,21.2,2.7,21,2.5z" />
//       </svg>
//     </div>
//   </button>
  
// </div>
//             </form>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default ContactPage;

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion'; // Added motion
import { Container } from '../../components/common/Container';

// Import Icons
import emailIconImg from '../../assets/icons/email.png';
import phoneIconImg from '../../assets/icons/phone.png';
import whatsappIconImg from '../../assets/icons/whatsapp.png';
import resetIconImg from '../../assets/icons/reset-arrow.png';

const ContactInfoCard = ({ title, detail, imageSrc, index }: { title: string; detail: string; imageSrc: string, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
    className="flex items-center justify-between w-full border border-gray-100 rounded-none p-2 pl-4 md:pl-6 bg-white group cursor-pointer transition-all hover:border-[#837B55]"
  >
    <div className="flex items-center gap-4 md:gap-6">
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-none bg-[#837B55] flex items-center justify-center overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-6 h-6 md:w-7 md:h-7 object-contain brightness-0 invert" 
        />
      </div>
      <div>
        <h4 className="text-[14px] md:text-[16px] font-bold text-gray-900 leading-tight tracking-tight">
          {title}
        </h4>
        <p className="text-[13px] md:text-[15px] text-gray-500 font-medium lowercase">
          {detail}
        </p>
      </div>
    </div>
    <div className="w-8 h-8 md:w-10 md:h-10 rounded-none bg-[#837B55] flex items-center justify-center mr-2 md:mr-3 transition-transform group-hover:translate-x-1">
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white rotate-[15deg]">
        <path d="M21,2.5c-0.2-0.2-0.5-0.3-0.8-0.2l-17,6c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l7.5,2.5l2.5,7.5 c0.1,0.4,0.5,0.7,0.9,0.7c0,0,0,0,0,0c0.4,0,0.8-0.3,0.9-0.7l6-17C21.3,3,21.2,2.7,21,2.5z" />
      </svg>
    </div>
  </motion.div>
);

export const ContactPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = "service_2rdde1h"; 
    const TEMPLATE_ID = "template_znrwxdi";
    const PUBLIC_KEY = "vQgZ8a61Cat3WwNDv";

    if (formRef.current) {
      const currentDate = new Date().toLocaleString('en-IN', {
        day: '2-digit', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit', hour12: true
      });

      const templateParams = {
        user_name: formRef.current.user_name.value,
        user_contact: formRef.current.user_contact.value,
        message: formRef.current.message.value,
        date: currentDate,
      };

      emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
        .then(() => {
          setSent(true);
          setTimeout(() => setSent(false), 5000); // Reset success message after 5s
          formRef.current?.reset();
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
            >
              <h1 className="text-dynamic-h1 font-bold text-gray-900 mb-6 tracking-tight capitalize">Get in touch</h1>
              <p className="text-gray-500 text-dynamic-body leading-relaxed max-w-md font-medium">
                Connect with our specialists today to bring the warmth and character of natural wood to your next project.
              </p>
            </motion.div>

            <div className="space-y-6">
              <ContactInfoCard index={0} title="E-mail" detail="info@parqon.com" imageSrc={emailIconImg} />
              <ContactInfoCard index={1} title="Call us" detail="+91 96631 02951" imageSrc={phoneIconImg} />
              <ContactInfoCard index={2} title="Msg on Whatsapp" detail="10:00 am to 6:00 pm" imageSrc={whatsappIconImg} />
            </div>
          </div>

          {/* Right Side: Form with Ripple Animation */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: "user_name", placeholder: "Name", type: "text" },
                { name: "user_contact", placeholder: "E-mail / Contact no.", type: "text" }
              ].map((field, idx) => (
                <motion.input 
                  key={field.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  name={field.name} 
                  type={field.type} 
                  required
                  placeholder={field.placeholder} 
                  className="w-full h-16 px-8 rounded-none border border-gray-100 bg-transparent focus:outline-none focus:border-[#837B55] transition-colors" 
                />
              ))}
              
              <motion.textarea 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                name="message"
                placeholder="Message" 
                required
                rows={8} 
                className="w-full px-8 py-6 rounded-none border border-gray-100 bg-transparent focus:outline-none focus:border-[#837B55] transition-colors resize-none" 
              />

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
                {/* Reset Button */}
                <div className="group flex h-12 w-full cursor-pointer items-stretch sm:w-auto">
                  <button
                    type="reset"
                    className="flex flex-1 items-center justify-center bg-[#EEEEEE] px-8 text-dynamic-body font-semibold tracking-wider text-black transition-colors group-hover:bg-gray-200 sm:flex-none sm:min-w-[160px]"
                  >
                    Reset
                  </button>
                  <div className="flex w-14 items-center justify-center bg-[#7D774F] transition-colors group-hover:bg-[#8e875e]">
                    <img
                      src={resetIconImg}
                      alt="Reset"
                      className="h-5 w-5 brightness-0 invert transition-transform duration-300 group-hover:rotate-[-45deg]"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`group flex h-12 w-full items-stretch transition-all sm:w-auto ${loading ? "opacity-50" : "opacity-100"}`}
                >
                  <div className="flex flex-1 items-center justify-center bg-[#EEEEEE] px-8 text-dynamic-body font-semibold tracking-wider text-black transition-colors group-hover:bg-gray-200 sm:flex-none sm:min-w-[180px]">
                    {loading ? "Sending..." : "Submit Inquiry"}
                  </div>
                  <div className="flex w-14 items-center justify-center bg-[#7D774F] transition-colors group-hover:bg-[#8e875e]">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <path d="M21,2.5c-0.2-0.2-0.5-0.3-0.8-0.2l-17,6c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l7.5,2.5l2.5,7.5 c0.1,0.4,0.5,0.7,0.9,0.7c0,0,0,0,0,0c0.4,0,0.8-0.3,0.9-0.7l6-17C21.3,3,21.2,2.7,21,2.5z" />
                    </svg>
                  </div>
                </button>
              </div>

              {/* Success Message Overlay */}
              <AnimatePresence>
                {sent && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-[#7D774F] font-bold text-sm text-center sm:text-right mt-4"
                  >
                    Success! Your message has been sent.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;