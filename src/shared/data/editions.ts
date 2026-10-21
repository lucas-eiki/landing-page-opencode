import bocchi from '../../assets/images/bocchi-the-rock.jpg'
import bedrock from '../../assets/images/bedrock.png'
import moai from '../../assets/images/moai.jpeg'
import rochaFilosofica from '../../assets/images/rocha-filosofica.png'
import type { Edition } from '../model/edition'

export const editions: Edition[] = [
  {
    id: 'bocchi',
    number: '01',
    name: 'Bocchi, A Rocha',
    stone: 'Rocha sedimentar',
    description:
      'Uma rocha tímida, com pavor de plateia e uma playlist inteira. Não se apresenta em público, mas adora música — desde que ninguém esteja ouvindo.',
    provenance: 'Pedreira da família Seixo, setor de ensaio, Minas Gerais.',
    includes: [
      'Uma rocha tímida de 9 a 12 cm',
      'Certificado de Inutilidade numerado',
      'Embalagem de papel algodão',
      'Guia de uso: uma página em branco',
    ],
    price: 490,
    availability: 'available',
    image: bocchi,
    imagePosition: '50% 35%',
    alt: 'Ilustração de uma personagem de cabelo rosa com corpo de rocha, sobre uma paisagem montanhosa.',
  },
  {
    id: 'rocha-matriz',
    number: '02',
    name: 'Rocha matriz',
    stone: 'Rocha ígnea',
    description:
      'A camada mais profunda da Terra, agora em edição numerada. Indestrutível, silenciosa e anterior a qualquer problema. A base de tudo, sem nenhuma utilidade.',
    provenance: 'Pedreira da família Seixo, galeria do subsolo, Minas Gerais.',
    includes: [
      'Uma amostra de rocha matriz de 9 a 12 cm',
      'Certificado de Inutilidade numerado',
      'Embalagem de papel algodão',
      'Guia de uso: uma página em branco',
    ],
    price: 890,
    availability: 'available',
    image: bedrock,
    imagePosition: '50% 50%',
    alt: 'Cubo cinza pixelado com textura de rocha, sobre fundo preto.',
  },
  {
    id: 'rocha-sigma',
    number: '03',
    name: 'Rocha sigma',
    stone: 'Rocha vulcânica',
    description:
      'Uma rocha muito sigma. Não dá explicações, não segue o grupo e não precisa de plateia. Apenas permanece.',
    provenance: 'Pedreira da família Seixo, setor dos monólitos, Minas Gerais.',
    includes: [
      'Uma rocha sigma de 9 a 12 cm',
      'Certificado de Inutilidade numerado',
      'Embalagem de papel algodão',
      'Guia de uso: uma página em branco',
    ],
    price: 1290,
    availability: 'available',
    image: moai,
    imagePosition: '50% 30%',
    alt: 'Duas estátuas moai de rocha em uma colina gramada, sob céu azul.',
  },
  {
    id: 'rocha-filosofica',
    number: '04',
    name: 'Rocha filosófica',
    stone: 'Rocha metamórfica',
    description:
      'Parente distante da Pedra Filosofal, mas sem os poderes, as propriedades místicas ou a ambição de transformar metal em ouro. É só uma rocha, e é bastante.',
    provenance: 'Pedreira da família Seixo, prateleira de alquimia, Minas Gerais.',
    includes: [
      'Uma rocha filosófica de 9 a 12 cm',
      'Certificado de Inutilidade de arquivo',
      'Embalagem de papel algodão',
      'Guia de uso: uma página em branco',
    ],
    price: 4900,
    availability: 'archive',
    image: rochaFilosofica,
    imagePosition: '50% 50%',
    alt: 'Rocha vermelha brilhante com veios claros, sobre fundo preto.',
  },
]

const legacyEditionIds: Record<string, string> = {
  basalto: 'bocchi',
  granito: 'rocha-matriz',
  quartzo: 'rocha-sigma',
  oxido: 'rocha-filosofica',
}

export const availableEditions = editions.filter((edition) => edition.availability === 'available')

export function getEditionById(id: string): Edition | undefined {
  const normalizedId = legacyEditionIds[id] ?? id
  return editions.find((edition) => edition.id === normalizedId)
}
