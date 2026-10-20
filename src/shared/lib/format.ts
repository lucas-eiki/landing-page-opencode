const brl = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
})

const integer = new Intl.NumberFormat('pt-BR')

export function formatPrice(value: number): string {
  return brl.format(value).replace(/\u00a0/g, ' ')
}

export function formatPosition(value: number): string {
  return integer.format(value)
}

export function formatLongDate(iso: string): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return '—'
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date)
}
