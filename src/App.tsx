import { useEffect, useRef, useState } from 'react'
import './App.css'

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, isVisible }
}

function CountUp({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const { ref, isVisible } = useInView(0.3)
  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, end, duration])
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const SERVICES = [
  {
    num: '01',
    title: 'Paid Media',
    desc: 'Google Ads, Bing Ads, Meta — surgical campaign management that turns ad spend into predictable revenue. We optimize for purchases, not vanity metrics.',
    tags: ['Google Ads', 'Bing Ads', 'Meta', 'ROAS'],
    img: '/assets/photos/analytics.jpg',
  },
  {
    num: '02',
    title: 'Lead Generation',
    desc: 'High-intent funnels that capture, qualify, and convert. Multi-step forms, smart routing, CRM integration — every lead tracked from click to cash.',
    tags: ['Funnels', 'CRM', 'Conversion', 'Tracking'],
    img: '/assets/photos/leads.jpg',
  },
  {
    num: '03',
    title: 'Web Platforms',
    desc: 'Conversion-optimized web applications built for speed. React, Next.js, Supabase — deployed on edge, monitored for performance, iterated on data.',
    tags: ['React', 'Next.js', 'Supabase', 'Vercel'],
    img: '/assets/photos/team-collab.jpg',
  },
  {
    num: '04',
    title: 'AI & Automation',
    desc: 'Autonomous agents, intelligent workflows, data pipelines. We build the systems that run while you sleep — from CRM bots to real-time monitoring.',
    tags: ['Agents', 'Workflows', 'APIs', 'Claude'],
    img: '/assets/photos/scale.jpg',
  },
]

const PROJECTS = [
  {
    name: 'Raccordement Connect',
    category: 'Lead Gen Platform',
    desc: 'France\'s leading electrical connection request platform. Multi-step funnel converting Google Ads traffic into qualified, paid service requests.',
    url: 'raccordement-connect.com',
    metrics: ['19.5% CTR', '45% Margin', '€4K+ MRR'],
    color: '#3b82f6',
  },
  {
    name: 'Demande Raccordement',
    category: 'Conversion Funnel',
    desc: 'Secondary acquisition channel targeting long-tail French electrical grid keywords. Separate brand, shared backend infrastructure.',
    url: 'demande-raccordement.fr',
    metrics: ['SEO + Paid', 'Bing Organic', 'Multi-channel'],
    color: '#10b981',
  },
  {
    name: 'Maison Chapuis',
    category: 'Luxury E-commerce',
    desc: 'Premium Moroccan ceramics curated for the US market. Art-directed product photography, Stripe checkout, editorial brand experience.',
    url: 'maison-chapuis.com',
    metrics: ['US Market', 'DTC', 'Premium AOV'],
    color: '#f59e0b',
  },
  {
    name: 'Sajdah',
    category: 'Mobile App',
    desc: 'Islamic prayer companion app. Precise prayer times, Qibla direction, adhan notifications. Live on the App Store with 5-star reviews.',
    url: 'App Store',
    metrics: ['iOS Native', 'Expo', 'Live'],
    color: '#8b5cf6',
  },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <img src="/assets/logos/menana-icon.png" alt="Menana" width="32" height="32" />
          <span className="nav-wordmark">MENANA</span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-cta">Get in touch</a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-blob hero-blob-1">
        <img src="/assets/gradients/blob-1.png" alt="" />
      </div>
      <div className="hero-blob hero-blob-2">
        <img src="/assets/gradients/blob-4.png" alt="" />
      </div>
      <div className="hero-content">
        <div className="hero-tag">
          <span className="tag-dot" />
          Performance-Driven Digital Agency
        </div>
        <h1 className="hero-title">
          We build digital<br />
          <span className="hero-accent">empires</span> that print<br />
          revenue.
        </h1>
        <p className="hero-sub">
          Paid media, lead generation, and conversion-optimized web platforms.
          <br />From Paris to London — we turn clicks into customers.
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">See our work</a>
          <a href="#contact" className="btn btn-ghost">Start a project</a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-line" />
      </div>
    </section>
  )
}

