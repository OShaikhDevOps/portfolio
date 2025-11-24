import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Osman",
  lastName: "Shaikh",
  name: `Osman Shaikh`,
  role: "DevOps & Cloud Engineer",
  avatar: "/images/my_photo.jpeg",
  email: "usman_s@msn.com",
  location: "America/Toronto", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about DevOps and ML engineering</>,
};

// Minimal Mailchimp configuration stub so legacy Mailchimp component can import it
// You can replace these values with your real Mailchimp form action and effects
const mailchimp = {
  action: "",
  effects: {
    mask: {
      cursor: false,
      x: 50,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: false,
      opacity: 0.2,
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      tilt: 0,
      colorStart: "#ffffff",
      colorEnd: "#000000",
    },
    dots: {
      display: false,
      opacity: 0.12,
      size: "s",
      color: "#000000",
    },
    grid: {
      display: false,
      opacity: 0.08,
      color: "#000000",
      width: "xs",
      height: "xs",
    },
    lines: {
      display: false,
      opacity: 0.06,
      color: "#000000",
      size: "s",
      thickness: 1,
      angle: 45,
    },
  },
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/OShaikhDevOps",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/osman-shaikh-456769155/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}?subject="From Web Portfolio:"`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Where Automation Meets Scalable Infrastructure</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        {/* <strong className="ml-4">My</strong> */}
        {/* <Line background="brand-alpha-strong" vert height="20" /> */}
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/End-to-End-ML-Deployment-Pipeline-with-MLOps-Practices",
  },
  subline: (
    <>
      I’m Osman Shaikh — a DevOps & Cloud Engineer based in Toronto.
      <br />I build production-grade cloud platforms using Kubernetes, Terraform, and CI/CD automation.
      <br />My work focuses on reliability, security, cost efficiency, and repeatable delivery across AWS and Azure.
      <br />After hours, I explore automation, GitOps, and cloud-native innovation.
    </>
  ),
  clients: {
    display: true,
    title: "Clients I've Worked With",
    clients: [
      {
        name: "QPharma Inc",
        logo: "/images/clients/qpharma-logo.svg",
        website: "https://qpharmacorp.com",
        alt: "QPharma Inc Logo"
      },
      {
        name: "Tapestry",
        logo: "/images/clients/tapestry-logo.svg",
        website: "https://tapestry.com",
        alt: "Tapestry Logo"
      },
      {
        name: "Regeneron",
        logo: "/images/clients/regeneron-logo.svg",
        website: "https://regeneron.com",
        alt: "Regeneron Logo"
      },
      {
        name: "Digi Malaysia",
        logo: "/images/clients/digi-logo.svg",
        website: "https://digi.com.my",
        alt: "Digi Malaysia Logo"
      },
      {
        name: "STC (Saudi Telecom)",
        logo: "/images/clients/stc-logo.svg",
        website: "https://stc.com.sa",
        alt: "STC Saudi Telecom Logo"
      },
    ],
  },
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/usmansdq", // Replace with your Calendly link
  },
  resume: {
    display: true,
    // Public files are served from the site root. Use an absolute path from `/public`.
    link: "/osman_resume.pdf",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      I’m Osman Shaikh, a DevOps & Cloud Engineer based in Toronto. 
      I design scalable infrastructure and automated delivery systems using AWS, Kubernetes, Terraform, and CI/CD. 
      My focus is reliability, cost efficiency, security, and helping teams ship software faster and more safely.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "TechSolutions — Contract for QPharma Inc",
        timeframe: "2025 - Present",
        role: "DevOps Engineer",
        description: "Supporting QPharma Inc. as a DevOps and Cloud Engineer, with responsibility for designing, automating, and securing AWS-based infrastructure and delivery pipelines.",
        achievements: [
          <>
            Introduced GitOps with ArgoCD to reduce configuration drift and eliminate manual deployments.
          </>,
          <>
            Automated CI/CD using GitHub Actions/Jenkins with integrated security scanning (Snyk, SonarQube, OWASP ZAP, Trivy).
          </>,
          <>
            Containerized and optimized workloads on ECS/EKS, reducing AWS compute cost by ~30%.
          </>,
          <>
            Automated infrastructure provisioning with Terraform and Ansible, cutting manual configuration work by ~60%.
          </>,
          <>
            Modernized monitoring using CloudWatch, Prometheus, and Grafana to reduce MTTR and improve release confidence.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/MultiAZ DR.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Systems Limited/Visionet — Major Clients: Tapestry, Regeneron, Digi Malaysia, STC (Saudi Telecom)",
        timeframe: "2021 - 2025",
        role: "Principal Cloud Consultant / Lead DevOps Engineer",
        description: "During my tenure at Systems Limited / Visionet, I advanced from Associate to Principal while leading cloud and DevOps initiatives for global enterprise clients including Tapestry, Regeneron, Digi Malaysia, and STC.",
        achievements: [
          <>
            Designed CI/CD pipelines that reduced release cycles from weeks to days across multiple product teams.
          </>,
          <>
            Migrated legacy monolithic applications to Docker- and Kubernetes-based microservices, cutting infrastructure cost by ~20% and improving scalability.
          </>,
          <>
            Implemented GitOps practices with ArgoCD and FluxCD for version-controlled, reliable deployments.
          </>,
          <>
            Embedded DevSecOps tooling (Snyk, SonarQube, OWASP ZAP, Trivy, Dependency-Track) into pipelines to reduce critical vulnerabilities before production.
          </>,
          <>
            Automated cloud infrastructure on AWS and GCP with Terraform, Pulumi, and CloudFormation.
          </>,
          <>
            Mentored and led teams of up to 20 DevOps engineers delivering secure, scalable platforms for global clients.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "George Brown College",
        timeframe: "2026",
        description: <>Postgraduate Certificate Applied A.I. Solutions Development</>,
      },
      {
        name: "Forman Christian College (A Chartered University)",
        timeframe: "2020",
        description: <>Bachelor of Science - BSc (Hons) in Computer Science</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Cloud Engineering",
        description: (
          <>
            Designing and managing scalable AWS and GCP infrastructures with services like VPC, EC2,
            S3, Lambda, API Gateway, Route53, IAM, Load Balancers, and cross-account networking.
            Infrastructure as Code with Terraform, Pulumi, and CloudFormation.
          </>
        ),
        tags: [
          { name: "AWS", icon: "aws" },
          { name: "GCP", icon: "gcp" },
          { name: "Terraform", icon: "terraform" },
          { name: "CloudFormation", icon: "cloudformation" },
          { name: "Pulumi", icon: "pulumi" },
        ],
        images: [],
      },
      {
        title: "CI/CD & Automation",
        description: (
          <>
            Building and optimizing CI/CD pipelines using Jenkins, GitHub Actions, GitLab CI/CD,
            and AWS CodePipeline. Automating deployments for .NET, Angular, Node.js, and Python
            applications with Ansible and event-driven workflows using AWS Lambda.
          </>
        ),
        tags: [
          { name: "Jenkins", icon: "jenkins" },
          { name: "GitHub Actions", icon: "github" },
          { name: "GitLab CI/CD", icon: "gitlab" },
          { name: "AWS CodePipeline", icon: "aws" },
          { name: "Ansible", icon: "ansible" },
        ],
        images: [],
      },
      {
        title: "DevSecOps",
        description: (
          <>
            Securing pipelines and applications with tools like Snyk, SonarQube, OWASP ZAP,
            Trivy, and Dependency-Track. Implementing continuous security scanning
            (SCA, SAST, DAST) across the software delivery lifecycle.
          </>
        ),
        tags: [
          { name: "Snyk", icon: "snyk" },
          { name: "SonarQube", icon: "sonarqube" },
          { name: "OWASP ZAP", icon: "zap" },
          { name: "Trivy", icon: "trivy" },
          { name: "Dependency-Track", icon: "shield" },
        ],
        images: [],
      },
      {
        title: "Containerization & Orchestration",
        description: (
          <>
            Modernizing applications with Docker and Kubernetes, implementing GitOps workflows
            with ArgoCD and FluxCD, and optimizing workloads for cost-efficient scaling.
          </>
        ),
        tags: [
          { name: "Docker", icon: "docker" },
          { name: "Kubernetes", icon: "kubernetes" },
          { name: "ArgoCD", icon: "argocd" },
          { name: "FluxCD", icon: "flux" },
          { name: "Helm", icon: "helm" },
        ],
        images: [],
      },
      {
        title: "Monitoring & Observability",
        description: (
          <>
            Implementing observability stacks with Prometheus, Grafana, and ELK to proactively
            identify issues, optimize performance, and maintain system health at scale.
          </>
        ),
        tags: [
          { name: "Prometheus", icon: "prometheus" },
          { name: "Grafana", icon: "grafana" },
          { name: "ELK Stack", icon: "elk" },
        ],
        images: [],
      },
      {
        title: "AI / ML (learning & interests)",
        description: (
          <>
            Experimenting with scikit-learn, visualization (Matplotlib/Seaborn), and OpenCV for computer vision as side projects, with the goal of applying ML in observability and automation use-cases.
          </>
        ),
        tags: [
          { name: "Scikit-learn", icon: "scikit" },
          { name: "Python", icon: "python" },
          { name: "NumPy", icon: "numpy" },
          { name: "Pandas", icon: "pandas" },
          { name: "OpenCV", icon: "opencv" },
          { name: "Matplotlib", icon: "matplotlib" },
          { name: "Seaborn", icon: "seaborn" },
        ],
        images: [],
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    certifications: [
      {
        name: "Microsoft Certified: Azure Administrator Associate",
        issuer: "Microsoft",
        date: "2025",
        credentialId: "E2AF779598F97341",
        credentialUrl: "https://learn.microsoft.com/en-us/users/osmanshaikh-5514/credentials/e2af779598f97341",
        description: "Demonstrates a high-level understanding of Azure administration, including identities and governance, storage, compute, virtual networking, and resource monitoring.",
      },
      {
        name: "AWS Certified AI Practitioner Early Adopter",
        issuer: "Amazon Web Services (AWS)",
        date: "2025",
        credentialId: "743da85d9b6340fdbad5da58455911c5",
        credentialUrl: "https://www.credly.com/badges/95f603aa-7469-4688-a6a0-2fcf6c805082/linked_in_profile",
        description: "Demonstrates a high-level understanding of AWS Cloud services, terminology, and best practices.",
      },
      {
        name: "AWS Certified DevOps Engineer – Professional",
        issuer: "Amazon Web Services (AWS)",
        date: "2024",
        credentialId: "0c34fe2753c64209a6da8a53d804f08e",
        credentialUrl: "https://www.credly.com/badges/6b37bfe8-2361-4d7d-b584-f3079cda3189/linked_in_profile",
        description: "Showcases advanced technical expertise in provisioning, operating, and managing distributed application systems on AWS.",
      },
      {
        name: "AWS Certified Solutions Architect – Associate",
        issuer: "Amazon Web Services (AWS)",
        date: "2024",
        credentialId: "fea4d52afe94493ebc0ad597c8865b00",
        credentialUrl: "https://www.credly.com/badges/efe76827-44fb-4f5c-ba8a-45f4f6bb9a40/linked_in_profile",
        description: "Focused on the design of cost and performance optimized solutions",
      },
      {
        name: "GitOps Fundamental",
        issuer: "Codefresh",
        date: "2022",
        credentialId: "62c443ec84ff0645ca1f6b95",
        credentialUrl: "https://codefresh.learnworlds.com/certificate/6197cb3b2fbcec4da328aab2/user/62c2bbfd792ef1107072e3e1",
        description: "Gained foundational knowledge of GitOps principles using Codefresh, focusing on implementing continuous delivery workflows, managing Kubernetes applications through declarative Git-based operations, and optimizing pipelines for reliability, cost, and performance.",
      },
      {
        name: "IBM Cloud Private - Foundation Technology",
        issuer: "IBM",
        date: "2021",
        credentialId: "62c443ec84ff0645ca1f6b95",
        credentialUrl: "https://www.credly.com/badges/7ec21d96-56fe-4192-b308-4850c0b945ac?source=linked_in_profile",
        description: "This badge holder understands the core technologies of IBM Cloud Private: Containers, Docker, Kubernetes, Helm and Cloud Foundry. The earner understands how IBM Cloud Private supports choice in application development with Kubernetes, Cloud Foundry, and function-based programming models.",
      },
      {
        name: "IBM Cloud Private - Continuous Integration/Continuous Delivery Pipelines",
        issuer: "IBM",
        date: "2021",
        credentialId: "62c443ec84ff0645ca1f6b95",
        credentialUrl: "https://www.credly.com/badges/bf8962d1-266b-42c9-aca1-9aa875242ff4?source=linked_in_profile",
        description: "This badge earner demonstrates knowledge of continuous integration and continuous deployment (CI/CD) strategies on IBM Cloud Private. The badge earner has demonstrated the ability to describe the relationships between Kubernetes, Helm, Jenkins, and UrbanCode in a CI/CD strategy. The earner also has demonstrated an understanding of how CI/CD is part of an overall DevOps strategy.",
      },
    ],
  },
  awards: {
    display: true,
    title: "Awards",
    awards: [
      {
        name: "Rising Star",
        issuer: "Systems Limited",
        date: "2021",
        description: "Recognized with the Rising Star Award at Systems Limited for demonstrating exceptional growth, adaptability, and impact within a short span of time. This award highlighted my ability to quickly master complex DevOps practices, deliver high-quality automation solutions, and contribute proactively to team success.",
      },
    ],
  },
};

// Blog configuration - soft deleted, can be re-enabled later
// Blog configuration - enabled as a minimal stub so pages importing `blog` compile.
const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: `Blog – ${person.name}`,
  description: `Writing and posts by ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

// Gallery configuration - soft deleted, can be re-enabled later
// Gallery configuration - enabled as a minimal stub so pages importing `gallery` compile.
const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, mailchimp, home, about, work, blog, gallery };
