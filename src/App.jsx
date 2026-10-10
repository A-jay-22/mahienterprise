import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import SpeedGovernor from './components/SpeedGovernor';
import GPSTracking from './components/GPSTracking';
import GPSApplication from './components/GPSApplication';
import VLTGPS from './components/VLTGPS';
import Products from './components/Products';
import Certificates from './components/Certificates';
import WhyChooseUs from './components/WhyChooseUs';
import CustomerSupport from './components/CustomerSupport';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [prefilledService, setPrefilledService] = useState('GPS Tracking');
  const [selectedCert, setSelectedCert] = useState(null);

  const handleSelectService = (serviceName) => {
    setPrefilledService(serviceName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCertificate = (certImg, title) => {
    setSelectedCert({ img: certImg, title });
    const certElem = document.getElementById('certificates');
    if (certElem) {
      certElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-brand-blue selection:text-white pb-16 md:pb-0 ">
      {/* Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Quick Stats Bar */}
        <Stats />

        {/* 3. About Mahi Enterprise */}
        <About />

        {/* 4. Core Services */}
        <Services onSelectService={handleSelectService} />

        {/* 5. Speed Governor Solutions */}
        <SpeedGovernor />

        {/* 6. GPS Tracking System */}
        <GPSTracking onOpenEnquiry={handleSelectService} />

        {/* 7. GPS Web & Mobile Application */}
        <GPSApplication onSelectService={handleSelectService} />

        {/* 8. VLT Approved GPS Device */}
        <VLTGPS onOpenCertificate={handleOpenCertificate} onSelectService={handleSelectService} />

        {/* 9. Product Showcase */}
        <Products onSelectProduct={handleSelectService} />

        {/* 10. Certificates & Approvals */}
        <Certificates selectedCert={selectedCert} setSelectedCert={setSelectedCert} />

        {/* 11. Why Choose Us */}
        <WhyChooseUs />

        {/* 12. Customer Support */}
        <CustomerSupport />

        {/* 13. Contact & Location Maps & Enquiry Form */}
        <Contact prefilledService={prefilledService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Actions */}
      <FloatingActions />
    </div>
  );
}
