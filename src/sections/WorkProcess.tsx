// src/sections/WorkProcess.tsx
import generalInfo from "@/data/data";

const workProcess = generalInfo.workProcess as string;

export function WorkProcess() {
  return (
    <section
      id="process"
      className="border-b border-border/60 bg-linear-to-b from-background/95 via-background to-background/95 py-20 md:py-24"
    >
      <div className="mb-8 space-y-3 text-center">
        <p className="mx-auto max-w-md text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Process
        </p>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          A clear, collaborative way of working.
        </h2>
      </div>

      <div className="mx-auto max-w-3xl rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm backdrop-blur md:p-8">
        <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground md:text-base">
          {workProcess}
        </p>
      </div>
    </section>
  );
}
