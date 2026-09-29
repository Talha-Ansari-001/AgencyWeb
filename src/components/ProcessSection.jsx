import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles, Workflow } from 'lucide-react';
import { processSteps } from '../data/processData';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = processSteps[activeStep] || processSteps[0];

  return (
    <section id="process" className="py-16 sm:py-24 scroll-mt-20 bg-slate-50/70 dark:bg-slate-900/40 relative overflow-hidden">
      {/* Background subtle radial accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-indigo-500/5 via-cyan-500/5 to-purple-500/5 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/80 shadow-xs">
            <Workflow className="w-3.5 h-3.5" />
            <span>Execution Methodology</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our 4-Step Engineering Roadmap
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From initial requirements audit to deployment and SLA maintenance, here is how we deliver enterprise-grade digital products with zero ambiguity.
          </p>
        </div>

        {/* 4-Step Interactive Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
          {processSteps.map((stepItem, index) => {
            const Icon = stepItem.icon;
            const isSelected = activeStep === index;

            return (
              <motion.div
                key={stepItem.step}
                onClick={() => setActiveStep(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                tabIndex={0}
                role="button"
                aria-pressed={isSelected}
                aria-label={`Step ${stepItem.step}: ${stepItem.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveStep(index);
                  }
                }}
                className={`relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 border cursor-pointer transition-all duration-300 flex flex-col justify-between text-left select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  isSelected
                    ? 'bg-white dark:bg-slate-900 border-indigo-500 dark:border-indigo-400 shadow-xl ring-2 ring-indigo-500/20 dark:ring-indigo-400/30 scale-[1.01] -translate-y-1'
                    : 'bg-white/80 dark:bg-slate-900/70 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                {/* Top Row: Step Number, Active Badge & Timeline */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight transition-colors ${
                        isSelected ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500'
                      }`}>
                        {stepItem.step}
                      </span>
                      {isSelected && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80 animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                          Active
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700">
                      {stepItem.timeline}
                    </span>
                  </div>

                  {/* Icon Container */}
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 ring-2 ring-indigo-500/30'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'
                  }`}>
                    {Icon && <Icon className="w-5 h-5 sm:w-6 sm:h-6" />}
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg sm:text-xl font-bold mb-3 transition-colors ${
                    isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-800 dark:text-slate-200'
                  }`}>
                    {stepItem.title}
                  </h3>
                </div>

                {/* Key Deliverables Section */}
                <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Key Deliverables
                  </div>
                  <ul className="space-y-2">
                    {stepItem.deliverables.map((deliverable, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 transition-colors ${
                          isSelected ? 'text-indigo-600 dark:text-indigo-400' : 'text-emerald-500'
                        }`} />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Dark-Themed Focus Banner */}
        <div className="mt-8 sm:mt-10 relative overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-950 border border-slate-800 text-white shadow-2xl p-6 sm:p-8">
          {/* Subtle decorative gradient glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-br from-indigo-600/20 via-cyan-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.step}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6"
            >
              <div className="space-y-2.5 max-w-3xl">
                <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-widest text-indigo-400 font-mono font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                  </span>
                  <span>Phase {currentStep.step} Focus • {currentStep.title}</span>
                </div>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  {currentStep.focusDetail}
                </p>
              </div>

              <div className="shrink-0 flex items-center">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 active:scale-[0.98] text-slate-950 font-semibold text-sm shadow-md hover:shadow-indigo-500/20 transition-all duration-200 min-h-[44px]"
                >
                  <span>Discuss Timeline</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
