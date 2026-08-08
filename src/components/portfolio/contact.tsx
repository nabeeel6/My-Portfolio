import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AlertCircle, CheckCircle2, Github, Linkedin, Loader2, Mail, MapPin, Send } from "lucide-react";
import { FORMSPREE_ENDPOINT, profile } from "@/lib/portfolio-data";
import { Reveal, Section, SectionHeading } from "./section";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot spam protection
    if ((data.get("_gotcha") as string)?.length) return;

    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    const nextErrors: Record<string, string> = {};
    if (!name || name.length < 2) nextErrors['name'] = "Please enter your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors['email'] = "Please enter a valid email address.";
    if (!message || message.length < 10)
      nextErrors['message'] = "Tell me a little more (at least 10 characters).";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field =
    "focus-ring w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand";

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk about your team's next hire."
        description="I'm open to fullstack, frontend and Django roles — and I reply to every message."
      />

      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="space-y-3">
            {[
              { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { Icon: Github, label: "GitHub", value: "github.com/nabeeel6", href: profile.github },
              {
                Icon: Linkedin,
                label: "LinkedIn",
                value: "Muhammed Nabeel K",
                href: profile.linkedin,
              },
            ].map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="card-elevated focus-ring flex items-center gap-4 rounded-2xl p-4 transition-all hover:-translate-y-0.5 hover:border-brand/40"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-background text-brand">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">{label}</span>
                  <span className="block truncate text-sm font-semibold">{value}</span>
                </span>
              </a>
            ))}
            <div className="flex items-center gap-4 rounded-2xl border border-dashed border-border p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-muted-foreground">
                <MapPin className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">Based in</span>
                <span className="block text-sm font-semibold">{profile.location}</span>
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={onSubmit} noValidate className="card-elevated rounded-2xl p-6 sm:p-8">
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input id="name" name="name" className={field} placeholder="Your name" />
                {errors['name'] && <p className="mt-1.5 text-xs text-destructive">{errors['name']}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={field}
                  placeholder="you@company.com"
                />
                {errors['email'] && <p className="mt-1.5 text-xs text-destructive">{errors['email']}</p>}
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                className={field}
                placeholder="Fullstack Developer role"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={`${field} resize-y`}
                placeholder="Tell me about the role, team and stack…"
              />
              {errors['message'] && (
                <p className="mt-1.5 text-xs text-destructive">{errors['message']}</p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ y: status === "loading" ? 0 : -2 }}
              whileTap={{ scale: 0.98 }}
              className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity disabled:opacity-70 sm:w-auto"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send message
                </>
              )}
            </motion.button>

            <AnimatePresence>
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="status"
                  className="mt-4 flex items-center gap-2 rounded-xl border border-brand/30 bg-brand-soft px-4 py-3 text-sm font-medium text-brand"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0" /> Thanks — your message is on its
                  way. I'll get back to you shortly.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="alert"
                  className="mt-4 flex items-center gap-2 rounded-xl border border-destructive/30 px-4 py-3 text-sm font-medium text-destructive"
                >
                  <AlertCircle className="h-4 w-4 shrink-0" /> Something went wrong. Please email
                  me directly at {profile.email}.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
