import React from 'react';
import { Gauge, Phone, MessageCircle, CheckCircle2, ShieldCheck, Cpu, Zap, Fuel, Activity } from 'lucide-react';
import speedGovSvg from '../assets/speed-governor.svg';

export default function SpeedGovernor() {
  const primaryPhone = "9979307549";
  const whatsappNumber = "919979307549";
  const whatsappMessage = encodeURIComponent("Hello MAHI ENTERPRISE, I would like to enquire about your Speed Governor solutions.");

  const sgTypes = [
    {
      title: 'Fuel-Related Solutions',
      icon: Fuel,
      desc: 'Electronic fuel solenoid valve integration regulating fuel flow when maximum preset speed limit is reached.',
      badge: 'Fuel Solenoid',
      color: 'text-brand-orange bg-orange-50 border-orange-200'
    },
    {
      title: 'Cable Controller Mechanism',
      icon: Gauge,
      desc: 'Precision mechanical actuator linked to the accelerator cable for smooth, jerk-free speed regulation.',
      badge: 'Cable Actuated',
      color: 'text-brand-blue bg-blue-50 border-blue-200'
    },
    {
      title: 'Fly-By-Wire Electronic Solutions',
      icon: Zap,
      desc: 'Direct electronic pedal interface designed for modern drive-by-wire electronic accelerator pedals without mechanical linkages.',
      badge: 'Drive-By-Wire',
      color: 'text-brand-red bg-red-50 border-red-200'
    },
    {
      title: 'Vehicle Electronic Devices',
      icon: Cpu,
      desc: 'Smart electronic control units (ECU) with tamper-proof calibration and diagnostics for commercial fleets.',
      badge: 'ECU Telematics',
      color: 'text-brand-green bg-green-50 border-green-200'
    }
  ];

  const vehicleApplications = [
    'Commercial Heavy Trucks & Trailers',
    'School & Staff Transportation Buses',
    'Light Commercial Vehicles (LCV / Pickups)',
    'Taxis, Cabs & Passenger Fleet Vehicles',
    'Hazardous Goods & Petroleum Tankers',
    'Dumpers & Mining Transit Vehicles'
  ];

  return (
    <section id="speed-governor" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-xs sm:text-sm font-bold text-brand-orange-light mb-3">
            <Gauge className="w-4 h-4" />
            <span>Speed Governor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Speed Governor <span className="text-brand-orange-light">Solutions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Engineered for optimum safety, speed limiting accuracy, and regulatory transport compliance across all categories of commercial and fleet vehicles.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Device & Architecture Visual */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-slate-800/80 rounded-2xl p-4 sm:p-6 border border-slate-700 shadow-2xl relative">
              <div className="overflow-hidden rounded-xl bg-slate-950 p-2">
                <img
                  src={speedGovSvg}
                  alt="Speed Governor Device and Actuator Mechanism by MAHI ENTERPRISE"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Standards Banner */}
              <div className="mt-4 p-3.5 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-brand-green" />
                  <span>Compliance &amp; Quality Assured</span>
                </div>
                <span className="font-semibold text-brand-orange-light">AIS Standards</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Breakdown & Types */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white">
                Comprehensive Speed Limiting Technology
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                MAHI ENTERPRISE supplies and installs high-precision Speed Limiting Devices (SLD) suited for diverse vehicle engine types. Our solutions prevent accidental overspeeding, enhance fuel efficiency, and minimize engine wear.
              </p>
            </div>

            {/* 4 Types Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sgTypes.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-brand-orange/60 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-lg ${item.color}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Vehicle Application Tags */}
            <div className="pt-2">
              <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
                Applicable For:
              </h4>
              <div className="flex flex-wrap gap-2">
                {vehicleApplications.map((app, i) => (
                  <span 
                    key={i} 
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href={`tel:${primaryPhone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-brand-orange hover:bg-orange-600 transition-all shadow-lg shadow-orange-600/30"
              >
                <Phone className="w-4 h-4" />
                <span>Call for Enquiry</span>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-brand-green hover:bg-green-700 transition-all shadow-lg shadow-green-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
