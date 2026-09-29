import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import FeaturedWork from './components/FeaturedWork';
import CaseStudyModal from './components/CaseStudyModal';
import ProcessSection from './components/ProcessSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Theme state with localStorage persistence and system preference fallback
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('quantify-theme') || localStorage.getItem('nexusdev-theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true; // Default to sleek dark mode
  });

  // State for active case study modal
  const [selectedProject, setSelectedProject] = useState(null);

  // State for service preselection in contact form
  const [contactService, setContactService] = useState('Web Apps');

  // Synchronize 'dark' class on <html> documentElement
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('quantify-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('quantify-theme', 'light');
    }
  }, [darkMode]);

  const handleSelectServiceFromCard = (serviceCategory) => {
    setContactService(serviceCategory);
  };

  const handleOpenCaseStudy = (project) => {
    setSelectedProject(project);
  };

  const handleCloseCaseStudy = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white transition-colors duration-200">
      {/* Sticky Header Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section (#home) */}
        <Hero />

        {/* Services Section (#services) */}
        <ServicesSection onSelectService={handleSelectServiceFromCard} />

        {/* Featured Work / Portfolio Section (#work) */}
        <FeaturedWork onSelectProject={handleOpenCaseStudy} />  

        {/* Process Section (#process) */}
        <ProcessSection />

        {/* Contact Section (#contact) */}
        <Contact initialService={contactService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={handleCloseCaseStudy}
        onSelectProjectService={handleSelectServiceFromCard}
      />
    </div>
  );
}
