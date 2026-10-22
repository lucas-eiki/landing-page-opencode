import { availableEditions, getEditionById } from '../../../shared/data/editions'
import { formatPrice } from '../../../shared/lib/format'
import { Button } from '../../../shared/ui/Button'
import { Price } from '../../../shared/ui/Price'
import { SectionLabel } from '../../../shared/ui/SectionLabel'
import { useReservation } from '../../../app/providers/useReservation'
import { editionsContent } from '../../editions/model/editions-content'
import { offerContent } from '../model/offer-content'
import styles from './Offer.module.css'

export function Offer() {
  const { requestReservation } = useReservation()
  const archiveEdition = getEditionById('rocha-filosofica')

  return (
    <section id="aquisicao" className={`${styles.section} section`} aria-labelledby="offer-title">
      <div className="container">
        <SectionLabel number={offerContent.label}>Aquisição</SectionLabel>

        <div className={styles.header}>
          <h2 id="offer-title" className={styles.title}>
            {offerContent.title}
          </h2>
          <p className={styles.intro}>{offerContent.intro}</p>
        </div>

        <div className={styles.grid}>
          {availableEditions.map((edition) => (
            <article key={edition.id} className={styles.card}>
              <div className={styles.top}>
                <span>Ed. nº {edition.number}</span>
                <span>{editionsContent.availableLabel}</span>
              </div>
              <h3 className={styles.name}>{edition.name}</h3>
              <p className={styles.stone}>{edition.stone}</p>
              <Price value={edition.price} size="lg" className={styles.price} />

              <div className={styles.includes}>
                <p className={styles.includesLabel}>{offerContent.includesLabel}</p>
                <ul>
                  {edition.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <Button
                variant="secondary"
                className={styles.cta}
                onClick={() => requestReservation(edition.id)}
                icon="→"
              >
                {offerContent.cta}
              </Button>
            </article>
          ))}
        </div>

        {archiveEdition ? (
          <p className={styles.archiveNote}>
            <span>
              Ed. nº {archiveEdition.number} / {archiveEdition.name}
            </span>
            <span>
              {formatPrice(archiveEdition.price)} — {editionsContent.archiveLabel.toLowerCase()}.
            </span>
            <span>{offerContent.archiveNote}</span>
          </p>
        ) : null}

        <p className={styles.shipping}>{offerContent.shippingNote}</p>
      </div>
    </section>
  )
}
