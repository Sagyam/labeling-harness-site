import { GithubIcon, Logo } from "@/components/Logo"
import { links, site } from "@/lib/site"

const docs = [
  { href: links.guide, label: "Guide" },
  { href: links.operations, label: "Operations" },
  { href: links.architecture, label: "Architecture" },
  { href: links.decisions, label: "Decisions" },
  { href: links.research, label: "Research" },
]

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <a href="#top" className="flex items-center gap-2.5 font-heading font-bold tracking-tight">
            <Logo className="size-7" id="footer-logo" />
            {site.name}
          </a>
          <p className="mt-3 text-sm text-muted-foreground">{site.tagline}</p>
          <p className="mt-6 text-sm text-muted-foreground">
            Built by{" "}
            <a href={links.author} className="font-medium text-foreground hover:text-primary">
              Sagyam Thapa
            </a>
            .
          </p>
        </div>
        <nav aria-label="Documentation" className="flex flex-col gap-3 text-sm">
          <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Docs</span>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {docs.map((d) => (
              <li key={d.label}>
                <a href={d.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  {d.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
              >
                <GithubIcon className="size-3.5" />
                Source
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
