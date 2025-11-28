import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="border-b">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-16">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Full-Stack Web, Mobile & AI Developer
        </p>
        <h1 className="text-3xl font-semibold md:text-5xl">
          Elvan Eroglu – Full-Stack Developer & AI Integration Specialist
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          {/* Ici tu colles ton paragraphe d’intro depuis le PDF, version anglaise ou FR */}
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
