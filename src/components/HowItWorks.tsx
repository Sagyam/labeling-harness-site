import { AudioLines, Ear, GitCompareArrows, Keyboard, ListOrdered, Timer } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/SectionHeading"

const reasons = [
  {
    icon: Timer,
    title: "Typing a transcript is slow",
    body: "Writing one from scratch takes several times as long as the audio itself.",
  },
  {
    icon: GitCompareArrows,
    title: "Recognisers are wrong where they disagree",
    body: "When three independent recognisers agree on a clip, it rarely needs fixing.",
  },
  {
    icon: Ear,
    title: "So one person checks instead of types",
    body: "Every clip arrives drafted and ranked by doubt. Listen, Enter, next.",
  },
]

export function Why() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading eyebrow="Why" title="Checking is faster than typing.">
        Built for one fast annotator and for code-switched speech: its first corpus is Nepali–English podcasts, with
        English written in Latin and Nepali in Devanagari.
      </SectionHeading>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {reasons.map(({ icon: Icon, title, body }) => (
          <Card key={title} className="bg-card/60 transition-colors hover:bg-white/[0.06] hover:ring-white/20">
            <CardHeader>
              <Icon className="size-5 text-teal" aria-hidden="true" />
              <CardTitle className="mt-3 font-heading text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{body}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

const steps = [
  {
    icon: AudioLines,
    title: "In",
    body: "An audio file or a YouTube link, cleaned up and cut into clips where the speech pauses.",
  },
  {
    icon: GitCompareArrows,
    title: "Draft",
    body: "Three cloud recognisers transcribe every clip blind to each other, and a reasoning model fuses their answers into one draft.",
  },
  {
    icon: ListOrdered,
    title: "Rank",
    body: "Clips where the recognisers disagree, or where the draft invented or dropped words, go to the top of the queue.",
  },
  {
    icon: Keyboard,
    title: "Decide",
    body: "A person accepts, fixes or flags each clip. Labels export as a versioned dataset, and fine-tuned models are scored back in the harness.",
  },
]

type Word = { w: string; odd?: boolean }
const hypotheses: { name: string; words: Word[] }[] = [
  { name: "ElevenLabs", words: [{ w: "यो" }, { w: "quarter" }, { w: "मा" }, { w: "remittance" }, { w: "बढेको" }, { w: "देखिन्छ" }] },
  { name: "Microsoft", words: [{ w: "यो" }, { w: "quarter" }, { w: "मा" }, { w: "remittance" }, { w: "बढेको" }] },
  { name: "Google", words: [{ w: "यो" }, { w: "quarter" }, { w: "मा" }, { w: "रेमिट्यान्स", odd: true }, { w: "बढेको" }, { w: "देखिन्छ" }] },
]

/** A static picture of the signal: three blind drafts, one fused line, a word in doubt. */
function DisagreementDemo() {
  return (
    <div
      className="rounded-xl border border-white/10 bg-card/80 p-4 font-mono text-xs shadow-xl shadow-black/30 sm:p-5"
      role="img"
      aria-label="Illustration: three recognisers transcribe the same clip. One writes the English word remittance in Devanagari and another drops the last word, so the fused draft is ranked to the top of the queue with the doubtful word underlined."
    >
      <div className="flex items-center justify-between gap-3 text-muted-foreground">
        <span className="truncate">bazaar-brief_ep002_0004 · 4.9 s</span>
        <span className="rounded bg-[#ef4444] px-1.5 py-0.5 font-semibold text-white">1.28</span>
      </div>
      <ul className="mt-4 space-y-2.5">
        {hypotheses.map((h) => (
          <li key={h.name} className="grid grid-cols-[5.5rem_1fr] items-baseline gap-3">
            <span className="text-muted-foreground">{h.name}</span>
            <span className="font-sans text-sm text-foreground/90">
              {h.words.map((word, i) => (
                <span key={i} className={word.odd ? "rounded bg-amber/15 px-1 text-amber" : undefined}>
                  {word.w}{" "}
                </span>
              ))}
              {h.words.length < 6 && <span className="rounded border border-dashed border-amber/50 px-1.5 text-amber/80">∅</span>}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-5 border-t border-white/10 pt-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span>fused draft</span>
          <Badge className="h-4 rounded bg-teal-ink px-1.5 font-mono text-[10px] text-teal">disagree 20%</Badge>
        </div>
        <p className="mt-2 font-sans text-lg leading-relaxed text-foreground">
          यो quarter मा <span className="doubt">remittance</span> बढेको <span className="doubt">देखिन्छ</span>।
        </p>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-muted-foreground">
        <span className="kbd">Space</span> listen
        <span className="kbd">Enter</span> accept
        <span className="kbd">e</span> edit
      </div>
    </div>
  )
}

export function HowItWorks() {
  return (
    <section id="how" className="border-y border-white/5 bg-white/[0.015]">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading eyebrow="How it works" title="One recording, end to end." />
          <ol className="mt-10 space-y-7">
            {steps.map(({ icon: Icon, title, body }, i) => (
              <li key={title} className="flex gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-teal">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading font-semibold">
                    <span className="mr-2 font-mono text-xs text-muted-foreground">0{i + 1}</span>
                    {title}
                  </h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <DisagreementDemo />
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Illustration. Where blind recognisers part ways is the signal that ranks the queue.
          </p>
        </div>
      </div>
    </section>
  )
}
