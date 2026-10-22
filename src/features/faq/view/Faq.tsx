import { SectionLabel } from '../../../shared/ui/SectionLabel'
import { faqContent } from '../model/faq-content'
import { useFaq } from '../viewmodel/useFaq'
import styles from './Faq.module.css'

export function Faq() {
  const { openId, toggle } = useFaq()

  return (
    <section id="duvidas" className={`${styles.section} section`} aria-labelledby="faq-title">
      <div className="container">
        <SectionLabel number={faqContent.label}>Dúvidas</SectionLabel>

        <div className={styles.header}>
          <h2 id="faq-title" className={styles.title}>
            {faqContent.title}
          </h2>
          <p className={styles.intro}>{faqContent.intro}</p>
        </div>

        <div className={styles.list}>
          {faqContent.items.map((item) => {
            const isOpen = openId === item.id
            return (
              <div key={item.id} className={styles.item}>
                <h3 className={styles.question}>
                  <button
                    type="button"
                    id={`faq-trigger-${item.id}`}
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    onClick={() => toggle(item.id)}
                  >
                    <span>{item.question}</span>
                    <span className={styles.icon} aria-hidden="true">
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${item.id}`}
                  className={styles.panel}
                  role="region"
                  aria-labelledby={`faq-trigger-${item.id}`}
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
