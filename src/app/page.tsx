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
    <main className="relative min-h-screen bg-background text-foreground">
      {/* Subtle background gradients inspired by modern portfolio layouts */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-32 top-[-10rem] h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-32 top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-[-12rem] h-80 bg-gradient-to-t from-background via-background/90 to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl px-4">
        {/* Top navigation */}
        <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
          <div className="flex items-center justify-between gap-4 py-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-tight">
                  Elvan Eroglu
                </span>
                <span className="hidden text-xs text-muted-foreground sm:inline">
                  Full-Stack Web, Mobile & AI
                </span>
              </div>
            </div>

            <nav className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
              <a
                href="#about"
                className="hidden transition-colors hover:text-foreground md:inline-block"
              >
                About
              </a>
              <a
                href="#services"
                className="hidden transition-colors hover:text-foreground md:inline-block"
              >
                Services
              </a>
              <a
                href="#tech-stack"
                className="hidden transition-colors hover:text-foreground md:inline-block"
              >
                Tech
              </a>
              <a
                href="#projects"
                className="hidden transition-colors hover:text-foreground md:inline-block"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="hidden transition-colors hover:text-foreground md:inline-block"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="hidden rounded-full border border-border/70 px-3 py-1 text-[11px] text-foreground transition-colors hover:border-primary/60 hover:bg-primary/5 md:inline-block"
              >
                Let&apos;s talk
              </a>
              <ThemeSwitcher />
            </nav>
          </div>
        </header>

        {/* Page sections */}
        <Hero />
        <Services />
        <About />
        <TechStack />
        <SelectedProjects />
        <Experience />
        <WorkProcess />
        <Contact />

        {/* Footer */}
        <footer className="border-t border-border/60 bg-background/80">
          <div className="flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Elvan Eroglu. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="transition-colors hover:text-foreground"
              >
                View projects
              </a>
              <span className="hidden text-border sm:inline">•</span>
              <a
                href="#contact"
                className="transition-colors hover:text-foreground"
              >
                Get in touch
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
