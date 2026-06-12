import { Link } from 'react-router-dom'
import styles from './Home.module.css'

// ─── Data (move to a data file or CMS later) ────────────────────────────────

const services = [
  {
    id: 1,
    title: 'Restoration',
    desc: 'We recover architectural and heritage elements using state-of-the-art fabrication techniques.',
    icon: '◈',
  },
  {
    id: 2,
    title: 'Recreation',
    desc: 'We reproduce original pieces with millimeter precision using high-fidelity digital models.',
    icon: '◉',
  },
  {
    id: 3,
    title: 'Engineering',
    desc: 'We design lightweight structural solutions — faithful to the original and built to last.',
    icon: '◎',
  },
]

const stats = [
  { value: '200+', label: 'Projects completed' },
  { value: '15',   label: 'Years of experience' },
  { value: '98%',  label: 'Client satisfaction' },
  { value: '12',   label: 'Cities served' },
]

const processSteps = [
  { num: '01', title: 'Discovery',     desc: 'We understand the project and its historical requirements.' },
  { num: '02', title: 'Design',        desc: 'We create high-precision digital models of every element.' },
  { num: '03', title: 'Printing',      desc: 'We fabricate the architectural elements at our studio.' },
  { num: '04', title: 'Installation',  desc: 'We integrate the finished pieces into the building.' },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <FeaturedProject />
      <ProcessSection />
      <CtaBanner />
    </>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroContent}>
          <span className="eyebrow">Technology + Heritage</span>
          <h1 className={styles.heroTitle}>
            Technology that<br />
            <em className={styles.heroAccent}>preserves</em><br />
            history.
          </h1>
          <p className={styles.heroDesc}>
            We combine 3D printing and heritage craftsmanship to restore
            and recreate architectural elements for historic buildings.
          </p>
          <div className={styles.heroCtas}>
            <Link to="/work" className="btn-primary">
              See our work →
            </Link>
            <Link to="/contact" className="btn-outline">
              Start a project
            </Link>
          </div>
        </div>

        {/* Hero visual — replace with a real image */}
        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.heroImageBox}>
            <div className={styles.heroImagePlaceholder}>
              <span>Your image here</span>
              <small>1200 × 900 px recommended</small>
            </div>
            <div className={styles.heroImageBadge}>
              <span className={styles.badgeNum}>200+</span>
              <span className={styles.badgeLabel}>projects</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.heroStripe} aria-hidden="true" />
    </section>
  )
}

// ── Stats bar ─────────────────────────────────────────────────────────────────
function StatsBar() {
  return (
    <div className={styles.statsBar}>
      <div className={`container ${styles.statsGrid}`}>
        {stats.map(s => (
          <div key={s.label} className={styles.statItem}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Services ──────────────────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <section className={styles.services} id="services">
      <div className="container">
        <div className={styles.servicesHeader}>
          <div>
            <span className="eyebrow">What we do</span>
            <h2 className={styles.sectionTitle}>
              Built for<br />
              <strong>preservation.</strong>
            </h2>
          </div>
          <p className={styles.servicesIntro}>
            We create sculptural and decorative architectural elements for
            churches, monuments, museums, and historic spaces. Lightweight,
            faithful to the original, and designed to last.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map(svc => (
            <article key={svc.id} className={styles.serviceCard}>
              <div className={styles.serviceCardImg} aria-hidden="true">
                {/* Replace with: <img src={svc.img} alt="" /> */}
                <div className={styles.serviceImgPlaceholder}>
                  <span>{svc.icon}</span>
                </div>
              </div>
              <div className={styles.serviceCardBody}>
                <h3 className={styles.serviceTitle}>{svc.title}</h3>
                <p className={styles.serviceDesc}>{svc.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Featured Project ──────────────────────────────────────────────────────────
function FeaturedProject() {
  return (
    <section className={styles.featured}>
      <div className={`container ${styles.featuredInner}`}>
        <div className={styles.featuredContent}>
          <span className="eyebrow" style={{ color: 'var(--brand)' }}>Featured project</span>
          <h2 className={styles.featuredTitle}>St. James<br />Episcopal Church</h2>
          <Link to="/work/st-james" className={styles.featuredLink}>
            View project →
          </Link>
          <p className={styles.featuredDesc}>
            A restoration project focused on recovering and recreating
            decorative elements while preserving the building's historical identity.
          </p>
        </div>

        <div className={styles.featuredImageWrap}>
          {/* Replace with: <img src="..." alt="St. James Episcopal Church" /> */}
          <div className={styles.featuredImgPlaceholder}>
            <span>Project image</span>
            <small>16:9 recommended</small>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Process ───────────────────────────────────────────────────────────────────
function ProcessSection() {
  return (
    <section className={styles.process} id="process">
      <div className="container">
        <div className={styles.processHeader}>
          <div>
            <span className="eyebrow">Process</span>
            <h2 className={styles.sectionTitle}>
              From concept<br />
              <strong>to installation.</strong>
            </h2>
          </div>
          <p className={styles.processIntro}>
            Every project follows a process that combines technology,
            precision, and craftsmanship.
          </p>
        </div>

        <div className={styles.processGrid}>
          {processSteps.map(step => (
            <div key={step.num} className={styles.processStep}>
              <span className={styles.stepNum}>{step.num}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── CTA Banner ────────────────────────────────────────────────────────────────
function CtaBanner() {
  return (
    <section className={styles.ctaBanner}>
      <div className={`container ${styles.ctaBannerInner}`}>
        <h2 className={styles.ctaTitle}>
          Bring history<br />back into place.
        </h2>
        <Link to="/contact" className="btn-primary">
          Start a project →
        </Link>
      </div>
    </section>
  )
}
