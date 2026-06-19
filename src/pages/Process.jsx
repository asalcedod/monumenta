import { Link } from 'react-router-dom'
import styles from './Process.module.css'

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We understand the architecture and project goals.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'We create accurate digital models.',
  },
  {
    num: '03',
    title: 'Printing',
    desc: 'Elements are fabricated using advanced technologies.',
  },
  {
    num: '04',
    title: 'Installation',
    desc: 'The final piece is integrated into the architecture.',
  },
]

export default function Process() {
  return (
    <>
      <PageHeader />
      <StepsList />
      <CtaBanner />
    </>
  )
}

// ── Page header ───────────────────────────────────────────────────────────────
function PageHeader() {
  return (
    <section className={styles.header}>
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
    </section>
  )
}

// ── Steps list ────────────────────────────────────────────────────────────────
function StepsList() {
  return (
    <section className={styles.steps}>
      {steps.map((step, i) => (
        <div key={step.num} className={`${styles.stepRow} ${styles[`stepRow${i}`]}`}>
          <div className={`container ${styles.stepInner}`}>
            <h2 className={styles.stepTitle}>
              <span className={styles.stepNum}>{step.num}</span>
              {step.title}
            </h2>
            <p className={styles.stepDesc}>
              {/* Bold the key phrase — split on first comma or period */}
              <strong>{step.desc.split('.')[0]}.</strong>
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}

// ── CTA Banner ────────────────────────────────────────────────────────────────
function CtaBanner() {
  return (
    <section className={styles.cta}>
      {/* Replace this div with: <img src="..." alt="" className={styles.ctaBg} /> */}
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
