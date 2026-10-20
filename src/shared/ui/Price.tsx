import { formatPrice } from '../lib/format'
import styles from './Price.module.css'

interface PriceProps {
  value: number
  size?: 'sm' | 'md' | 'lg'
  note?: string
  className?: string
}

export function Price({ value, size = 'md', note, className }: PriceProps) {
  return (
    <span className={[styles.price, styles[size], className].filter(Boolean).join(' ')}>
      <span className={styles.value}>{formatPrice(value)}</span>
      {note ? <span className={styles.note}>{note}</span> : null}
    </span>
  )
}
