import { ArrowUpRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { SectionHeading } from "@/components/SectionHeading"
import { links } from "@/lib/site"
import { cn } from "@/lib/utils"

const corpus = [
  { value: "342", label: "recordings: podcasts, interviews, news, reels" },
  { value: "61 h", label: "labelled, over 17,000 clips" },
  { value: "1.7 s", label: "median time to decide a clip, on a measured run" },
  { value: "76%", label: "of clips accepted as drafted" },
  { value: "57 h", label: "train and val" },
  { value: "3.8 h", label: "gold test set, 966 clips, every one verified by ear, no speaker shared with training" },
]

// Folded word error on gold, from docs/nepanglish/README.md.
const before = 13.79
const after = 10.85
const scale = 16

function WerBar({ label, value, tone }: { label: string; value: number; tone: "muted" | "teal" }) {
  return (
    <div>
      <div className="flex items-baseline justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className={tone === "teal" ? "font-mono font-semibold text-teal" : "font-mono text-foreground/80"}>
          {value.toFixed(2)}%
        </span>
      </div>
      <div className="mt-2 h-2.5 rounded-full bg-white/5">
        <div
          className={tone === "teal" ? "h-full rounded-full bg-teal" : "h-full rounded-full bg-white/25"}
          style={{ width: `${(value / scale) * 100}%` }}
        />
      </div>
    </div>
  )
}

export function Research() {
  return (
    <section id="research">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading eyebrow="Case study: Nepanglish" title="Nepali sentences full of English words.">
            What one person built with the harness: a Nepali–English corpus collected from YouTube, which no
            off-the-shelf recogniser writes reliably. English in Latin, Nepali in Devanagari, switching
            mid-sentence.
          </SectionHeading>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6">
            {corpus.map((c) => (
              <div key={c.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-sm text-muted-foreground">{c.label}</dt>
                <dd className="font-heading text-2xl font-bold tracking-tight">{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="rounded-xl border border-white/10 bg-card/60 p-6 sm:p-8">
          <h3 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Word error on gold</h3>
          <p className="mt-3 font-heading text-xl font-semibold text-balance">
            Fine-tuning a 1.2B-parameter model on the labels cut word error by about a fifth.
          </p>
          <div className="mt-8 space-y-5">
            <WerBar label="Indic-Transcribe-Flex, as released" value={before} tone="muted" />
            <WerBar label="Fine-tuned on the harness's labels" value={after} tone="teal" />
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            That model then labelled 79.5 hours of unlabelled audio as a teacher for seven student models. Crosstalk
            is what is left: about 6.5% word error on clean clips, 29% where voices overlap most.
          </p>
          <a
            href={links.research}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "link" }), "mt-4 px-0")}
          >
            Read the research
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  )
}
