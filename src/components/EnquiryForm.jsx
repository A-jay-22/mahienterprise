import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, MessageCircle } from 'lucide-react';

export default function EnquiryForm({ prefilledService }) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    vehicleType: '',
    numberOfVehicles: '1',
    serviceRequired: 'GPS Tracking',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, serviceRequired: prefilledService }));
    }
  }, [prefilledService]);

  const validate = () => {
    const errs = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.mobileNumber.replace(/\D/g, '');
    if (!cleanPhone) {
      errs.mobileNumber = 'Mobile number is required';
    } else if (!phoneRegex.test(cleanPhone)) {
      errs.mobileNumber = 'Please enter a valid 10-digit Indian mobile number';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please enter a valid email address';
      }
    }

    if (!formData.vehicleType) {
      errs.vehicleType = 'Please select your vehicle type';
    }

    if (!formData.serviceRequired) {
      errs.serviceRequired = 'Please select the required service';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      mobileNumber: '',
      email: '',
      vehicleType: '',
      numberOfVehicles: '1',
      serviceRequired: 'GPS Tracking',
      message: ''
    });
    setErrors({});
  };

  const openWhatsAppEnquiry = () => {
    const text = encodeURIComponent(
      `Hello MAHI ENTERPRISE,\n\nI want to enquire about ${formData.serviceRequired}.\nName: ${formData.fullName}\nMobile: ${formData.mobileNumber}\nVehicle Type: ${formData.vehicleType || 'Not specified'}\nCount: ${formData.numberOfVehicles}\nMessage: ${formData.message || 'Please provide quotation and fitting info.'}`
    );
    window.open(`https://wa.me/919979307549?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 relative">
      {isSubmitted ? (
        <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 bg-green-100 text-brand-green rounded-full flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold text-slate-900">Enquiry Submitted!</h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto">
              Thank you! Our team will contact you shortly on <strong>{formData.mobileNumber}</strong>.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={openWhatsAppEnquiry}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-green hover:bg-green-700 transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Forward to WhatsApp Now</span>
            </button>
            <button
              onClick={handleReset}
              className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="border-b border-slate-100 pb-4 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Get a Free Consultation &amp; Quote</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Fill in your vehicle details and our technician will assist you with pricing &amp; fitting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Full Name <span className="text-brand-red">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rajesh Patel"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                  errors.fullName ? 'border-red-400 bg-red-50/30 focus:ring-red-400' : 'border-slate-300 focus:border-brand-blue focus:ring-brand-blue/20'
                }`}
              />
              {errors.fullName && (
                <p className="text-xs text-brand-red mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Mobile Number <span className="text-brand-red">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-slate-400 text-sm font-semibold">+91</span>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  maxLength="10"
                  placeholder="98765 43210"
                  className={`w-full pl-12 pr-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                    errors.mobileNumber ? 'border-red-400 bg-red-50/30 focus:ring-red-400' : 'border-slate-300 focus:border-brand-blue focus:ring-brand-blue/20'
                  }`}
                />
              </div>
              {errors.mobileNumber && (
                <p className="text-xs text-brand-red mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.mobileNumber}</span>
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Email Address */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                  errors.email ? 'border-red-400 bg-red-50/30 focus:ring-red-400' : 'border-slate-300 focus:border-brand-blue focus:ring-brand-blue/20'
                }`}
              />
              {errors.email && (
                <p className="text-xs text-brand-red mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Vehicle Type */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Vehicle Type <span className="text-brand-red">*</span>
              </label>
              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white transition-all focus:outline-none focus:ring-2 ${
                  errors.vehicleType ? 'border-red-400 bg-red-50/30 focus:ring-red-400' : 'border-slate-300 focus:border-brand-blue focus:ring-brand-blue/20'
                }`}
              >
                <option value="">-- Select Vehicle Category --</option>
                <option value="Commercial Truck / Dumper / Trailer">Commercial Truck / Dumper / Trailer</option>
                <option value="Bus / School Bus / Staff Transit">Bus / School Bus / Staff Transit</option>
                <option value="Car / Taxi / Cab Fleet">Car / Taxi / Cab Fleet</option>
                <option value="LCV / Pickup / Delivery Van">LCV / Pickup / Delivery Van</option>
                <option value="Tanker / Hazardous Goods Carrier">Tanker / Hazardous Goods Carrier</option>
                <option value="Auto / Three-Wheeler">Auto / Three-Wheeler</option>
                <option value="Personal Passenger Car">Personal Passenger Car</option>
                <option value="Other Commercial Equipment">Other Commercial Equipment</option>
              </select>
              {errors.vehicleType && (
                <p className="text-xs text-brand-red mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.vehicleType}</span>
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Number of Vehicles */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Number of Vehicles
              </label>
              <select
                name="numberOfVehicles"
                value={formData.numberOfVehicles}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
              >
                <option value="1">1 Vehicle</option>
                <option value="2-5">2 - 5 Vehicles</option>
                <option value="6-10">6 - 10 Vehicles</option>
                <option value="11-25">11 - 25 Vehicles</option>
                <option value="25+">More than 25 Vehicles</option>
              </select>
            </div>

            {/* Service Required */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Service Required <span className="text-brand-red">*</span>
              </label>
              <select
                name="serviceRequired"
                value={formData.serviceRequired}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
              >
                <option value="GPS Tracking">GPS Tracking</option>
                <option value="VLT GPS">VLT GPS</option>
                <option value="Speed Governor">Speed Governor</option>
                <option value="Fuel Monitoring">Fuel Monitoring</option>
                <option value="Vehicle Electronic Device">Vehicle Electronic Device</option>
                <option value="Other">Other Custom Solution</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Message / Additional Requirements
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              placeholder="Tell us about vehicle model, fitting requirements, or RTO inspection date..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm transition-all focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            ></textarea>
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-brand-blue hover:bg-blue-700 active:scale-[0.99] transition-all shadow-md shadow-blue-700/20 disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? (
                <span>Submitting Your Enquiry...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Enquiry</span>
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] text-center text-slate-400">
            🔒 Your contact information is kept private and used only for your inquiry.
          </p>
        </form>
      )}
    </div>
  );
}
