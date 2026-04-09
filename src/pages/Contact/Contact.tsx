// src/pages/Contact/Contact.tsx
import React from 'react';
import { Container } from '../../components/common/Container';

// Import Icons
import emailIconImg from '../../assets/icons/email.png';
import phoneIconImg from '../../assets/icons/phone.png';
import whatsappIconImg from '../../assets/icons/whatsapp.png';
import resetIconImg from '../../assets/icons/reset-arrow.png';

const ContactInfoCard = ({ title, detail, imageSrc }: { title: string; detail: string; imageSrc: string }) => (
  <div className="flex items-center justify-between w-full border border-gray-100 rounded-none p-2 pl-4 md:pl-6 bg-white group cursor-pointer transition-all hover:border-parqon-brown">
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
  </div>
);

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-white  min-h-screen pt-33 pb-32 ">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h1 className="text-dynamic-h1 font-bold text-gray-900 mb-6 tracking-tight capitalize">Get in touch</h1>
              <p className="text-gray-500 text-dynamic-body leading-relaxed max-w-md font-medium">
                A practical guide to selecting efficient, high-performance lighting systems for offices.
              </p>
            </div>

            <div className="space-y-6">
              <ContactInfoCard title="E-mail" detail="info@parqon.com" imageSrc={emailIconImg} />
              <ContactInfoCard title="Call us" detail="+91 96631 02951" imageSrc={phoneIconImg} />
              <ContactInfoCard title="Msg on Whatsapp" detail="10:00 am to 6:00 pm" imageSrc={whatsappIconImg} />
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="space-y-6">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full h-16 px-8 rounded-none border border-gray-100 bg-transparent placeholder-gray-400 focus:outline-none focus:border-parqon-brown transition-colors" 
              />
              <input 
                type="text" 
                placeholder="E-mail / Contact no." 
                className="w-full h-16 px-8 rounded-none border border-gray-100 bg-transparent placeholder-gray-400 focus:outline-none focus:border-parqon-brown transition-colors" 
              />
              <textarea 
                placeholder="Message" 
                rows={8} 
                className="w-full px-8 py-6 rounded-none border border-gray-100 bg-transparent placeholder-gray-400 focus:outline-none focus:border-parqon-brown transition-colors resize-none" 
              />

              <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-6">
                {/* RESET BUTTON GROUP */}
                <div className="flex items-stretch h-12 cursor-pointer group w-full sm:w-auto">
                  <button
                    type="reset"
                    className="bg-[#EEEEEE] px-8 flex items-center justify-center text-sm font-bold text-black tracking-wider transition-colors group-hover:bg-gray-200 rounded-none"
                  >
                    Reset
                  </button>
                  <div className="bg-[#7D774F] w-12 flex items-center justify-center transition-all rounded-none">
                    <img 
                      src={resetIconImg} 
                      alt="Reset" 
                      className="w-5 h-5 brightness-0 invert transition-transform group-hover:rotate-[-45deg]" 
                    />
                  </div>
                </div>

                {/* SUBMIT BUTTON GROUP */}
                <button type="submit" className="flex items-stretch h-12 group w-full sm:w-auto">
                  <div className="bg-[#EEEEEE] px-8 flex items-center justify-center text-sm font-bold text-black tracking-wider transition-colors group-hover:bg-white rounded-none border-y border-l border-transparent group-hover:border-gray-100">
                    Submit Inquiry
                  </div>
                  <div className="bg-[#7D774F] w-12 flex items-center justify-center transition-all group-hover:bg-[#8e875e] rounded-none">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                      <path d="M21,2.5c-0.2-0.2-0.5-0.3-0.8-0.2l-17,6c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l7.5,2.5l2.5,7.5 c0.1,0.4,0.5,0.7,0.9,0.7c0,0,0,0,0,0c0.4,0,0.8-0.3,0.9-0.7l6-17C21.3,3,21.2,2.7,21,2.5z" />
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;