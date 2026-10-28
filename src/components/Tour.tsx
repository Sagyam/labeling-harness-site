import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/SectionHeading"
import { guideAnchor } from "@/lib/site"
import { cn } from "@/lib/utils"

export type Shot = {
  id: string
  title: string
  body: string
  anchor: string
  src: string
  srcSet: string
  sizes: string
}

function ShotCard({ shot, featured, eager }: { shot: Shot; featured?: boolean; eager?: boolean }) {
  return (
    <a
      href={guideAnchor(shot.anchor)}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-lg"
    >
      <div className="overflow-hidden rounded-lg border border-white/10 bg-black">
        <img
          src={shot.src}
          srcSet={shot.srcSet}
          sizes={shot.sizes}
          width={1440}
          height={900}
          alt={`${shot.title}: ${shot.body}`}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="aspect-[8/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <h3 className={cn("mt-4 flex items-center font-heading font-semibold group-hover:text-primary", featured && "text-lg")}>
        {shot.title}
        <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:translate-x-px group-hover:-translate-y-px" />
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{shot.body}</p>
    </a>
  )
}

export function Tour({ featured, rest }: { featured: Shot[]; rest: Shot[] }) {
  return (
    <section id="tour" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading eyebrow="Tour" title="Every page, built around one decision.">
        Triage is where the time goes. Everything else exists to feed it, explain it, or measure what came out of it.
      </SectionHeading>
      <div className="-mx-3 mt-12 grid gap-2 md:grid-cols-2">
        {featured.map((shot) => (
          <ShotCard key={shot.id} shot={shot} featured />
        ))}
      </div>
      <div className="-mx-3 mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((shot) => (
          <ShotCard key={shot.id} shot={shot} />
        ))}
      </div>
    </section>
  )
}
