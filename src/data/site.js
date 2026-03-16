// Edit this file to update your info.

export const profile = {
  name: 'Duy Tran',
  role: 'Cloud Engineer',
  bio: `Computer Science student at the University of Louisiana at Lafayette, concentrating in Cloud Computing. Currently a Cloud Developer Intern at CGI, building AWS infrastructure and Bedrock AgentCore tooling, and a Software Engineer at FIPSE, building AI-powered web apps on GCP.`,
  location: 'Lafayette, LA',
  email: 'duyatran05@gmail.com',
  resumeUrl: '/resume.pdf',
  social: {
    github: 'https://github.com/itssduy',
    linkedin: 'https://linkedin.com/in/duy-a-tran',
    twitter: '',
  },
}

export const skills = [
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
  {
    category: 'Certifications',
    wide: true,
    items: [
      { name: 'AWS Certified Solutions Architect - Associate', date: 'Sept 2026' },
      { name: 'AWS Certified Cloud Practitioner', date: 'Mar 2026' },
      { name: 'AWS Certified Developer - Associate', date: 'In Progress' },
      { name: 'CompTIA Security+', date: 'In Progress' },
    ],
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