function Marquee() {
  const items = ['Paid Media', 'Lead Generation', 'Web Development', 'AI Automation', 'Analytics', 'CRM Integration', 'Conversion Optimization', 'E-commerce']
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            {item} <span className="marquee-sep">/</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="services">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">What we do</span>
          <h2 className="section-title">Services built for<br /><span className="text-accent">profitable growth</span></h2>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => {
            const anim = useInView(0.2)
            return (
              <div
                key={s.num}
                ref={anim.ref}
                className={`service-card ${anim.isVisible ? 'visible' : ''}`}
              >
                <div className="service-img-wrap">
                  <img src={s.img} alt={s.title} loading="lazy" />
                  <div className="service-num">{s.num}</div>
                </div>
                <div className="service-body">
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc">{s.desc}</p>
                  <div className="service-tags">
                    {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const anim = useInView(0.2)
  return (
    <section className={`stats ${anim.isVisible ? 'visible' : ''}`} ref={anim.ref}>
      <div className="stats-blob">
        <img src="/assets/gradients/blob-5.png" alt="" />
      </div>
      <div className="section-container">
        <div className="stats-grid">
          <div className="stat">
            <div className="stat-value"><CountUp end={180} suffix="K+" /></div>
            <div className="stat-label">Clients served across platforms</div>
          </div>
          <div className="stat">
            <div className="stat-value"><CountUp end={4} suffix="M+" /></div>
            <div className="stat-label">Ad spend managed (EUR)</div>
          </div>
          <div className="stat">
            <div className="stat-value"><CountUp end={12} suffix="x" /></div>
            <div className="stat-label">Average return on ad spend</div>
          </div>
          <div className="stat">
            <div className="stat-value"><CountUp end={99} suffix="%" /></div>
            <div className="stat-label">Uptime across all platforms</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="work">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Selected work</span>
          <h2 className="section-title">Products that<br /><span className="text-accent">perform</span></h2>
        </div>
        <div className="work-grid">
          {PROJECTS.map((p, i) => {
            const anim = useInView(0.15)
            return (
              <div
                key={p.name}
                ref={anim.ref}
                className={`work-card ${anim.isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${i * 0.1}s`, '--project-color': p.color } as React.CSSProperties}
              >
                <div className="work-card-top">
                  <span className="work-category">{p.category}</span>
                  <div className="work-dot" style={{ background: p.color }} />
                </div>
                <h3 className="work-name">{p.name}</h3>
                <p className="work-desc">{p.desc}</p>
                <div className="work-metrics">
                  {p.metrics.map(m => (
                    <span key={m} className="work-metric">{m}</span>
                  ))}
                </div>
                <div className="work-url">{p.url}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Brands() {
  return (
    <section className="brands">
      <div className="section-container">
        <span className="section-label center">Our brands</span>
        <div className="brands-strip">
          <div className="brand-item">
            <img src="/assets/logos/menana-full.png" alt="Menana Digital" />
          </div>
          <div className="brand-item">
            <img src="/assets/logos/akal-white.png" alt="AKAL Digital" />
          </div>
          <div className="brand-item">
            <img src="/assets/logos/latitude-mark.png" alt="Latitude" />
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  const anim = useInView(0.2)
  return (
    <section id="about" className={`about ${anim.isVisible ? 'visible' : ''}`} ref={anim.ref}>
      <div className="about-blob">
        <img src="/assets/gradients/blob-2.png" alt="" />
      </div>
      <div className="section-container">
        <div className="about-grid">
          <div className="about-left">
            <span className="section-label">Who we are</span>
            <h2 className="section-title">A small team with<br /><span className="text-accent">outsized results</span></h2>
          </div>
          <div className="about-right">
            <p className="about-text">
              Menana Digital is a lean, founder-led agency that operates at the intersection of
              performance marketing and product engineering. We don't pitch decks — we build
              revenue machines.
            </p>
            <p className="about-text">
              Every campaign is optimized for purchases, not leads. Every platform is built for
              speed, not spectacle. We measure success in profit margins, not page views.
            </p>
            <p className="about-text">
              Based between Paris and London, operating across France, the UK, and the US.
              Our stack is modern, our processes are automated, and our results speak in euros.
            </p>
            <div className="about-values">
              <div className="value">
                <div className="value-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <span>Revenue-first</span>
              </div>
              <div className="value">
                <div className="value-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <span>Ship fast</span>
              </div>
              <div className="value">
                <div className="value-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <span>Data-driven</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const anim = useInView(0.2)
  return (
    <section id="contact" className={`contact ${anim.isVisible ? 'visible' : ''}`} ref={anim.ref}>
      <div className="contact-blob">
        <img src="/assets/gradients/blob-3.png" alt="" />
      </div>
      <div className="section-container">
        <div className="contact-inner">
          <span className="section-label center">Let's talk</span>
          <h2 className="contact-title">Ready to turn your<br />ad spend into <span className="text-accent">profit</span>?</h2>
          <p className="contact-sub">
            We take on a limited number of projects to ensure every client gets the
            attention they deserve. If you're serious about growth, let's talk.
          </p>
          <a href="mailto:contact@menana.net" className="btn btn-primary btn-large">
            contact@menana.net
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-inner">
          <div className="footer-left">
            <img src="/assets/logos/menana-icon.png" alt="Menana" width="28" height="28" />
            <span className="footer-brand">MENANA DIGITAL</span>
          </div>
          <div className="footer-right">
            <span className="footer-copy">&copy; {new Date().getFullYear()} Menana Digital. Paris / London.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <div className="grain-overlay" />
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <Work />
      <Brands />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
