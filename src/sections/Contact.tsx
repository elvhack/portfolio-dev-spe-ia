// src/sections/Contact.tsx
import generalInfo from "@/data/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contact = generalInfo.contact;

export function Contact() {
  return (
    <section id="contact" className="border-b bg-muted/50">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="mb-6 text-2xl font-semibold">Contact</h2>

        <div className="grid gap-10 md:grid-cols-[2fr,1.5fr]">
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Input placeholder="Your name" required />
              <Input type="email" placeholder="Your email" required />
            </div>
            <Input placeholder="Subject" required />
            <Textarea placeholder="Tell me about your project..." rows={5} />
            <Button type="submit">Send message</Button>
          </form>

          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              Email:{" "}
              <a
                href={`mailto:${contact.email}`}
                className="text-primary underline"
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
                className="text-primary underline"
              >
                {contact.linkedIn}
              </a>
            </p>
            <p>WhatsApp: {contact.whatsapp}</p>
            {contact.note && <p className="mt-4">{contact.note}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
