import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp,
  Terminal,
  Layers,
  ChevronRight,
  Star
} from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techStack = [
    { name: 'React 18', category: 'Frontend' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'Tailwind CSS', category: 'Design Engine' },
    { name: 'TypeScript', category: 'Type Safety' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'MySQL', category: 'Database' },
    { name: 'GraphQL', category: 'API' },
    { name: 'Stripe', category: 'Payments' },
    { name: 'AWS & Edge', category: 'Cloud Infrastructure' }
  ];

  return (
    <section id="home" className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/15 dark:bg-indigo-600/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 dark:bg-cyan-400/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Copy & Dual CTAs */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left space-y-5 sm:space-y-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50/70 dark:bg-indigo-950/40 text-[11px] sm:text-xs font-semibold text-indigo-700 dark:text-indigo-300 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Select Q3 / Q4 Engagements</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.14]">
              We build{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-indigo-300 bg-clip-text text-transparent">
                high-performance
              </span>{' '}
              digital products.
            </h1>

            {/* Subheadline mentioning Websites, E-Commerce, and Web Applications */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              QUANTIFY INFOTECH is an elite engineering agency engineering bespoke{' '}
              <strong className="text-slate-900 dark:text-white font-medium">Websites</strong>, high-conversion{' '}
              <strong className="text-slate-900 dark:text-white font-medium">E-Commerce Stores</strong>, and scalable{' '}
              <strong className="text-slate-900 dark:text-white font-medium">Web Applications</strong> for venture-backed startups and modern brands.
            </p>

            {/* Dual CTAs */}
            <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={() => scrollTo('#contact')}
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('#services')}
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-xl font-semibold border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-sm active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Services</span>
                <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
              </button>
            </div>

            {/* Social Proof Badges */}
            <div className="pt-5 sm:pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-y-2.5 gap-x-4 sm:gap-x-8 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-slate-700 dark:text-slate-200 ml-1">5.0 / 5.0 Rating</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-indigo-500" />
                <span>99.8% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Guaranteed SLA Delivery</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Tech Glassmorphism Visual Console */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Ambient Background Gradient for Card */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur-xl opacity-30 dark:opacity-40 animate-pulse-slow"></div>

            {/* Interactive Preview Glass Card */}
            <div className="relative rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 backdrop-blur-xl shadow-xl sm:shadow-2xl p-4 sm:p-5 overflow-hidden">
              {/* Card Window Topbar */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-1.5 sm:ml-2 text-[11px] sm:text-xs font-mono text-slate-400 dark:text-slate-500 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-indigo-500" />
                    quantify-deploy.engine
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                  LIVE 200 OK
                </span>
              </div>

              {/* Code / Architecture Snippet */}
              <div className="py-3 sm:py-4 space-y-1.5 sm:space-y-2 font-mono text-[11px] sm:text-xs overflow-x-auto no-scrollbar">
                <div className="text-slate-400 dark:text-slate-500">// QUANTIFY INFOTECH Client Target Architecture</div>
                <div className="text-slate-800 dark:text-slate-200">
                  <span className="text-indigo-600 dark:text-indigo-400">const</span> product ={' '}
                  <span className="text-cyan-600 dark:text-cyan-300">defineArchitecture</span>({'{'}
                </div>
                <div className="pl-3 sm:pl-4 text-slate-600 dark:text-slate-400">
                  type: <span className="text-amber-600 dark:text-amber-300">['Websites', 'E-Commerce', 'Web Apps']</span>,
                </div>
                <div className="pl-3 sm:pl-4 text-slate-600 dark:text-slate-400">
                  renderTime: <span className="text-emerald-600 dark:text-emerald-400">'0.12s'</span>,
                </div>
                <div className="pl-3 sm:pl-4 text-slate-600 dark:text-slate-400">
                  uptime: <span className="text-emerald-600 dark:text-emerald-400">'99.99%'</span>,
                </div>
                <div className="pl-3 sm:pl-4 text-slate-600 dark:text-slate-400">
                  stack: <span className="text-indigo-500">['React', 'Tailwind', 'Motion', 'Stripe']</span>
                </div>
                <div className="text-slate-800 dark:text-slate-200">{'}'});</div>
              </div>

              {/* Live Metric Cards Grid */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 dark:text-slate-400">Lighthouse Score</div>
                  <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-baseline gap-1 mt-0.5">
                    100<span className="text-[10px] sm:text-xs text-emerald-500 font-semibold">/100</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-1 rounded-full mt-2 overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[99%]" />
                  </div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 dark:text-slate-400">Avg. Client Lift</div>
                  <div className="text-lg sm:text-xl font-bold text-indigo-600 dark:text-indigo-400 flex items-baseline gap-1 mt-0.5">
                    +2.8x<span className="text-[10px] sm:text-xs text-slate-500 font-normal">ROI</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-1 rounded-full mt-2 overflow-hidden">
                    <div className="bg-indigo-500 h-full w-[88%]" />
                  </div>
                </div>
              </div>

              {/* Floating Floating Pill */}
              <div className="mt-3 p-2 sm:p-2.5 rounded-xl bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-indigo-500/10 border border-indigo-500/20 flex items-center justify-between text-[11px] sm:text-xs">
                <div className="flex items-center gap-1.5 sm:gap-2 text-slate-700 dark:text-slate-300 font-medium">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-500 shrink-0" />
                  <span className="truncate">Real-time Telemetry & Edge Deploys</span>
                </div>
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold shrink-0 ml-1">&lt; 40ms</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Marquee Strip */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
          <p className="text-center text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 sm:mb-6">
            Technologies & Frameworks We Master
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center gap-1.5 sm:gap-2 hover:border-indigo-500/50 transition-colors"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-indigo-500" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {tech.name}
                </span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono hidden sm:inline">
                  • {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
