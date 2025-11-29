// src/sections/About.tsx
import generalInfo from "@/data/data";

const about = generalInfo.about;

export function About() {
  return (
    <section id="about" className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-3xl border-t border-border/60 pt-12 text-center">
        <h2 className="mb-6 text-2xl font-bold">Why work with Elvan?</h2>

        <ul className="mx-auto max-w-2xl space-y-5 text-left text-sm">
          <li className="flex items-start gap-3">
            <span className="mt-1 text-primary">✓</span>
            <span>
              <strong>Full-stack:</strong> From frontend to backend and
              infrastructure, I ship complete, production-ready features.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 text-primary">✓</span>
            <span>
              <strong>Web &amp; mobile:</strong> Next.js and React Native for
              consistent experiences across devices.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 text-primary">✓</span>
            <span>
              <strong>AI integrations:</strong> Practical use of LLMs and
              generative AI to augment products, not overcomplicate them.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 text-primary">✓</span>
            <span>
              <strong>Clear communication:</strong> International experience,
              structured collaboration and transparent delivery.
            </span>
          </li>
        </ul>

        <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
          {about.english}
        </p>
      </div>
    </section>
  );
}
