import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Shield, Navigation, Gauge, ChevronRight } from 'lucide-react';
import logoSvg from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'GPS Tracking', href: '#gps-tracking' },
    { name: 'Speed Governor', href: '#speed-governor' },
    { name: 'VLT GPS', href: '#vlt-gps' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  const primaryPhone = "9979307549";
  const whatsappNumber = "919979307549";
  const whatsappMessage = encodeURIComponent("Hello MAHI ENTERPRISE, I would like to enquire about your GPS Tracking / Speed Governor services.");

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
      ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5'
      : 'bg-white border-b border-slate-100 py-3.5'
      }`}>
      {/* Top micro-bar for quick contact highlights on desktop */}
      <div className="hidden lg:block bg-brand-navy text-white text-xs py-1.5 px-4 -mt-3.5 mb-2.5">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-medium">
          <div className="flex items-center space-x-6 text-slate-300">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              RTO & Transport Compliant Solutions
            </span>
            <span>Locations: Ahmedabad & Gandhinagar (Kalol - N.G.)</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-300">Sales & Support:</span>
            <a href={`tel:${primaryPhone}`} className="text-brand-orange-light hover:underline font-semibold">+91 99793 07549</a>
            <span className="text-slate-600">|</span>
            <a href="tel:9924944111" className="text-brand-blue-light hover:underline font-semibold">+91 99249 44111</a>
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center group transition-transform duration-200 ">
            <img
              src={logoSvg}
              alt="MAHI ENTERPRISE Logo - Speed Governor & GPS Tracking Solutions"
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-brand-blue hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`tel:${primaryPhone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs lg:text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all shadow-sm"
              title="Call Mahi Enterprise"
            >
              <Phone className="w-4 h-4 text-brand-blue" />
              <span>Call Now</span>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs lg:text-sm font-bold text-white bg-brand-green hover:bg-green-700 transition-all shadow-sm shadow-green-600/20"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-green-50 text-brand-green border border-green-200"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-brand-blue hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:text-brand-blue hover:bg-brand-blue-soft transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${primaryPhone}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300"
            >
              <Phone className="w-4 h-4 text-brand-blue" />
              <span>Call Now: 9979307549</span>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-white bg-brand-green hover:bg-green-700 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
