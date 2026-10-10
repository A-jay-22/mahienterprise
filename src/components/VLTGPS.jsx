import React from 'react';
import { 
  ShieldCheck, 
  Navigation, 
  MapPin, 
  Activity, 
  Bell, 
  History, 
  Globe, 
  Smartphone, 
  FileCheck, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import vltDeviceSvg from '../assets/vlt-device.svg';
import certificateDocSvg from '../assets/certificate-doc.svg';

export default function VLTGPS({ onOpenCertificate, onSelectService }) {
  const vltFeatures = [
    { name: 'Vehicle Location & GNSS', icon: MapPin, desc: 'High-sensitivity receiver supporting standard satellite navigation.' },
    { name: 'Live Monitoring Telemetry', icon: Activity, desc: 'Continuous stream of speed, coordinate, and ignition packets.' },
    { name: 'Emergency SOS Alerts', icon: Bell, desc: 'Dedicated panic button integration for passenger and driver safety.' },
    { name: 'Historical Trip Logs', icon: History, desc: 'Secure cloud archiving of all vehicle route records and stops.' },
    { name: 'Web Telematics Portal', icon: Globe, desc: 'Desktop control room portal for fleet supervision.' },
    { name: 'Mobile Tracking App', icon: Smartphone, desc: 'Quick on-the-go monitoring for fleet managers and vehicle owners.' },
  ];

  return (
    <section id="vlt-gps" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-green/20 border border-brand-green/40 text-xs sm:text-sm font-bold text-brand-green-light mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Transport Compliance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            VLT Approved <span className="text-brand-green-light">GPS Tracking Device</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Vehicle Location Tracking (VLT) solutions designed for eligible commercial and transport vehicle applications in full compliance with automotive safety standards.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: Device visual */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/90 rounded-2xl p-4 sm:p-6 border border-slate-700 shadow-2xl relative">
              <div className="overflow-hidden rounded-xl bg-slate-950 p-2">
                <img
                  src={vltDeviceSvg}
                  alt="VLT Approved GPS Tracking Device Unit by MAHI ENTERPRISE"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="mt-4 p-3 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Standard: AIS-140 / IRNSS Compliant</span>
                <span className="text-brand-green font-semibold">IP67 Enclosure</span>
              </div>
            </div>
          </div>

          {/* Right: Feature highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white">
                Engineered for Commercial Fleet Compliance
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                VLT GPS devices meet rigorous transport department requirements, ensuring secure data transmission to authorized servers, continuous live telemetry, and integrated panic button support for passenger safety.
              </p>
            </div>

            {/* Features 2x3 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {vltFeatures.map((feat, i) => {
                const IconComponent = feat.icon;
                return (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/90 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-brand-green-light shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{feat.name}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#contact"
                onClick={() => onSelectService && onSelectService('VLT GPS Device')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-brand-green hover:bg-green-700 transition-all shadow-lg shadow-green-700/30"
              >
                <span>Enquire for VLT GPS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#certificates"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
              >
                <FileCheck className="w-4 h-4 text-brand-orange-light" />
                <span>View Compliance Certificates</span>
              </a>
            </div>
          </div>

        </div>

        {/* Approval & Certification Reference Box */}
        <div className="bg-slate-800/90 rounded-2xl border border-slate-700 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 text-brand-orange-light text-xs font-semibold">
                <FileCheck className="w-3.5 h-3.5" />
                <span>Approval &amp; Certification</span>
              </div>
              <h4 className="text-xl font-bold text-white">
                Automotive Regulatory Approvals &amp; Documentation
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
                All speed limiting and VLT vehicle tracking devices supplied by MAHI ENTERPRISE correspond to standard Type Approval and automotive certification protocols.
              </p>
            </div>

            <button
              onClick={() => onOpenCertificate && onOpenCertificate(certificateDocSvg, 'Automotive Compliance & Type Approval Certificate')}
              className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-brand-blue hover:bg-blue-600 text-white transition-all shadow-md shrink-0 flex items-center gap-2"
            >
              <FileCheck className="w-4 h-4" />
              <span>Inspect Approval Document</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
