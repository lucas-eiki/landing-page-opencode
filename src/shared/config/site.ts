import type { NavItem } from '../model/nav'

export const site = {
  name: 'Casa Seixo',
  wordmark: 'casa seixo',
  tagline: 'Nada, desde 1987.',
  description: 'Rochas de edição limitada para quem já tem tudo.',
  currentYear: 2026,
} as const

export const navItems: NavItem[] = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Edições', href: '#edicoes' },
  { label: 'O ritual', href: '#ritual' },
  { label: 'Acervo', href: '#acervo' },
  { label: 'Adquirir', href: '#aquisicao' },
]

export const footerNavItems: NavItem[] = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Edições', href: '#edicoes' },
  { label: 'O que ela não faz', href: '#beneficios' },
  { label: 'O ritual', href: '#ritual' },
  { label: 'A casa', href: '#casa' },
]

export const footerSecondaryLinks: NavItem[] = [
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Entrar na lista', href: '#lista' },
  { label: 'Voltar ao topo', href: '#inicio' },
]
