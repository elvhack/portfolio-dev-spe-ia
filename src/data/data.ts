const hero = {
  tagline: "Full-Stack Web, Mobile & AI Developer",
  name: "Elvan Eroglu – Full-Stack Developer & AI Integration Specialist",
  location: "Based in Paris with over 5 years of experience",
  description:
    "I build end-to-end digital products with Next.js, React Native, and AI—ready for freelance or remote engagements, from architecture to launch and beyond.",
};

const services = [
  {
    title: "Web Application Development (Next.js + Node + PostgreSQL)",
    description:
      "Design and development of modern SaaS platforms, REST/GraphQL APIs, cloud service integrations, and secure payment flows with Stripe.",
  },
  {
    title: "Mobile App Development (React Native)",
    description:
      "High-performance iOS and Android applications with polished UI/UX, offline-first capabilities, and native feature integrations.",
  },
  {
    title: "AI Integration (LLMs & Generative AI)",
    description:
      "Chatbots powered by GPT and AI image generation (DALL·E, Stable Diffusion) using OpenAI, HuggingFace, or Replicate pipelines.",
  },
];

const selectedProjects = {
  web: [
    {
      id: "briev",
      name: "Briev",
      year: "2025",
      description:
        "SaaS platform for crafting interactive stories and multimedia content with AI-assisted workflows.",
    },
    {
      id: "team4planet",
      name: "Team4Planet",
      year: "2024",
      description:
        "Impact-driven web experience supporting environmental initiatives with scalable infrastructure.",
    },
    {
      id: "noogate",
      name: "Noogate",
      year: "2019",
      description:
        "Web portal focused on streamlined collaboration features built with a robust backend stack.",
    },
  ],
  mobile: [
    {
      id: "timesword",
      name: "TimeSword",
      year: "2022",
      description:
        "Productivity and scheduling app delivering smooth performance and intuitive navigation on iOS and Android.",
    },
    {
      id: "rn-web-browser",
      name: "React Native Web Browser",
      year: "2021",
      description:
        "Lightweight in-app browser component for React Native projects with navigation controls and custom UI.",
    },
    {
      id: "rn-alphabet-list",
      name: "React Native Alphabet List",
      year: "2021",
      description:
        "Fast alphabetical list component optimized for large datasets and accessible scrolling.",
    },
  ],
  ai: [
    {
      id: "roomgpt",
      name: "RoomGPT",
      year: "2023",
      description:
        "Interior redesign assistant generating styled room mockups with image models and prompt workflows.",
    },
    {
      id: "briev-ai-story",
      name: "Briev – AI Story Builder",
      year: "2025",
      description:
        "Generative storytelling tool combining GPT-powered narration with media creation features.",
    },
    {
      id: "chatgpt-assistant",
      name: "ChatGPT Assistant Bot",
      year: "2023",
      description:
        "Customizable assistant bot integrating GPT APIs, memory, and task-specific prompts for businesses.",
    },
  ],
  legacy: [
    {
      id: "react-meme-generator",
      name: "React Meme Generator",
      year: "2019",
      description:
        "Fun web app for creating and sharing memes with quick editing tools.",
    },
    {
      id: "classic-snake-game",
      name: "Classic Snake Game",
      year: "2018",
      description:
        "Browser-based remake of the classic Snake game with responsive controls.",
    },
    {
      id: "misc-scripts",
      name: "Miscellaneous Scripts and Tools",
      year: "N/A",
      description:
        "Collection of small utilities, automations, and experiments from early development work.",
    },
  ],
};

const professionalExperience = [
  {
    company: "Budly Network",
    role: "Full-Stack Developer",
    period: "Août 2023 – Présent",
    description:
      "Building and maintaining production features across web and backend, aligning stakeholder needs with performant delivery.",
  },
  {
    company: "YourLifeCard",
    role: "Web/Mobile Developer",
    period: "Mai 2021 – Oct 2021",
    description:
      "Delivered responsive web and mobile experiences, integrating payments and user account flows for a lifestyle product.",
  },
  {
    company: "GetGround.io",
    role: "Full-Stack Developer",
    period: "Jan 2020 – Juil 2020",
    description:
      "Implemented full-stack features with scalable APIs, collaborating closely with product and design teams in an international setting.",
  },
  {
    company: "Freelance Projects & Contracts",
    role: "Full-Stack & AI Engineer",
    period: "2020 – 2023",
    description:
      "Delivered bespoke applications, mobile experiences, and AI integrations for startups and SMEs on a contract basis.",
  },
];

const techStack = {
  languagesFrameworks: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "React Native",
  ],
  databasesCloud: [
    "PostgreSQL",
    "Firebase/Firestore",
    "Microsoft SQL Server",
    "Vercel",
    "Docker",
  ],
  aiMLTools: [
    "OpenAI GPT-4",
    "LLMs",
    "HuggingFace transformers",
    "Stable Diffusion",
    "Replicate",
    "HuggingFace Hub",
  ],
  devOpsMisc: [
    "Git/GitHub",
    "CI/CD pipelines",
    "Agile/Scrum",
    "ESLint",
    "Prettier",
    "Performance optimization",
  ],
};

const workProcess =
  "Discovery & planning → Execution (design, development, integration) → Testing & refinements (including AI output validation) → Delivery & follow-up.";

const about = {
  english:
    "I am a 29-year-old developer with a strong academic background in math and computer science. With over five years of experience across international teams, I thrive on problem-solving, innovation, and delivering reliable products end-to-end.",
  french:
    "Développeur full-stack freelance de 29 ans, spécialisé en Next.js et React Native, expert en intégration d'IA. J'offre des solutions fiables et évolutives grâce à une solide base en mathématiques et informatique et une expérience confirmée en environnements internationaux.",
};

const contact = {
  email: "elvan.eroglu.dev@gmail.com",
  linkedIn: "https://www.linkedin.com/in/elvan-/",
  whatsapp: "+33665961499",
  note: "Feel free to reach out via email or WhatsApp, or use the contact form on the site for project inquiries.",
};

const generalInfo = {
  hero,
  services,
  selectedProjects,
  professionalExperience,
  techStack,
  workProcess,
  about,
  contact,
};
export default generalInfo;
