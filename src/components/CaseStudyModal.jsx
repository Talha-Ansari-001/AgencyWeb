import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Calendar,
  Building,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

export default function CaseStudyModal({ project, isOpen, onClose, onSelectProjectService }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const handleStartSimilar = () => {
    onClose();
    if (onSelectProjectService) {
      if (project.category.includes('Commerce')) {
        onSelectProjectService('E-Commerce');
      } else if (project.category.includes('Application')) {
        onSelectProjectService('Web Apps');
      } else {
        onSelectProjectService('Websites');
      }
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-slate-950/70 dark:bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Dialog Content */}
        <motion.div
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 my-auto"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          {/* Top Bar with Sticky Close Button */}
          <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-2">
              <span className={`text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full border ${project.badgeColor}`}>
                {project.category}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500 font-mono hidden sm:inline">
                Case Study File #{project.id}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="overflow-y-auto p-4 sm:p-8 space-y-6 sm:space-y-8">
            {/* Title & Metadata */}
            <div>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
                {project.title}
              </h2>
              <p className="mt-1.5 sm:mt-2 text-sm sm:text-lg text-slate-600 dark:text-slate-300">
                {project.subtitle}
              </p>

              {/* Client & Timeline Meta */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-100 dark:border-slate-800/80 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5 font-medium">
                  <Building className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-500" />
                  <span>Client: <strong className="text-slate-800 dark:text-slate-200">{project.client}</strong></span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-500" />
                  <span>Timeline: <strong className="text-slate-800 dark:text-slate-200">{project.timeline}</strong></span>
                </div>
              </div>
            </div>

            {/* Impact Metrics Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {project.metrics.map((metric, mIdx) => (
                <div
                  key={mIdx}
                  className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-50/70 to-slate-50 dark:from-slate-800/80 dark:to-slate-900 border border-indigo-100 dark:border-slate-800 flex items-center justify-between"
                >
                  <div>
                    <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {metric.label}
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">
                      {metric.value}
                    </div>
                  </div>
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400/40" />
                </div>
              ))}
            </div>

            {/* Project Image Banner */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-video border border-slate-200 dark:border-slate-800 shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            {/* Problem vs. Solution Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Problem */}
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/70 dark:border-rose-900/30 space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-xs sm:text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>The Architectural Challenge</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/70 dark:border-emerald-900/30 space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs sm:text-sm">
                  <Lightbulb className="w-4 h-4 shrink-0" />
                  <span>Engineered Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="space-y-2.5 sm:space-y-3">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Production Tech Stack
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features Built */}
            <div className="space-y-2.5 sm:space-y-3">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Key Features Delivered
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {project.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer / CTAs */}
          <div className="px-4 py-3 sm:px-6 sm:py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
            <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 min-h-[40px] px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 shadow-sm transition-colors"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 min-h-[40px] px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 shadow-sm transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Specs</span>
              </a>
            </div>

            <button
              onClick={handleStartSimilar}
              className="w-full sm:w-auto min-h-[42px] px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white shadow-md shadow-indigo-600/30 flex items-center justify-center gap-2 active:scale-[0.99] cursor-pointer"
            >
              <span>Build A Similar Solution</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
