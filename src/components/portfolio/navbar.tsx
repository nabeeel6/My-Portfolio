import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { profile, sections } from "@/lib/portfolio-data";
import { useActiveSection, useTheme } from "@/lib/portfolio-hooks";

const ids = sections.map((s) => s.id);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  const { theme, toggle } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <nav
        aria-label="Primary"
        className="glass-panel mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border px-3 py-2.5 sm:px-4"
      >
        <a
          href="#home"
          className="focus-ring flex min-w-0 items-center gap-2.5 rounded-lg font-display text-sm font-semibold"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-foreground text-[13px] font-bold text-background">
            N
          </span>
          <span className="truncate">Muhammed Nabeel k</span>
        </a>

        <div className="flex items-center gap-1.5">
          <ul className="mr-1 hidden items-center lg:flex">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="focus-ring relative block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  aria-current={active === s.id ? "true" : undefined}
                >
                  {active === s.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-accent"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span
                    className={`relative ${active === s.id ? "text-foreground" : ""}`}
                  >
                    {s.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="focus-ring grid h-9 w-9 place-items-center rounded-lg border border-border text-foreground transition-colors hover:bg-accent"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          
          <a
  href={profile.resume}
  target="_blank"
  rel="noopener noreferrer"
  className="focus-ring hidden items-center gap-2 rounded-lg bg-foreground px-3.5 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90 sm:inline-flex"
>
  View Resume
</a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="focus-ring grid h-9 w-9 place-items-center rounded-lg border border-border lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-2 overflow-hidden lg:hidden"
            >
              <ul className="grid gap-0.5 border-t border-border pt-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      onClick={() => setOpen(false)}
                      className={`focus-ring block rounded-lg px-3 py-2.5 text-sm font-medium ${
                        active === s.id
                          ? "bg-accent text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
                <li className="pt-1 sm:hidden">
                  <a
                    href={profile.resume}
                    target="_blank"
rel="noopener noreferrer"
                    className="focus-ring flex items-center justify-center gap-2 rounded-lg bg-foreground px-3.5 py-2.5 text-sm font-semibold text-background"
                  >
                     View Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
