import { DatabaseZap, FileCheck2, History, Receipt, ShieldCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/SectionHeading"

const guarantees = [
  {
    icon: History,
    title: "Nothing is overwritten",
    body: "Machine transcripts never change and labels are append-only. Every decision writes the label, the time it took and an audit row in one transaction.",
  },
  {
    icon: ShieldCheck,
    title: "A label says how hard it was looked at",
    body: "Verified means played and read; screened means accepted on the disagreement signal. Gold takes only verified labels, and only a person can put a clip in it.",
  },
  {
    icon: Receipt,
    title: "Every paid call is logged",
    body: "Vendor, cost and outcome for every model call. An interrupted ingest resumes without paying twice.",
  },
  {
    icon: FileCheck2,
    title: "Exports are reproducible",
    body: "Each ships a manifest of label version, row counts, checksums and git commit. The same inputs give byte-identical files.",
  },
  {
    icon: DatabaseZap,
    title: "The schema changes only through migrations",
    body: "Postgres is the source of truth, and every migration has a working downgrade.",
  },
]

const numbers = [
  { value: "2,500+", label: "automated tests, run against a real Postgres" },
  { value: "95", label: "design decisions on record, each with its reason and reversal cost" },
  { value: "60+", label: "API endpoints" },
  { value: "3 + 1", label: "recognisers per clip (ElevenLabs, Microsoft, Google), plus a fusion model" },
  { value: "342", label: "recordings labelled with it so far" },
]

const stack = [
  "Python 3.13",
  "FastAPI",
  "SQLAlchemy",
  "Alembic",
  "PostgreSQL",
  "React 19",
  "TypeScript",
  "Vite",
  "shadcn/ui",
  "ONNX Runtime",
  "Modal GPUs",
  "Docker Compose",
]

export function Trust() {
  return (
    <section id="trust" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading eyebrow="Built to be trusted" title="A dataset you can audit, not just use.">
        A test set is only worth what you can say about how each label was made. The harness keeps the receipts.
      </SectionHeading>
      <ul className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {guarantees.map(({ icon: Icon, title, body }) => (
          <li key={title}>
            <Icon className="size-5 text-teal" aria-hidden="true" />
            <h3 className="mt-3 font-heading font-semibold">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </li>
        ))}
      </ul>

      <div className="mt-20 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h3 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">By the numbers</h3>
          <dl className="mt-5 divide-y divide-white/5 border-y border-white/5">
            {numbers.map((n) => (
              <div key={n.label} className="flex items-baseline gap-5 py-4">
                <dt className="order-2 text-sm text-muted-foreground">{n.label}</dt>
                <dd className="order-1 w-20 shrink-0 font-heading text-2xl font-bold tracking-tight">{n.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h3 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Stack</h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <li key={tech}>
                <Badge className="h-6 bg-teal-ink px-2.5 text-teal">{tech}</Badge>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            ONNX Runtime handles forced alignment and voice prints on the CPU; speaker diarization runs on Modal GPUs.
          </p>
        </div>
      </div>
    </section>
  )
}
