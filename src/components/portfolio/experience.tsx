import { motion } from "motion/react";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import { certifications, education, experience } from "@/lib/portfolio-data";
import { Reveal, Section, SectionHeading } from "./section";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I learned to build like a professional."
      />

      <ol className="relative space-y-10 border-l border-border pl-6 sm:pl-10">
        {experience.map((item, i) => (
          <li key={item.role} className="relative">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="absolute -left-[31px] top-1.5 grid h-6 w-6 place-items-center rounded-full border border-border bg-card sm:-left-[51px]"
            >
              <Briefcase className="h-3 w-3 text-brand" />
            </motion.span>
            <Reveal delay={i * 0.05}>
              <div className="card-elevated rounded-2xl p-6 transition-colors hover:border-brand/40">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    <p className="mt-0.5 text-sm text-brand">{item.company}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                    {item.date}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function EducationAndCerts() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Education & Certifications" title="Credentials and continuous learning." />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <GraduationCap className="h-4 w-4 text-brand" /> Education
          </h3>
          <div className="space-y-4">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="card-elevated rounded-2xl p-6 transition-colors hover:border-brand/40"
                >
                  <span className="font-mono text-[11px] uppercase tracking-widest text-brand">
                    {e.date}
                  </span>
                  <h4 className="mt-2 text-base font-semibold">{e.degree}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <Award className="h-4 w-4 text-brand" /> Certifications
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="card-elevated group flex h-full flex-col gap-3 rounded-2xl p-5 transition-colors hover:border-brand/40"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-brand/25 bg-brand-soft text-sm font-bold text-brand">
                    {c.initials}
                  </span>
                  <h4 className="text-sm font-semibold leading-snug">{c.name}</h4>
                  <p className="mt-auto text-xs text-muted-foreground">{c.issuer}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
