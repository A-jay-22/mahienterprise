import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

export default function Contact({ prefilledService }) {
  const primaryPhone = "9979307549";
  const secondaryPhone = "9924944111";
  const primaryEmail = "mahienterprise2131@gmail.com";
  const secondaryEmail = "krunaljadav2131@gmail.com";
  const whatsappNumber = "919979307549";
  const whatsappMessage = encodeURIComponent("Hello MAHI ENTERPRISE, I would like to enquire about your services.");

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100 text-brand-blue font-semibold text-xs uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact <span className="text-brand-blue">MAHI ENTERPRISE</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Reach out directly for Speed Governor installations, GPS tracking inquiries, VLT approvals, or site visits.
          </p>
        </div>

        {/* Main Grid: Contact Info + Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">

          {/* Left Column: Official Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">

            {/* Direct Phone Numbers Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center border border-blue-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Phone Numbers</h3>
                  <p className="text-xs text-slate-500">Call for immediate support &amp; inquiries</p>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block">Primary Helpline</span>
                    <a href={`tel:${primaryPhone}`} className="text-base font-bold text-brand-blue hover:underline">
                      +91 99793 07549
                    </a>
                  </div>
                  <a
                    href={`tel:${primaryPhone}`}
                    className="p-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-brand-blue hover:text-white transition-colors"
                    aria-label="Call 9979307549"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block">Secondary Helpline</span>
                    <a href={`tel:${secondaryPhone}`} className="text-base font-bold text-slate-800 hover:text-brand-blue hover:underline">
                      +91 99249 44111
                    </a>
                  </div>
                  <a
                    href={`tel:${secondaryPhone}`}
                    className="p-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-brand-blue hover:text-white transition-colors"
                    aria-label="Call 9924944111"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Email Addresses Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center border border-orange-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Email Addresses</h3>
                  <p className="text-xs text-slate-500">Send RFPs, fleet lists &amp; queries</p>
                </div>
              </div>

              <div className="space-y-2 pt-1 text-sm">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="truncate">
                    <span className="text-[11px] font-semibold text-slate-400 block">General Inquiries</span>
                    <a href={`mailto:${primaryEmail}`} className="font-semibold text-slate-800 hover:text-brand-blue hover:underline break-all">
                      {primaryEmail}
                    </a>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="truncate">
                    <span className="text-[11px] font-semibold text-slate-400 block">Technical Contact</span>
                    <a href={`mailto:${secondaryEmail}`} className="font-semibold text-slate-800 hover:text-brand-blue hover:underline break-all">
                      {secondaryEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Physical Locations Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-green-50 text-brand-green flex items-center justify-center border border-green-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Office &amp; Hub Locations</h3>
                  <p className="text-xs text-slate-500">Strategic RTO accessibility in Gujarat</p>
                </div>
              </div>

              <div className="space-y-3 pt-1">
                {/* Location 1: Ahmedabad */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-blue mt-1.5 shrink-0"></div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Ahmedabad RTO Hub</h4>
                    <p className="text-xs text-slate-600 mt-0.5 font-medium">
                      Kaveri complex, Nr.Subhas Bridge, RTO Circle, Ahmedabad, Gujarat
                    </p>
                  </div>
                </div>

                {/* Location 2: Gandhinagar / Kalol */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-orange mt-1.5 shrink-0"></div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Gandhinagar &amp; Kalol Hub</h4>
                    <p className="text-xs text-slate-600 mt-0.5 font-medium">
                      Sec-3, RTO Gandhinagar (Kalol - N.G.), Gujarat
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm prefilledService={prefilledService} />
          </div>

        </div>

        {/* Location Maps & Navigation Section */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-soft overflow-hidden p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Our Operational Service Areas</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Serving all vehicle owners across Ahmedabad RTO Circle, Gandhinagar, Kalol, and surrounding transport corridors.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Subhash+Bridge+RTO+Circle+Ahmedabad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-brand-blue bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors shrink-0"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* Map Embed Frame */}
          <div className="w-full h-80 rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 relative">
            <iframe
              title="MAHI ENTERPRISE Service Locations Map - Ahmedabad & Gandhinagar"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14682.385352355554!2d72.57008746768164!3d23.067006846174987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84860b76922d%3A0xe54ef4df6b0461ae!2sSubhash%20Bridge%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-800">1. Ahmedabad Service Point</span>
                <p className="text-xs text-slate-500">Kaveri complex, Nr.Subhas Bridge, RTO Circle</p>
              </div>
              <a
                href="https://maps.google.com/?q=Subhash+Bridge+RTO+Circle+Ahmedabad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-brand-blue hover:underline"
              >
                Directions →
              </a>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-800">2. Gandhinagar / Kalol Point</span>
                <p className="text-xs text-slate-500">Sec-3, RTO Gandhinagar</p>
              </div>
              <a
                href="https://maps.google.com/?q=Sector+3+Gandhinagar+Gujarat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-brand-blue hover:underline"
              >
                Directions →
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
