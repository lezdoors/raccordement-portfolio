"use client"

import { useState } from "react"
import Image from "next/image"
import { SectionTitle } from "@/components/ui/section-title"

const testimonials = [
  {
    id: 1,
    quote:
      "They built our entire funnel from scratch and our cost per acquisition dropped by 40% in the first month. The landing page converts like nothing we've seen before.",
    author: "Sarah Chen",
    role: "CEO at TechStart",
    avatar: "/images/imgi_97_user77.webp",
    company: "TechStart",
    blurColor: "bg-blue-500",
  },
  {
    id: 2,
    quote:
      "Incredible work integrating Stripe payments with our lead flow. They understand both the technical side and the business metrics that actually matter.",
    author: "Marcus Johnson",
    role: "Product Lead at ScaleUp",
    avatar: "/images/imgi_106_user86.webp",
    company: "ScaleUp",
    blurColor: "bg-purple-500",
  },
  {
    id: 3,
    quote:
      "Our Google Ads CTR went from 8% to 19% after they restructured our campaigns. The tracking setup finally shows us real conversion data.",
    author: "Emily Rodriguez",
    role: "Marketing Director",
    avatar: "/images/imgi_105_user85.webp",
    company: "GrowthCo",
    blurColor: "bg-pink-500",
  },
  {
    id: 4,
    quote:
      "Working with a team that handles both the code and the ads is a game-changer. No more lost conversions between dev and marketing handoffs.",
    author: "David Park",
    role: "CTO at FinServe",
    avatar: "/images/imgi_102_user82.webp",
    company: "FinServe",
    blurColor: "bg-emerald-500",
  },
  {
    id: 5,
    quote:
      "They took our Bing Ads campaign from zero to profitable in under two weeks. The ROI speaks for itself - 3.5x better than our previous agency.",
    author: "Lisa Wang",
    role: "VP Growth at MediaHouse",
    avatar: "/images/imgi_100_user80.webp",
    company: "MediaHouse",
    blurColor: "bg-orange-500",
  },
  {
    id: 6,
    quote:
      "The performance optimization alone was worth it. Our mobile Core Web Vitals went green and conversions jumped 25% overnight.",
    author: "James Mitchell",
    role: "Director at Commerce+",
    avatar: "/images/imgi_107_user87.webp",
    company: "Commerce+",
    blurColor: "bg-cyan-500",
  },
  {
    id: 7,
    quote:
      "From concept to App Store in record time. They built our iOS app and handled the entire submission process. Five stars.",
    author: "Nina Patel",
    role: "CEO at AppVenture",
    avatar: "/images/imgi_108_user88.webp",
    company: "AppVenture",
    blurColor: "bg-rose-500",
  },
]

export function Testimonials() {
  const [isPaused, setIsPaused] = useState(false)

  const duplicatedTestimonials = [...testimonials, ...testimonials]
  const duplicatedTestimonialsReverse = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()]
  const mobileTestimonials = testimonials.slice(0, 6)

  return (
    <section id="testimonials" className="py-20 border-border overflow-hidden md:py-32 border-t-[0] pb-0 relative">
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-20 hidden lg:block" />

      <div className="hidden lg:block pl-6 md:pl-12">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 max-w-[1280px]">
          <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            What clients say
          </SectionTitle>
        </div>

        <div className="relative mb-6">
          <div
            className="flex gap-6 animate-scroll-left"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.id}-${index}`}
                className="relative flex-shrink-0 w-[85vw] md:w-[400px] p-6 md:p-8 border bg-card hover:shadow-lg transition-shadow overflow-hidden border-zinc-100 md:px-6 md:py-6 rounded-3xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>

                <blockquote className="text-base leading-relaxed font-semibold text-zinc-950 relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div
                  className={`absolute -bottom-12 -right-12 w-48 h-48 ${testimonial.blurColor} rounded-full opacity-10`}
                  style={{ filter: "blur(72px)" }}
                />
              </article>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            className="flex gap-6 animate-scroll-right"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {duplicatedTestimonialsReverse.map((testimonial, index) => (
              <article
                key={`reverse-${testimonial.id}-${index}`}
                className="relative flex-shrink-0 w-[85vw] md:w-[400px] p-6 md:p-8 border bg-card hover:shadow-lg transition-shadow overflow-hidden border-zinc-100 md:px-6 md:py-6 rounded-3xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>

                <blockquote className="text-base leading-relaxed font-semibold text-zinc-950 relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div
                  className={`absolute -bottom-12 -right-12 w-48 h-48 ${testimonial.blurColor} rounded-full opacity-10`}
                  style={{ filter: "blur(72px)" }}
                />
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:hidden max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-16">
          <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            What clients say
          </SectionTitle>
        </div>

        <div className="relative">
          {mobileTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="sticky pt-10"
              style={{
                top: `${70 + index * 0}px`,
                zIndex: index + 1,
              }}
            >
              <article className="relative p-6 md:p-8 border bg-card transition-shadow overflow-hidden border-zinc-100 rounded-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>

                <blockquote className="text-base leading-relaxed font-semibold text-zinc-950 relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div
                  className={`absolute -bottom-12 -right-12 w-48 h-48 ${testimonial.blurColor} rounded-full opacity-10`}
                  style={{ filter: "blur(72px)" }}
                />
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none z-10 lg:hidden" />
    </section>
  )
}
