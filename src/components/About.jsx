import React from 'react';
import { ShieldCheck, CheckCircle2, MapPin, Phone, Mail, Award, ArrowUpRight } from 'lucide-react';
import businessCardSvg from '../assets/business-card.svg';

export default function About() {
  const primaryPhone = "9979307549";

  const features = [
    {
      title: 'Speed Governor Technology',
      description: 'Fuel-based, cable-type, and fly-by-wire electronic speed limiting solutions.'
    },
    {
      title: 'Advanced GPS Telematics',
      description: 'Real-time positioning, overspeed alerts, geo-fencing, and history playback.'
    },
    {
      title: 'VLT GPS Compliance',
      description: 'Government standard vehicle tracking devices for transport fitness requirements.'
    },
    {
      title: 'Dedicated Local Support',
      description: 'Direct assistance across Ahmedabad (Subhas Bridge RTO Circle) and Gandhinagar / Kalol.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative subtle background elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100 text-brand-blue font-semibold text-xs uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Company Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About <span className="text-brand-blue">Mahi Enterprise</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            MAHI ENTERPRISE provides vehicle technology solutions including Speed Governors, GPS Tracking Systems, VLT solutions, and electronic vehicle devices.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Business Story & Feature Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                At <strong>MAHI ENTERPRISE</strong>, our focus is on helping vehicle owners, transport operators, commercial fleet managers, and individual motorists improve vehicle monitoring, safety, and speed control.
              </p>
              <p>
                From government-compliant Speed Governor installations to high-precision live GPS telematics, we offer robust hardware paired with intuitive monitoring software that empowers you to safeguard your vehicles and stay compliant.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm hover:border-brand-blue/40 transition-colors">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{feature.title}</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-normal">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Location & Contact Badge */}
            <div className="bg-white p-5 rounded-xl border-l-4 border-brand-orange border-slate-200 shadow-sm space-y-2">
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900">Head Locations: </span>
                  Kaveri complex, Nr.Subhas Bridge, RTO Circle, Ahmedabad
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <div>
                  <span className="font-semibold text-slate-900">Direct Helpline: </span>
                  <a href="tel:9979307549" className="text-brand-blue font-bold hover:underline">+91 99793 07549</a> / <a href="tel:9924944111" className="text-brand-blue font-bold hover:underline">+91 99249 44111</a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-brand-blue hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20 hover:-translate-y-0.5"
              >
                <span>Talk to Our Expert</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Business Card & Official Identity Reference */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Outer decorative card frame */}
              <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-200">
                <div className="overflow-hidden rounded-xl bg-slate-900">
                  <img
                    src={businessCardSvg}
                    alt="MAHI ENTERPRISE Business Identity &amp; Contact Card"
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>
                <div className="p-3 bg-slate-50 mt-3 rounded-lg border border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-600">
                  <span className="font-semibold text-slate-800">Official Business Identity</span>
                  <span className="text-brand-green font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified Business Information
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
