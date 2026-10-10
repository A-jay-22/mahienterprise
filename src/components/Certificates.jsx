import React, { useState } from 'react';
import { Award, ZoomIn, X, CheckCircle2, ShieldCheck, Download, ExternalLink, FileText } from 'lucide-react';
import certificateDocSvg from '../assets/certificate-doc.svg';

export default function Certificates({ selectedCert, setSelectedCert }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(certificateDocSvg);
  const [activeTitle, setActiveTitle] = useState('Central Motor Vehicle Rules (CMVR) Type Approval & Compliance');

  const certificates = [
    {
      id: 'type-approval-cert',
      title: 'Automotive Compliance & Type Approval Certificate',
      subtitle: 'AIS 018 / AIS 037 / AIS 140 Regulatory Standards Reference',
      agency: 'Standard Regulatory Testing Reference',
      image: certificateDocSvg,
      description: 'Official document reference verifying that Speed Limiting Devices (SLD) and VLT GPS Tracking units comply with Indian Automotive Standards and RTO requirements.'
    }
  ];

  const handleOpenModal = (img, title) => {
    setActiveImage(img);
    setActiveTitle(title);
    setModalOpen(true);
  };

  return (
    <section id="certificates" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-green-100 text-brand-green font-semibold text-xs uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Approvals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Certificates &amp; <span className="text-brand-green">Approvals</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Inspection reference and conformity documentation for MAHI ENTERPRISE Speed Governors and GPS Telematics.
          </p>
        </div>

        {/* Certificate Card List */}
        <div className="max-w-4xl mx-auto">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-card overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 sm:p-8"
            >
              {/* Thumbnail with Zoom overlay */}
              <div className="md:col-span-5 relative group cursor-pointer" onClick={() => handleOpenModal(cert.image, cert.title)}>
                <div className="h-72 w-full bg-slate-100 rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center p-2 relative shadow-inner">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center text-white rounded-xl gap-2 backdrop-blur-xs">
                    <ZoomIn className="w-8 h-8 text-brand-orange-light" />
                    <span className="text-xs font-bold tracking-wide">Click to Zoom &amp; Inspect</span>
                  </div>
                </div>
              </div>

              {/* Certificate Information */}
              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-green bg-green-50 px-2.5 py-1 rounded-md border border-green-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{cert.agency}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {cert.title}
                </h3>
                
                <p className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
                  {cert.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {cert.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => handleOpenModal(cert.image, cert.title)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-blue hover:bg-blue-700 transition-all shadow-sm"
                  >
                    <ZoomIn className="w-4 h-4" />
                    <span>View Full Certificate</span>
                  </button>
                  
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
                  >
                    <span>Request RTO Copy</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note */}
        <div className="mt-8 max-w-4xl mx-auto bg-blue-50/60 border border-blue-200/80 rounded-xl p-4 text-center text-xs text-slate-600">
          <p>
            <strong>Note on Certification:</strong> All commercial vehicle speed limiters and location tracking units supplied are installed with valid calibration certificates required for Gujarat RTO vehicle fitness and renewal tests.
          </p>
        </div>

      </div>

      {/* Modal Image Viewer */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-navy/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center gap-2 text-slate-800">
                <FileText className="w-5 h-5 text-brand-blue" />
                <h3 className="text-sm sm:text-base font-bold truncate max-w-md">
                  {activeTitle}
                </h3>
              </div>
              
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body - Scrollable Certificate Preview */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-slate-100 flex items-center justify-center min-h-[400px]">
              <div className="bg-white p-2 rounded-xl shadow-lg border border-slate-300 max-w-2xl w-full">
                <img
                  src={activeImage}
                  alt={activeTitle}
                  className="w-full h-auto object-contain select-none"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
              <span>MAHI ENTERPRISE Official Verification Record</span>
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 rounded-lg font-bold text-white bg-slate-800 hover:bg-slate-900 transition-colors"
              >
                Close Viewer
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
