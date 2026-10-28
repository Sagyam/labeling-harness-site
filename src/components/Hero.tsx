import { ArrowRight, BookOpen, CirclePlay, Download, GitCompareArrows } from "lucide-react"
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

const flow = [
  { icon: CirclePlay, title: "Bring your audio", body: "A YouTube link or an audio file. The harness starts empty." },
  { icon: GitCompareArrows, title: "Machines draft", body: "Three recognisers transcribe each clip; their disagreement ranks the queue." },
  { icon: Download, title: "Export a dataset", body: "Verified train, val and gold splits, ready to fine-tune an ASR model." },
]

export function Hero({ poster }: { poster: string }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Logo className="size-16 drop-shadow-[0_8px_30px_rgb(28_138_132/0.35)] sm:size-20" id="hero-logo" />
          <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-teal" />A data-labelling harness for code-switched speech
          </p>
          <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-balance sm:text-6xl">
            Listen only where the <span className="text-teal">machines disagree</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
            Turn YouTube audio into a verified dataset for fine-tuning a speech-recognition model on speech that
            switches languages mid-sentence. Three recognisers draft every clip, the doubtful ones rise to the top,
            and you check them at keyboard speed.
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
            Recorded on an invented demo corpus. A fresh clone starts empty: you bring the audio.
          </figcaption>
        </figure>

        <ol className="mx-auto mt-14 grid max-w-5xl gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-3">
          {flow.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex gap-4 bg-background p-5 sm:p-6">
              <Icon className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
              <div>
                <p className="font-heading font-semibold">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
