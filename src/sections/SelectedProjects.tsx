// src/sections/SelectedProjects.tsx
import generalInfo from "@/data/data";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const selected = generalInfo.selectedProjects;

type CategoryKey = "web" | "mobile" | "ai" | "legacy";

const CATEGORY_LABELS: Record<CategoryKey, string> = {
  web: "Web Applications (SaaS & Dashboards)",
  mobile: "Mobile Applications",
  ai: "AI & ML Projects",
  legacy: "Legacy & Archive",
};

export function SelectedProjects() {
  const categories = Object.keys(selected) as CategoryKey[];

  return (
    <section
      id="projects"
      className="border-b border-border/60 bg-linear-to-b from-background/95 via-background to-background/95 py-20 md:py-24"
    >
      <div className="mb-12 space-y-3 text-center">
        <p className="mx-auto max-w-md text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Selected Work
        </p>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          A snapshot of products I&apos;ve helped build.
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
          From greenfield SaaS apps to AI-powered tools, here are a few
          representative projects.
        </p>
      </div>

      <div className="space-y-12">
        {categories.map((cat) => (
          <div key={cat} className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-foreground md:text-base">
                {CATEGORY_LABELS[cat]}
              </h3>
              <Badge
                variant="outline"
                className="rounded-full border-border/70 bg-background/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em]"
              >
                {cat}
              </Badge>
            </div>

            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              {selected[cat].map((proj: any) => (
                <Card
                  key={proj.id}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm backdrop-blur transition-transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-video w-full bg-muted">
                    {proj.image ? (
                      <Image
                        src={proj.image}
                        alt={proj.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center px-4 text-center">
                        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                          Project preview coming soon
                        </span>
                      </div>
                    )}
                  </div>

                  <CardHeader className="space-y-1 p-4 pb-2">
                    <CardTitle className="flex items-center justify-between text-sm font-semibold md:text-base">
                      <span>{proj.name}</span>
                      {proj.year && (
                        <span className="text-xs font-normal text-muted-foreground">
                          {proj.year}
                        </span>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 px-4 pb-4 pt-1">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {proj.description}
                    </p>
                    {proj.stack && (
                      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {proj.stack}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
