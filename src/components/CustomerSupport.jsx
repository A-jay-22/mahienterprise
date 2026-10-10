import React from 'react';
import { Phone, MessageCircle, Send, Headphones, ArrowRight } from 'lucide-react';

export default function CustomerSupport() {
  const primaryPhone = "9979307549";
  const whatsappNumber = "919979307549";
  const whatsappMessage = encodeURIComponent("Hello MAHI ENTERPRISE, I would like to speak with your support team regarding vehicle tracking / speed governors.");

  const scrollToEnquiry = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-blue/20 border border-brand-blue/40 text-xs sm:text-sm font-bold text-brand-blue-light mb-3">
            <Headphones className="w-4 h-4" />
            <span>Dedicated Assistance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Need Help With <span className="text-brand-orange-light">Your Vehicle?</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Our team is ready to help you choose the right GPS tracking or Speed Governor solution.
          </p>
        </div>

        {/* 3 Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Call Us */}
          <div className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl flex flex-col justify-between hover:border-brand-blue/60 transition-all group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-brand-blue/20 text-brand-blue-light flex items-center justify-center border border-brand-blue/30 mb-5 group-hover:scale-105 transition-transform">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Speak directly with our technical team for immediate guidance, fitting schedules, and pricing.
              </p>
              <div className="mt-4 text-xs font-semibold text-brand-orange-light">
                +91 99793 07549 / 99249 44111
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700">
              <a
                href={`tel:${primaryPhone}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-brand-blue hover:bg-blue-600 text-white transition-all shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl flex flex-col justify-between hover:border-brand-green/60 transition-all group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-brand-green/20 text-brand-green-light flex items-center justify-center border border-brand-green/30 mb-5 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Send your enquiry instantly on WhatsApp with vehicle details or location for quick quotes.
              </p>
              <div className="mt-4 text-xs font-semibold text-brand-green-light">
                Instant Chat &amp; Document Sharing
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-brand-green hover:bg-green-700 text-white transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 3: Send Enquiry */}
          <div className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl flex flex-col justify-between hover:border-brand-orange/60 transition-all group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-brand-orange/20 text-brand-orange-light flex items-center justify-center border border-brand-orange/30 mb-5 group-hover:scale-105 transition-transform">
                <Send className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Send Enquiry</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Fill out the enquiry form with your requirements and we will prepare a customized quote for your fleet.
              </p>
              <div className="mt-4 text-xs font-semibold text-brand-orange-light">
                Prompt Response Guarantee
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700">
              <button
                onClick={scrollToEnquiry}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-brand-orange hover:bg-orange-600 text-white transition-all shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Open Enquiry Form</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
