import React from 'react';
import { 
  Smartphone, 
  Monitor, 
  MapPin, 
  Gauge, 
  History, 
  Bell, 
  Layers, 
  FileText, 
  CheckCircle2, 
  MessageCircle,
  Play
} from 'lucide-react';
import appMockupSvg from '../assets/app-mockup.svg';

export default function GPSApplication({ onSelectService }) {
  const whatsappNumber = "919979307549";
  const whatsappMessage = encodeURIComponent("Hello MAHI ENTERPRISE, I would like to request a live demo of your GPS Tracking Web & Mobile Application.");

  const appModules = [
    { name: 'Live Vehicle Location', icon: MapPin, desc: 'Real-time pinpoint coordinates on interactive mapping.' },
    { name: 'Vehicle Status', icon: Gauge, desc: 'Live ignition, battery voltage, moving, and idle status.' },
    { name: 'Tracking History', icon: History, desc: 'Full route replays with speeds and stoppage timestamps.' },
    { name: 'Overspeed Alerts', icon: Bell, desc: 'Instant push notifications and SMS on speed limits exceeded.' },
    { name: 'Geo-Fence Alerts', icon: Layers, desc: 'Configurable digital boundary entry and exit notifications.' },
    { name: 'Multiple Vehicle Tracking', icon: Monitor, desc: 'Consolidated bird’s-eye view of your complete fleet.' },
    { name: 'Instant Notifications', icon: Bell, desc: 'Tow alerts, unplug alerts, and power disconnect warnings.' },
    { name: 'Telemetry Reports', icon: FileText, desc: 'Exportable mileage, fuel, summary, and trip duration logs.' },
  ];

  return (
    <section id="gps-app" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 font-semibold text-xs uppercase tracking-wider mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Web &amp; Mobile Software</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Track Your Vehicles <span className="text-brand-blue">Anytime, Anywhere</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Intuitive dashboard experience built for quick access on desktop web browsers and iOS/Android mobile smartphones.
          </p>
        </div>

        {/* Mockup & Modules Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Software Feature Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-slate-900">
                Powerful Cloud Telematics at Your Fingertips
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Stay connected to your vehicles 24 hours a day with our fast, responsive telematics portal. Designed with clear visuals and rapid alerts to keep your logistics on schedule.
              </p>
            </div>

            {/* 8 Feature Pill Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {appModules.map((mod, i) => {
                const IconComponent = mod.icon;
                return (
                  <div 
                    key={i} 
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand-blue/40 hover:bg-blue-50/40 transition-all flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-white border border-slate-200 text-brand-blue shrink-0 shadow-xs">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{mod.name}</h4>
                      <p className="text-[11px] text-slate-500 leading-tight mt-0.5">{mod.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                onClick={() => onSelectService && onSelectService('GPS Tracking Application Demo')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-brand-blue hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Request GPS Demo</span>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-brand-green hover:bg-green-700 transition-all shadow-md shadow-green-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right: Mockup Illustration */}
          <div className="lg:col-span-6">
            <div className="relative group">
              <div className="bg-slate-900 p-3 sm:p-5 rounded-3xl shadow-2xl border border-slate-800">
                <img
                  src={appMockupSvg}
                  alt="MAHI ENTERPRISE Cloud GPS Fleet Application Desktop and Smartphone Mockup"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>

              {/* Verified badge */}
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500 px-2">
                <span>Multi-platform web &amp; mobile responsive</span>
                <span className="text-brand-green font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> High Uptime Server Support
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
