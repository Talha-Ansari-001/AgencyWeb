import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShoppingBag, Cpu, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { services } from '../data/servicesData';

const iconMap = {
  Globe: Globe,
  ShoppingBag: ShoppingBag,
  Cpu: Cpu,
};

export default function Services({ onSelectService }) {
  const handleConsultService = (serviceTitle) => {
    let serviceCategory = 'Websites';
    if (serviceTitle.toLowerCase().includes('commerce')) {
      serviceCategory = 'E-Commerce';
    } else if (serviceTitle.toLowerCase().includes('application')) {
      serviceCategory = 'Web Apps';
    }
    
    if (onSelectService) {
      onSelectService(serviceCategory);
    }

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineered for speed, conversion, and longevity.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            We don't use generic templates. Every line of code and pixel of design is meticulously engineered to achieve exceptional business outcomes.
          </p>
        </div>

        {/* 3 Core Services Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Globe;
            return (
              <motion.div
                key={service.id}
                className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-8 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Subtle top glow highlight on card hover */}
                <div
                  className={`absolute inset-x-0 -top-px h-1 rounded-t-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="space-y-6">
                  {/* Card Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-slate-700/80 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComponent className="w-7 h-7 transition-colors" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Highlights List */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Core Solutions
                    </div>
                    <ul className="space-y-2">
                      {service.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables Pills */}
                  <div className="pt-2 space-y-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Key Deliverables
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.deliverables.map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-400 font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA Trigger */}
                <div className="pt-8">
                  <button
                    onClick={() => handleConsultService(service.title)}
                    className="w-full py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500/50 bg-slate-50 dark:bg-slate-800/60 hover:bg-indigo-600 hover:text-white text-slate-800 dark:text-slate-200 text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
