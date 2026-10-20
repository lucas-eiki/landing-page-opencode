import { editions } from '../../../shared/data/editions'
import { SectionLabel } from '../../../shared/ui/SectionLabel'
import { testimonialsContent } from '../model/testimonials-content'
import styles from './Testimonials.module.css'

export function Testimonials() {
  return (
    <section id="acervo" className={`${styles.section} section`} aria-labelledby="testimonials-title">
      <div className="container">
        <SectionLabel number={testimonialsContent.label}>Acervo</SectionLabel>

        <div className={styles.header}>
          <h2 id="testimonials-title" className={styles.title}>
            {testimonialsContent.title}
          </h2>
          <p className={styles.intro}>{testimonialsContent.intro}</p>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>{testimonialsContent.rating}</span>
            <span className={styles.statLabel}>{testimonialsContent.ratingLabel}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{testimonialsContent.count}</span>
            <span className={styles.statLabel}>{testimonialsContent.countLabel}</span>
          </div>
        </div>

        <div className={styles.quotes}>
          {testimonialsContent.quotes.map((testimonial) => {
            const edition = editions.find((item) => item.id === testimonial.editionId)
            return (
              <figure key={testimonial.id} className={styles.quote}>
                <blockquote>“{testimonial.quote}”</blockquote>
                <figcaption className={styles.attribution}>
                  <span>
                    {testimonial.author} — {testimonial.city}
                  </span>
                  {edition ? (
                    <span>
                      Ed. nº {edition.number} / {edition.name}
                    </span>
                  ) : null}
                </figcaption>
              </figure>
            )
          })}
        </div>

        <p className={styles.note}>{testimonialsContent.note}</p>
      </div>
    </section>
  )
}
