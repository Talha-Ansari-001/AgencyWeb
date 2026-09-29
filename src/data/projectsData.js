export const projects = [
  {
    id: "fintech-apex",
    category: "Web Applications",
    title: "Apex Wealth & Algorithmic Trading",
    subtitle: "Institutional-grade financial analytics and portfolio rebalancing platform",
    client: "Apex Global Assets",
    timeline: "14 Weeks",
    metrics: [
      { label: "Execution Latency", value: "< 24ms" },
      { label: "Daily Volume Managed", value: "$420M+" },
      { label: "Client Conversion Lift", value: "+185%" }
    ],
    techStack: ["React 18", "TypeScript", "Tailwind CSS", "WebSocket", "Chart.js / TradingView", "Node.js", "Redis"],
    summary: "A ultra-responsive web trading application offering institutional investors real-time telemetry, multi-exchange order routing, and sub-second asset rebalancing.",
    problem: "Apex's legacy financial platform suffered from sluggish WebGL rendering, 3-second price lag during market opens, and disjointed mobile views that alienated high-net-worth portfolio managers.",
    solution: "We re-engineered the entire client architecture into a modular React single-page app utilizing Web Workers for off-thread calculation, real-time WebSocket multiplexing, and customizable high-density dark mode dashboards.",
    features: [
      "Sub-25ms order execution and ticker streaming",
      "Dynamic multi-monitor canvas workspace with drag & drop tiles",
      "Biometric 2FA and enterprise SOC2 compliance audit logging",
      "Automated tax-loss harvesting simulation visualizer"
    ],
    accentColor: "from-blue-600 to-cyan-500",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://example.com/demo/apex-wealth",
    githubUrl: "https://github.com/quantifyinfotech/apex-wealth-preview"
  },
  {
    id: "luxury-ecommerce-aura",
    category: "E-Commerce Stores",
    title: "Aura Living Atelier",
    subtitle: "High-fashion bespoke furniture & artisan home goods boutique",
    client: "Aura Home Design Milano",
    timeline: "10 Weeks",
    metrics: [
      { label: "Checkout Conversion", value: "+64%" },
      { label: "Average Order Value", value: "$1,840" },
      { label: "Lighthouse Performance", value: "99/100" }
    ],
    techStack: ["React", "Shopify Storefront API", "Tailwind CSS", "Framer Motion", "Stripe Custom Elements", "Three.js 3D Viewer"],
    summary: "An editorial e-commerce experience blending interactive 3D spatial room previews, frictionless one-click Apple Pay/Stripe checkout, and bespoke luxury branding.",
    problem: "The client was losing high-ticket international buyers due to a generic template checkout, slow 4.5s load times on mobile, and an inability to showcase artisan craftsmanship through materials interactively.",
    solution: "We designed a headless e-commerce storefront with instantaneous page transitions, WebGL material texture inspectors, localized multi-currency Stripe gateways, and fluid micro-animations.",
    features: [
      "Custom 3D WebGL fabric and marble material configurator",
      "Frictionless zero-redirect Stripe and Apple Pay checkout",
      "Headless inventory syncing across 6 international distribution hubs",
      "Editorial storytelling lookbook with shoppable visual hotspots"
    ],
    accentColor: "from-amber-500 to-rose-500",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://example.com/demo/aura-living",
    githubUrl: "https://github.com/quantifyinfotech/aura-living-storefront"
  },
  {
    id: "saas-pulsemetrics",
    category: "Web Applications",
    title: "PulseMetrics Cloud Observability",
    subtitle: "Real-time distributed systems telemetry and AI anomaly detection",
    client: "PulseMetrics Inc. (Series B)",
    timeline: "12 Weeks",
    metrics: [
      { label: "Query Speed Up", value: "8.4x" },
      { label: "Active Daily Engineers", value: "48,000+" },
      { label: "Churn Reduction", value: "-42%" }
    ],
    techStack: ["Next.js/React", "Tailwind CSS", "Framer Motion", "GraphQL", "Apache ECharts", "Go Microservices"],
    summary: "A unified cloud observability suite enabling devops teams to pinpoint microservice latency spikes and query petabytes of logs in milliseconds.",
    problem: "Engineers experienced dashboard freezes when rendering over 50,000 live trace events, alongside confusing navigation that spiked user onboarding drop-offs.",
    solution: "Engineered a virtualized canvas rendering engine with progressive data loading, intuitive contextual search with keyboard shortcuts (Cmd+K), and automated AI incident summaries.",
    features: [
      "Cmd+K universal command bar with instant fuzzy search",
      "Real-time microservice topology map with animated traffic flows",
      "One-click alert configuration integrated with Slack & PagerDuty",
      "Team collaboration canvases with live cursor multiplayer presence"
    ],
    accentColor: "from-violet-600 to-indigo-500",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://example.com/demo/pulsemetrics",
    githubUrl: "https://github.com/quantifyinfotech/pulsemetrics-saas"
  },
  {
    id: "corporate-lumina",
    category: "Website Development",
    title: "Lumina CleanTech Enterprise",
    subtitle: "High-conversion corporate brand portal & interactive ESG impact calculator",
    client: "Lumina Renewable Technologies",
    timeline: "8 Weeks",
    metrics: [
      { label: "B2B Lead Generation", value: "+210%" },
      { label: "Session Duration", value: "4m 15s" },
      { label: "SEO Top 3 Rankings", value: "84 Keywords" }
    ],
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Headless CMS", "SVG Data Visualizations", "Vercel Edge"],
    summary: "A high-impact enterprise digital showcase featuring interactive carbon offset simulations, investor relations portals, and multilingual global deployment.",
    problem: "Lumina's outdated corporate website lacked interactive elements to demonstrate their complex renewable patents, resulting in flat investor engagement and low partner inquiries.",
    solution: "Created an interactive cinematic landing experience with scroll-driven 3D animations, custom dynamic ROI calculators, and a lightning-fast headless CMS architecture.",
    features: [
      "Dynamic interactive gigawatt energy production simulation",
      "Automated headless CMS publishing pipeline for press releases",
      "Enterprise lead qualification wizard with CRM direct injection",
      "Full WCAG 2.1 AAA Accessibility certification"
    ],
    accentColor: "from-emerald-500 to-teal-500",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://example.com/demo/lumina-cleantech",
    githubUrl: "https://github.com/quantifyinfotech/lumina-enterprise"
  }
];
