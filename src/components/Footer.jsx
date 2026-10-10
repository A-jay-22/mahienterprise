import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, ArrowUp } from 'lucide-react';
import logoSvg from '../assets/logo.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const primaryPhone = "9979307549";
  const secondaryPhone = "9924944111";
  const primaryEmail = "mahienterprise2131@gmail.com";
  const secondaryEmail = "krunaljadav2131@gmail.com";
  const whatsappNumber = "919979307549";
  const whatsappMessage = encodeURIComponent("Hello MAHI ENTERPRISE, I would like to enquire about your services.");

  return (
    <footer className="bg-brand-navy text-slate-300 relative border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white/95 p-2.5 rounded-xl inline-block shadow-sm">
              <img
                src={logoSvg}
                alt="MAHI ENTERPRISE Logo"
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              MAHI ENTERPRISE delivers certified Speed Governors, live GPS vehicle tracking systems, VLT AIS-140 compliance hardware, and vehicle telematics across Ahmedabad, Gandhinagar, and Gujarat.
            </p>

            <div className="flex items-center gap-2 text-xs text-brand-green font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>RTO &amp; Transport Regulatory Compliant</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-green-600/20 text-green-400 hover:bg-green-600 hover:text-white flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:${primaryPhone}`}
                className="w-9 h-9 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${primaryEmail}`}
                className="w-9 h-9 rounded-lg bg-orange-600/20 text-orange-400 hover:bg-orange-600 hover:text-white flex items-center justify-center transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#speed-governor" className="hover:text-brand-orange-light transition-colors">
                  Speed Governor Solutions
                </a>
              </li>
              <li>
                <a href="#gps-tracking" className="hover:text-brand-blue-light transition-colors">
                  GPS Tracking System
                </a>
              </li>
              <li>
                <a href="#vlt-gps" className="hover:text-brand-green-light transition-colors">
                  VLT AIS-140 GPS Device
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Fuel Level Monitoring
                </a>
              </li>
              <li>
                <a href="#gps-app" className="hover:text-white transition-colors">
                  Vehicle Monitoring &amp; Telematics
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Fly-By-Wire &amp; Electronic Devices
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">All Services</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Hardware Products</a></li>
              <li><a href="#certificates" className="hover:text-white transition-colors">Certificates</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Contact &amp; Hubs
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-brand-orange-light shrink-0 mt-0.5" />
                <span>Kaveri complex, Nr.Subhas Bridge, RTO Circle, Ahmedabad, Gujarat</span>
              </div>
              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-brand-green-light shrink-0 mt-0.5" />
                <span>Sec-3, RTO Gandhinagar (Kalol - N.G.), Gujarat</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-brand-blue-light shrink-0" />
                <div>
                  <a href={`tel:${primaryPhone}`} className="hover:underline">9979307549</a> / <a href={`tel:${secondaryPhone}`} className="hover:underline">9924944111</a>
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-brand-orange-light shrink-0" />
                <a href={`mailto:${primaryEmail}`} className="hover:underline break-all">{primaryEmail}</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 MAHI ENTERPRISE. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>Speed Governor &amp; GPS Tracking Solutions</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
