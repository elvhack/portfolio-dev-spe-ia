// src/sections/Contact.tsx
import generalInfo from "@/data/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contact = generalInfo.contact;

export function Contact() {
  return (
    <section
      id="contact"
      className="border-b border-border/60 bg-background/95 py-20 md:py-24"
    >
      <div className="mb-12 space-y-3 text-center">
        <p className="mx-auto max-w-md text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Contact
        </p>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Let&apos;s talk about your next project.
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
          Tell me a bit about what you&apos;re building and I&apos;ll get back
          to you with ideas, scope and next steps.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[2fr,1.5fr]">
        <form className="space-y-4 rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm backdrop-blur">
          <div className="grid gap-4 md:grid-cols-2">
            <Input placeholder="Your name" required />
            <Input type="email" placeholder="Your email" required />
          </div>
          <Input placeholder="Subject" required />
          <Textarea placeholder="Tell me about your project..." rows={5} />
          <Button type="submit" className="w-full md:w-auto">
            Send message
          </Button>
        </form>

        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="rounded-2xl border border-border/60 bg-card/80 p-5 shadow-sm backdrop-blur">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Direct links
            </p>
            <p>
              Email:{" "}
              <a
                href={`mailto:${contact.email}`}
                className="font-medium text-primary underline underline-offset-4"
              >
                {contact.email}
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href={`https://${contact.linkedIn}`}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary underline underline-offset-4"
              >
                {contact.linkedIn}
              </a>
            </p>
            <p>WhatsApp: {contact.whatsapp}</p>
            {contact.note && (
              <p className="mt-4 text-xs leading-relaxed">{contact.note}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
