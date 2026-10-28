import { DatabaseZap, FileCheck2, History, Receipt, ShieldCheck } from "lucide-react"
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
    </section>
  )
}
