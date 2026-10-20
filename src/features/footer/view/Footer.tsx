import { footerNavItems, footerSecondaryLinks, site } from '../../../shared/config/site'
import { SectionLabel } from '../../../shared/ui/SectionLabel'
import { footerContent } from '../model/footer-content'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer id="rodape" className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <SectionLabel number="10" tone="inverse">
          Rodapé
        </SectionLabel>

        <div className={styles.top}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>{site.tagline}</p>
            <p className={styles.statement}>
              A pedra não faz nada.
              <br />
              Você também não precisa.
            </p>
            <a className={styles.listLink} href="#lista">
              Entrar na lista <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className={styles.columns}>
            <div>
              <p className={styles.columnTitle}>{footerContent.columns.navigate}</p>
              <ul className={styles.links}>
                {footerNavItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={styles.columnTitle}>{footerContent.columns.house}</p>
              <ul className={styles.links}>
                {footerSecondaryLinks.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <a className={styles.wordmark} href="#inicio" aria-label={`${site.name}, voltar ao topo`}>
          {site.wordmark}
          <span aria-hidden="true">.</span>
        </a>

        <div className={styles.legal}>
          <p className={styles.disclosure}>{footerContent.disclosure}</p>
          <div className={styles.meta}>
            <p>{footerContent.copyright}</p>
            <p>{footerContent.credit}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
