import { useState } from 'react'
import styles from './Contact.module.css'

// Netlify requires a hidden HTML form in the static build so its bot can detect it.
// The real React form must include: data-netlify="true", a hidden input with form name,
// and the honeypot field to block spam.

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    const encode = (data) =>
      Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')

    try {
      const response = await fetch('https://monumentaworks.netlify.app//', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...formData,
        }),
      })

      if (!response.ok) throw new Error(`Server responded with ${response.status}`)

      setStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      console.error('Form submission error:', err)
      setStatus('error')
    }
  }

  return (
    <>
      {/* ── Hidden static form for Netlify's build bot ── */}
      {/* This form is invisible but must exist in the HTML so Netlify detects it */}
      <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="text"  name="name" />
        <input type="email" name="email" />
        <input type="text"  name="company" />
        <textarea           name="message" />
      </form>

      {/* ── Page ── */}
      <section className={styles.page}>
        <div className={`container ${styles.inner}`}>

          {/* Left column — info */}
          <div className={styles.info}>
            <span className="eyebrow">Contact</span>
            <h1 className={styles.title}>
              Start a<br />
              <em className={styles.accent}>project.</em>
            </h1>
            <p className={styles.desc}>
              Tell us about your building, monument, or restoration
              challenge. We'll get back to you within one business day.
            </p>

            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Email</span>
                <a href="mailto:hello@monumenta.co" className={styles.detailValue}>
                  hello@monumenta.co
                </a>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Phone</span>
                <a href="tel:+13105550199" className={styles.detailValue}>
                  +1 (310) 555-0199
                </a>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Location</span>
                <span className={styles.detailValue}>Los Angeles, CA</span>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div className={styles.formWrap}>
            {status === 'success' ? (
              <SuccessMessage />
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className={styles.form}
              >
                {/* Honeypot — hidden from humans, traps bots */}
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">
                      Full name <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      required
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">
                      Email <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@studio.com"
                      required
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="company">
                    Organization or building name
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="St. James Episcopal Church"
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="message">
                    Tell us about your project <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe the element you need restored or recreated, the building, and any relevant historical context..."
                    required
                    rows={6}
                    className={styles.textarea}
                  />
                </div>

                {status === 'error' && (
                  <p className={styles.errorMsg}>
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  className={`btn-primary ${styles.submitBtn}`}
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending…' : 'Send message →'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  )
}

function SuccessMessage() {
  return (
    <div className={styles.success}>
      <div className={styles.successIcon}>✓</div>
      <h2 className={styles.successTitle}>Message sent.</h2>
      <p className={styles.successDesc}>
        Thanks for reaching out. We'll get back to you within one business day.
      </p>
    </div>
  )
}
