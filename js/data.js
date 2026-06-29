/* =============================================================
   PORTFOLIO CONTENT
   -------------------------------------------------------------
   This is the ONLY file you need to edit to update your content.
   Change text, links, projects, skills, etc. below and save.
   The site re-renders automatically from this data.
   ============================================================= */

const SITE = {
  /* ---------- Personal / Identity ---------- */
  name: "Yash Jadhav",
  title: "DevOps Engineer | AWS & Cloud Certified",
  email: "jadhavpc0707@gmail.com",
  phone: "+91 7058276087",
  location: "Pune, Maharashtra, India",
  resume: "assets/Resume_Yash.pdf",
  photo: "assets/profile.jpg",

  /* ---------- Tech stack ticker (DevOps tools) ---------- */
  techStack: [
    "Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "AWS",
    "Linux", "Git", "Bash", "CI/CD", "CloudWatch", "Nginx", "Maven", "CCNA",
  ],

  /* ---------- Social / External Links (update '#' later) ---------- */
  links: {
    linkedin: "https://www.linkedin.com/in/yash-jadhav-783038330/",
    github: "https://github.com/Yashsetoo",
    blog: "https://hashnode.com/@yashj7",
  },

  /* ---------- Hero ---------- */
  hero: {
    greeting: "Hey there, I'm",
    roles: [
      "DevOps Engineer",
      "AWS & Cloud Certified",
      "CI/CD Automation Specialist",
      "Docker & Kubernetes Enthusiast",
      "Cloud Infrastructure Engineer",
    ],
    tagline:
      "Highly motivated Computer Engineering graduate and certified AWS/DevOps professional specializing in CI/CD automation, containerized environments (Docker/Kubernetes), and cloud infrastructure optimization — driving up to 60% faster deployment cycles.",
    stats: [
      { value: "60%", label: "Faster Deployments" },
      { value: "6+", label: "Cloud Projects" },
      { value: "5", label: "Certifications" },
    ],
  },

  /* ---------- What I Do (services) ---------- */
  whatIDo: [
    {
      icon: "🔁",
      title: "CI/CD Pipelines",
      description: "Automated build, test, and deployment workflows using Jenkins, Git, Maven, and Ansible.",
    },
    {
      icon: "📜",
      title: "Infrastructure as Code",
      description: "Terraform and CloudFormation for provisioning and managing repeatable cloud resources.",
    },
    {
      icon: "🐳",
      title: "Containerization",
      description: "Docker and Kubernetes for container orchestration and microservices architecture.",
    },
    {
      icon: "☁️",
      title: "Cloud & AWS",
      description: "Hands-on with EC2, S3, IAM, VPC, Lambda, and RDS for scalable cloud deployments.",
    },
    {
      icon: "🐧",
      title: "Linux & Networking",
      description: "Linux administration, Bash automation, and CCNA-based network configuration.",
    },
    {
      icon: "📊",
      title: "Monitoring & Logging",
      description: "Using CloudWatch to monitor system performance and troubleshoot issues effectively.",
    },
  ],

  /* ---------- About ---------- */
  about: {
    intro:
      "I'm a DevOps and Cloud Engineer focused on building reliable, automated infrastructure. I enjoy turning manual, error-prone processes into clean CI/CD pipelines and well-architected cloud environments on AWS.",
    education: {
      degree: "B.Tech in Computer Science Engineering",
      institute: "V.V.P Institute of Technology, Solapur, Maharashtra",
      period: "Oct 2022 – Aug 2025",
      cgpa: "CGPA 6.84",
    },
  },

  /* ---------- Experience (timeline) ---------- */
  experience: [
    {
      role: "DevOps Intern",
      company: "Setoo",
      period: "May 2026 – Present",
      points: [
        "Working on Agentic OS, an agent-based platform, owning the DevOps and infrastructure workflow.",
        "Built and maintained CI/CD pipelines for automated build, test, and deployment.",
        "Containerized services with Docker and managed orchestration and deployments.",
        "Provisioned and monitored cloud infrastructure to support the platform.",
      ],
    },
    {
      role: "Technical Training — CCNA, Linux, AWS, DevOps",
      company: "Seven Mentor",
      period: "Mar 2025 – Mar 2026",
      points: [
        "Maintained network infrastructure using CCNA principles (subnetting, VLANs, routing).",
        "Deployed and managed AWS services: EC2, S3, IAM, VPC; hosted static & dynamic apps.",
        "Linux system administration: user management and Bash automation scripts.",
        "Orchestrated deployments using Docker, cutting environment setup time from hours to under 10 minutes.",
      ],
    },
    {
      role: "Cloud Computing Intern",
      company: "Acmegrade",
      period: "Mar 2024 – Apr 2024",
      points: [
        "Optimized cloud deployments across 5 environments, achieving a 25% reduction in configuration errors.",
      ],
    },
  ],

  /* ---------- Projects ---------- */
  projects: [
    {
      title: "Agentic OS",
      description:
        "Agent-based platform built at Setoo. Owning the DevOps workflow — CI/CD pipelines, Docker containerization, and cloud infrastructure to support the platform.",
      tech: ["Docker", "CI/CD", "AWS", "DevOps"],
      outcome: "End-to-end DevOps ownership · CI/CD + containerization",
      link: "https://github.com/Yashsetoo",
    },
    {
      title: "Cloud-Based AI Face Recognition System",
      description:
        "Real-time facial recognition using PyTorch + AWS (Lambda, S3) with 98% accuracy in varying lighting and motion. Built a Python script that auto-generates Excel attendance reports, cutting manual entry time by 100%.",
      tech: ["PyTorch", "AWS Lambda", "S3", "Python"],
      outcome: "98% recognition accuracy · 100% less manual entry",
      link: "#",
    },
    {
      title: "Automated High-Availability Java Deployment Pipeline",
      description:
        "Jenkins/Ansible/Docker Swarm CI/CD pipeline on AWS with 7-replica high availability and automated image management.",
      tech: ["Jenkins", "Ansible", "Docker Swarm", "AWS"],
      outcome: "7-replica HA · fully automated image management",
      link: "#",
    },
    {
      title: "Simple-AWS Student Management WebApp",
      description:
        "Serverless app using Lambda + API Gateway (100% server management eliminated). CloudFront + S3 for global delivery, achieving 50%+ latency reduction.",
      tech: ["Lambda", "API Gateway", "CloudFront", "S3"],
      outcome: "100% serverless · 50%+ latency reduction",
      link: "#",
    },
    {
      title: "Automated Java Web Deployment from Scratch",
      description:
        "Apache Tomcat on EC2 with automated CI/CD using Maven/Ansible/Docker — 70% less manual overhead and 5x faster setup.",
      tech: ["Tomcat", "EC2", "Maven", "Ansible", "Docker"],
      outcome: "70% less manual overhead · 5x faster setup",
      link: "#",
    },
    {
      title: "Secure Dynamic Web Application Deployment on AWS",
      description:
        "Multi-tier VPC architecture isolating private databases for 70% improved data security. Git + IAM roles workflow improved collaboration efficiency by 20%.",
      tech: ["VPC", "IAM", "Git", "AWS"],
      outcome: "70% improved data security · 20% better collaboration",
      link: "#",
    },
  ],

  /* ---------- Skills (categorized) ---------- */
  skills: [
    {
      category: "AWS Cloud",
      icon: "☁️",
      items: [
        "EC2", "S3", "VPC", "IAM", "Lambda", "RDS", "DynamoDB",
        "ELB", "ALB", "Route 53", "CloudWatch", "CloudFormation",
      ],
    },
    {
      category: "DevOps Tools",
      icon: "⚙️",
      items: ["Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "Git", "Maven", "ANT"],
    },
    {
      category: "Linux Administration",
      icon: "🐧",
      items: [
        "Bash Scripting", "SSH/Sudo Hardening", "Package Management",
        "Cron Jobs", "Nginx/Apache", "MariaDB",
      ],
    },
    {
      category: "Networking (CCNA)",
      icon: "🌐",
      items: ["OSPF", "EIGRP", "VLANs", "Subnetting", "ACLs", "DHCP", "TCP/IP"],
    },
    {
      category: "Soft Skills",
      icon: "🤝",
      items: ["Communication", "Active Listening", "Collaboration", "Adaptability"],
    },
  ],

  /* ---------- Certifications ---------- */
  certifications: [
    { name: "Internship in Cloud Computing", icon: "☁️", link: "#" },
    { name: "Redhat Linux Training", icon: "🎩", link: "assets/certs/linux.png" },
    { name: "AWS Training", icon: "🟧", link: "assets/certs/aws.png" },
    { name: "CCNA Training", icon: "🌐", link: "assets/certs/ccna.png" },
    { name: "DevOps Training", icon: "♾️", link: "assets/certs/devops.png" },
  ],
};
