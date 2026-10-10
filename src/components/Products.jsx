import React from 'react';
import { Gauge, Navigation, ShieldCheck, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';
import speedGovSvg from '../assets/speed-governor.svg';
import gpsTrackerSvg from '../assets/gps-tracker.svg';
import vltDeviceSvg from '../assets/vlt-device.svg';
import fleetTelematicsSvg from '../assets/fleet-telematics.svg';

export default function Products({ onSelectProduct }) {
  const products = [
    {
      id: 'speed-governor-prod',
      name: 'Speed Governor',
      category: 'Safety & Speed Limiting',
      image: speedGovSvg,
      description: 'Precision electronic and mechanical cable-operated speed limiting system designed for commercial vehicles.',
      features: [
        'Electronic Pedal / Solenoid Control',
        'Tamper-Proof Calibration',
        'RTO & Transport Compliance',
        'Jerk-Free Smooth Regulated Acceleration'
      ],
      tag: 'Certified Device',
      serviceName: 'Speed Governor',
      badgeColor: 'bg-orange-100 text-brand-orange border-orange-200'
    },
    {
      id: 'gps-tracker-prod',
      name: 'GPS Tracker',
      category: 'Real-Time Telematics',
      image: gpsTrackerSvg,
      description: 'High-sensitivity GPS/GSM vehicle tracking unit with live location, route replay, and overspeed alerts.',
      features: [
        'Real-Time Live Map Tracking',
        'Overspeed & Geo-Fence Alerts',
        'Trip History & Stoppage Replay',
        'Internal Battery Backup'
      ],
      tag: 'Best Seller',
      serviceName: 'GPS Tracking',
      badgeColor: 'bg-blue-100 text-brand-blue border-blue-200'
    },
    {
      id: 'vlt-gps-prod',
      name: 'VLT GPS Device',
      category: 'AIS-140 Compliant',
      image: vltDeviceSvg,
      description: 'Government standard Vehicle Location Tracking (VLT) device equipped with emergency panic SOS alert capability.',
      features: [
        'AIS-140 & IRNSS Standard',
        'Integrated Panic Button Interface',
        'Dual eSIM Telematics Connectivity',
        'Rugged IP67 Water/Dust Proof Case'
      ],
      tag: 'RTO Standard',
      serviceName: 'VLT GPS',
      badgeColor: 'bg-green-100 text-brand-green border-green-200'
    },
    {
      id: 'electronic-device-prod',
      name: 'Vehicle Electronic Device',
      category: 'Specialized Hardware',
      image: fleetTelematicsSvg,
      description: 'Fly-by-wire electronic throttle controllers, fuel monitoring sensors, and telematics interface hardware.',
      features: [
        'Fly-By-Wire Throttle Interfacing',
        'Digital Fuel Level Sensor Integration',
        'Ignition & Engine Status Sensors',
        'Compatible with Modern Common-Rail Engines'
      ],
      tag: 'Advanced Tech',
      serviceName: 'Vehicle Electronic Device',
      badgeColor: 'bg-purple-100 text-purple-700 border-purple-200'
    }
  ];

  const handleEnquire = (serviceName) => {
    if (onSelectProduct) {
      onSelectProduct(serviceName);
    }
    const formElement = document.getElementById('contact');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-brand-blue font-semibold text-xs uppercase tracking-wider mb-3">
            <span>Hardware Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Featured <span className="text-brand-blue">Products</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Engineered for durability, high precision, and reliability in all road and fleet conditions.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-soft hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image Container */}
                <div className="bg-slate-900 p-4 h-52 flex items-center justify-center relative overflow-hidden">
                  <span className={`absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${product.badgeColor}`}>
                    {product.tag}
                  </span>
                  <img
                    src={product.image}
                    alt={`${product.name} by MAHI ENTERPRISE`}
                    className="max-h-44 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1 group-hover:text-brand-blue transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Feature bullets */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleEnquire(product.serviceName)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-slate-100 text-slate-800 hover:bg-brand-blue hover:text-white transition-all shadow-xs group-hover:bg-brand-blue group-hover:text-white"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
