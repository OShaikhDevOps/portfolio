import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Osman",
  lastName: "Shaikh",
  name: `Osman Shaikh`,
  role: "AI/ML & DevOps Engineer",
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
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Where AI Meets DevOps</>,
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
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I’m Osman Shaikh, an AI/ML and DevOps Engineer.
      <br />I design pipelines that scale machine learning into production.
      <br />After hours, I explore new projects in automation and AI.
    </>
  ),
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
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      I’m Osman Shaikh, an AI/ML and DevOps Engineer based in Toronto. 
      I build scalable machine learning pipelines and cloud-native systems, 
      with a strong focus on automation, CI/CD, and security. 
      My work bridges AI innovation with reliable infrastructure and application delivery.
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
        description: "Supporting QPharma Inc. as a DevOps and Cloud Engineer, with responsibility for designing, automating, and securing AWS-based infrastructure. My focus is on delivering scalable CI/CD pipelines, resilient cloud architectures, and operational automation to ensure reliability and business continuity.",
        achievements: [
          <>
            CI/CD Engineering: Designed and maintained pipelines with Jenkins, 
            AWS CodePipeline, and GitHub Actions to streamline builds, testing, 
            and deployments for .NET, Angular, Node.js, and Python applications.
          </>,
          <>
            Cloud Infrastructure: Built and managed AWS infrastructure 
            (VPC, EC2, S3, Lambda, API Gateway, Route53, IAM, Load Balancers,
            Security Groups, VPC Peering, and cross-account networking)
            using Terraform and CloudFormation, ensuring high availability,
            scalability, and cost optimization (Reserved Instances, Auto Scaling,
            Savings Plans).
          </>,
          <>
          Infrastructure & Configuration as Code: Automated provisioning and configuration
          with Terraform and Ansible, enabling repeatable, consistent environment setups
          across DEV/SIT/PROD.
          </>,
          <>
          SecOps / DevSecOps: Integrated security into CI/CD workflows with 
          Trivy, Snyk, SonarQube, OWASP ZAP, and Dependency-Track, enabling 
          early vulnerability detection and compliance reporting.
          </>,
          <>
          Automation & Lambda: Developed AWS Lambda functions for automation,
          event-driven workflows, and data processing tasks, improving efficiency
          and reducing manual overhead.
          </>,
          <>
          Kubernetes & Containerization: Deployed and optimized workloads on
          Kubernetes (EKS), leveraging container orchestration for scalable 
          microservices and efficient resource utilization.
          </>,
          <>
          Resilience & Reliability: Implemented chaos engineering experiments
          and multi-AZ disaster recovery strategies to validate resilience and
           ensure business continuity.
          </>,
          <>
          Identity & Access Management: Configured Microsoft Active Directory
          and AWS VPN to support secure hybrid cloud access, with least-privilege
           IAM policies for compliance.
          </>,
          <>
          Collaboration & Leadership: Partnered with cross-functional teams to 
          deliver secure, scalable solutions by applying DevOps and 
          MLOps best practices end to end.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
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
        description: "During my tenure at Systems Limited, I advanced through multiple roles (Associate → Junior → Consultant → Senior → Principal), leading cloud and DevOps initiatives for global enterprise clients.",
        achievements: [
          <>
            Cloud Engineering: Designed and managed large-scale AWS and GCP infrastructures, implementing 
            high-availability, cost-optimized solutions using VPC, EC2, S3, Lambda, API Gateway, Route53, IAM, 
            Load Balancers, VPC Peering, and cross-account networking. Leveraged Terraform, Pulumi, and 
            CloudFormation for Infrastructure as Code.
          </>,
          <>
            CI/CD & Automation: Built and optimized CI/CD pipelines using Jenkins, GitHub Actions, GitLab CI/CD, 
            and AWS CodePipeline, enabling faster, more reliable software delivery across .NET, Angular, Node.js, 
            and Python applications.
          </>,
          <>
            Application Modernization: Migrated legacy monolithic applications to microservices with Kubernetes 
            and Docker, reducing infrastructure costs by 20% while improving scalability and reliability.
          </>,
          <>
            GitOps Practices: Implemented declarative deployment workflows using ArgoCD and FluxCD, ensuring 
            version-controlled, consistent infrastructure and application rollouts.
          </>,
          <>
            Security & Compliance (DevSecOps): Integrated tools like Snyk, SonarQube, OWASP ZAP, Trivy, and 
            Dependency-Track into CI/CD workflows, ensuring secure code delivery and continuous vulnerability 
            management (SCA, SAST, DAST).
          </>,
          <>
            Monitoring & Observability: Automated monitoring with Prometheus, Grafana, and ELK Stack, proactively 
            identifying performance bottlenecks and improving system reliability.
          </>,
          <>
            Leadership & Collaboration: Directed and mentored teams of up to 20 DevOps engineers, fostering 
            cross-functional collaboration via JIRA, Confluence, and Slack, while ensuring timely, secure, and 
            scalable delivery of solutions.
          </>        
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
        description: <>Postgraduate Certificate Applied A.I. Solutions Development</>,
      },
      {
        name: "Forman Christian College (A Chartered University)",
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
        title: "AI / ML",
        description: (
          <>
            Building and training machine learning models using Scikit-learn for classification, 
            regression, and clustering. Experienced in visualization with Matplotlib and Seaborn, 
            and applying image processing techniques with OpenCV for computer vision tasks.
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
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
