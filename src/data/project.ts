export type ProjectCategory = "web" | "mobile" | "ai" | "legacy";

export type Project = {
  id: string;
  name: string;
  role: string;
  period?: string;
  tech: string[];
  category: ProjectCategory;
  shortDescription: string;
  highlights: string[];
  links?: {
    github?: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  {
    id: "briev",
    name: "Briev – AI Content Platform",
    role: "Full-Stack Developer",
    period: "2025",
    category: "web",
    tech: ["Next.js", "TypeScript", "Supabase", "Stripe", "OpenAI", "DALL·E"],
    shortDescription:
      "SaaS web app for AI-powered content and slide generation.",
    highlights: [
      "Next.js 15 App Router with server components",
      "PostgreSQL/Supabase backend and Stripe subscriptions",
      "Integration of GPT and image generation models",
    ],
    links: {
      github: "https://github.com/elvhack/briev",
    },
  },
  // ... Team4Planet, TimeSword, RoomGPT, etc. d’après le PDF
];
