// src/sections/WorkProcess.tsx
import generalInfo from "@/data/data";

const workProcess = generalInfo.workProcess as string;

export function WorkProcess() {
  return (
    <section className="border-b bg-muted/50">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="mb-4 text-2xl font-semibold">Work Process</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
          {workProcess}
        </p>
      </div>
    </section>
  );
}
