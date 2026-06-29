export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  client: string;
  industry: string;
  duration: string;
  description: string;
  gradient: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "fintech-payment-platform",
    title: "FinTech Payment Platform",
    category: "Software",
    client: "European FinTech",
    industry: "Financial Services",
    duration: "8 months",
    description:
      "Scalable payment orchestration platform for a leading European fintech, processing millions of transactions daily.",
    gradient: "from-violet-500/20 to-cyan-500/20",
    challenge:
      "A fast-growing European fintech was processing payments through a brittle monolith that couldn't handle peak load. Downtime during high-traffic periods was costing them revenue and eroding merchant trust. They needed a battle-tested architecture that could scale horizontally without a full rewrite overnight.",
    solution:
      "itenx designed and delivered a microservices-based payment orchestration layer on top of the existing core, strangling the monolith incrementally. We introduced an event-driven architecture using Kafka for transaction streaming, built a multi-currency settlement engine, and implemented real-time fraud detection rules. A dedicated DevOps stream automated CI/CD and zero-downtime deployments across AWS EKS.",
    results: [
      "Achieved 99.99% uptime across 12 consecutive months post-launch",
      "Daily transaction volume scaled from 200k to over 8 million without infrastructure changes",
      "Fraud detection rules cut chargebacks by 43% in the first quarter",
      "Deployment frequency increased from monthly releases to multiple times per day",
      "Infrastructure costs reduced by 61% through right-sizing and spot instances",
    ],
    metrics: [
      { label: "Daily Transactions", value: "8M+" },
      { label: "Uptime", value: "99.99%" },
      { label: "Cost Reduction", value: "61%" },
      { label: "Chargeback Drop", value: "43%" },
    ],
    technologies: ["AWS EKS", "Kafka", "Node.js", "PostgreSQL", "Redis", "Terraform", "Datadog"],
  },
  {
    slug: "ecommerce-redesign",
    title: "E-Commerce Redesign",
    category: "Web",
    client: "UK Retail Brand",
    industry: "Retail & E-Commerce",
    duration: "5 months",
    description:
      "Full redesign and migration of a retail brand's e-commerce experience, doubling conversion rates.",
    gradient: "from-amber-500/20 to-rose-500/20",
    challenge:
      "A mid-sized UK retail brand had an aging Magento 1 storefront with a 3.2-second average load time, a fragmented mobile experience, and a checkout flow that was losing 70% of users before purchase. Organic search rankings had slipped as Core Web Vitals scores tanked. A new season launch was 5 months away.",
    solution:
      "We rebuilt the storefront in Next.js with a headless commerce architecture, connecting to the existing ERP via a custom API layer so no back-end systems needed to change. itenx's design team conducted user research and rebuilt the information architecture from scratch, reducing checkout to three steps. Server-side rendering and aggressive image optimization brought performance into the green. A/B testing infrastructure was wired in from day one.",
    results: [
      "Conversion rate increased from 1.4% to 3.1% within 60 days of launch",
      "Average page load time dropped from 3.2s to 0.9s",
      "Mobile revenue share grew from 31% to 58% over six months",
      "Organic search impressions up 120% within 90 days of relaunch",
      "Cart abandonment rate fell from 71% to 44%",
    ],
    metrics: [
      { label: "Conversion Uplift", value: "2.2×" },
      { label: "Load Time", value: "0.9s" },
      { label: "Organic Growth", value: "120%" },
      { label: "Cart Abandon Drop", value: "−27pp" },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shopify Storefront API", "Vercel", "Sanity", "Lighthouse CI"],
  },
  {
    slug: "healthcare-patient-portal",
    title: "Healthcare Patient Portal",
    category: "Infrastructure",
    client: "Regional Hospital Network",
    industry: "Healthcare",
    duration: "10 months",
    description:
      "HIPAA-compliant patient portal and telehealth platform for a regional hospital network.",
    gradient: "from-emerald-500/20 to-cyan-500/20",
    challenge:
      "A regional hospital network spanning four facilities had patient records spread across three incompatible systems. Patients had no digital access to their records, and clinicians were faxing referrals. The network wanted a unified portal with telehealth capabilities but had strict HIPAA compliance requirements and limited internal IT capacity.",
    solution:
      "itenx built a HIPAA-compliant patient portal with FHIR-based integrations to all three legacy EMR systems, giving patients a single view of their medical history. A telehealth module with end-to-end encrypted video consultations was built on WebRTC. Role-based access controls, full audit logging, and data-at-rest encryption were built into the infrastructure from day one. All infrastructure was provisioned in a HIPAA-eligible AWS environment with Business Associate Agreement.",
    results: [
      "18,000 patients onboarded within the first 90 days of launch",
      "Paper-based referrals eliminated across all four facilities",
      "Telehealth consultations accounted for 34% of outpatient volume within six months",
      "Administrative overhead for appointment scheduling reduced by 78%",
      "Zero HIPAA compliance incidents since go-live",
    ],
    metrics: [
      { label: "Patients Onboarded", value: "18k+" },
      { label: "Telehealth Share", value: "34%" },
      { label: "Admin Reduction", value: "78%" },
      { label: "Compliance Incidents", value: "0" },
    ],
    technologies: ["React", "Node.js", "FHIR R4", "AWS (HIPAA-eligible)", "WebRTC", "PostgreSQL", "HashiCorp Vault"],
  },
  {
    slug: "saas-analytics-dashboard",
    title: "SaaS Analytics Dashboard",
    category: "Design",
    client: "B2B SaaS Platform",
    industry: "Software & Analytics",
    duration: "4 months",
    description:
      "Enterprise dashboard redesign with analytics, role-based access, and real-time data visualization.",
    gradient: "from-indigo-500/20 to-purple-500/20",
    challenge:
      "A B2B SaaS company had built a powerful analytics product but was struggling with activation and retention. New users were churning within their first week because the interface was too complex. Support tickets cited confusion as the number one reason for cancellation. The product had strong underlying data but users couldn't find the insights they needed.",
    solution:
      "itenx ran a five-day discovery sprint with the client's customer success team to map user personas and the most common jobs-to-be-done. We redesigned the information architecture around three distinct user roles—executives, analysts, and operators—each with a tailored default view. Real-time chart components were rebuilt with D3.js for performance, and a guided onboarding flow was introduced. The entire design system was documented in Storybook for the client's internal team to build on.",
    results: [
      "Week-one churn dropped by 52% in the first cohort after relaunch",
      "Average session length increased from 4 minutes to 11 minutes",
      "Support tickets related to UI confusion fell 65% within 8 weeks",
      "NPS score improved from 23 to 61 over two quarters",
      "Sales demo-to-trial conversion improved by 38% after redesign was used in demos",
    ],
    metrics: [
      { label: "Churn Reduction", value: "52%" },
      { label: "Session Length", value: "+175%" },
      { label: "NPS Score", value: "61" },
      { label: "Support Tickets", value: "−65%" },
    ],
    technologies: ["Figma", "React", "D3.js", "TypeScript", "Storybook", "Tailwind CSS", "Framer Motion"],
  },
  {
    slug: "logistics-api-platform",
    title: "Logistics API Platform",
    category: "Software",
    client: "Logistics Aggregator",
    industry: "Logistics & Supply Chain",
    duration: "6 months",
    description:
      "High-throughput API for logistics coordination, integrating carriers and warehouse systems.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    challenge:
      "A logistics aggregator was manually reconciling shipment data from 40+ carriers using spreadsheets and email threads. Their operations team spent 60% of their time on data entry instead of exception handling. They needed a unified API that could ingest webhooks and polling data from dozens of incompatible carrier formats and expose a single clean interface to their customers.",
    solution:
      "itenx built a carrier-agnostic logistics API platform with a plugin architecture that allowed new carrier integrations to be added in days, not months. An intelligent normalisation layer translated carrier-specific schemas into a unified event model. Rate limiting, authentication, and detailed audit logs were built into the gateway. A real-time tracking dashboard was provided for ops staff, and webhooks were exposed for customers to consume shipment events programmatically.",
    results: [
      "52 carrier integrations live at launch, 20 more added in the following quarter",
      "Median API response time of 180ms under peak load",
      "Operations team time spent on data entry dropped from 60% to under 8%",
      "Customer shipment visibility SLA improved from 4 hours to real-time",
      "Platform processed over 2 million shipment events on its peak day within 3 months",
    ],
    metrics: [
      { label: "Carrier Integrations", value: "52+" },
      { label: "Avg Response Time", value: "180ms" },
      { label: "Manual Work Saved", value: "52%" },
      { label: "Peak Daily Events", value: "2M+" },
    ],
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "RabbitMQ", "AWS Lambda", "Kong Gateway"],
  },
  {
    slug: "marketing-site-rebuild",
    title: "Marketing Site Rebuild",
    category: "Web",
    client: "Series B SaaS Startup",
    industry: "Software",
    duration: "3 months",
    description:
      "Performance-optimized marketing site with A/B testing, analytics, and SEO best practices.",
    gradient: "from-rose-500/20 to-orange-500/20",
    challenge:
      "A Series B SaaS startup had a marketing site built on a legacy WordPress theme that was scoring 34 on Lighthouse, had no structured data, and was generating almost no organic leads. Paid CAC was climbing while organic was flat. The growth team wanted a new site live before a major product launch but couldn't afford months of downtime or a bloated agency timeline.",
    solution:
      "itenx delivered the full rebuild in 12 weeks on Next.js, with Sanity as the CMS so the marketing team could own content without developer involvement. Every page was built with Core Web Vitals as a hard constraint. Structured data, canonical tags, and a programmatic blog were set up from day one. Google Optimize A/B testing was integrated for the hero and pricing pages, and a full analytics event taxonomy was defined and implemented in GA4.",
    results: [
      "Lighthouse Performance score improved from 34 to 96",
      "Organic search traffic grew 3.4× within six months of launch",
      "Inbound leads from organic increased by 210% in the first quarter",
      "A/B testing on the hero reduced bounce rate by 22%",
      "Marketing team publishes new content independently—zero developer requests in 4 months",
    ],
    metrics: [
      { label: "Lighthouse Score", value: "96" },
      { label: "Organic Growth", value: "3.4×" },
      { label: "Inbound Leads", value: "+210%" },
      { label: "Bounce Rate Drop", value: "−22%" },
    ],
    technologies: ["Next.js", "Sanity", "TypeScript", "Tailwind CSS", "Vercel", "GA4", "Google Optimize"],
  },
];
