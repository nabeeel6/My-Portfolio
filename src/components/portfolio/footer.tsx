import { Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

const socials = [
  { href: profile.github, Icon: Github, label: "GitHub" },
  { href: profile.linkedin, Icon: Linkedin, label: "LinkedIn" },
  { href: profile.instagram, Icon: Instagram, label: "Instagram" },
  { href: profile.whatsapp, Icon: MessageCircle, label: "WhatsApp" },
  { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {profile.role} · {profile.location}
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring mt-2 inline-block rounded text-sm font-medium text-brand underline-offset-4 hover:underline"
          >
            {profile.email}
          </a>
        </div>

        <div className="flex flex-wrap gap-2 md:justify-end">
          {socials.map(({ href, Icon, label }) => (
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
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Muhammed Nabeel K. All rights reserved.</p>
          <p>Built with React &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
