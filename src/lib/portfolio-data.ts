import resume from "@/assets/NABEEL_K_CV..pdf";
import profileImage from "@/assets/unnamed.jpg";

export const profile = {
  name: "Muhammed Nabeel K",
  role: "Fullstack Developer",
  stack: "React · Redux · Next.js · Django · Python",
  location: "Kannur, Kerala, India",
  email: "muhammednabeel450@gmail.com",
  phone: "8136967789",
  photo: profileImage,
  resume: resume,
  github: "https://github.com/nabeeel6",
  linkedin: "https://www.linkedin.com/in/muhammed-nabeel-322b89362/",
  instagram: "https://www.instagram.com/nabeeel.6?igsh=aTVsemtwM2I3cjlw",
  whatsapp: "https://wa.me/918136967789",
  intro:
    "I build production-ready web applications end to end — accessible React and Next.js interfaces on the front, Django REST APIs and relational databases on the back.I also use AI as a problem-solving and development tool — to investigate unfamiliar concepts, debug issues, explore different approaches, and move from a problem to a working solution.",
  valueProp:
    "Six months of hands-on full-stack training, a live team CRM shipped with industry workflows, and a hackathon product designed and built in days.",
};

export const stats = [
  { label: "Months of hands-on training", value: "6+" },
  { label: "Projects shipped", value: "5" },
  { label: "Live team project", value: "CRM" },
  { label: "Certifications", value: "5" },
];

export const skillGroups = [
  {
    category: "Frontend",
    icon: "Layout",
    items: ["React", "Next.js", "Redux", "HTML5", "CSS3", "Bootstrap", "Responsive UI"],
  },
  {
    category: "Backend",
    icon: "Server",
    items: ["Django", "Django REST Framework", "REST APIs", "Authentication", "CRUD"],
  },
  {
    category: "Languages",
    icon: "Code2",
    items: ["JavaScript", "Python", "TypeScript basics", "SQL"],
  },
  {
    category: "Database",
    icon: "Database",
    items: ["MySQL", "PostgreSQL", "Schema design", "Querying"],
  },
  {
    category: "Tools",
    icon: "Wrench",
    items: ["Git", "GitHub", "Postman", "VS Code", "Chrome DevTools"],
  },
  {
    category: "Deployment",
    icon: "Rocket",
    items: ["Vercel", "GitHub workflows"],
  },
] as const;

export type Project = {
  title: string;
  kicker: string;
  desc: string;
  tags: string[];
  features: string[];
  challenge: string;
  repo: string;
  demo?: string;
  featured?: boolean;
  category: "Full-Stack" | "Frontend" | "Team";
};

