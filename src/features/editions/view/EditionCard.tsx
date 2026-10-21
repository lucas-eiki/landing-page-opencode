import type { Edition } from '../../../shared/model/edition'
import { ImageSlot } from '../../../shared/ui/ImageSlot'
import { Price } from '../../../shared/ui/Price'
import { editionsContent } from '../model/editions-content'
import styles from './EditionCard.module.css'

interface EditionCardProps {
  edition: Edition
  onOpen: (edition: Edition) => void
}

export function EditionCard({ edition, onOpen }: EditionCardProps) {
  const isArchive = edition.availability === 'archive'

  return (
    <article className={[styles.card, isArchive ? styles.archive : ''].filter(Boolean).join(' ')}>
      <div className={styles.mediaWrap}>
        <ImageSlot
          src={edition.image}
          alt={edition.alt}
          ratio="4/5"
          label={`Imagem 4:5 / Ed. ${edition.number}`}
          objectPosition={edition.imagePosition}
          className={styles.imageSlot}
        />
        <span className={styles.badge}>
          {isArchive ? editionsContent.archiveLabel : editionsContent.availableLabel}
        </span>
      </div>

      <div className={styles.meta}>
        <span>Ed. nº {edition.number}</span>
        <span>{edition.stone}</span>
      </div>
      <h3 className={styles.name}>{edition.name}</h3>
      <p className={styles.description}>{edition.description}</p>

      <div className={styles.footer}>
        <Price value={edition.price} size="sm" />
        <span className={styles.view}>
          {editionsContent.cardAction} <span aria-hidden="true">→</span>
        </span>
      </div>

      <button
        type="button"
        className={styles.overlay}
        aria-label={`Ver detalhes da edição ${edition.number}, ${edition.name}`}
        aria-haspopup="dialog"
        onClick={() => onOpen(edition)}
      />
    </article>
  )
}
