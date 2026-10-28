import type { ReactNode } from "react"

/** The section label of sagyamthapa.com.np: a rule and an uppercase, widely tracked word. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-x-3 text-xs font-bold tracking-widest text-muted-foreground uppercase">
      <span className="h-px w-8 bg-muted-foreground" />
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
}) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">{children}</p>}
    </div>
  )
}
