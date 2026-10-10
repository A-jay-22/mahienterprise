import React from 'react';
import { 
  ShieldCheck, 
  Navigation, 
  Gauge, 
  Smartphone, 
  Headphones, 
  Wrench, 
  Car, 
  Briefcase,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Professional Vehicle Solutions',
      icon: ShieldCheck,
      description: 'Engineered hardware adhering strictly to automotive safety norms and vehicle electronics compatibility.',
      color: 'text-brand-blue bg-blue-50 border-blue-100',
    },
    {
      title: 'GPS Tracking Technology',
      icon: Navigation,
      description: 'High-precision GNSS tracking with real-time continuous location reporting and zero blind spots.',
      color: 'text-brand-green bg-green-50 border-green-100',
    },
    {
      title: 'Speed Monitoring Solutions',
      icon: Gauge,
      description: 'Accurate speed governors configured for commercial trucks, buses, taxis, and heavy trailers.',
      color: 'text-brand-orange bg-orange-50 border-orange-100',
    },
    {
      title: 'Web & Mobile Tracking',
      icon: Smartphone,
      description: 'Unified cloud dashboard accessible seamlessly on any desktop web browser, Android, or iOS device.',
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
      title: 'Reliable Customer Support',
      icon: Headphones,
      description: 'Direct phone and WhatsApp technical support whenever you need assistance with your vehicles or app.',
      color: 'text-brand-red bg-red-50 border-red-100',
    },
    {
      title: 'Easy Enquiry & Installation Support',
      icon: Wrench,
      description: 'Quick turnaround installation by experienced technicians located at Ahmedabad and Gandhinagar RTO hubs.',
      color: 'text-amber-600 bg-amber-50 border-amber-100',
    },
    {
      title: 'Continuous Vehicle Monitoring',
      icon: Car,
      description: 'Instant notifications on ignition status, geo-fence breaches, unauthorized movement, and excessive idling.',
      color: 'text-cyan-600 bg-cyan-50 border-cyan-100',
    },
    {
      title: 'Business & Transport Solutions',
      icon: Briefcase,
      description: 'Scalable fleet telematics tailored for individual transport owners up to large logistics operations.',
      color: 'text-purple-600 bg-purple-50 border-purple-100',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-brand-blue font-semibold text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Choose <span className="text-brand-blue">MAHI ENTERPRISE?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Dedicated to automotive excellence, regulatory compliance, and dependable vehicle telematics across Gujarat.
          </p>
        </div>

        {/* 8 Reason Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft hover:shadow-card-hover hover:border-brand-blue/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-4 ${reason.color} transition-transform group-hover:scale-110`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors flex items-center gap-1.5">
                    <span>{reason.title}</span>
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-brand-green">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
