import React from 'react';
import { Gauge, MapPin, Navigation, Fuel, Car, Cpu, ArrowRight } from 'lucide-react';

export default function Services({ onSelectService }) {
  const services = [
    {
      id: 'speed-governor',
      icon: Gauge,
      title: 'Speed Governor',
      description: 'Speed monitoring and control solutions designed for vehicle safety and compliance.',
      cta: 'Get Speed Governor',
      href: '#speed-governor',
      accentColor: 'text-brand-orange bg-orange-50 border-orange-100 group-hover:border-orange-300',
      badgeColor: 'bg-orange-100 text-brand-orange',
    },
    {
      id: 'gps-tracking',
      icon: MapPin,
      title: 'GPS Tracking System',
      description: 'Monitor vehicle location and movement with live GPS tracking.',
      cta: 'Explore GPS',
      href: '#gps-tracking',
      accentColor: 'text-brand-blue bg-blue-50 border-blue-100 group-hover:border-blue-300',
      badgeColor: 'bg-blue-100 text-brand-blue',
    },
    {
      id: 'vlt-gps',
      icon: Navigation,
      title: 'VLT GPS Device',
      description: 'Vehicle location tracking solutions for eligible vehicle applications.',
      cta: 'View VLT GPS',
      href: '#vlt-gps',
      accentColor: 'text-brand-green bg-green-50 border-green-100 group-hover:border-green-300',
      badgeColor: 'bg-green-100 text-brand-green',
    },
    {
      id: 'fuel-monitoring',
      icon: Fuel,
      title: 'Fuel Monitoring',
      description: 'Monitor fuel levels and receive fuel-related notifications.',
      cta: 'Learn More',
      href: '#enquiry',
      accentColor: 'text-brand-red bg-red-50 border-red-100 group-hover:border-red-300',
      badgeColor: 'bg-red-100 text-brand-red',
    },
    {
      id: 'vehicle-monitoring',
      icon: Car,
      title: 'Vehicle Monitoring',
      description: 'Monitor vehicles and review vehicle activity through tracking systems.',
      cta: 'Learn More',
      href: '#gps-app',
      accentColor: 'text-indigo-600 bg-indigo-50 border-indigo-100 group-hover:border-indigo-300',
      badgeColor: 'bg-indigo-100 text-indigo-700',
    },
    {
      id: 'electronic-devices',
      icon: Cpu,
      title: 'Electronic Vehicle Devices',
      description: 'Vehicle electronic and fly-by-wire related solutions.',
      cta: 'Contact Us',
      href: '#contact',
      accentColor: 'text-cyan-600 bg-cyan-50 border-cyan-100 group-hover:border-cyan-300',
      badgeColor: 'bg-cyan-100 text-cyan-700',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-brand-blue font-semibold text-xs uppercase tracking-wider mb-3">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Core <span className="text-brand-blue">Vehicle Services</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Comprehensive vehicle telematics, speed governors, and electronic safety solutions tailored for commercial fleets, passenger vehicles, and industrial transport.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-soft hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Service Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center border mb-6 transition-all duration-300 ${service.accentColor}`}>
                    <IconComp className="w-7 h-7" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* CTA Link */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={service.href}
                    onClick={() => onSelectService && onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue group-hover:text-blue-700 transition-colors"
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
