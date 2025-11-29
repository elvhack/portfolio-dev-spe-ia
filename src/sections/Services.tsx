// src/sections/Services.tsx
import generalInfo from "@/data/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = generalInfo.services;

export function Services() {
  return (
    <section className="border-b bg-muted/50">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="mb-6 text-2xl font-semibold">Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service: any) => (
            <Card key={service.title} className="h-full bg-card">
              <CardHeader>
                <CardTitle className="text-base font-semibold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
