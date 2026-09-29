import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShoppingBag, Cpu, CheckCircle2, ArrowRight, Sparkles, Clock } from 'lucide-react';
import { services } from '../data/servicesData';

const iconMap = {
  Globe: Globe,
  ShoppingBag: ShoppingBag,
  Cpu: Cpu,
};

export default function ServicesSection({ onSelectService }) {
  const handleConsultService = (service) => {
    const category = service.category || (
      service.title.toLowerCase().includes('commerce')
        ? 'E-Commerce'
        : service.title.toLowerCase().includes('application')
        ? 'Web Apps'
        : 'Websites'
    );

    if (onSelectService) {
      onSelectService(category);
    }

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-28 bg-slate-50/50 dark:bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            High-Impact Digital Solutions Engineered for Growth
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            From lightning-fast digital flagships to bespoke e-commerce and full-stack operational platforms, we deliver measurable engineering excellence.
          </p>
        </div>

        {/* 3-Column Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Globe;
            return (
              <motion.div
                key={service.id || index}
                className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Top Subtle Gradient Hover Accent */}
                <div
                  className={`absolute inset-x-0 -top-px h-1 rounded-t-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="space-y-6">
                  {/* (1) Top Bar: Icon Box on Left & Delivery Badge on Right */}
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-xs transition-all duration-300 ${
                        service.iconBg ||
                        'bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-slate-700'
                      }`}
                    >
                      <IconComponent className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <div
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border shrink-0 ${
                        service.badgeColor ||
                        'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5 opacity-70" />
                      <span>{service.badge}</span>
                    </div>
                  </div>

                  {/* (2) Title & Description Paragraph */}
                  <div className="space-y-2.5">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed min-h-[48px]">
                      {service.description}
                    </p>
                  </div>

                  {/* (3) Core Solutions List with green CheckCircle2 icons */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/90 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Core Solutions
                    </div>
                    <ul className="space-y-2.5">
                      {service.coreSolutions?.map((solution, sIdx) => (
                        <li
                          key={sIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-snug"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* (4) Key Deliverables Styled Tag Pills/Badges */}
                  <div className="pt-3 space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Key Deliverables
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {service.keyDeliverables?.map((deliverable, dIdx) => (
                        <span
                          key={dIdx}
                          className="inline-flex items-center text-xs px-2.5 py-1 rounded-lg font-medium bg-slate-100/90 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60 hover:bg-slate-200/70 dark:hover:bg-slate-750 transition-colors"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* (5) Full-Width "Request Proposal" CTA Button with Hover Arrow Animation */}
                <div className="pt-6 sm:pt-8 mt-auto">
                  <button
                    type="button"
                    onClick={() => handleConsultService(service)}
                    className="w-full min-h-[46px] py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white hover:border-indigo-600 dark:hover:border-indigo-600 text-slate-800 dark:text-slate-200 text-sm font-semibold active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer shadow-2xs hover:shadow-md hover:shadow-indigo-500/20"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-200" />
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
