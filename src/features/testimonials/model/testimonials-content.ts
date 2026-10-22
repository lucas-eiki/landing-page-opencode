import type { Testimonial } from '../../../shared/model/testimonial'
import rockLee from '../../../assets/images/rock-lee.png'
import theRock from '../../../assets/images/the-rock.png'
import toph from '../../../assets/images/toph.png'

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
      id: 'toph',
      quote: 'Nunca vi nada igual.',
      author: 'Toph Beifong',
      city: 'Gaoling',
      editionId: 'bocchi',
      avatar: toph,
      avatarPosition: '50% 35%',
    },
    {
      id: 'rock-lee',
      quote:
        'Não quebra. Muito útil nos treinos. Me sinto enganado',
      author: 'Rock Lee',
      city: 'Konoha',
      editionId: 'rocha-matriz',
      avatar: rockLee,
      avatarPosition: '50% 35%',
    },
    {
      id: 'the-rock',
      quote: 'Literalmente eu. 🗿🍷',
      author: 'The Rock',
      city: 'Miami',
      editionId: 'rocha-sigma',
      avatar: theRock,
      avatarPosition: '50% 40%',
    },
  ] satisfies Testimonial[],
} as const
