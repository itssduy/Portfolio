// Edit this file to update your info.

export const profile = {
  name: 'Duy Tran',
  role: 'Cloud Engineer',
  photo: '/headshot.jpg',
  tags: ['AWS', 'Terraform', 'Cloud Infrastructure', 'Full-Stack Development'],
  bio: `I'm Duy, a Computer Science student at the University of Louisiana at Lafayette with a concentration in Cloud Computing.

My work spans cloud infrastructure, backend development, and full-stack engineering, with a current focus on AWS automation and AI-powered agent tooling at CGI and FIPSE. I'm interested in building systems that are reliable, observable, and easy to operate at scale.`,
  location: 'Lafayette, LA',
  email: 'duyatran05@gmail.com',
  resumeUrl: '/resume.pdf',
  social: {
    github: 'https://github.com/itssduy',
    linkedin: 'https://linkedin.com/in/duy-a-tran',
    twitter: '',
  },
}

export const education = {
  school: 'University of Louisiana at Lafayette',
  degree: 'B.S. in Computer Science, Cloud Computing Concentration',
  gpa: '3.5/4.0',
  period: 'Dec 2026',
}

export const skills = [
  {
    category: 'Certifications',
    wide: true,
    items: [
      { name: 'AWS Certified Solutions Architect - Associate', date: 'Sept 2026' },
      { name: 'AWS Certified Cloud Practitioner', date: 'Mar 2026' },
      { name: 'AWS Certified Developer - Associate', date: 'In Progress' },
      { name: 'CompTIA Security+', date: 'In Progress' },
      { name: 'Harvard CS50', date: 'Jan 2025' },
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS', 'GCP', 'Oracle Cloud', 'Terraform', 'Docker', 'CI/CD'],
  },
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'HTML/CSS'],
  },
  {
    category: 'Frameworks',
    items: ['React', 'Angular', 'Django', 'Express', 'FastAPI', 'Flask'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'DynamoDB', 'MongoDB', 'SQLite', 'RDS'],
  },
]

export const projects = [
  {
    title: 'Cloud Cost Optimization Platform',
    period: 'Aug 2026 - Present',
    description:
      'Serverless AWS platform that pulls cost and utilization data from Cost Explorer and CloudWatch into DynamoDB, using an EWMA-based rule engine to flag idle EC2 instances, unattached EBS volumes, and stale snapshots, with automated remediation and a Terraform-provisioned dashboard.',
    tech: ['AWS Lambda', 'EventBridge', 'DynamoDB', 'Terraform', 'ECS Fargate'],
    demoUrl: '',
    codeUrl: 'https://github.com/itssduy/Cloud-Optimizer',
  },
  {
    title: 'Personal Learning Agent',
    period: 'June 2026 - Jul 2026',
    description:
      'RAG-powered learning agent built with the Strands Agents SDK and Claude that tests understanding through guided prompts instead of returning flat answers, backed by an ingestion pipeline that indexes files, URLs, and S3 URIs into S3 Vectors with a weekly refresh via EventBridge and Lambda.',
    tech: ['Strands Agents SDK', 'Claude', 'S3 Vectors', 'Terraform'],
    demoUrl: '',
    codeUrl: 'https://github.com/itssduy/Personal-Learning-Agent',
  },
  {
    title: 'Event Pipeline',
    period: 'Mar 2026',
    description:
      'Cloud pipeline on AWS using SQS and S3 to automatically capture, queue, and separate incoming API requests for scalable processing.',
    tech: ['AWS SQS', 'AWS S3', 'API Gateway'],
    demoUrl: '',
    codeUrl: '',
  },
  {
    title: 'RealSpect',
    period: 'Jan 2026 - May 2026',
    description:
      'Early-stage computer vision tool for rental property condition assessment, with a FastAPI backend, React frontend, and OpenCV for image preprocessing. Validated with about 10 product interviews with tenants and landlords.',
    tech: ['FastAPI', 'React', 'OpenCV'],
    demoUrl: 'https://realspect.app/',
    codeUrl: '',
  },
  {
    title: 'Geaux App',
    period: 'Aug 2025 - Dec 2025',
    description:
      'Campus platform for LSU with geofenced interactive mapping and expiring, location-based posts, built as part of Google Developer Student Club LSU.',
    tech: ['Bun', 'Hono', 'Zod', 'Drizzle ORM', 'Supabase'],
    demoUrl: '',
    codeUrl: '',
  },
]

