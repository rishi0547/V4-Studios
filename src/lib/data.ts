// lib/data.ts

export const siteConfig = {
  name: "V4 Studios",
  tagline: "Build. Design. Deliver.",
  email: "hello@v4studios.com",
  url: "https://v4studios.com",
};

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Behance", href: "#" },
];

export type Service = {
  id: string;
  tag: string;
  priority?: boolean;
  title: string;
  description: string;
  stack: string[];
};

export const services: Service[] = [
  {
    id: "web-app-dev",
    tag: "Priority",
    priority: true,
    title: "Web & App Development",
    description:
      "We build fast, scalable, and modern web applications using the latest technologies. From landing pages to full-stack platforms — we deliver code that performs.",
    stack: ["React", "Next.js", "Node.js", "APIs", "CMS", "E-commerce"],
  },
  {
    id: "brand-design",
    tag: "Design",
    title: "Brand & Visual Design",
    description:
      "We craft visual identities, UI/UX designs, and brand systems that communicate clearly and leave a lasting impression on your audience.",
    stack: ["Brand Identity", "UI/UX", "Motion Graphics", "Print & Digital"],
  },
  {
    id: "video-production",
    tag: "Creative",
    title: "Video Editing & Production",
    description:
      "From social media content to brand films, we produce polished videos that tell your story and drive engagement across every platform.",
    stack: ["Reels", "Brand Films", "Product Videos", "Motion Design"],
  },
];

export type TeamMember = {
  initials: string;
  name: string;
  role: string;
};

export const team: TeamMember[] = [
  { initials: "G", name: "Gireesh", role: "Co-founder" },
  { initials: "P", name: "Pragadeesh", role: "Co-founder" },
  { initials: "R", name: "Rishikumar", role: "Co-founder" },
  { initials: "M", name: "Manikandan", role: "Co-founder" },
];

export type WhyItem = {
  title: string;
  description: string;
};

export const whyChooseUs: WhyItem[] = [
  {
    title: "Development-first mindset",
    description:
      "We lead with engineering. Every project is built on clean, maintainable code — no shortcuts.",
  },
  {
    title: "End-to-end capability",
    description:
      "From strategy to launch, we handle design, development, and content so you don't need multiple agencies.",
  },
  {
    title: "Fast turnarounds",
    description:
      "We move quickly without sacrificing quality. You get results on schedule, every time.",
  },
  {
    title: "Global perspective",
    description:
      "We build for international audiences — with performance, accessibility, and scalability built in.",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your goals, audience, and vision through a focused kickoff session.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "We map out the scope, timeline, and deliverables — no surprises, no scope creep.",
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "Our team works in parallel — designing and developing simultaneously for faster delivery.",
  },
  {
    number: "04",
    title: "Review & Launch",
    description:
      "You review, we refine. Once approved, we launch — and stay available for support.",
  },
];

// Placeholder — swap in real projects once you have case studies to show.
export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: "placeholder-1",
    title: "Project coming soon",
    category: "Web Development",
    description:
      "We're putting together our first case studies. Check back shortly — or get in touch to be one of them.",
  },
  {
    id: "placeholder-2",
    title: "Project coming soon",
    category: "Brand & Visual Design",
    description:
      "We're putting together our first case studies. Check back shortly — or get in touch to be one of them.",
  },
  {
    id: "placeholder-3",
    title: "Project coming soon",
    category: "Video Production",
    description:
      "We're putting together our first case studies. Check back shortly — or get in touch to be one of them.",
  },
];
