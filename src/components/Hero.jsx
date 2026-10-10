import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Gauge, MapPin, Activity, CheckCircle2 } from 'lucide-react';
import fleetTelematicsSvg from '../assets/fleet-telematics.svg';

export default function Hero() {
  const primaryPhone = "9979307549";
  const whatsappNumber = "919979307549";
  const whatsappMessage = encodeURIComponent("Hello MAHI ENTERPRISE, I would like to enquire about your GPS Tracking / Speed Governor services.");

  return (
    <section id="home" className="relative bg-gradient-to-b from-slate-900 via-brand-navy to-slate-900 text-white overflow-hidden py-12 md:py-20 lg:py-24">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none translate-y-1/3"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Content & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-semibold text-brand-orange-light shadow-inner">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              <span>Trusted Vehicle Technology Solutions</span>
            </div>

            {/* Large Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Smart Vehicle Tracking &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-orange-400 to-red-400">
                Speed Governor
              </span>{' '}
              Solutions
            </h1>

            {/* Subheading & Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Reliable GPS Tracking, Speed Governor and Vehicle Electronic Solutions for safer, compliant, and smarter transportation. Serving commercial fleets, passenger vehicles, and transport operators across Gujarat.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                <span>RTO &amp; Transport Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                <span>Real-Time Web &amp; Mobile Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                <span>Electronic &amp; Cable Speed Governors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                <span>Prompt Ahmedabad &amp; Gandhinagar Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href={`tel:${primaryPhone}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-brand-blue hover:bg-blue-600 transition-all shadow-lg shadow-blue-700/30 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-brand-green hover:bg-green-700 transition-all shadow-lg shadow-green-700/30 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 transition-all backdrop-blur-sm hover:-translate-y-0.5"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-brand-orange-light" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Visuals & Floating telemetry cards */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Visual Image / Telematics graphic */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-800/80 shadow-2xl backdrop-blur-sm group p-2">
                <img
                  src={fleetTelematicsSvg}
                  alt="MAHI ENTERPRISE Speed Governor & GPS Vehicle Fleet Telematics"
                  className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Floating Card 1: Live GPS Tracking */}
              <div className="absolute -top-6 -left-4 sm:-left-8 bg-brand-navy/95 border border-brand-blue/50 rounded-xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3 animate-float">
                <div className="p-2 rounded-lg bg-brand-blue/20 text-brand-blue-light">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Telemetry</p>
                  <p className="text-xs sm:text-sm font-extrabold text-white">Live GPS Tracking</p>
                </div>
              </div>

              {/* Floating Card 2: Speed Monitoring */}
              <div className="absolute -bottom-5 -left-2 sm:left-4 bg-brand-navy/95 border border-brand-orange/50 rounded-xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="p-2 rounded-lg bg-brand-orange/20 text-brand-orange">
                  <Gauge className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Control</p>
                  <p className="text-xs sm:text-sm font-extrabold text-white">Speed Monitoring</p>
                </div>
              </div>

              {/* Floating Card 3: Vehicle Safety */}
              <div className="absolute top-1/2 -right-3 sm:-right-6 -translate-y-1/2 bg-brand-navy/95 border border-brand-green/50 rounded-xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3 animate-float" style={{ animationDelay: '3s' }}>
                <div className="p-2 rounded-lg bg-brand-green/20 text-brand-green">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Compliance</p>
                  <p className="text-xs sm:text-sm font-extrabold text-white">Vehicle Safety</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
