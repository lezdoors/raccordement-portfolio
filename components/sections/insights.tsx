"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"

const insights = [
  {
    id: 1,
    title: "Why Your Landing Page Isn't Converting",
    excerpt: "The 5 conversion killers we see on every client audit, and the exact fixes that move the needle.",
    image: "/images/markeing457.jpg",
    date: "Jan 15, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Google Ads: CTR vs. Conversion Rate",
    excerpt: "A high CTR means nothing if your funnel leaks. Here's how to optimize the full journey from click to payment.",
    image: "/images/marketing567.jpg",
    date: "Dec 28, 2025",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Full-Stack Marketing: Code + Ads",
    excerpt: "Why the best marketing teams write code, and how owning your tech stack gives you an unfair advantage.",
    image: "/images/marketing666.jpg",
    date: "Nov 10, 2025",
    readTime: "6 min read",
  },
]

export function Insights() {
  return (
    <section id="insights" className="py-20 md:py-32 border-border border-t-0">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Insights
          </SectionTitle>
          <Link
            href="/insights"
            className="hidden md:inline-flex items-center gap-2 text-sm transition-colors"
            style={{ color: "#203eec" }}
          >
            View all insights
            <ArrowUpRight className="w-4 h-4" style={{ color: "#203eec" }} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {insights.map((insight) => (
            <Link key={insight.id} href="/insights" className="group block">
              <article className="h-full">
                <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-secondary mb-4">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span>{insight.date}</span>
                  <span>&bull;</span>
                  <span>{insight.readTime}</span>
                </div>

                <h3 className="text-lg font-semibold group-hover:text-muted-foreground transition-colors">
                  {insight.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{insight.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>

        <div className="md:hidden mt-8 text-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border rounded-full hover:bg-secondary transition-colors"
            style={{ color: "#203eec", borderColor: "#203eec" }}
          >
            View all insights
            <ArrowUpRight className="w-4 h-4" style={{ color: "#203eec" }} />
          </Link>
        </div>
      </div>
    </section>
  )
}
