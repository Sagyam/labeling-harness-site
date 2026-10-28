import type { ReactNode } from "react"
import { ArrowDown, ArrowDownUp, ArrowLeftRight, ArrowRight, FileAudio, GitBranch, Keyboard, Package } from "lucide-react"
import type { SimpleIcon } from "simple-icons"
import {
  siApacheparquet,
  siDocker,
  siDuckdb,
  siElevenlabs,
  siFastapi,
  siFfmpeg,
  siGooglecloud,
  siModal,
  siMinio,
  siOnnx,
  siOpenrouter,
  siPostgresql,
  siPython,
  siPytorch,
  siReact,
  siShadcnui,
  siSqlalchemy,
  siTailwindcss,
  siTypescript,
  siVite,
  siYoutube,
} from "simple-icons"
import { SectionHeading } from "@/components/SectionHeading"
import { cn } from "@/lib/utils"

/**
 * A brand mark in its own colour. Mid-tone colours are lifted towards white to read on navy, and
 * near-black ones take the foreground colour.
 */
function Brand({ icon, className }: { icon: SimpleIcon; className?: string }) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(icon.hex.slice(i, i + 2), 16) / 255)
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
  const fill =
    luminance < 0.15 ? "currentColor" : luminance < 0.5 ? `color-mix(in oklab, #${icon.hex} 70%, white)` : `#${icon.hex}`
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label={icon.title}
      className={cn("size-4 shrink-0", className)}
      style={{ fill }}
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  )
}

/** A technology chip: its mark and its name. */
function Tech({ icon, name, glyph }: { icon?: SimpleIcon; name: string; glyph?: ReactNode }) {
  return (
    <li className="inline-flex h-7 items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-2 text-xs text-foreground/90">
      {icon ? <Brand icon={icon} /> : glyph}
      {name}
    </li>
  )
}

function Node({
  title,
  note,
  children,
  accent,
  className,
}: {
  title: string
  note: string
  children: ReactNode
  accent?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card/90 p-4",
        accent ? "border-teal/40 shadow-[0_0_0_1px_rgb(93_231_211/0.08),0_10px_40px_-12px_rgb(93_231_211/0.25)]" : "border-white/10",
        className,
      )}
    >
      <h3 className="font-heading text-sm font-semibold">{title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{note}</p>
      <ul className="mt-3 flex flex-wrap gap-1.5">{children}</ul>
    </div>
  )
}

/** An arrow between columns: across on wide screens, down when the columns stack. */
function Flow({ label, both, className }: { label: string; both?: boolean; className?: string }) {
  const [Down, Across] = both ? [ArrowDownUp, ArrowLeftRight] : [ArrowDown, ArrowRight]
  return (
    <div className={cn("flex items-center justify-center gap-2 py-1 text-teal/80 lg:flex-col lg:py-0", className)} aria-hidden="true">
      <Down className="size-4 lg:hidden" />
      <Across className="hidden size-4 lg:block" />
      <span className="font-mono text-[10px] tracking-wide text-muted-foreground uppercase lg:[writing-mode:vertical-rl]">
        {label}
      </span>
    </div>
  )
}

function Column({ label, children, className }: { label: string; children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <p className="text-[11px] font-bold tracking-widest text-muted-foreground uppercase">{label}</p>
      {children}
    </div>
  )
}

export function Architecture() {
  return (
    <section id="architecture" className="border-y border-white/5 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading eyebrow="Architecture" title="Your data stays local. Only clips go to the cloud.">
          Everything that holds your data runs locally under Docker Compose. Only audio clips leave it, to the
          recognisers and the diarizer, and every one of those calls is logged with its cost.
        </SectionHeading>

        <div
          className="mt-12 grid gap-3 lg:grid-cols-[minmax(0,11rem)_2rem_minmax(0,1fr)_2rem_minmax(0,15rem)] lg:items-stretch"
          role="group"
          aria-label="Architecture diagram"
        >
          <Column label="In and out">
            <Node title="You" note="Paste a link or drop a file, then decide clip by clip from the keyboard.">
              <Tech icon={siYoutube} name="YouTube link" />
              <Tech name="Audio file" glyph={<FileAudio className="size-4 text-muted-foreground" />} />
              <Tech name="Keyboard" glyph={<Keyboard className="size-4 text-muted-foreground" />} />
            </Node>
            <Node title="Dataset export" note="Train, val and gold with a checksummed manifest, ready to fine-tune on.">
              <Tech name="JSONL + FLAC" glyph={<Package className="size-4 text-muted-foreground" />} />
            </Node>
          </Column>

          <Flow label="browser" both />

          <div className="relative rounded-2xl border border-dashed border-white/15 p-3 pt-9 sm:p-4 sm:pt-10">
            <p className="absolute top-3 left-4 flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
              <Brand icon={siDocker} className="size-3.5" />
              docker compose up
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <Node title="Web app" note="Triage, the editor and every page of the tour. Served on :5173.">
                <Tech icon={siReact} name="React" />
                <Tech icon={siTypescript} name="TypeScript" />
                <Tech icon={siVite} name="Vite" />
                <Tech icon={siTailwindcss} name="Tailwind" />
                <Tech icon={siShadcnui} name="shadcn/ui" />
              </Node>
              <Node
                accent
                title="API and ingest pipeline"
                note="Fetches and cleans audio, cuts clips at pauses, aligns words and fingerprints voices on the CPU."
              >
                <Tech icon={siPython} name="Python" />
                <Tech icon={siFastapi} name="FastAPI" />
                <Tech icon={siSqlalchemy} name="SQLAlchemy" />
                <Tech name="Alembic" glyph={<GitBranch className="size-4 text-muted-foreground" />} />
                <Tech icon={siFfmpeg} name="FFmpeg" />
                <Tech name="yt-dlp" glyph={<ArrowDown className="size-4 text-muted-foreground" />} />
                <Tech icon={siOnnx} name="ONNX Runtime" />
              </Node>
              <Node title="Source of truth" note="Episodes, transcripts, append-only labels, the audit log and every paid call.">
                <Tech icon={siPostgresql} name="PostgreSQL" />
              </Node>
              <Node title="Object storage" note="Clips and waveform peaks, streamed to the editor with range requests.">
                <Tech icon={siMinio} name="MinIO" />
              </Node>
              <Node title="Error mining" note="Every aligned word pair of a model's run, queried per request.">
                <Tech icon={siDuckdb} name="DuckDB" />
                <Tech icon={siApacheparquet} name="Parquet" />
              </Node>
              <Node title="Playground" note="Runs your fine-tuned model on the CPU against a recording from the microphone.">
                <Tech icon={siPytorch} name="PyTorch" />
              </Node>
            </div>
          </div>

          <Flow label="paid · logged" />

          <Column label="Cloud">
            <Node title="Recogniser 1" note="Hears only the audio.">
              <Tech icon={siElevenlabs} name="ElevenLabs Scribe" />
            </Node>
            <Node title="Recogniser 2" note="Microsoft MAI-Transcribe, routed through OpenRouter.">
              <Tech icon={siOpenrouter} name="OpenRouter" />
            </Node>
            <Node title="Recogniser 3 and fusion" note="Gemini transcribes, then fuses the three drafts into one.">
              <Tech icon={siGooglecloud} name="Vertex AI" />
            </Node>
            <Node title="Diarization" note="Who spoke when, per recording, on a GPU.">
              <Tech icon={siModal} name="Modal" />
            </Node>
          </Column>
        </div>
      </div>
    </section>
  )
}
