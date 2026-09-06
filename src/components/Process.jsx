import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Layers, Code2, Rocket, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { processSteps } from '../data/processData';

const iconMap = {
  Compass: Compass,
  Layers: Layers,
  Code2: Code2,
  Rocket: Rocket,
};

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 bg-slate-50/60 dark:bg-slate-900/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our 4-Step Engineering Roadmap
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            From initial concept discovery to continuous post-launch optimization, our battle-tested pipeline guarantees on-time delivery and enterprise-grade execution.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((stepItem, index) => {
            const IconComponent = iconMap[stepItem.icon] || Compass;
            const isSelected = activeStep === index;

            return (
              <motion.div
                key={stepItem.step}
                onClick={() => setActiveStep(index)}
                className={`relative rounded-3xl p-6 sm:p-7 border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white dark:bg-slate-900 border-indigo-500 shadow-xl ring-2 ring-indigo-500/20 dark:ring-indigo-500/30'
                    : 'bg-white/80 dark:bg-slate-900/70 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md'
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Step Number & Duration */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-indigo-600 dark:text-indigo-400">
                      {stepItem.step}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      {stepItem.duration}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 border border-indigo-100 dark:border-slate-700">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {stepItem.tagline}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Key Deliverables
                  </div>
                  <ul className="space-y-1.5">
                    {stepItem.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Banner */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-10 rounded-2xl bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 p-6 sm:p-8 text-white border border-indigo-500/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs uppercase tracking-widest text-indigo-300 font-mono">
              Phase {processSteps[activeStep].step} Focus • {processSteps[activeStep].title}
            </div>
            <p className="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed">
              {processSteps[activeStep].detail}
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-semibold text-sm shadow-md transition-colors flex items-center gap-2"
          >
            <span>Discuss Timeline</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
