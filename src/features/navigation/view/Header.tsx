import { useEffect, useRef } from 'react'
import { Button } from '../../../shared/ui/Button'
import { navItems, site } from '../../../shared/config/site'
import { useReservation } from '../../../app/providers/useReservation'
import { useNavigation } from '../viewmodel/useNavigation'
import styles from './Header.module.css'

export function Header() {
  const { activeId, menuOpen, scrolled, closeMenu, toggleMenu } = useNavigation()
  const { requestReservation } = useReservation()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuPanelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const firstLink = menuPanelRef.current?.querySelector<HTMLElement>('a, button')
    firstLink?.focus()
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
        menuButtonRef.current?.focus({ preventScroll: true })
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen, closeMenu])

  const handleClose = () => {
    closeMenu()
    menuButtonRef.current?.focus({ preventScroll: true })
  }

  const handleReservation = () => {
    closeMenu()
    requestReservation()
  }

  return (
    <header className={[styles.header, scrolled ? styles.scrolled : ''].filter(Boolean).join(' ')}>
      <div className={`${styles.inner} container`}>
        <a className={styles.brand} href="#inicio" aria-label={`${site.name}, início`}>
          {site.wordmark}
          <span className={styles.registered} aria-hidden="true">
            ®
          </span>
        </a>

        <nav className={styles.nav} aria-label="Navegação principal">
          {navItems.map((item) => {
            const isActive = activeId === item.href.slice(1)
            return (
              <a
                key={item.href}
                className={[styles.navLink, isActive ? styles.active : ''].filter(Boolean).join(' ')}
                href={item.href}
                aria-current={isActive ? 'location' : undefined}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className={styles.actions}>
          <Button
            variant="ghost"
            className={styles.headerCta}
            onClick={handleReservation}
            icon="→"
          >
            Entrar na lista
          </Button>
          <button
            ref={menuButtonRef}
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={menuOpen ? handleClose : toggleMenu}
          >
            {menuOpen ? 'Fechar' : 'Menu'}
          </button>
        </div>
      </div>

      <div
        ref={menuPanelRef}
        id="mobile-menu"
        className={styles.mobilePanel}
        hidden={!menuOpen}
      >
        <nav className={styles.mobileNav} aria-label="Navegação principal (móvel)">
          {navItems.map((item) => {
            const isActive = activeId === item.href.slice(1)
            return (
              <a
                key={item.href}
                className={[styles.mobileLink, isActive ? styles.active : ''].filter(Boolean).join(' ')}
                href={item.href}
                aria-current={isActive ? 'location' : undefined}
                onClick={handleClose}
              >
                {item.label}
              </a>
            )
          })}
          <Button onClick={handleReservation} icon="→" className={styles.mobileCta}>
            Entrar na lista
          </Button>
        </nav>
      </div>
    </header>
  )
}
