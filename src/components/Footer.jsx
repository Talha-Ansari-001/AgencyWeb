import { ArrowUp, Facebook, Instagram } from 'lucide-react';
import logoImg from '../assets/Logo_text.jpg';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 pt-12 sm:pt-16 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-slate-100 dark:border-slate-850">
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src={logoImg}
                alt="Logo"
                className="w-9 h-9 rounded-xl object-cover shadow-md shadow-black/20 border border-slate-200/50 dark:border-slate-800/80"
              />
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white font-['Space_Grotesk']">
                QUANTIFY<span className="text-indigo-600 dark:text-indigo-400">INFOTECH</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              We design and engineer bespoke web platforms, high-converting e-commerce engines, and high-performance cloud applications that drive real business growth.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 transition-colors active:scale-95"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/quantify_infotech/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 transition-colors active:scale-95"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <button onClick={() => scrollTo('#home')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#services')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#work')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#process')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Our Process
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#contact')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions / Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Specialties
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <button onClick={() => scrollTo('#services')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-left">
                  React & Next.js Platforms
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#services')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-left">
                  Headless E-Commerce & Stripe
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#services')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-left">
                  Real-time Analytics Dashboards
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#services')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-left">
                  Performance Audits & SEO
                </button>
              </li>
            </ul>
          </div>

          {/* Agency Location & Quick Back to Top */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Offices & Hours
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Mumbai & Remote Worldwide
            </p>
            <p className="text-xs text-slate-500 font-mono">
              Mon — Fri: 08:00 – 18:00 IST
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 min-h-[38px] px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 active:scale-95 transition-all cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} QUANTIFY INFOTECH Inc. All rights reserved.</p>
          <div className="flex items-center justify-center gap-1">
            <span>Engineered with precision with</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
