import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Studio.module.css'
import imgHeader from '../assets/studio/montain_example2.png'

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

// ── Hero with parallax ────────────────────────────────────────────────────────
function HeroSection() {
  const imgRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return
      // Image moves up at 45% of scroll speed — reveals sky/city above mountains
      const offset = window.scrollY * 0.45
      imgRef.current.style.transform = `translateY(${offset}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className={styles.hero}>

      {/* Parallax image — overflow:hidden on .hero clips it as it moves */}
      <div className={styles.heroImgWrap} aria-hidden="true">
        {/*
          When you have the image, replace the div below with:
          <img
            ref={imgRef}
            src="/images/studio/hero.jpg"
            alt=""
            className={styles.heroImg}
          />
          Use a tall/portrait photo with sky or city at top, mountains/buildings at bottom.
          Import it instead if it's inside src/assets/:
          import heroImg from '../assets/studio/hero.jpg'
          src={heroImg}
        */}
        <img
          ref={imgRef}
          src={imgHeader}
          alt=""
          className={styles.heroImg}
        />
        {/* <div ref={imgRef} className={styles.heroImgPlaceholder} /> */}
      </div>

      {/* Dark gradient so text stays readable */}
      <div className={styles.heroOverlay} />

      {/* Text — sits on top of everything */}
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
        <div className={styles.ourStory}>
          <span className={styles.ourStoryIcon}>↓</span>
          <span className={styles.ourStoryText}>Our Story</span>
        </div>

        <div className={styles.logoLockup}>
          {/* Replace with your 3D logo:
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
              ${v.dark  ? styles.valueDark  : ''}
              ${v.muted ? styles.valueMuted : ''}
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