import { SectionLabel } from '../../../shared/ui/SectionLabel'
import { benefitsContent } from '../model/benefits-content'
import styles from './Benefits.module.css'

export function Benefits() {
  return (
    <section id="beneficios" className={`${styles.section} section`} aria-labelledby="benefits-title">
      <div className="container">
        <SectionLabel number={benefitsContent.label}>O que ela não faz</SectionLabel>

        <div className={styles.header}>
          <h2 id="benefits-title" className={styles.title}>
            {benefitsContent.title}
          </h2>
          <p className={styles.intro}>{benefitsContent.intro}</p>
        </div>

        <div className={styles.benefits}>
          {benefitsContent.benefits.map((benefit) => (
            <article key={benefit.number} className={styles.benefit}>
              <p className={styles.number}>{benefit.number}</p>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitText}>{benefit.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <caption className="sr-only">{benefitsContent.table.caption}</caption>
            <thead>
              <tr>
                {benefitsContent.table.headers.map((header) => (
                  <th key={header} scope="col">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {benefitsContent.table.rows.map((row) => (
                <tr key={row.question}>
                  <th scope="row">{row.question}</th>
                  <td data-label={benefitsContent.table.headers[1]}>{row.house}</td>
                  <td data-label={benefitsContent.table.headers[2]}>{row.useful}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
