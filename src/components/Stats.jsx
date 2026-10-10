import React from 'react';
import { Layers, Clock, Navigation, CheckCircle } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      value: '10+',
      label: 'Vehicle Solutions',
      description: 'Speed governor, GPS, VLT, and telemetry devices',
      icon: Layers,
      color: 'text-brand-blue',
      bgColor: 'bg-blue-50',
    },
    {
      value: '24/7',
      label: 'Tracking Support',
      description: 'Continuous server uptime & technical guidance',
      icon: Clock,
      color: 'text-brand-orange',
      bgColor: 'bg-orange-50',
    },
    {
      value: 'GPS',
      label: 'Live Tracking',
      description: 'Real-time vehicle location & route playback',
      icon: Navigation,
      color: 'text-brand-green',
      bgColor: 'bg-green-50',
    },
    {
      value: 'RTO',
      label: 'Approved Solutions',
      description: 'Compliant with automotive transport safety norms',
      icon: CheckCircle,
      color: 'text-brand-red',
      bgColor: 'bg-red-50',
    },
  ];

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-card border border-slate-200/80 p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className={`flex items-start gap-4 ${index !== 0 ? 'pt-4 sm:pt-0 sm:pl-6 lg:pl-8' : ''}`}
              >
                <div className={`p-3 rounded-xl ${stat.bgColor} ${stat.color} shrink-0`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-sm font-bold text-slate-700">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
