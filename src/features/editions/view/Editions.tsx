import { editions } from '../../../shared/data/editions'
import { SectionLabel } from '../../../shared/ui/SectionLabel'
import { useReservation } from '../../../app/providers/useReservation'
import { EditionCard } from './EditionCard'
import { EditionDialog } from './EditionDialog'
import { useEditions } from '../viewmodel/useEditions'
import { editionsContent } from '../model/editions-content'
import styles from './Editions.module.css'

export function Editions() {
  const { displayedEdition, activeEdition, openEdition, closeEdition } = useEditions()
  const { requestReservation } = useReservation()

  const handleReserve = (editionId: string) => {
    closeEdition()
    window.requestAnimationFrame(() => requestReservation(editionId))
  }

  return (
    <section id="edicoes" className={`${styles.section} section`} aria-labelledby="editions-title">
      <div className="container">
        <SectionLabel number={editionsContent.label}>Edições</SectionLabel>

        <div className={styles.header}>
          <h2 id="editions-title" className={styles.title}>
            {editionsContent.title}
          </h2>
          <p className={styles.intro}>{editionsContent.intro}</p>
        </div>

        <div className={styles.grid}>
          {editions.map((edition) => (
            <EditionCard key={edition.id} edition={edition} onOpen={openEdition} />
          ))}
        </div>
      </div>

      {displayedEdition ? (
        <EditionDialog
          edition={displayedEdition}
          open={Boolean(activeEdition)}
          onClose={closeEdition}
          onReserve={handleReserve}
        />
      ) : null}
    </section>
  )
}
