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
    <section className="border-b">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="mb-6 text-2xl font-semibold">Tech Stack</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-base font-semibold">
                Languages & Frameworks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <PillList items={tech.languagesFrameworks} />
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-base font-semibold">
                Databases & Cloud
              </CardTitle>
            </CardHeader>
            <CardContent>
              <PillList items={tech.databasesCloud} />
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-base font-semibold">
                AI & ML Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <PillList items={tech.aiMLTools} />
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-base font-semibold">
                DevOps & Misc
              </CardTitle>
            </CardHeader>
            <CardContent>
              <PillList items={tech.devOpsMisc} />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
