import { ImageSlot } from '../../../shared/ui/ImageSlot'
import { SectionLabel } from '../../../shared/ui/SectionLabel'
import { houseContent } from '../model/house-content'
import styles from './House.module.css'

export function House() {
  return (
    <section id="casa" className={`${styles.section} section`} aria-labelledby="house-title">
      <div className="container">
        <SectionLabel number={houseContent.label}>A casa</SectionLabel>

        <div className={styles.grid}>
          <div className={styles.copy}>
            <h2 id="house-title" className={styles.title}>
              {houseContent.title}
            </h2>
            <div className={styles.paragraphs}>
              {houseContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <figure className={styles.media}>
            <ImageSlot
              alt={houseContent.imageAlt}
              ratio="3/2"
              label={houseContent.imageLabel}
            />
            <figcaption>{houseContent.caption}</figcaption>
          </figure>
        </div>

        <dl className={styles.stats}>
          {houseContent.stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
