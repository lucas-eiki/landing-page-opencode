import { SectionLabel } from '../../../shared/ui/SectionLabel'
import { manifestoContent } from '../model/manifesto-content'
import styles from './Manifesto.module.css'

export function Manifesto() {
  return (
    <section id="manifesto" className={`${styles.section} section`} aria-labelledby="manifesto-title">
      <div className="container">
        <SectionLabel number={manifestoContent.label}>Manifesto</SectionLabel>

        <div className={styles.body}>
          <h2 id="manifesto-title" className={styles.title}>
            {manifestoContent.title}
          </h2>
          <div className={styles.paragraphs}>
            {manifestoContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <blockquote className={styles.quote}>{manifestoContent.quote}</blockquote>
          <a className={styles.link} href="#edicoes">
            {manifestoContent.link}
            <span aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  )
}
