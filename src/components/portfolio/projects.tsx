import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, CheckCircle2, Github, Smartphone, Sparkles, Target } from "lucide-react";
import { projects, type Project } from "@/lib/portfolio-data";
import { Reveal, Section, SectionHeading } from "./section";
import crmImg from "@/assets/crmpp.png";
import shopcoImg from "@/assets/shop.copp.png";
import nextImg from "@/assets/nextjspp.png";
import skillLinkImg from "@/assets/sss.jpg";
import reduxImg from "@/assets/rrp.png";

const images: Record<string, string> = {
  "CRM — Live Team Project": crmImg,
  "E-Commerce Web Application (SHOP.CO)": shopcoImg,
  "E-Commerce Frontend — Next.js": nextImg,
  "Skill-Link — Local Job Finding App": skillLinkImg,
  "E-Commerce Frontend — React + Redux": reduxImg,
};

const filters = ["All", "Full-Stack", "Frontend", "Team"] as const;

function Badges() {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
        <Smartphone className="h-3 w-3" /> Responsive
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand-soft px-2.5 py-1 text-[11px] font-semibold text-brand">
        <CheckCircle2 className="h-3 w-3" /> Production
      </span>
    </div>
  );
}

function Links({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      <a
        href={project.repo}
        target="_blank"
        rel="noreferrer"
        className="focus-ring inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-foreground/30"
      >
        <Github className="h-4 w-4" /> GitHub
      </a>
      {project.demo ? (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="focus-ring group inline-flex items-center gap-2 rounded-xl bg-foreground px-4 py-2 text-sm font-semibold text-background transition-all hover:-translate-y-0.5"
        >
          Live Demo
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      ) : null}
    </div>
  );
}

function FeaturedCard({ project, flip }: { project: Project; flip?: boolean }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="card-elevated grid overflow-hidden rounded-3xl lg:grid-cols-2"
    >
      <div className={`relative overflow-hidden bg-muted ${flip ? "lg:order-2" : ""}`}>
        <img
          src={images[project.title]}
          alt={`${project.title} project preview`}
          width={1200}
          height={800}
          loading="lazy"
          className="h-full min-h-56 w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">
            {project.kicker}
          </span>
        </div>
        <h3 className="text-xl font-semibold sm:text-2xl">{project.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{project.desc}</p>

        <div>
          <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5" /> Key features
          </p>
          <ul className="space-y-1.5">
            {project.features.map((f) => (
              <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="rounded-xl border border-border bg-muted/50 p-4">
          <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Target className="h-3.5 w-3.5" /> Challenge solved
          </p>
          <p className="text-sm leading-relaxed text-foreground/80">{project.challenge}</p>
        </div> */}

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-border px-2 py-1 text-[11px] font-medium text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <Badges/>
        <div className="mt-auto pt-2">
          <Links project={project} />
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -5 }}
      className="card-elevated group flex flex-col overflow-hidden rounded-2xl"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-muted">
        <img
          src={images[project.title]}
          alt={`${project.title} project preview`}
          width={1200}
          height={800}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="font-mono text-[11px] uppercase tracking-widest text-brand">
          {project.kicker}
        </span>
        <h3 className="text-base font-semibold leading-snug">{project.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
        {/* <p className="text-xs leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground/80">Challenge: </span>
          {project.challenge}
        </p> */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-border px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <Badges />
        <div className="mt-auto pt-3">
          <Links project={project} />
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const featured = projects.filter((p) => p.featured);
  const rest = useMemo(
    () => projects.filter((p) => (filter === "All" ? true : p.category === filter)),
    [filter],
  );

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Real products, real constraints, real code."
        description="Every project below is mine — built during training, in a live team lab, or in a hackathon. Source is public; demos are live where deployed."
      />
{/* 
      <div className="space-y-6">
        {featured.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.04}>
            <FeaturedCard project={p} flip={i % 2 === 1} />
          </Reveal>
        ))}
      </div> */}  

      <div className="mt-16">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h3 className="text-lg font-semibold">All projects</h3>
          <div
            role="tablist"
            aria-label="Filter projects"
            className="flex flex-wrap gap-1 rounded-xl border border-border bg-card p-1"
          >
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`focus-ring relative rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  filter === f ? "text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter === f && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-lg bg-foreground"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{f}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {rest.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        {rest.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border p-12 text-center">
            <p className="text-sm font-medium">Nothing in this category yet.</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try another filter — there's more to see.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}
