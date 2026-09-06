import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  CheckCircle2,
  Clock,
  ShieldAlert,
  Sparkles,
  MessageSquare,
  DollarSign,
  Briefcase,
  User,
  ArrowRight,
  PhoneCall
} from 'lucide-react';

export default function Contact({ initialService = 'Web Apps' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialService,
    budget: '$10,000 – $25,000',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your project';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please tell us a bit more (minimum 15 characters)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      service: 'Web Apps',
      budget: '$10,000 – $25,000',
      message: '',
    });
    setIsSuccess(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Agency Information & Guarantees */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start The Conversation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Let’s engineer something exceptional together.
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Have a new project or looking to re-architect an existing digital product? Share your specs and we’ll prepare a tailored architectural proposal and estimate within 24 hours.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 font-medium">Direct Inquiries</div>
                  <a
                    href="mailto:hello@nexusdev.agency"
                    className="text-base font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    hello@nexusdev.agency
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 font-medium">Turnaround Promise</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    Detailed scoping document & response under 24 hours
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-slate-800 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 font-medium">Confidentiality Assured</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    Mutual NDA available prior to technical deep-dive
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl p-6 sm:p-10 relative">
              {isSuccess ? (
                /* Success Feedback State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-5"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Project Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-indigo-600 dark:text-indigo-400">{formData.name}</strong>. Our lead solutions architect has received your inquiry for{' '}
                    <strong className="text-slate-900 dark:text-white">{formData.service}</strong> and is preparing your preliminary project roadmap. We will email you at{' '}
                    <strong className="text-slate-900 dark:text-white">{formData.email}</strong> within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Elena Rostova"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border ${
                            errors.name
                              ? 'border-rose-500 focus:ring-rose-500'
                              : 'border-slate-200 dark:border-slate-700 focus:ring-indigo-500'
                          } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all`}
                        />
                      </div>
                      {errors.name && <p className="mt-1.5 text-xs text-rose-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="elena@company.com"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border ${
                            errors.email
                              ? 'border-rose-500 focus:ring-rose-500'
                              : 'border-slate-200 dark:border-slate-700 focus:ring-indigo-500'
                          } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all`}
                        />
                      </div>
                      {errors.email && <p className="mt-1.5 text-xs text-rose-500">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Service Selector & Project Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                        Service Required *
                      </label>
                      <div className="relative">
                        <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full pl-10 pr-8 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all appearance-none cursor-pointer"
                        >
                          <option value="Websites">Websites (Corporate & Landing Pages)</option>
                          <option value="E-Commerce">E-Commerce Stores (Custom Cart & Stripe)</option>
                          <option value="Web Apps">Web Applications (React SaaS & Portals)</option>
                        </select>
                      </div>
                    </div>

                    {/* <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                        Project Budget *
                      </label>
                      <div className="relative">
                        <DollarSign className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full pl-10 pr-8 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all appearance-none cursor-pointer"
                        >
                          <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                          <option value="$10,000 – $25,000">$10,000 – $25,000 (Recommended)</option>
                          <option value="$25,000 – $50,000">$25,000 – $50,000</option>
                          <option value="$50,000+">$50,000+ (Enterprise)</option>
                        </select>
                      </div>
                    </div> */}
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                      Project Details & Goals *
                    </label>
                    <div className="relative">
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your brand, technical goals, anticipated timeline, or link to existing sites..."
                        className={`w-full p-4 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border ${
                          errors.message
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-200 dark:border-slate-700 focus:ring-indigo-500'
                        } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all resize-none`}
                      />
                    </div>
                    {errors.message && <p className="mt-1.5 text-xs text-rose-500">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                        <span>Dispatching Project Specs...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
