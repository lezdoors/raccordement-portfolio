import type { Metadata } from "next"
import { SelectedWorks } from "@/components/sections/selected-works"
import { FinalCTA } from "@/components/sections/final-cta"

export const metadata: Metadata = {
  title: "Our Work | Menana Digital",
  description: "See the high-converting funnels, landing pages, and digital products we've built for our clients.",
}

export default function WorksPage() {
  return (
    <>
      <section className="pt-32 pb-8">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Portfolio</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            Selected Work
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl leading-relaxed">
            Real projects, real results. Every build is engineered for conversion and optimized for growth.
          </p>
        </div>
      </section>
      <SelectedWorks />
      <FinalCTA />
    </>
  )
}
