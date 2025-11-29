// src/sections/TechStack.tsx
import generalInfo from "@/data/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tech = generalInfo.techStack;

function PillList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge key={item} variant="outline" className="text-xs">
          {item}
        </Badge>
      ))}
    </div>
  );
}

export function TechStack() {
  return (
    <section
      id="tech-stack"
      className="border-b border-border/60 bg-background/95 py-20 md:py-24"
    >
      <div className="mb-12 space-y-3 text-center">
        <p className="mx-auto max-w-md text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Tech Stack
        </p>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Modern tools across the full stack.
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
          From frontend to infrastructure and AI tooling, I use a pragmatic mix
          of technologies depending on the problem to solve.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        <Card className="rounded-2xl border border-border/60 bg-card/80 shadow-sm backdrop-blur">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">
              Languages &amp; Frameworks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PillList items={tech.languagesFrameworks} />
          </CardContent>
        </Card>

        <Card className="rounded-2xl border border-border/60 bg-card/80 shadow-sm backdrop-blur">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">
              Databases &amp; Cloud
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PillList items={tech.databasesCloud} />
          </CardContent>
        </Card>

        <Card className="rounded-2xl border border-border/60 bg-card/80 shadow-sm backdrop-blur">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">
              AI &amp; ML Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PillList items={tech.aiMLTools} />
          </CardContent>
        </Card>

        <Card className="rounded-2xl border border-border/60 bg-card/80 shadow-sm backdrop-blur">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">
              DevOps &amp; Misc
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PillList items={tech.devOpsMisc} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
