import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Process.module.css'

// ─── Data ─────────────────────────────────────────────────────────────────────
// Replace `img: null` with the real path once you have images.
// e.g. img: '/images/process/discovery.jpg'

const steps = [
  {
    num: '01',
    title: 'Discovery',
    shortDesc: 'We understand the architecture and project goals.',
    fullDesc:
      'We start every engagement with a thorough site visit and historical research. Our team analyzes the original materials, documents the existing conditions, and defines the scope of work alongside the client and preservation specialists.',
    img: null,
  },
  {
    num: '02',
    title: 'Design',
    shortDesc: 'We create accurate digital models.',
    fullDesc:
      'Using photogrammetry, 3D scanning, and archival references, we build precise digital models of every element. These models are reviewed and approved by the client before any fabrication begins, ensuring faithful recreation of the original design.',
    img: null,
  },
  {
    num: '03',
    title: 'Printing',
    shortDesc: 'Elements are fabricated using advanced technologies.',
    fullDesc:
      'Our studio uses industrial-grade 3D printing and CNC milling to fabricate each architectural element. We work with materials specifically selected for outdoor durability, UV resistance, and structural integrity — engineered to last decades.',
    img: null,
  },
  {
    num: '04',
    title: 'Installation',
    shortDesc: 'The final piece is integrated into the architecture.',
    fullDesc:
      "Our installation team works closely with the building's contractors and preservation officers to fit each piece with precision. Every element is finished, painted, and sealed on-site to match the surrounding historic fabric seamlessly.",
    img: null,
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Process() {
  return (
    <>
      <PageHeader />
      <AccordionSteps />
      <CtaBanner />
    </>
  )
}

// ── Page header with parallax ────────────────────────────────────────────────
function PageHeader() {
  const imgRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return
      // Move the image upward at half the scroll speed — reveals sky/city above
      const offset = window.scrollY * 0.45
      imgRef.current.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className={styles.header}>
      {/* Parallax image container — overflow hidden clips the moving image */}
      <div className={styles.headerImgWrap} aria-hidden="true">
        {/*
          Replace this div with a real <img> tag:
          <img
            ref={imgRef}
            src="/images/process/header.jpg"
            alt=""
            className={styles.headerImg}
          />
          Image tip: use a tall photo (portrait) so there's room to scroll
          and reveal the sky/city at the top as the mountains move down.
        */}
        <div ref={imgRef} className={styles.headerImgPlaceholder}>
          <span>Header image</span>
          <small>Use a tall portrait photo — mountains bottom, sky/city top</small>
        </div>
      </div>

      {/* Text overlay */}
      <div className={styles.headerOverlay}>
        <div className={`container ${styles.headerInner}`}>
          <div className={styles.headerLabel}>
            <span className={styles.headerIcon}>↙</span>
            <span className={styles.headerTag}>Process</span>
          </div>
          <p className={styles.headerDesc}>
            From discovery to installation, every project
            follows a clear and thoughtful process.
          </p>
        </div>
      </div>
    </section>
  )
}

// ── Accordion steps ───────────────────────────────────────────────────────────
function AccordionSteps() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(prev => (prev === i ? null : i))

  return (
    <section className={styles.steps}>
      {steps.map((step, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={step.num}
            className={`${styles.stepRow} ${styles[`stepRow${i}`]} ${isOpen ? styles.stepRowOpen : ''}`}
          >
            {/* ── Clickable header row ── */}
            <button
              className={`container ${styles.stepInner}`}
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              aria-controls={`step-panel-${step.num}`}
            >
              <h2 className={styles.stepTitle}>
                <span className={styles.stepNum}>{step.num}</span>
                {step.title}
              </h2>
              <p className={styles.stepShortDesc}>
                <strong>{step.shortDesc}</strong>
              </p>
              <span className={`${styles.stepChevron} ${isOpen ? styles.stepChevronOpen : ''}`}>
                ↓
              </span>
            </button>

            {/* ── Accordion panel ── */}
            <div
              id={`step-panel-${step.num}`}
              className={`${styles.stepPanel} ${isOpen ? styles.stepPanelOpen : ''}`}
              aria-hidden={!isOpen}
            >
              <div className={`container ${styles.stepPanelInner}`}>
                {/* Image */}
                <div className={styles.stepImgWrap}>
                  {step.img ? (
                    <img
                      src={step.img}
                      alt={step.title}
                      className={styles.stepImg}
                      loading="lazy"
                    />
                  ) : (
                    <div className={styles.stepImgPlaceholder} aria-hidden="true">
                      <span>◈</span>
                      <small>Image coming soon</small>
                    </div>
                  )}
                </div>

                {/* Full description */}
                <div className={styles.stepFullDesc}>
                  <p>{step.fullDesc}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

// ── CTA Banner ────────────────────────────────────────────────────────────────
function CtaBanner() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaBgPlaceholder} aria-hidden="true" />
      <div className={`container ${styles.ctaInner}`}>
        <h2 className={styles.ctaTitle}>
          Bring history<br />
          <strong>back into<br />place.</strong>
        </h2>
        <div className={styles.ctaCard}>
          <p className={styles.ctaCardText}>
            Let's discuss your project and explore the best path forward.
          </p>
        </div>
        <Link to="/contact" className={styles.ctaBtn}>
          Start a Project →
        </Link>
      </div>
    </section>
  )
}
