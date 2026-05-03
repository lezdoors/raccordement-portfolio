"use client"

const skills = [
  "Google Ads",
  "Landing Pages",
  "Conversion Optimization",
  "Next.js / React",
  "Stripe Integration",
  "SEO & Analytics",
  "Funnel Design",
  "A/B Testing",
  "Paid Media Strategy",
]

const stats = [
  { value: "6+", label: "Products Shipped" },
  { value: "45%", label: "Avg. Profit Margin" },
  { value: "19%", label: "Google Ads CTR" },
]

import { SectionTitle } from "@/components/ui/section-title"

export function About() {
  return (
    <section id="about" className="py-20 border-border border-t-0 md:py-10 md:pb-32 md:pt-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
              Performance Marketing Meets Full-Stack Engineering
            </SectionTitle>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We combine deep technical expertise with battle-tested paid media strategies. Every landing page
              we build is engineered for conversion, every ad campaign optimized for ROI.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From Supabase backends to Stripe payment flows, from Google Ads bid strategies to Core Web
              Vitals optimization &mdash; we own the full stack so nothing gets lost in translation.
            </p>
          </div>

          {/* Right Content */}
          <div>
            {/* Skills */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium border border-border rounded-full hover:bg-secondary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-secondary rounded-2xl">
                  <div className="text-2xl md:text-3xl font-semibold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
