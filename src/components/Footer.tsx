import { Monitor, Moon, Sun } from "lucide-react"
import { GithubIcon, Logo } from "@/components/Logo"
import { links, site } from "@/lib/site"

const docs = [
  { href: links.guide, label: "Guide" },
  { href: links.operations, label: "Operations" },
  { href: links.architecture, label: "Architecture" },
  { href: links.decisions, label: "Decisions" },
  { href: links.research, label: "Research" },
]

const themes = [
  { value: "system", label: "System", icon: Monitor },
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
]

/** Static markup; `initThemeSwitch` in lib/theme.ts makes it work and marks the current choice. */
function ThemeSwitch() {
  return (
    <div role="group" aria-label="Theme" className="inline-flex rounded-lg border border-edge/10 bg-edge/[0.03] p-0.5">
      {themes.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          type="button"
          data-theme-choice={value}
          aria-pressed={value === "system"}
          title={label}
          className="inline-flex h-7 items-center gap-1.5 rounded-md px-2.5 text-xs text-muted-foreground transition-colors hover:text-foreground aria-pressed:bg-background aria-pressed:text-foreground aria-pressed:shadow-sm aria-pressed:ring-1 aria-pressed:ring-edge/10"
        >
          <Icon className="size-3.5" aria-hidden="true" />
          {label}
        </button>
      ))}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-edge/5">
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
      <div className="border-t border-edge/5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6">
          <p className="text-xs text-muted-foreground">Screenshots show an invented demo corpus.</p>
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
