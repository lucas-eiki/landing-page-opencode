import type { RefObject } from 'react'
import type { Edition } from '../../../shared/model/edition'
import type { WaitlistEntry } from '../../../shared/model/waitlist-entry'
import { formatLongDate, formatPosition } from '../../../shared/lib/format'
import { Button } from '../../../shared/ui/Button'
import { Seal } from '../../../shared/ui/Seal'
import { downloadCertificate } from '../model/certificate'
import { waitlistContent } from '../model/waitlist-content'
import styles from './Certificate.module.css'

interface CertificateProps {
  entry: WaitlistEntry
  edition: Edition
  headingRef: RefObject<HTMLHeadingElement | null>
  onNew: () => void
}

export function Certificate({ entry, edition, headingRef, onNew }: CertificateProps) {
  const copy = waitlistContent.certificate

  return (
    <article className={styles.certificate} aria-labelledby="certificate-title">
      <div className={styles.head}>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <Seal number={edition.number} size={78} className={styles.seal} />
      </div>

      <h3 id="certificate-title" ref={headingRef} tabIndex={-1} className={styles.title}>
        {copy.title}
      </h3>

      <p className={styles.intro}>{copy.intro}</p>
      <p className={styles.name}>{entry.name}</p>
      <p className={styles.body}>
        {copy.reserved} <strong>{edition.number} / {edition.name}</strong>.
      </p>
      <p className={styles.nothing}>{copy.nothing}</p>

      <dl className={styles.meta}>
        <div>
          <dt>{copy.protocol}</dt>
          <dd>{entry.protocol}</dd>
        </div>
        <div>
          <dt>{copy.date}</dt>
          <dd>{formatLongDate(entry.createdAt)}</dd>
        </div>
        <div>
          <dt>{copy.position}</dt>
          <dd>#{formatPosition(entry.position)}</dd>
        </div>
        <div>
          <dt>{copy.edition}</dt>
          <dd>{edition.number} / {edition.name}</dd>
        </div>
      </dl>

      <div className={styles.actions}>
        <Button onClick={() => downloadCertificate(entry, edition)} icon="↓">
          {copy.download}
        </Button>
        <Button variant="secondary" onClick={onNew} icon="↺">
          {copy.newReservation}
        </Button>
      </div>

      <p className={styles.fictional}>{copy.fictional}</p>
    </article>
  )
}