export const experience = [
  {
    role: 'Cloud Developer Intern',
    company: 'CGI',
    period: 'June 2026 - Present',
    location: 'Lafayette, LA',
    bullets: [
      'Enhanced an internal AWS auto-tagging system **deployed across multiple orgs and partitions** using EventBridge, Lambda, and cross-account IAM to auto-track creator identity, resource ARN, and timestamps for Bedrock AgentCore.',
      'Migrated a multi-cloud AI pricing assistant from Streamlit to Chainlit **one month ahead of schedule**, adding real-time streaming powered by a Strands orchestrator coordinating 4 AWS/Azure sub-agents via MCP.',
      'Architected a 9+ module Terraform library for Bedrock AgentCore adopted as the standard across a 40+ person cloud engineering team for internal and MSP efforts.',
      'Used AI-assisted, spec-driven development in devcontainers with GitLab CI/CD to accelerate delivery cycles.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'FIPSE',
    period: 'April 2026 - Present',
    location: 'Lafayette, LA',
    bullets: [
      'Developed a full-stack Django app on GCP for a federal initiative, enabling **400+ educators and students** to create, configure, and evaluate custom AI agents.',
      'Built a search pipeline with Google Document AI, Gemini, and Vertex AI Vector Search to extract text and grant info from faculty CVs into structured, searchable JSON.',
      'Verified file integrity on server-side uploads using SHA-256 hashes and configured GCP IAM roles and service account credentials across cloud services.',
      'Containerized the stack (Django, PostgreSQL, Caddy) with Docker Compose for consistent local and production environments, managing sprints and PR reviews via Azure DevOps.',
    ],
  },
  {
    role: 'Lead Frontend Engineer & Full-Stack Developer',
    company: 'CAPE',
    period: 'Aug 2024 - April 2026',
    location: 'Lafayette, LA',
    bullets: [
      'Architected a multi-tenant ground-station web interface (ESG-Grid) in Angular, RxJS, and Tailwind, modeling telemetry hierarchies across organizations, missions, vehicles, and payload subsystems.',
      'Built full-stack APIs with Django Ninja and PostgreSQL, including schema migrations and API key auth, and containerized backend workloads on Oracle Government Cloud.',
      '**Led a team of 5 frontend developers within a 100+ member org**, managing sprints, PR reviews, and compliance-driven code standards in Bitbucket.',
      'Also served as Assistant Project Manager, leading project direction within a 20+ person research team and preparing technical documentation, scope of work, and presentations for supervisors and advisors.',
      '**Awarded 2nd place** at the Undergraduate Research Conference, University of Louisiana at Lafayette, for ESG-Grid.',
    ],
  },
  {
    role: 'Backend Developer',
    company: 'Google Developer Student Club, LSU',
    period: 'Aug 2025 - Dec 2025',
    location: 'Baton Rouge, LA',
    bullets: [
      'Developed Geaux App, a campus-focused platform featuring LSU-geofenced interactive mapping with expiring, location-based posts.',
      'Built type-safe backend services using Bun, Hono, Zod, and Drizzle ORM, integrated with Supabase authentication and storage systems.',
      'Implemented automated testing and CI pipelines using Vitest to improve backend reliability.',
    ],
  },
  {
    role: 'Cybersecurity Research Developer',
    company: 'Ethical Hacking Club',
    period: 'Dec 2025 - Mar 2026',
    location: 'Lafayette, LA',
    bullets: [
      'Practiced penetration testing techniques and researched network and web vulnerabilities using Hack The Box labs.',
      'Completed CTF challenges focused on vulnerability mitigation and authentication weaknesses.',
    ],
  },
]
