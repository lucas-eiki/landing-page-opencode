import type { Edition } from '../../../shared/model/edition'
import type { WaitlistEntry } from '../../../shared/model/waitlist-entry'
import { formatLongDate, formatPosition } from '../../../shared/lib/format'

export function buildCertificateText(entry: WaitlistEntry, edition: Edition): string {
  return [
    'CASA SEIXO',
    'CERTIFICADO DE INUTILIDADE',
    `Protocolo: ${entry.protocol}`,
    '',
    `Certificamos que ${entry.name}`,
    `reservou a edição ${edition.number} / ${edition.name}.`,
    '',
    'Esta rocha não serve para nada.',
    'Guarde com cuidado.',
    '',
    `Emitido em: ${formatLongDate(entry.createdAt)}`,
    `Posição na lista: ${formatPosition(entry.position)}`,
    '',
    'Casa Seixo — Nada, desde 1987.',
    'Documento fictício. Nenhum dado foi enviado a um servidor.',
    '',
  ].join('\n')
}

export function downloadCertificate(entry: WaitlistEntry, edition: Edition): void {
  const blob = new Blob([buildCertificateText(entry, edition)], {
    type: 'text/plain;charset=utf-8',
  })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = `certificado-casa-seixo-${entry.protocol}.txt`
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}
