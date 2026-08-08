import { Reveal, Section, SectionHeading } from "./section";
import { Braces, GraduationCap, ShieldCheck, Sparkles, Users } from "lucide-react";

const pillars = [
  {
    icon: Braces,
    title: "Production-ready development",
    body: "I write component-driven React and Django REST code that ships — CRUD flows, auth, integrated APIs, and databases that hold up under real data.",
  },
  {
    icon: Sparkles,
    title: "Frontend as a craft",
    body: "Interfaces are where I go deepest: layout, spacing, responsiveness and the small interactions that make a product feel finished.",
  },
  {
    icon: ShieldCheck,
    title: "Problem solving",
    body: "I look for the structural fix rather than the quick patch.",
  },
  {
    icon: Users,
    title: "Team collaboration",
    body: "a live team CRM shipped with industry workflows(Ticket management module) , and a hackathon product designed and built in days with a team.",
  },
  {
    icon: GraduationCap,
    title: "Continuous learning",
    body: "Currently upskilling with NxtWave CCBP 4.0 Academy and a BCA at IGNOU — sharpening DSA, fundamentals and modern full-stack tooling.",
  },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="An engineer who cares about what ships, not just what compiles."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm <span className="font-semibold text-foreground">Muhammed Nabeel K</span>, a
              fullstack developer from Kannur, Kerala. My route into engineering wasn't a
              tutorial playlist — it was six intensive months at UPCODE Software Labs, building
              alongside a team on a live CRM used in real development workflows.
            </p>
            <p>
              That's where I learned the difference between code that runs and code a team can
              live with.
            </p>
            <p>
              Frontend is where I'm happiest — React, Next.js and Redux — but I own the whole
              path, from a Django REST endpoint and a PostgreSQL schema to the button a user
              actually clicks. My goal is a fullstack role on a product team where I can ship
              features end to end and keep levelling up beside stronger engineers.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="card-elevated group h-full rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40">
                <p.icon className="h-5 w-5 text-brand" />
                <h3 className="mt-3 text-sm font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
