// src/sections/About.tsx
import generalInfo from "@/data/data";

const about = generalInfo.about;

export function About() {
  return (
    <section className="border-b">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="mb-6 text-2xl font-semibold">About</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              English
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {about.english}
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Français
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {about.french}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
