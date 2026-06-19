import { Link } from 'react-router-dom'
import styles from './Work.module.css'

// ─── Project data ─────────────────────────────────────────────────────────────
// Replace `img` with the real path once you have images, e.g. '/images/work/st-james.jpg'

const projects = [
  {
    id: 1,
    name: 'St. James Episcopal Church',
    location: 'Los Angeles, CA',
    year: '2024',
    activity: 'Historic sculpture restoration.',
    img: "/src/assets/works/grid4.avif",
  },
  {
    id: 2,
    name: 'St. Mark Bell Tower',
    location: 'Pasadena, CA',
    year: '2024',
    activity: 'Recreation of ornamental architectural details.',
    img: "/src/assets/works/grid5.jpeg",
  },
  {
    id: 3,
    name: 'Cathedral Façade Elements',
    location: 'San Diego, CA',
    year: '2023',
    activity: 'Custom decorative components restoration.',
    img: "/src/assets/works/grid6.jpg",
  },
  {
    id: 4,
    name: 'Memorial Sculpture Restoration',
    location: 'Sacramento, CA',
    year: '2024',
    activity: 'Reconstruction of damaged sculptural elements.',
    img: "/src/assets/works/grid8.jpg",
  },
  {
    id: 5,
    name: 'Historic Museum',
    location: 'Los Angeles, CA',
    year: '2023',
    activity: 'Restored decorative pieces based on archival references.',
    img: "/src/assets/works/grid10.jpg",
  },
  {
    id: 6,
    name: 'Heritage Building Cornice',
    location: 'Santa Barbara, CA',
    year: '2024',
    activity: 'Lightweight architectural components for restoration.',
    img: "/src/assets/works/grid12.jpg",
  },
  {
    id: 7,
    name: 'Public Monument Restoration',
    location: 'Long Beach, CA',
    year: '2024',
    activity: 'Preservation and replacement of corroded fixtures.',
    img: "/src/assets/works/grid13.jpg",
  },
  {
    id: 8,
    name: 'Church Entrance Sculpture',
    location: 'Anaheim, CA',
    year: '2024',
    activity: 'Architectural sculpture designed for long-term durability.',
    img: "/src/assets/works/grid17.jpg",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Work() {
  return (
    <>
      <PageHeader />
      <GalleryGrid />
    </>
  )
}

// ── Page header ───────────────────────────────────────────────────────────────
function PageHeader() {
  return (
    <section className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.headerLabel}>
          <span className={styles.headerIcon}>↙</span>
          <span className={styles.headerTag}>Work</span>
        </div>
        <h1 className={styles.headerTitle}>
          <em className={styles.headerAccent}>Selected restoration</em>
          <br />and recreation projects.
        </h1>
      </div>
      {/* Hero image — replace div with <img src="..." alt="..." className={styles.headerImg} /> */}
      <div className={styles.headerImgWrap}>
        <img src="/src/assets/works/grid14.jpg" alt="Work header" className={styles.headerImg} />
      </div>
    </section>
  )
}

// ── Gallery grid ──────────────────────────────────────────────────────────────
// Inserts the CTA block after the 3rd project card (index 2)
const CTA_AFTER_INDEX = 2

function GalleryGrid() {
  return (
    <section className={styles.gallery}>
      <div className={styles.grid}>
        {projects.map((project, i) => (
          <>
            <ProjectCard key={project.id} project={project} />
            {i === CTA_AFTER_INDEX && <CtaBlock key="cta" />}
          </>
        ))}
      </div>
    </section>
  )
}

// ── Project card ──────────────────────────────────────────────────────────────
function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      {/* Top meta row */}
      <div className={styles.cardMeta}>
        <span className={styles.cardName}>{project.name}</span>
        <span className={styles.cardLocation}>
          {project.location} · {project.year}
        </span>
      </div>

      {/* Image */}
      <div className={styles.cardImgWrap}>
        {project.img ? (
          <img
            src={project.img}
            alt={project.name}
            className={styles.cardImg}
            loading="lazy"
          />
        ) : (
          <div className={styles.cardImgPlaceholder} aria-hidden="true">
            <span className={styles.placeholderIcon}>◈</span>
            <small>Photo coming soon</small>
          </div>
        )}
      </div>

      {/* Activity label */}
      <p className={styles.cardActivity}>{project.activity}</p>
    </article>
  )
}

// ── CTA block (intercalado en el grid) ───────────────────────────────────────
function CtaBlock() {
  return (
    <div className={styles.ctaBlock}>
      <div className={styles.ctaContent}>
        <h2 className={styles.ctaTitle}>
          Have a<br />project<br />in mind?
        </h2>
        <p className={styles.ctaDesc}>
          Let's discuss how digital fabrication can help preserve your
          building's architectural character.
        </p>
      </div>
      <Link to="/contact" className={styles.ctaBtn}>
        Start<br />a Project →
      </Link>
    </div>
  )
}
