import type { Edition } from '../model/edition'

export const editions: Edition[] = [
  {
    id: 'basalto',
    number: '01',
    name: 'Basalto',
    stone: 'Basalto',
    description:
      'Uma pedra escura, densa e discreta. Não reflete luz, não puxa conversa e não combina com nada — o que, segundo a casa, é uma forma superior de combinar.',
    provenance: 'Pedreira da família Seixo, Serra do Cipó, Minas Gerais.',
    includes: [
      'Uma pedra de basalto de 9 a 12 cm',
      'Certificado de Inutilidade numerado',
      'Embalagem de papel algodão',
      'Guia de uso: uma página em branco',
    ],
    price: 490,
    availability: 'available',
    alt: 'Pedra de basalto preta, fosca e irregular, sobre fundo de gesso claro.',
  },
  {
    id: 'granito',
    number: '02',
    name: 'Granito',
    stone: 'Granito',
    description:
      'Cinza, salpicado e teimosamente estável. A edição preferida de quem gosta de objetos que não mudam de opinião. Também a preferida de quem não tem opinião.',
    provenance: 'Pedreira da família Seixo, Serra do Cipó, Minas Gerais.',
    includes: [
      'Uma pedra de granito de 9 a 12 cm',
      'Certificado de Inutilidade numerado',
      'Embalagem de papel algodão',
      'Guia de uso: uma página em branco',
    ],
    price: 890,
    availability: 'available',
    alt: 'Pedra de granito cinza com pintas claras, apoiada sobre papel de gesso.',
  },
  {
    id: 'quartzo',
    number: '03',
    name: 'Quartzo',
    stone: 'Quartzo leitoso',
    description:
      'A edição mais clara da casa. Uma pedra que parece guardar alguma coisa, mas não guarda. É só uma pedra, e é bastante.',
    provenance: 'Pedreira da família Seixo, Serra do Cipó, Minas Gerais.',
    includes: [
      'Uma pedra de quartzo leitoso de 8 a 11 cm',
      'Certificado de Inutilidade numerado',
      'Embalagem de papel algodão',
      'Guia de uso: uma página em branco',
    ],
    price: 1290,
    availability: 'available',
    alt: 'Pedra de quartzo leitoso, clara e translúcida, sobre superfície de gesso.',
  },
  {
    id: 'oxido',
    number: '04',
    name: 'Óxido',
    stone: 'Arenito com óxido',
    description:
      'A edição de arquivo. Marcas de ferro, tempo e umidade. Não está mais disponível, mas continua sendo a pedra que mais aparece nas fotografias da casa.',
    provenance: 'Pedreira da família Seixo, Serra do Cipó, Minas Gerais.',
    includes: [
      'Uma pedra de arenito com veios de óxido',
      'Certificado de Inutilidade de arquivo',
      'Embalagem de papel algodão',
      'Guia de uso: uma página em branco',
    ],
    price: 4900,
    availability: 'archive',
    alt: 'Pedra de arenito com veios ferrugem de óxido, sobre fundo de gesso.',
  },
]

export const availableEditions = editions.filter((edition) => edition.availability === 'available')

export function getEditionById(id: string): Edition | undefined {
  return editions.find((edition) => edition.id === id)
}
