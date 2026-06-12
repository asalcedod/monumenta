import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const links = [
  { label: 'Home',     to: '/' },
  { label: 'Work',     to: '/work' },
  { label: 'Process',  to: '/process' },
  { label: 'Studio',   to: '/studio' },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>

        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={close}>
          <span className={styles.logoMark}>M</span>
          <span className={styles.logoText}>
            MONUMENTA<br />
            <span className={styles.logoSub}>WORKS</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className={styles.actions}>
          <Link to="/contact" className={`btn-primary ${styles.ctaBtn}`}>
            Start a Project
          </Link>
          <button
            className={styles.hamburger}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className={`${styles.bar} ${open ? styles.barTop : ''}`} />
            <span className={`${styles.bar} ${open ? styles.barMid : ''}`} />
            <span className={`${styles.bar} ${open ? styles.barBot : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ''}`} aria-hidden={!open}>
        <nav className={styles.mobileNav}>
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`
              }
              onClick={close}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className={`btn-primary ${styles.mobileCta}`} onClick={close}>
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  )
}
