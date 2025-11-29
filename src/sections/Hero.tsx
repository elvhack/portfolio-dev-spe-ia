// src/sections/Hero.tsx
import generalInfo from "@/data/data";
import { Button } from "@/components/ui/button";

const hero = generalInfo.hero;

export function Hero() {
  return (
    <section id="hero" className="border-b border-border/60 py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        {/* Tagline */}
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {hero.tagline}
        </p>

        {/* Title & subtitle (comme Form2Lead) */}
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
          {hero.name}
        </h1>
        <p className="text-base sm:text-lg font-medium text-primary mb-2">
          Full-Stack Web, Mobile &amp; AI
        </p>
        <p className="text-sm text-muted-foreground mb-6">{hero.location}</p>

        <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground mb-10">
          {hero.description}
        </p>

        {/* CTA principal + secondaire */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button asChild>
            <a href="#contact">Let&apos;s work together</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects">View selected projects</a>
          </Button>
        </div>

        {/* Placeholder visuel type screenshot */}
        <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-border/60 bg-card shadow-xl">
          <div className="h-64 w-full bg-linear-to-br from-primary/10 via-accent/10 to-muted flex items-center justify-center">
            <span className="text-xs sm:text-sm font-medium text-muted-foreground">
              Project / dashboard preview coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
