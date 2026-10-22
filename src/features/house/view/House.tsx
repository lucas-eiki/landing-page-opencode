import { SectionLabel } from '../../../shared/ui/SectionLabel'
import { houseContent } from '../model/house-content'
import styles from './House.module.css'

export function House() {
  return (
    <section id="casa" className={`${styles.section} section`} aria-labelledby="house-title">
      <div className="container">
        <SectionLabel number={houseContent.label}>A casa</SectionLabel>
        <h2 id="house-title" className={styles.phrase}>
          {houseContent.phrase}
        </h2>
      </div>

      <div className={styles.band}>
        <div className="container">
          <dl className={styles.stats}>
            {houseContent.stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
