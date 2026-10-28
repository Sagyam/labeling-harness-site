import { SectionHeading } from "@/components/SectionHeading"

const triage: [string[], string][] = [
  [["j", "k"], "Move between rows"],
  [["Space"], "Play / pause row"],
  [["Enter"], "Accept unchanged, advance"],
  [["s"], "Screen without listening"],
  [["e"], "Open in editor"],
  [["f"], "Flag unusable audio"],
  [["g"], "Add to / remove from gold"],
  [["⇧", "Enter"], "Accept selected rows"],
]

const editor: [string[], string][] = [
  [["Ctrl", "Space"], "Play / pause"],
  [["Ctrl", "Enter"], "Save and advance"],
  [["Alt", "1…5"], "Load a recogniser's transcript"],
  [["Alt", "← →"], "Seek ∓2 s"],
  [["Ctrl", "L"], "Toggle loop"],
  [["Ctrl", "T"], "Toggle transliteration"],
  [["1…5"], "Pick a Devanagari spelling"],
  [["Esc"], "Keep the Latin as typed"],
]

function Keys({ keys }: { keys: string[] }) {
  return (
    <span className="flex shrink-0 items-center gap-1">
      {keys.map((k) => (
        <kbd key={k} className="kbd">
          {k}
        </kbd>
      ))}
    </span>
  )
}

function ShortcutList({ title, rows }: { title: string; rows: [string[], string][] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-card/60 p-5">
      <h3 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">{title}</h3>
      <dl className="mt-4 divide-y divide-white/5">
        {rows.map(([keys, action]) => (
          <div key={action} className="flex items-center justify-between gap-4 py-2.5">
            <dt className="text-sm text-foreground/90">{action}</dt>
            <dd>
              <Keys keys={keys} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function KeyboardSection() {
  return (
    <section id="keyboard" className="border-y border-white/5 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Keyboard" title="Listen. Enter. Next.">
              Most clips are right, so the usual move is three keys. On a measured run the median clip took 1.7
              seconds to decide.
            </SectionHeading>
            <div className="mt-10 flex items-end gap-3 font-mono" aria-hidden="true">
              {[
                ["Space", "listen"],
                ["Enter", "accept"],
              ].map(([key, label], i) => (
                <div key={key} className="flex items-end gap-3">
                  {i > 0 && <span className="pb-9 text-muted-foreground">→</span>}
                  <div className="flex flex-col items-center gap-2">
                    <kbd className="flex h-14 min-w-14 items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 text-sm shadow-[inset_0_-3px_0_rgb(255_255_255/0.08)]">
                      {key}
                    </kbd>
                    <span className="text-xs text-muted-foreground">{label}</span>
                  </div>
                </div>
              ))}
              <span className="pb-9 text-muted-foreground">→</span>
              <div className="flex flex-col items-center gap-2">
                <span className="flex h-14 items-center rounded-lg border border-dashed border-teal/40 px-4 text-sm text-teal">
                  next clip
                </span>
                <span className="text-xs text-muted-foreground">automatic</span>
              </div>
            </div>
            <p className="mt-10 max-w-md leading-relaxed text-muted-foreground">
              In the editor, type a Nepali word in Latin and press <kbd className="kbd">Space</kbd> for Devanagari
              suggestions, ranked by your past choices.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <ShortcutList title="Triage" rows={triage} />
            <ShortcutList title="Editor" rows={editor} />
          </div>
        </div>
      </div>
    </section>
  )
}
