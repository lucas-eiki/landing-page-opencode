import type { ReactNode } from 'react'
import styles from './SectionLabel.module.css'

interface SectionLabelProps {
  number: string
  children: ReactNode
  tone?: 'default' | 'inverse'
  className?: string
}

export function SectionLabel({
  number,
  children,
  tone = 'default',
  className,
}: SectionLabelProps) {
  return (
    <div className={[styles.label, styles[tone], className].filter(Boolean).join(' ')}>
      <span className={styles.number}>{number}</span>
      <span className={styles.slash} aria-hidden="true">
        /
      </span>
      <span className={styles.text}>{children}</span>
      <span className={styles.rule} aria-hidden="true" />
    </div>
  )
}