export const projects: Project[] = [
  {
    title: "Janko AI Travel Guide",
    kicker: "oct 2026 · LevelX (NxtWave)",
    desc: "AI Travel Guide · Completed · LevelX Vijayawada Workshop",
    tags: ["HTML","JavaScript","Python", "FLask", "PostgreSQL", "Gemini API","Murf AI API","Rest APi","Render" ],
    features: [
      "An AI-powered travel guide that provides AI-generated information and audio guides for selected destinations, with multilingual support.",
     
    ],
    challenge:
      "",
    repo: "https://github.com/nabeeel6/janko-ai-travel-guide",
    demo: "https://janko-ai-travel-guide.onrender.com",
    featured: true,
    category: "Team",
  },{
    title: "CRM — Live Team Project",
    kicker: "Feb 2026 – May 2026 · UPCODE",
    desc: "A real-time, team-based CRM built inside a working software lab, following industry development practices and collaboration workflows.Responsible for Ticket management module(Frontend development)",
    tags: ["React", "Django REST","Python", "PostgreSQL", "Git Flow"],
    features: [
      "Role-based modules for customer and lead records",
      "Shared component library across the team",
    ],
    challenge:
      "",
    repo: "https://github.com/nabeeel6/CRM-LIVE-PROJECT",
    featured: true,
    category: "Team",
  },
  {
    title: "E-Commerce Web Application (SHOP.CO)",
    kicker: "Django Full-Stack",
    desc: "A complete e-commerce platform with authentication, product and order management, admin tooling and a MySQL-backed catalogue.",
    tags: ["React","Redux","Django", "Python", "MySQL", "Bootstrap"],
    features: [
      "User signup, login and session handling",
      "Product CRUD with image upload and admin dashboard",
      "Cart and order flow wired to relational models",
    ],
    challenge:
      "",
    repo: "https://github.com/nabeeel6/SHOP.CO-ecommerce",
    featured: true,
    category: "Full-Stack",
  },
  {
    title: "E-Commerce Frontend — Next.js",
    kicker: "Frontend · Deployed",
    desc: "A server-rendered storefront built with Next.js, exploring routing, data fetching and faster first paint for product-heavy pages.",
    tags: ["Next.js", "Vercel"],
    features: [
      "Server-rendered product listing and detail views",
      "Reusable layout and card components",
      "Deployed to Vercel with production build",
    ],
    challenge:
      "",
    repo: "https://github.com/nabeeel6/nextapp",
    demo: "https://nextapp-final.vercel.app",
    featured: true,
    category: "Frontend",
  },
  {
    title: "Skill-Link — Local Job Finding App",
    kicker: "Hackathon Project",
    desc: "A team hackathon Frontend product that helps people discover local work near them.Responsible for product card",
    tags: ["Hackathon", "React", "UI Design"],
    features: [
      "Job discovery flow designed from scratch under time pressure",
      "Responsive layouts for on-the-go users",
      "Component structure handed off cleanly to teammates.Shipping a usable interface in hackathon hours — solved by prototyping the core flow first and cutting everything non-essential.",
    ],
    challenge:
      "",
    repo: "https://github.com/nabeeel6/Skill-Link",
    demo: "https://skillink-jobportal.vercel.app/",
    category: "Team",
  },
  {
    title: "E-Commerce Frontend — React + Redux",
    kicker: "Frontend",
    desc: "A responsive e-commerce interface with product listing, reusable components and predictable global state managed through Redux.",
    tags: ["React", "Redux", "JavaScript"],
    features: [
      "Centralised cart and filter state in the Redux store",
      "Reusable, composable product components",
      "Mobile-first responsive grid",
    ],
    challenge:
      "",
    repo: "https://github.com/nabeeel6/E-COMMERCE-REACT-REDUX",
    category: "Frontend",
  },
];

export const experience = [
  {
    role: "Python Full-Stack Development Training",
    company: "UPCODE, Kannur",
    date: "6 Months",
    bullets: [
      "Completed hands-on training covering HTML, CSS, Bootstrap, JavaScript, Git, REST APIs, React, Next.js, Python, Django, MySQL and PostgreSQL.",
      "Contributed to a live, real-time team-based CRM project applying industry development practices and collaboration workflows (Feb 2026 – May 2026).",
      "Built responsive frontend using React.js and Next.js.",
      "Built responsive web application using React.js and Python.",
      "Developed backend APIs using Python and Django REST Framework.",
      "Implemented CRUD operations and integrated frontend applications with REST APIs.",
      "Worked with MySQL and PostgreSQL for database design, querying and data management.",
      "Used Git and GitHub for version control and team collaboration.",
      "Tested and documented APIs using Postman.",
      "Followed component-based architecture and responsive design.",
      "Participated in collaborative software development.",
    ],
  },
  {
    role: "Upskilling Program",
    company: "NxtWave CCBP 4.0 Academy",
    date: "Present",
    bullets: [
      "Continuously building full-stack skills through structured, industry-aligned coursework.",
      "Strengthening Data Structures & Algorithms, problem-solving and programming fundamentals.",
      "Learning full-stack web development using technologies.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "IGNOU University — Distance Mode",
    date: "Present",
  },
  {
    degree: "Higher Secondary",
    school: "CHMHSS Elayavoor — Kerala Syllabus",
    date: "07/2023 — 03/2025",
  },
];

export const certifications = [
  {
    name: "ISO Certified Internship Certificate",
    issuer: "Upcode Software Labs, Kannur",
    initials: "ISO",
  },
  { name: "AI for All-Intel India", issuer: "Intel India and Government Of India", initials: "AI" },
  {
    name: "Skill Completion — HTML, CSS, Bootstrap, Git, REST API",
    issuer: "Upcode Software Labs, Kannur",
    initials: "✓",
  },
  {
    name: "Hackathon Participation Certificate",
    issuer: "Upcode Software Labs, Kannur",
    initials: "🏆",
  },
  {
    name: "AI BOOTCAMP COMPLETION CERTIFICATE-MADE A SIMPLE AI CHATBOT ",
    issuer: "Upcode Software Labs, Kannur",
    initials: "🤖",
  },
];

export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/maqrzqqw";
