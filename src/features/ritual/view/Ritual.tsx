import { Button } from '../../../shared/ui/Button'
import { SectionLabel } from '../../../shared/ui/SectionLabel'
import { useReservation } from '../../../app/providers/useReservation'
import { ritualContent } from '../model/ritual-content'
import styles from './Ritual.module.css'

export function Ritual() {
  const { requestReservation } = useReservation()

  return (
    <section id="ritual" className={`${styles.section} section`} aria-labelledby="ritual-title">
      <div className="container">
        <SectionLabel number={ritualContent.label}>O ritual</SectionLabel>

        <div className={styles.header}>
          <h2 id="ritual-title" className={styles.title}>
            {ritualContent.title}
          </h2>
          <p className={styles.intro}>{ritualContent.intro}</p>
        </div>

        <ol className={styles.grid}>
          {ritualContent.steps.map((step) => (
            <li key={step.number} className={styles.step}>
              <p className={styles.number}>{step.number}</p>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.text}>{step.text}</p>
              {step.cta ? (
                <Button
                  variant="secondary"
                  className={styles.cta}
                  onClick={() => requestReservation()}
                  icon="→"
                >
                  {step.cta}
                </Button>
              ) : null}
            </li>
          ))}
        </ol>

        <p className={styles.note}>{ritualContent.note}</p>
      </div>
    </section>
  )
}
