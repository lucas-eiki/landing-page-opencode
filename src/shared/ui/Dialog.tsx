import { useEffect, useRef, type ReactNode } from 'react'
import styles from './Dialog.module.css'

interface DialogProps {
  open: boolean
  onClose: () => void
  labelledBy: string
  children: ReactNode
  className?: string
}

export function Dialog({ open, onClose, labelledBy, children, className }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)
  const onCloseRef = useRef(onClose)

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && !dialog.open) {
      triggerRef.current =
        document.activeElement instanceof HTMLElement ? document.activeElement : null
      dialog.showModal()
      const firstFocusable = dialog.querySelector<HTMLElement>(
        '[data-autofocus], button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      firstFocusable?.focus()
    }

    if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const handleCancel = (event: Event) => {
      event.preventDefault()
      onCloseRef.current()
    }

    const handleClose = () => {
      document.body.style.overflow = ''
      triggerRef.current?.focus({ preventScroll: true })
      onCloseRef.current()
    }

    const handleClick = (event: MouseEvent) => {
      if (event.target === dialog) {
        onCloseRef.current()
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return

      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.getClientRects().length > 0)

      if (focusable.length === 0) {
        event.preventDefault()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement

      if (event.shiftKey) {
        if (active === first || !dialog.contains(active)) {
          event.preventDefault()
          last.focus()
        }
      } else if (active === last || !dialog.contains(active)) {
        event.preventDefault()
        first.focus()
      }
    }

    dialog.addEventListener('cancel', handleCancel)
    dialog.addEventListener('close', handleClose)
    dialog.addEventListener('click', handleClick)
    dialog.addEventListener('keydown', handleKeyDown)

    return () => {
      dialog.removeEventListener('cancel', handleCancel)
      dialog.removeEventListener('close', handleClose)
      dialog.removeEventListener('click', handleClick)
      dialog.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <dialog
      ref={dialogRef}
      className={[styles.dialog, className].filter(Boolean).join(' ')}
      aria-labelledby={labelledBy}
      aria-modal="true"
    >
      {children}
    </dialog>
  )
}
