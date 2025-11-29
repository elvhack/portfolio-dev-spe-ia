// src/sections/Experience.tsx
import generalInfo from "@/data/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experience = generalInfo.professionalExperience;

export function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-border/60 bg-background/95 py-20 md:py-24"
    >
      <div className="mb-12 space-y-3 text-center">
        <p className="mx-auto max-w-md text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Experience
        </p>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Experience across startups and product teams.
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
          A mix of consulting and hands-on engineering work across web, mobile
          and AI-powered products.
        </p>
      </div>

      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        {experience.map((role: any) => (
          <Card
            key={`${role.company}-${role.title}`}
            className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 shadow-sm backdrop-blur"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-primary/60"
            />
            <CardHeader className="space-y-1 p-5 pb-3">
              <CardTitle className="text-sm font-semibold md:text-base">
                {role.role} – {role.company}
              </CardTitle>
              {role.period && (
                <p className="text-xs text-muted-foreground">{role.period}</p>
              )}
            </CardHeader>
            <CardContent className="p-5 pt-1">
              <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
                {role.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
