"use client"

const clients = ["Google Ads", "Stripe", "Vercel", "Supabase", "Bing Ads", "Next.js", "React", "Expo"]

export function ClientLogos() {
  return (
    <section className="py-16 border-border overflow-hidden md:py-10 border-t-[0]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 mb-8">
        <p className="text-sm text-muted-foreground text-center">Technologies & platforms we work with</p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {[...clients, ...clients].map((client, index) => (
            <div key={`${client}-${index}`} className="flex items-center justify-center min-w-[200px] px-8">
              <span className="text-2xl md:text-3xl font-semibold text-muted-foreground/50 whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
