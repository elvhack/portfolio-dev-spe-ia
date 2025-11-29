// src/sections/Services.tsx
import generalInfo from "@/data/data";

const services = generalInfo.services;

const SERVICE_ICONS = ["⚡", "📱", "📊"];

export function Services() {
  return (
    <section
      id="services"
      className="border-b border-border/60 bg-background py-12 md:py-16"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {services.map((service: any, index: number) => (
          <div
            key={service.title}
            className="bg-card text-foreground rounded-xl border border-border/60 p-6 shadow-sm"
          >
            <div className="mb-3 text-3xl font-bold">
              {SERVICE_ICONS[index] ?? "✨"}
            </div>
            <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
            <p className="text-sm text-muted-foreground">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
