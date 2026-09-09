/* =============================================================
   PORTFOLIO CONTENT — YASH JADHAV
   -------------------------------------------------------------
   DevOps & Multi-Cloud Engineer | Azure & AWS Specialist
   ============================================================= */

const SITE = {
  /* ---------- Personal / Identity ---------- */
  name: "Yash Jadhav",
  title: "DevOps & Multi-Cloud Engineer | Azure & AWS Specialist",
  email: "yash.j.devops@gmail.com",
  phone: "+91 7058276087",
  location: "Pune, Maharashtra, India",
  resume: "assets/Resume_Yash.pdf",
  photo: "assets/profile.jpg",

  /* ---------- Tech stack ticker (DevOps tools) ---------- */
  techStack: [
    "Azure (AKS)", "AWS (EKS/EC2)", "Kubernetes", "Terraform", "Docker",
    "CI/CD (OIDC)", "Helm", "Azure DevOps", "GitHub Actions",
    "OpenTelemetry", "FinOps", "Azure Key Vault", "Prometheus", "Grafana",
    "Linux (Ubuntu/RHEL)", "Bash", "Python", "CCNA Networking"
  ],

  /* ---------- Social / External Links ---------- */
  links: {
    linkedin: "https://www.linkedin.com/in/yash-jadhav-783038330",
    github: "https://github.com/yashsetoo",
    blog: "https://hashnode.com/@yashj7",
  },

  /* ---------- Hero ---------- */
  hero: {
    greeting: "Hey there, I'm",
    roles: [
      "DevOps & Multi-Cloud Engineer",
      "Azure & AWS Specialist",
      "Kubernetes & AKS Architect",
      "Keyless CI/CD & IaC Specialist",
      "Cloud FinOps & Cost Optimizer",
      "SRE & Observability Engineer",
    ],
    tagline:
      "DevOps & Multi-Cloud Engineer with hands-on experience provisioning, securing, and automating scalable cloud infrastructure across Microsoft Azure and AWS. Proven expertise in building keyless CI/CD pipelines (Azure DevOps, GitHub Actions with OIDC), managing Kubernetes clusters (AKS), implementing Infrastructure as Code (Terraform), and driving FinOps cost-reduction initiatives saving up to 35%.",
    stats: [
      { value: "35%", label: "Cloud Cost Saved (FinOps)" },
      { value: "99.99%", label: "System Availability (AKS)" },
      { value: "60%", label: "Faster Deployment Cycles" },
      { value: "45%", label: "MTTD Reduction (SRE)" },
    ],
  },

  /* ---------- What I Do (Services) ---------- */
  whatIDo: [
    {
      icon: "☸️",
      title: "Kubernetes & Cloud Infrastructure",
      description: "Orchestrating microservices on Azure Kubernetes Service (AKS across DEV/UAT/PROD) and AWS with 99.99% availability and canary rollouts.",
    },
    {
      icon: "🔁",
      title: "Keyless CI/CD Automation",
      description: "Building secure, multi-stage Azure DevOps and GitHub Actions pipelines using OpenID Connect (OIDC) and ACR digest-verified image promotion.",
    },
    {
      icon: "📜",
      title: "Infrastructure as Code (IaC)",
      description: "Provisioning reproducible cloud environments using Terraform, Ansible, Helm, and modular templates across multi-tier setups.",
    },
    {
      icon: "💰",
      title: "Cloud FinOps & Optimization",
      description: "Executing data-driven FinOps initiatives across AKS node pools and Azure Storage tiers, reducing monthly cloud expenditure by ~35%.",
    },
    {
      icon: "📊",
      title: "SRE Observability & Telemetry",
      description: "Implementing OpenTelemetry, Azure Application Insights, and Log Analytics (KQL) for automated liveness/readiness probes and rapid MTTD.",
    },
    {
      icon: "🔐",
      title: "Cloud Security & Secrets Store",
      description: "Enforcing zero static credentials using Azure Key Vault with Secrets Store CSI, Workload Identity, and AWS SSM Parameter Store.",
    },
  ],

  /* ---------- About ---------- */
  about: {
    intro:
      "I'm a DevOps & Multi-Cloud Engineer passionate about building resilient, automated, and secure cloud infrastructure. With deep expertise across Microsoft Azure and AWS, I bridge software engineering and operations by automating end-to-end CI/CD pipelines, orchestrating containerized microservices on Kubernetes, and driving FinOps practices to optimize cloud spend without compromising performance.",
    education: {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institute: "V.V.P Institute of Technology, Solapur, Maharashtra",
      period: "Oct 2022 – Aug 2025",
      cgpa: "CGPA: 6.84 / 10.0",
    },
  },

  /* ---------- Experience (Timeline) ---------- */
  experience: [
    {
      role: "DevOps Engineer / Intern",
      company: "Setoo Pvt. Ltd., Pune, Maharashtra",
      period: "March 2025 – Present",
      points: [
        "Kubernetes & Cluster Management: Orchestrated microservices on Azure Kubernetes Service (AKS across DEV/UAT/PROD) and AWS, ensuring 99.99% system availability with zero-downtime canary rollouts.",
        "Keyless CI/CD Automation: Built multi-stage Azure DevOps & GitHub Actions pipelines using OpenID Connect (OIDC) and ACR digest-verified image promotion, cutting deployment cycle times by 60%.",
        "Cloud FinOps & Cost Reduction: Spearheaded FinOps initiatives across AKS node pools and Azure Storage (Blob cool-tiering and eliminating redundant SMB shares), reducing monthly cloud spend by ~35%.",
        "SRE Observability & Telemetry: Integrated OpenTelemetry, Azure Application Insights, and Log Analytics (KQL) for automated liveness/readiness probes, reducing Mean Time to Detection (MTTD) by 45%.",
        "Infrastructure Security & Secrets: Implemented Azure Key Vault with Secrets Store CSI drivers and Workload Identity, eliminating static credentials from deployment manifests and pipelines.",
      ],
    },
    {
      role: "Technical Training in CCNA, Linux, AWS, DevOps",
      company: "SevenMentor, Pune, Maharashtra",
      period: "March 2024 – March 2025",
      points: [
        "CI/CD & Containerization: Automated containerized application deployments using Docker, Jenkins, and Ansible, reducing environment setup time from hours to under 10 minutes.",
        "Cloud & Linux Automation: Provisioned AWS infrastructure (EC2, S3, IAM, VPC, RDS) and automated system administration, cron jobs, and database backup routines using Bash scripts.",
        "Networking & Security: Engineered network architectures adhering to CCNA principles (TCP/IP, Subnetting, VLANs, Routing, Firewalls).",
      ],
    },
    {
      role: "Cloud Computing Intern",
      company: "Acmegrade, Remote",
      period: "March 2024 – April 2024",
      points: [
        "Cloud Infrastructure Standardization: Standardized cloud configurations and deployment templates across 5 environments, achieving a 25% reduction in configuration errors.",
      ],
    },
  ],

  /* ---------- Projects ---------- */
  projects: [
    {
      title: "Agentic OS — Enterprise Kubernetes Infrastructure",
      description:
        "Architected enterprise AKS cluster infrastructure using modular Helm charts, automated pod scaling, and secure Azure Key Vault secret injection for 4 microservices. Configured high-availability Redis caching and BullMQ background worker infrastructure with persistent volume claims, sustaining low-latency message queues.",
      tech: ["Azure AKS", "Helm", "Azure Key Vault", "ACR", "Redis", "OpenTelemetry"],
      outcome: "99.99% availability · Zero static secrets · 4 microservices automated",
      link: "https://github.com/yashsetoo",
    },
    {
      title: "Automated Support Ticket System — Serverless Cloud Integration",
      description:
        "Built a 100% serverless event-driven automation platform between Exchange Online and Azure DevOps Boards, eliminating manual ticket creation overhead. Engineered SHA-256 deduplication and durable watermark tracking, guaranteeing zero email feedback loops at an operating cost under ₹20/month.",
      tech: ["Azure Functions", "MS Graph API", "Azure Table Storage", "Azure DevOps API", "Python"],
      outcome: "100% serverless · 0 manual tickets · Operating cost < ₹20/month",
      link: "https://github.com/yashsetoo",
    },
    {
      title: "Neo Check — Containerized Cloud Platform on AWS",
      description:
        "Provisioned multi-container production environment on AWS EC2 using Docker Compose and Nginx reverse proxy, automating daily database backup snapshots. Enforced least-privilege IAM policies and secured configuration variables via AWS Systems Manager (SSM) Parameter Store, eliminating all plaintext credentials.",
      tech: ["AWS EC2", "Docker Compose", "AWS SSM", "Nginx", "PostgreSQL", "Bash"],
      outcome: "Multi-container production stack · Zero plaintext credentials",
      link: "https://github.com/yashsetoo",
    },
    {
      title: "Cloud-Based AI Face Recognition System",
      description:
        "Real-time facial recognition using PyTorch + AWS (Lambda, S3) with 98% accuracy in varying lighting and motion. Built an automated Python pipeline that generates Excel attendance reports, eliminating manual data entry.",
      tech: ["PyTorch", "AWS Lambda", "AWS S3", "Python"],
      outcome: "98% recognition accuracy · Automated reporting pipeline",
      link: "https://github.com/yashsetoo",
    },
    {
      title: "Automated High-Availability Java Deployment Pipeline",
      description:
        "Automated Jenkins, Ansible, and Docker Swarm CI/CD pipeline on AWS with 7-replica high availability and automated container image management.",
      tech: ["Jenkins", "Ansible", "Docker Swarm", "AWS"],
      outcome: "7-replica HA · Automated image promotion",
      link: "https://github.com/yashsetoo",
    },
    {
      title: "Secure Dynamic Web Application Deployment on AWS",
      description:
        "Multi-tier VPC architecture isolating private database subnets with security group rules for 70% improved data security. Git + IAM roles workflow improved collaboration efficiency by 20%.",
      tech: ["AWS VPC", "AWS IAM", "Git", "EC2", "RDS"],
      outcome: "70% improved data isolation · 20% team efficiency boost",
      link: "https://github.com/yashsetoo",
    },
  ],

  /* ---------- Skills (Categorized) ---------- */
  skills: [
    {
      category: "Cloud Platforms",
      icon: "☁️",
      items: [
        "Microsoft Azure (AKS, Functions, Key Vault, Storage, VNet, ACR, Monitor)",
        "AWS (EC2, S3, VPC, IAM, RDS, SSM Parameter Store, CloudWatch, Route 53)",
      ],
    },
    {
      category: "CI/CD & IaC",
      icon: "⚙️",
      items: [
        "Azure DevOps Pipelines", "GitHub Actions (OIDC Keyless Auth)",
        "Terraform", "Ansible", "Jenkins", "Docker", "Helm", "Git",
      ],
    },
    {
      category: "Container & Cloud Systems",
      icon: "🐳",
      items: [
        "Kubernetes (AKS, EKS)", "Docker Compose", "Azure Container Registry (ACR)",
        "AWS ECR", "Nginx Reverse Proxy", "Microservices Architecture",
      ],
    },
    {
      category: "SRE & Observability",
      icon: "📊",
      items: [
        "Azure Monitor", "Application Insights", "Log Analytics (KQL)",
        "OpenTelemetry", "Prometheus", "Grafana", "AWS CloudWatch", "Synthetic Probes",
      ],
    },
    {
      category: "Security & FinOps",
      icon: "🔐",
      items: [
        "Azure Workload Identity", "Secrets Store CSI", "Azure Key Vault",
        "AWS IAM / SSM Parameter Store", "Trivy Vulnerability Scanning", "Cloud Cost Optimization",
      ],
    },
    {
      category: "Linux & Networking",
      icon: "🐧",
      items: [
        "Linux Administration (Ubuntu, RHEL)", "Bash Scripting", "Python",
        "CCNA Networking (TCP/IP, Subnetting, VLANs, Routing, Firewalls)",
      ],
    },
  ],

  /* ---------- Certifications & Professional Training ---------- */
  certifications: [
    { name: "AWS & DevOps Cloud Engineering (SevenMentor)", icon: "🟧", link: "assets/certs/aws.png" },
    { name: "CCNA Routing, Switching & Network Security (SevenMentor)", icon: "🌐", link: "assets/certs/ccna.png" },
    { name: "Red Hat Enterprise Linux Administration & Automation", icon: "🎩", link: "assets/certs/linux.png" },
    { name: "Cloud Architecture & Deployments (Acmegrade)", icon: "☁️", link: "assets/certs/cloud-internship.png" },
    { name: "DevOps & CI/CD Pipeline Automation", icon: "♾️", link: "assets/certs/devops.png" },
  ],
};
