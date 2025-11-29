// src/sections/Experience.tsx
import generalInfo from "@/data/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experience = generalInfo.professionalExperience;

export function Experience() {
  return (
    <section className="border-b bg-muted/50">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="mb-6 text-2xl font-semibold">Professional Experience</h2>
        <div className="space-y-4">
          {experience.map((role: any) => (
            <Card key={role.company} className="bg-card">
              <CardHeader>
                <CardTitle className="text-base font-semibold">
                  {role.title} – {role.company}
                </CardTitle>
                {role.period && (
                  <p className="text-xs text-muted-foreground">{role.period}</p>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {role.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
