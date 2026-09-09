import { motion } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile, stats } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-36 md:pt-44">
      <div aria-hidden className="grid-backdrop pointer-events-none absolute inset-0 -z-10" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[880px] max-w-[130vw] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, var(--brand-soft), transparent 65%)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 pb-16 sm:px-8 md:pb-24 lg:grid-cols-[1.25fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Available for full-time Fullstack roles
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[2.6rem] font-semibold leading-[1.02] sm:text-6xl lg:text-7xl"
          >
            <span className="brand-gradient-text">Muhammed Nabeel K</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-4 font-mono text-sm font-medium uppercase tracking-[0.14em] text-brand sm:text-base"
          >
            {profile.role} — {profile.stack}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 max-w-xl border-l-2 border-brand pl-4 text-sm leading-relaxed text-foreground/80"
          >
            {profile.valueProp}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="focus-ring group inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-lg"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href={profile.resume}
              download="Muhammed-Nabeel-K-Resume.pdf"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent"
            >
              <Download className="h-4 w-4" /> Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="focus-ring inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-brand underline-offset-4 hover:underline"
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.46 }}
            className="mt-8 flex flex-wrap items-center gap-4 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              {[
                { href: profile.github, Icon: Github, label: "GitHub" },
                { href: profile.linkedin, Icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="focus-ring grid h-10 w-10 place-items-center rounded-xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm">
              <MapPin className="h-4 w-4 shrink-0" /> {profile.location}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="card-elevated relative overflow-hidden rounded-3xl p-2">
            <img
              src={profile.photo}
              alt="Portrait of Muhammed Nabeel K, Fullstack Developer"
              width={900}
              height={1125}
              loading="eager"
              className="aspect-[4/5] w-full rounded-[1.25rem] object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-2 rounded-[1.25rem] ring-1 ring-inset ring-black/5" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="card-elevated absolute -bottom-5 -left-4 hidden rounded-2xl px-4 py-3 sm:block"
          >
            <p className="font-mono text-xs text-muted-foreground">Currently</p>
            <p className="text-sm font-semibold">Building Products</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-card px-5 py-6"
            >
              <dt className="order-2 mt-1 text-xs text-muted-foreground">{s.label}</dt>
              <dd className="font-display text-2xl font-semibold sm:text-3xl">{s.value}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
