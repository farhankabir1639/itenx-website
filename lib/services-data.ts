export const services = [
  {
    slug: "software-development",
    title: "Software Development",
    description:
      "Bespoke enterprise software, APIs, and scalable solutions delivered by senior engineers.",
    longDescription:
      "We build custom software that scales—from internal tools to customer-facing platforms. Our senior engineers deliver production-grade code using modern stacks, clean architecture, and DevOps best practices. Whether you need a new product, API integration, or legacy modernization, we ship on time.",
    keywords: ["software development", "enterprise software", "APIs", "custom software"],
    whatWeDo: [
      "Custom application development from concept to deployment",
      "API design and integration with third-party services",
      "Legacy system modernization and refactoring",
      "Performance optimization and scalability planning",
    ],
    technologies: ["Python", "Node.js", "Java", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS"],
    exampleProjects: ["FinTech payment platform", "Enterprise ERP module", "API gateway for microservices"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Modern, performant websites and web apps built with React, Next.js, and cutting-edge stack.",
    longDescription:
      "We build fast, accessible, and scalable web applications using React, Next.js, TypeScript, and modern tooling. From marketing sites to SaaS platforms, we focus on performance, SEO, and user experience. Every project is responsive, tested, and production-ready.",
    keywords: ["web development", "React", "Next.js", "web apps"],
    whatWeDo: [
      "Responsive websites and progressive web apps",
      "SaaS platforms and dashboard applications",
      "E-commerce and product catalog experiences",
      "SEO-optimized content and marketing sites",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel", "GraphQL"],
    exampleProjects: ["E-commerce redesign", "SaaS admin dashboard", "Marketing landing pages"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "User-centered design that delights, converts, and drives engagement across every touchpoint.",
    longDescription:
      "Our designers create interfaces that users love and businesses rely on. We combine research, wireframes, prototypes, and high-fidelity design systems to deliver cohesive experiences. From mobile apps to enterprise dashboards, we ensure clarity, accessibility, and conversion.",
    keywords: ["UI design", "UX design", "product design", "design systems"],
    whatWeDo: [
      "User research and usability testing",
      "Wireframing, prototyping, and high-fidelity mockups",
      "Design systems and component libraries",
      "Accessibility audits and WCAG compliance",
    ],
    technologies: ["Figma", "Adobe XD", "Prototyping", "Design Tokens"],
    exampleProjects: ["App redesign", "Design system for SaaS", "Accessibility improvements"],
  },
  {
    slug: "it-infrastructure",
    title: "IT Infrastructure",
    description:
      "Cloud architecture, DevOps, security, and infrastructure that scales with your business.",
    longDescription:
      "We design and manage cloud infrastructure that grows with you. From AWS and Azure to Kubernetes and CI/CD pipelines, we handle deployment, monitoring, and security. Our process managers ensure smooth operations and incident response.",
    keywords: ["IT infrastructure", "DevOps", "cloud", "AWS"],
    whatWeDo: [
      "Cloud architecture design and migration",
      "CI/CD pipeline setup and automation",
      "Monitoring, alerting, and incident response",
      "Security hardening and compliance support",
    ],
    technologies: ["AWS", "Azure", "Kubernetes", "Terraform", "GitHub Actions", "Datadog"],
    exampleProjects: ["AWS migration", "Kubernetes orchestration", "CI/CD pipeline setup"],
  },
  {
    slug: "consulting",
    title: "Consulting",
    description:
      "Strategic technology advisory to align your stack, processes, and roadmap with your goals.",
    longDescription:
      "We advise on technology strategy, architecture decisions, team structure, and digital roadmap. Our consultants bring experience from startups to enterprises and help you avoid costly mistakes. Get clarity before you build.",
    keywords: ["IT consulting", "technology advisory", "architecture"],
    whatWeDo: [
      "Technology stack assessment and recommendations",
      "Architecture review and modernization planning",
      "Team structure and process optimization",
      "Digital strategy and roadmap development",
    ],
    technologies: ["Architecture diagrams", "Process mapping", "Roadmap planning"],
    exampleProjects: ["Stack migration strategy", "Team scaling plan", "Technical due diligence"],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    description:
      "End-to-end modernization of processes, systems, and culture for the digital age.",
    longDescription:
      "We guide organizations through digital transformation—modernizing legacy systems, streamlining processes, and building digital-first cultures. From assessment to implementation, we work alongside your team to deliver lasting change.",
    keywords: ["digital transformation", "legacy modernization", "process improvement"],
    whatWeDo: [
      "Legacy system assessment and modernization roadmap",
      "Process automation and workflow optimization",
      "Change management and team enablement",
      "Integration of new tools and platforms",
    ],
    technologies: ["Process automation", "System integration", "Change management"],
    exampleProjects: ["Healthcare portal migration", "Process automation", "Legacy ERP upgrade"],
  },
] as const;
