import type { ReactNode } from 'react'
import styles from './Field.module.css'

interface FieldProps {
  id: string
  label: string
  error?: string
  hint?: string
  children: ReactNode
  className?: string
}

export function Field({ id, label, error, hint, children, className }: FieldProps) {
  return (
    <div className={[styles.field, className].filter(Boolean).join(' ')}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {children}
      {hint ? (
        <p id={`${id}-hint`} className={styles.hint}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className={styles.error} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
