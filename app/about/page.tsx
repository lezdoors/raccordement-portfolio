import type { Metadata } from "next"
import { About } from "@/components/sections/about"
import { Awards } from "@/components/sections/awards"
import { Testimonials } from "@/components/sections/testimonials"
import { FinalCTA } from "@/components/sections/final-cta"

export const metadata: Metadata = {
  title: "About | Menana Digital",
  description: "Performance marketing meets full-stack engineering. Learn about our expertise, milestones, and what clients say.",
}

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-8">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">About Us</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            Performance Marketing Meets Engineering
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl leading-relaxed">
            We combine deep technical expertise with battle-tested paid media strategies to deliver measurable ROI.
          </p>
        </div>
      </section>
      <About />
      <Awards />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
