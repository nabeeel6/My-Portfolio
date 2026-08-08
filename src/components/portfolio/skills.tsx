import { motion } from "motion/react";
import { Code2, Database, Layout, Rocket, Server, Wrench } from "lucide-react";
import { skillGroups } from "@/lib/portfolio-data";
import { Reveal, Section, SectionHeading } from "./section";

const icons = { Layout, Server, Code2, Database, Wrench, Rocket } as const;

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="The stack I build with, end to end."
        description="Frontend interfaces, Django REST backends, relational databases, and the tooling that keeps a team shipping."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon as keyof typeof icons];
          return (
            <Reveal key={group.category} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className="card-elevated group relative h-full overflow-hidden rounded-2xl p-6"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-soft opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-background text-brand transition-colors group-hover:border-brand/40">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="text-base font-semibold">{group.category}</h3>
                </div>
                <ul className="relative mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
