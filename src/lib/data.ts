import type { LucideIcon } from "lucide-react";
import {
  CodeXmlIcon,
  PaintbrushIcon,
  FeatherIcon,
  DatabaseZapIcon,
  BracesIcon,
  IterationCwIcon,
} from "lucide-react";

export interface Skill {
  name: string;
  Icon: LucideIcon;
  description: string;
  level: number; // e.g. 1-5 or 1-100 for progress bar
}

export const skillsData: Skill[] = [
  {
    name: "HTML5",
    Icon: CodeXmlIcon,
    description: "Crafting semantic and accessible web structures.",
    level: 95,
  },
  {
    name: "CSS3 & SASS",
    Icon: PaintbrushIcon,
    description: "Styling beautiful and responsive user interfaces.",
    level: 90,
  },
  {
    name: "Tailwind CSS",
    Icon: FeatherIcon,
    description: "Rapidly building modern UIs with utility-first CSS.",
    level: 90,
  },
  {
    name: "JavaScript (ES6+)",
    Icon: BracesIcon,
    description: "Bringing interactivity and logic to the web.",
    level: 85,
  },
  {
    name: "React & Redux",
    Icon: IterationCwIcon,
    description: "Building dynamic SPAs and managing complex state.",
    level: 85,
  },
  {
    name: "Next.js",
    Icon: IterationCwIcon,
    description: "Developing performant, server-rendered React applications.",
    level: 80,
  },
  {
    name: "Node.js & Express",
    Icon: DatabaseZapIcon,
    description: "Creating robust and scalable backend APIs.",
    level: 75,
  },
  {
    name: "MongoDB & Mongoose",
    Icon: DatabaseZapIcon,
    description: "Designing and interacting with NoSQL databases.",
    level: 70,
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "E-commerce Platform",
    description:
      "A full-featured online store with product listings, cart, checkout, and user accounts. Built with MERN stack and Next.js for frontend.",
    imageUrl:
      "https://cdn.dribbble.com/userupload/7237621/file/original-2fb2c320cac52c9230211673db49e770.png?resize=400x0",
    imageHint: "e-commerce shopping",
    tags: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    id: "project-2",
    title: "Task Management App",
    description:
      "A collaborative tool for organizing tasks, setting deadlines, and tracking progress. Real-time updates with WebSockets.",
    imageUrl:
      "https://cdn.dribbble.com/userupload/2841309/file/original-e7cb59408b6740e4d5248f4701c38756.png?resize=1600x1200&vertical=center",
    imageHint: "task management productivity",
    tags: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
    liveUrl: "#",
  },
  {
    id: "project-3",
    title: "Weather App",
    description:
      "This very portfolio, designed to showcase my skills and projects in a clean and interactive way. (Meta, I know!)",
    imageUrl: "/weatherApp.png",
    imageHint: "portfolio website",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI"],
    sourceUrl: "#",
  },
  {
    id: "project-4",
    title: "Music App",
    description:
      "A RESTful API for a blogging platform, enabling CRUD operations for posts, users, and comments. Secured with JWT authentication.",
    imageUrl: "/music.png",
    imageHint: "API code",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  author: string;
}

export const blogPostsData: BlogPost[] = [
  {
    slug: "understanding-harmony-with-nature",
    title: "Understanding the Harmony with Nature",
    date: "October 26, 2023",
    excerpt:
      "Exploring the profound connection between humanity and the natural world, and why fostering this bond is crucial for our collective well-being and the planet's health.",
    imageUrl:
      "https://media.istockphoto.com/id/1327919661/photo/world-earth-day-concept-green-energy-renewable-and-sustainable-resources-environmental-and.jpg?s=612x612&w=0&k=20&c=6PvLRMFPI65ATEs-XWPJ_UOtkmSKoONOD4h7Lohq850=",
    imageHint: "nature forest",
    tags: ["Nature", "Well-being", "Environment", "Philosophy"],
    author: "Sampath",
  },
  // Add more blog posts here if needed
];
