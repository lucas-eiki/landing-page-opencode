import { ImageSlot } from '../../../shared/ui/ImageSlot'
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

        <figure className={styles.archive}>
          <ImageSlot
            alt={manifestoContent.imageAlt}
            ratio="3/2"
            label={manifestoContent.imageLabel}
          />
          <figcaption>{manifestoContent.caption}</figcaption>
        </figure>
      </div>
    </section>
  )
}
