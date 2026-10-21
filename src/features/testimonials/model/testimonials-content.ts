import type { Testimonial } from '../../../shared/model/testimonial'

export const testimonialsContent = {
  label: '06',
  title: 'O que dizem sobre o nada.',
  intro:
    'Uma seleção de impressões deixadas por pessoas que compraram rochas e não se arrependeram — ou que se arrependeram do jeito certo.',
  rating: '4,9',
  ratingLabel: 'média de 12.480 avaliações ficcionais',
  count: '12.480',
  countLabel: 'interiores equipados com nada',
  note: 'Depoimentos fictícios, como todo o resto.',
  quotes: [
    {
      id: 'marina',
      quote: 'Comprei a Bocchi em 2019. Até hoje não fez nada. Exatamente como prometido.',
      author: 'Marina A.',
      city: 'São Paulo',
      editionId: 'bocchi',
    },
    {
      id: 'rafael',
      quote: 'Tentei usar como peso de papel. Funcionou. Fiquei decepcionado.',
      author: 'Rafael M.',
      city: 'Curitiba',
      editionId: 'rocha-matriz',
    },
    {
      id: 'beatriz',
      quote: 'Minha sala tinha um vazio. Agora tem um vazio com propósito.',
      author: 'Beatriz L.',
      city: 'Rio de Janeiro',
      editionId: 'rocha-sigma',
    },
  ] satisfies Testimonial[],
} as const
