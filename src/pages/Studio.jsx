import { Link } from 'react-router-dom'
import styles from './Studio.module.css'

const values = [
  { label: 'Faithful',    accent: true,  dark: false },
  { label: 'Lasting',     accent: false, dark: true  },
  { label: 'Lightweight', accent: false, dark: false },
  { label: 'Engineered',  accent: true,  dark: false, muted: true },
]

export default function Studio() {
  return (
    <>
      <HeroSection />
      <BrandSection />
      <ValuesGrid />
      <CtaBanner />
    </>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Replace div with: <img src="/images/studio-hero.jpg" alt="Los Angeles studio" className={styles.heroBg} /> */}
      <div className={styles.heroBgPlaceholder} aria-hidden="true" />

      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroLabel}>
          <span className={styles.heroLabelIcon}>↙</span>
          <span className={styles.heroLabelText}>Studio</span>
        </div>
        <h1 className={styles.heroTitle}>
          A Los Angeles studio<br />
          at the intersection of{' '}
          <strong>digital fabrication<br />and heritage craft.</strong>
        </h1>
      </div>
    </section>
  )
}

// ── Brand section ─────────────────────────────────────────────────────────────
function BrandSection() {
  return (
    <section className={styles.brand}>
      <div className={`container ${styles.brandInner}`}>
        {/* Our Story label */}
        <div className={styles.ourStory}>
          <span className={styles.ourStoryIcon}>↓</span>
          <span className={styles.ourStoryText}>Our Story</span>
        </div>

        {/* Logo lockup */}
        <div className={styles.logoLockup}>
          {/* Replace with your 3D logo image:
              <img src="/images/logo-3d.png" alt="" className={styles.logo3d} /> */}
          <div className={styles.logo3dPlaceholder} aria-hidden="true">
            <span>M</span>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoName}>MONUMENTA</span>
            <span className={styles.logoSub}>WORKS</span>
          </div>
        </div>

        <p className={styles.brandDesc}>
          combines <strong>technology and craftsmanship</strong> to preserve
          architectural history.
        </p>
      </div>
    </section>
  )
}

// ── Values grid ───────────────────────────────────────────────────────────────
function ValuesGrid() {
  return (
    <section className={styles.values} aria-label="Our values">
      <div className={styles.valuesGrid}>
        {values.map(v => (
          <div
            key={v.label}
            className={`
              ${styles.valueCell}
              ${v.dark   ? styles.valueDark   : ''}
              ${v.muted  ? styles.valueMuted  : ''}
            `}
          >
            <span className={`${styles.valueLabel} ${v.accent ? styles.valueLabelAccent : ''}`}>
              {v.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── CTA Banner ────────────────────────────────────────────────────────────────
function CtaBanner() {
  return (
    <section className={styles.cta}>
      <div className={`container ${styles.ctaInner}`}>
        <h2 className={styles.ctaTitle}>
          Want to work<br />with us?
        </h2>
        <Link to="/contact" className={styles.ctaBtn}>
          Start a Project →
        </Link>
      </div>
    </section>
  )
}
