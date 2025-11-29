// src/app/page.tsx
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { SelectedProjects } from "@/sections/SelectedProjects";
import { Experience } from "@/sections/Experience";
import { TechStack } from "@/sections/TechStack";
import { WorkProcess } from "@/sections/WorkProcess";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { ThemeSwitcher } from "@/theme/ThemeSwitcher";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
          <span className="text-sm font-medium text-muted-foreground">
            Elvan Eroglu – Portfolio
          </span>
          <ThemeSwitcher />
        </div>
      </header>

      <Hero />
      <Services />
      <SelectedProjects />
      <Experience />
      <TechStack />
      <WorkProcess />
      <About />
      <Contact />
    </main>
  );
}
