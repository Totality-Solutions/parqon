// Quote / sample / enquiry form in a modal. Open it from anywhere with useLeadForm().open({ kind, about, details, source }).
import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { CTABtn } from '../common/CTABtn';
import { LEAD_TITLES, sendLead, type LeadContext } from '../../data/leads';
import { PHONE, PHONE_LINK, WHATSAPP_LINK } from '../../data/contact';

const LeadFormContext = createContext<{ open: (context: LeadContext) => void } | null>(null);

export const useLeadForm = () => {
  const ctx = useContext(LeadFormContext);
  if (!ctx) throw new Error('useLeadForm must be used inside <LeadFormProvider>');
  return ctx;
};

const SUBTITLE: Record<LeadContext['kind'], string> = {
  quote: 'Share your details and our team will get back to you with pricing.',
  sample: 'Tell us where to reach you and we will arrange a sample.',
  brochure: 'Share your details and we will send you the brochure.',
  enquiry: 'Tell us about your space and our specialists will get in touch.'
};

const inputClass =
  'w-full h-14 px-5 border border-gray-200 bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#837B55] transition-colors';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const LeadFormModal = ({ context, onClose }: { context: LeadContext; onClose: () => void }) => {
  const [status, setStatus] = useState<Status>('idle');
  const firstField = useRef<HTMLInputElement>(null);

  // focus the first field, close on Escape, lock page scroll while open
  useEffect(() => {
    firstField.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const field = (name: string) => String(data.get(name) ?? '').trim();
    setStatus('sending');
    try {
      await sendLead({ name: field('name'), phone: field('phone'), email: field('email'), message: field('message') }, context);
      setStatus('sent');
    } catch (err) {
      console.error('Lead form error:', err);
      setStatus('error');
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[1300] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-form-title"
        className="relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto bg-white p-6 sm:p-10"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-0 right-0 w-11 h-11 flex items-center justify-center bg-gray-900 text-white hover:bg-black transition-colors"
        >
          <X size={18} />
        </button>

        {status === 'sent' ? (
          <div className="py-10 text-center">
            <CheckCircle2 size={48} className="mx-auto text-[#837B55] mb-6" strokeWidth={1.5} />
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-3">Thank you!</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              We have received your request{context.about ? ` for ${context.about}` : ''}. Our team will contact you shortly.
            </p>
            <CTABtn label="Close" onClick={onClose} noScale />
          </div>
        ) : (
          <>
            <h2 id="lead-form-title" className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight pr-10 mb-2">
              {LEAD_TITLES[context.kind]}
            </h2>
            {context.about && (
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#924321] mb-3">{context.about}</p>
            )}
            <p className="text-gray-500 text-sm leading-relaxed mb-8">{SUBTITLE[context.kind]}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="sr-only">Name</span>
                <input ref={firstField} name="name" type="text" required autoComplete="name" placeholder="Name *" className={inputClass} />
              </label>
              <label className="block">
                <span className="sr-only">Phone number</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="[0-9+()\s-]{8,}"
                  title="Please enter a valid phone number"
                  placeholder="Phone number *"
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className="sr-only">E-mail</span>
                <input name="email" type="email" required autoComplete="email" placeholder="E-mail *" className={inputClass} />
              </label>
              <label className="block">
                <span className="sr-only">Message (optional)</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Message (optional)"
                  className="w-full px-5 py-4 border border-gray-200 bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#837B55] transition-colors resize-none"
                />
              </label>

              {status === 'error' && (
                <p className="text-sm text-red-600" role="alert">
                  Sorry, we couldn't send your request. Please try again, or call{' '}
                  <a href={PHONE_LINK} className="underline font-semibold">{PHONE}</a> /{' '}
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="underline font-semibold">WhatsApp us</a>.
                </p>
              )}

              <div className="pt-2">
                <CTABtn
                  type="submit"
                  label={status === 'sending' ? 'Sending...' : 'Submit'}
                  disabled={status === 'sending'}
                  noScale
                  block
                />
              </div>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export const LeadFormProvider = ({ children }: { children: React.ReactNode }) => {
  const [context, setContext] = useState<LeadContext | null>(null);
  const open = useCallback((c: LeadContext) => setContext(c), []);
  const close = useCallback(() => setContext(null), []);

  return (
    <LeadFormContext.Provider value={{ open }}>
      {children}
      <AnimatePresence>{context && <LeadFormModal key="lead-form" context={context} onClose={close} />}</AnimatePresence>
    </LeadFormContext.Provider>
  );
};
