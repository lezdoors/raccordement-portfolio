import type { Metadata } from "next"
import { Insights } from "@/components/sections/insights"
import { FinalCTA } from "@/components/sections/final-cta"

export const metadata: Metadata = {
  title: "Insights | Menana Digital",
  description: "Articles on conversion optimization, Google Ads strategy, and full-stack marketing.",
}

export default function InsightsPage() {
  return (
    <>
      <section className="pt-32 pb-8">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Blog</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            Insights
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl leading-relaxed">
            Practical takes on conversion optimization, paid ads, and building digital products that grow revenue.
          </p>
        </div>
      </section>
      <Insights />
      <FinalCTA />
    </>
  )
}
