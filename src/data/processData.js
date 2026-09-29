import { Compass, Layers, Code2, Rocket } from 'lucide-react';

export const processSteps = [
  {
    step: "01",
    phase: "Phase 01",
    title: "Discovery & Strategy",
    timeline: "Week 1",
    duration: "Week 1",
    icon: Compass,
    deliverables: [
      "Product Requirements Document (PRD)",
      "Tech stack evaluation & database schema plan",
      "Competitive benchmarking & user flow mapping",
      "Project milestone timeline & fixed budget lock"
    ],
    focusDetail: "We audit your business model, customer journey, and technical requirements to formulate an airtight roadmap with zero ambiguity.",
    detail: "We audit your business model, customer journey, and technical requirements to formulate an airtight roadmap with zero ambiguity."
  },
  {
    step: "02",
    phase: "Phase 02",
    title: "UI/UX Design",
    timeline: "Week 2 – 3",
    duration: "Week 2 – 3",
    icon: Layers,
    deliverables: [
      "Figma high-fidelity interactive prototypes",
      "Comprehensive design tokens (Light & Dark Mode)",
      "Micro-interactions & mobile-first layouts",
      "User testing & client feedback iterations"
    ],
    focusDetail: "We design conversion-focused user interfaces that match your brand identity across all screen sizes before touching code.",
    detail: "We design conversion-focused user interfaces that match your brand identity across all screen sizes before touching code."
  },
  {
    step: "03",
    phase: "Phase 03",
    title: "Full-Stack Development",
    timeline: "Week 4 – 7",
    duration: "Week 4 – 7",
    icon: Code2,
    deliverables: [
      "Modular React / Tailwind CSS frontend",
      "Node.js & Express REST APIs + Auth",
      "Database setups (SQL / MongoDB / Supabase)",
      "Payment gateway & custom code integrations"
    ],
    focusDetail: "We transform approved designs into scalable, production-ready code with clean architecture and continuous testing.",
    detail: "We transform approved designs into scalable, production-ready code with clean architecture and continuous testing."
  },
  {
    step: "04",
    phase: "Phase 04",
    title: "Launch & Growth Support",
    timeline: "Week 8 & Beyond",
    duration: "Week 8 & Beyond",
    icon: Rocket,
    deliverables: [
      "Production deployment (Vercel / AWS / Cloudflare)",
      "Core Web Vitals 90+ & SSL configuration",
      "Complete team handoff & admin panel walk-through",
      "1 Year Free Support, SSL & SLA coverage"
    ],
    focusDetail: "We deploy your project to high-speed hosting and guarantee 1 year of ongoing technical support and maintenance.",
    detail: "We deploy your project to high-speed hosting and guarantee 1 year of ongoing technical support and maintenance."
  }
];

export default processSteps;
