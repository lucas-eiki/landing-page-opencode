import type { Edition } from '../../../shared/model/edition'
import { Button } from '../../../shared/ui/Button'
import { Dialog } from '../../../shared/ui/Dialog'
import { ImageSlot } from '../../../shared/ui/ImageSlot'
import { Price } from '../../../shared/ui/Price'
import { editionsContent } from '../model/editions-content'
import styles from './EditionDialog.module.css'

interface EditionDialogProps {
  edition: Edition
  open: boolean
  onClose: () => void
  onReserve: (editionId: string) => void
}

export function EditionDialog({ edition, open, onClose, onReserve }: EditionDialogProps) {
  const isArchive = edition.availability === 'archive'
  const titleId = 'edition-dialog-title'

  return (
    <Dialog open={open} onClose={onClose} labelledBy={titleId} className={styles.dialog}>
      <div className={styles.layout}>
        <div className={styles.media}>
          <ImageSlot
            src={edition.image}
            alt={edition.alt}
            ratio="4/5"
            label={`Imagem 4:5 / Ed. ${edition.number}`}
            objectPosition={edition.imagePosition}
            className={styles.image}
          />
        </div>

        <div className={styles.body}>
          <button type="button" className={styles.close} onClick={onClose} aria-label={editionsContent.dialog.close}>
            <span aria-hidden="true">×</span>
          </button>

          <p className={styles.eyebrow}>
            {editionsContent.dialog.edition} {edition.number} /{' '}
            {isArchive ? editionsContent.archiveLabel : editionsContent.availableLabel}
          </p>
          <h2 id={titleId} className={styles.title}>
            {edition.name}
          </h2>
          <p className={styles.stone}>{edition.stone}</p>
          <p className={styles.description}>{edition.description}</p>

          <div className={styles.meta}>
            <div>
              <p className={styles.metaLabel}>{editionsContent.dialog.provenance}</p>
              <p className={styles.metaValue}>{edition.provenance}</p>
            </div>
            <div>
              <p className={styles.metaLabel}>{editionsContent.dialog.price}</p>
              <Price value={edition.price} size="sm" />
            </div>
          </div>

          <div className={styles.includes}>
            <p className={styles.metaLabel}>{editionsContent.dialog.includes}</p>
            <ul>
              {edition.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {isArchive ? (
            <p className={styles.archiveNote}>{editionsContent.dialog.archive}</p>
          ) : (
            <Button onClick={() => onReserve(edition.id)} icon="→" className={styles.reserve}>
              {editionsContent.dialog.reserve}
            </Button>
          )}
        </div>
      </div>
    </Dialog>
  )
}
