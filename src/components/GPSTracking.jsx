import React from 'react';
import { 
  MapPin, 
  Navigation, 
  Zap, 
  Fuel, 
  History, 
  Smartphone, 
  Layers, 
  ShieldAlert, 
  BatteryCharging, 
  Activity,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import gpsTrackerSvg from '../assets/gps-tracker.svg';

export default function GPSTracking({ onOpenEnquiry }) {
  const gpsFeatures = [
    {
      icon: MapPin,
      title: 'Location',
      desc: 'Real-time vehicle location monitoring with high-precision GNSS positioning.',
      color: 'text-blue-600 bg-blue-50 border-blue-100',
    },
    {
      icon: Navigation,
      title: 'Live Tracking',
      desc: 'Monitor vehicle movement continuously with smooth real-time map updates.',
      color: 'text-green-600 bg-green-50 border-green-100',
    },
    {
      icon: Zap,
      title: 'Overspeed Monitoring',
      desc: 'Instant alerts whenever a driver exceeds safe or company-defined speed limits.',
      color: 'text-amber-600 bg-amber-50 border-amber-100',
    },
    {
      icon: Activity,
      title: 'Geo-Fence Alerts',
      desc: 'Receive instant notifications when vehicles enter or leave designated operational zones.',
      color: 'text-purple-600 bg-purple-50 border-purple-100',
    },
    {
      icon: Fuel,
      title: 'Fuel Level Notification',
      desc: 'Monitor fuel level variations and receive notifications regarding fuel activity.',
      color: 'text-orange-600 bg-orange-50 border-orange-100',
    },
    {
      icon: History,
      title: 'Vehicle Historical Playback',
      desc: 'Review historical vehicle movement, routes taken, stoppages, and idle times.',
      color: 'text-cyan-600 bg-cyan-50 border-cyan-100',
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile Application',
      desc: 'Access vehicle tracking effortlessly through responsive web portal and mobile app.',
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
      icon: Layers,
      title: 'Multiple Vehicles on Map',
      desc: 'Monitor your entire fleet or multiple vehicles simultaneously on a single screen.',
      color: 'text-rose-600 bg-rose-50 border-rose-100',
    },
    {
      icon: ShieldAlert,
      title: 'Theft Protection',
      desc: 'Vehicle security features including remote engine cutoff support and tow alerts.',
      color: 'text-red-600 bg-red-50 border-red-100',
    },
    {
      icon: BatteryCharging,
      title: 'Long Battery Backup',
      desc: 'Internal battery backup ensuring continuous tracking even if main battery is disconnected.',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
  ];

  return (
    <section id="gps-tracking" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-xs sm:text-sm font-bold text-brand-blue mb-3">
            <Navigation className="w-4 h-4" />
            <span>Smart Telematics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            GPS Tracking <span className="text-brand-blue">System</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Protect your vehicles with smart GPS tracking and monitoring. Experience complete visibility, safety, and remote control over every journey.
          </p>
        </div>

        {/* Featured Hardware & Intro Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-soft mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 flex justify-center">
              <div className="max-w-sm w-full bg-slate-900 rounded-2xl p-4 shadow-xl border border-slate-800">
                <img
                  src={gpsTrackerSvg}
                  alt="MAHI ENTERPRISE Real-Time GPS Tracking Device"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                Fleet &amp; Individual Vehicle Security
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                Advanced Tracking Intelligence for Every Vehicle Category
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether managing a large commercial fleet of trucks and buses, or protecting private cars and commercial delivery vans, MAHI ENTERPRISE GPS tracking provides reliable telematics with 24/7 cloud connectivity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  <span>Instant SMS / App / Web Notifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  <span>Ignition Status &amp; Trip Logs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  <span>Easy Plug-and-Play or Concealed Wiring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  <span>High Sensitivity GPS Antenna</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => onOpenEnquiry && onOpenEnquiry('GPS Tracking')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-brand-blue hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20"
                >
                  <span>Get GPS Tracking</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 10 Feature Grid */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900">
            Key Features of MAHI GPS System
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
            {gpsFeatures.map((feat, index) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center border mb-3.5 ${feat.color}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1.5">{feat.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
