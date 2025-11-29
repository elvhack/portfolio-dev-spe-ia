// src/sections/SelectedProjects.tsx
import generalInfo from "@/data/data";
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
    <section id="projects" className="border-b">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="mb-6 text-2xl font-semibold">Selected Projects</h2>

        <div className="space-y-10">
          {categories.map((cat) => (
            <div key={cat} className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {CATEGORY_LABELS[cat]}
                </h3>
                <Badge
                  variant="outline"
                  className="uppercase text-[10px] tracking-widest"
                >
                  {cat}
                </Badge>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {selected[cat].map((proj: any) => (
                  <Card key={proj.id} className="bg-card">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between text-base font-semibold">
                        <span>{proj.name}</span>
                        {proj.year && (
                          <span className="text-xs font-normal text-muted-foreground">
                            {proj.year}
                          </span>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {proj.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
