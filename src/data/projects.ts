import { Project } from '@/types';

export const projects: Project[] = [
  {
    title: "Project One",
    description: "This is the first project.",
    github: "https://github.com/your-username/project-one",
    view: "https://project-one-demo.com",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: [{ url: "/images/project-one.png" }],
  },
  {
    title: "Project Two",
    description: "This is the second project.",
    github: "https://github.com/your-username/project-two",
    view: "https://project-two-demo.com",
    stack: ["React", "Node.js", "Express"],
    image: [{ url: "/images/project-two.png" }],
  },
];