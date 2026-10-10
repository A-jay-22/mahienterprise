import React from 'react';
import { Phone, MessageCircle, Send } from 'lucide-react';

export default function FloatingActions() {
  const primaryPhone = "9979307549";
  const whatsappNumber = "919979307549";
  const whatsappMessage = encodeURIComponent("Hello MAHI ENTERPRISE, I would like to enquire about your GPS Tracking / Speed Governor services.");

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Floating WhatsApp Button (bottom right) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40 group">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-brand-green hover:bg-green-700 text-white shadow-2xl hover:shadow-green-600/50 transition-all duration-300 transform hover:-translate-y-1"
          aria-label="Chat with MAHI ENTERPRISE on WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-brand-green animate-ping"></span>
          </div>
          <span className="font-bold text-sm pr-1">Chat with Us</span>
        </a>
      </div>

      {/* Mobile Bottom Fixed Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-200 shadow-2xl py-2 px-3">
        <div className="grid grid-cols-3 gap-2">
          {/* Call button */}
          <a
            href={`tel:${primaryPhone}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 text-slate-800 active:bg-slate-200 border border-slate-200 text-center font-bold text-xs"
          >
            <Phone className="w-4 h-4 text-brand-blue mb-0.5" />
            <span>Call</span>
          </a>

          {/* WhatsApp button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brand-green text-white active:bg-green-700 text-center font-bold text-xs shadow-sm"
          >
            <MessageCircle className="w-4 h-4 mb-0.5" />
            <span>WhatsApp</span>
          </a>

          {/* Enquire button */}
          <button
            onClick={scrollToContact}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brand-blue text-white active:bg-blue-700 text-center font-bold text-xs shadow-sm"
          >
            <Send className="w-4 h-4 mb-0.5" />
            <span>Enquire</span>
          </button>
        </div>
      </div>
    </>
  );
}
