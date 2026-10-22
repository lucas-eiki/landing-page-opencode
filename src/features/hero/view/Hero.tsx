import { Button } from '../../../shared/ui/Button'
import { ImageSlot } from '../../../shared/ui/ImageSlot'
import { useReservation } from '../../../app/providers/useReservation'
import { heroContent } from '../model/hero-content'
import styles from './Hero.module.css'

export function Hero() {
  const { requestReservation } = useReservation()

  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={`${styles.grid} container`}>
        <div className={styles.copy}>
          <p className={styles.kicker}>{heroContent.kicker}</p>
          <h1 id="hero-title" className={styles.title}>
            {heroContent.titleLines.map((line, index) => (
              <span key={line} className={styles.line}>
                {line}
                {index < heroContent.titleLines.length - 1 ? ' ' : null}
              </span>
            ))}
          </h1>
          <p className={styles.subtitle}>{heroContent.subtitle}</p>
          <div className={styles.actions}>
            <Button onClick={() => requestReservation()} icon="→">
              {heroContent.primaryCta}
            </Button>
            <a className={styles.secondary} href="#edicoes">
              {heroContent.secondaryCta}
              <span aria-hidden="true">↘</span>
            </a>
          </div>
          <p className={styles.microcopy}>
            {heroContent.microcopy}
            <span aria-hidden="true">↓</span>
          </p>
        </div>

        <div className={styles.media}>
          <div className={styles.frame}>
            <ImageSlot
              src={heroContent.imageSrc}
              alt={heroContent.imageAlt}
              ratio="4/5"
              priority
              className={styles.image}
            />
          </div>
          <div className={styles.caption}>
            <span>{heroContent.captionLeft}</span>
            <span>{heroContent.captionRight}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
