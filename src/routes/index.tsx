import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Experience, EducationAndCerts } from "@/components/portfolio/experience";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { ScrollProgress, ScrollToTop } from "@/components/portfolio/scroll-ui";

const title = "Muhammed Nabeel K — Fullstack Developer (React, Next.js, Django)";
const description =
  "Fullstack developer in Kannur, Kerala building production-ready React, Next.js and Django applications. See projects, live demos, resume and contact.";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Muhammed Nabeel K",
          jobTitle: "Fullstack Developer",
          email: "mailto:muhammednabeel450@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kannur",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
          sameAs: [
            "https://github.com/nabeeel6",
            "https://www.linkedin.com/in/muhammed-nabeel-322b89362/",
          ],
          knowsAbout: ["React", "Next.js", "Redux", "Django", "Python", "PostgreSQL", "MySQL"],
        }),
      },
    ],
  }),
});

function Portfolio() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <EducationAndCerts />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
}
