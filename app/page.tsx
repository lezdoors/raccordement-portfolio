import { Hero } from "@/components/sections/hero"
import { SelectedWorks } from "@/components/sections/selected-works"
import { ClientLogos } from "@/components/sections/client-logos"
import { Testimonials } from "@/components/sections/testimonials"
import { FinalCTA } from "@/components/sections/final-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWorks />
      <ClientLogos />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
