import { useId } from 'react'
import styles from './Seal.module.css'

interface SealProps {
  number?: string
  size?: number
  className?: string
}

export function Seal({ number = '01', size = 112, className }: SealProps) {
  const rawId = useId()
  const pathId = `seal-ring-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`

  return (
    <span
      className={[styles.seal, className].filter(Boolean).join(' ')}
      style={{ width: size, height: size }}
      role="img"
      aria-label={`Selo da Casa Seixo, edição ${number}`}
    >
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <defs>
          <path
            id={pathId}
            d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0"
            fill="none"
          />
        </defs>
        <circle cx="60" cy="60" r="57" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <text className={styles.ringText}>
          <textPath href={`#${pathId}`} startOffset="0%">
            CASA SEIXO · EDIÇÃO LIMITADA · NADA DESDE 1987 ·
          </textPath>
        </text>
        <text x="60" y="54" textAnchor="middle" className={styles.small}>
          Nº
        </text>
        <text x="60" y="73" textAnchor="middle" className={styles.number}>
          {number}
        </text>
      </svg>
    </span>
  )
}
