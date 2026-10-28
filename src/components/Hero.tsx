import { ArrowRight, BookOpen } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { GithubIcon, Logo } from "@/components/Logo"
import { cn } from "@/lib/utils"
import { links, nav, site } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 font-heading font-bold tracking-tight">
          <Logo className="size-7" id="nav-logo" />
          {site.name}
        </a>
        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-muted-foreground">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={links.repo}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          <GithubIcon />
          GitHub
        </a>
      </div>
    </header>
  )
}

const stats = [
  { value: "1.7 s", label: "median time to decide a clip" },
  { value: "76%", label: "of clips accepted as drafted" },
  { value: "61 h", label: "of speech labelled with it" },
  { value: "17,000+", label: "clips verified or screened" },
]

export function Hero({ poster }: { poster: string }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Logo className="size-16 drop-shadow-[0_8px_30px_rgb(28_138_132/0.35)] sm:size-20" id="hero-logo" />
          <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-teal" />A workbench for speech-recognition datasets
          </p>
          <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-balance sm:text-6xl">
            Listen only where the <span className="text-teal">machines disagree</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
            Labeling Harness turns hours of recorded speech into a verified dataset. Three recognisers draft every
            clip, the doubtful ones rise to the top, and one person checks them at keyboard speed.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "px-4")}
            >
              <GithubIcon />
              View on GitHub
            </a>
            <a
              href={links.guide}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-4")}
            >
              <BookOpen />
              Read the guide
              <ArrowRight className="transition-transform group-hover/button:translate-x-0.5" />
            </a>
          </div>
        </div>

        <figure className="relative mx-auto mt-16 max-w-5xl">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-card shadow-2xl shadow-black/50 ring-1 ring-white/5">
            <div className="flex h-9 items-center gap-2 border-b border-white/5 bg-white/[0.03] px-4">
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="ml-3 truncate font-mono text-[11px] text-muted-foreground">localhost:5173 · editor</span>
            </div>
            <video
              className="block aspect-[8/5] w-full bg-black"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={poster}
              width={960}
              height={600}
              aria-label="The editor plays a clip; missing Nepali words are typed in Latin and picked from Devanagari spellings; then triage, ingest, corpus analytics, voices, models and export."
            >
              <source src="/hero.webm" type="video/webm" />
              <source src="/hero.mp4" type="video/mp4" />
            </video>
          </div>
          <figcaption className="mt-3 text-center text-xs text-muted-foreground">
            Recorded on an invented demo corpus. No real recordings appear on this page.
          </figcaption>
        </figure>

        <dl className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse bg-background p-5 sm:p-6">
              <dt className="mt-1 text-sm text-muted-foreground">{s.label}</dt>
              <dd className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
