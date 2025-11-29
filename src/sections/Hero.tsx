// src/sections/Hero.tsx
import generalInfo from "@/data/data";
import { Button } from "@/components/ui/button";

const hero = generalInfo.hero;

export function Hero() {
  return (
    <section className="border-b">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-16">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          {hero.tagline}
        </p>
        <h1 className="text-3xl font-semibold md:text-5xl">{hero.name}</h1>
        <p className="text-sm text-muted-foreground">{hero.location}</p>
        <p className="max-w-2xl text-base text-muted-foreground">
          {hero.description}
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href="#contact">Let&apos;s work together</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects">View selected projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
