import styles from './ImageSlot.module.css'

export type ImageRatio = '4/5' | '3/2' | '1/1'
export type ImageLabelAlign = 'left' | 'right'

interface ImageSlotProps {
  src?: string
  alt: string
  ratio?: ImageRatio
  label?: string
  labelAlign?: ImageLabelAlign
  className?: string
  priority?: boolean
}

export function ImageSlot({
  src,
  alt,
  ratio = '4/5',
  label,
  labelAlign = 'left',
  className,
  priority = false,
}: ImageSlotProps) {
  return (
    <figure
      className={[styles.slot, className].filter(Boolean).join(' ')}
      style={{ aspectRatio: ratio.replace('/', ' / ') }}
    >
      {src ? (
        <img
          className={styles.image}
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      ) : (
        <div
          className={styles.placeholder}
          data-label-align={labelAlign}
          aria-hidden="true"
        >
          <span className={styles.pebble} />
          <span className={styles.placeholderLabel}>{label ?? 'Imagem em breve'}</span>
        </div>
      )}
    </figure>
  )
}
