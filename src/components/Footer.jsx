import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <div className={styles.logoMark}>M</div>
          <div>
            <p className={styles.logoName}>MONUMENTA WORKS</p>
            <p className={styles.logoTagline}>3D-printing history back into place.</p>
          </div>
        </div>

        <nav className={styles.links} aria-label="Footer navigation">
          <div className={styles.col}>
            <p className={styles.colTitle}>Company</p>
            <Link to="/studio">Studio</Link>
            <Link to="/work">Work</Link>
            <Link to="/process">Process</Link>
          </div>
          <div className={styles.col}>
            <p className={styles.colTitle}>Contact</p>
            <a href="mailto:contact@monumentaworks.com">contact@monumentaworks.com</a>
            <a href="tel:+13105550199">+1 (310) 555-0199</a>
            <span>Los Angeles, CA</span>
          </div>
        </nav>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} Monumenta Works. All rights reserved.</p>
      </div>
    </footer>
  )
}
