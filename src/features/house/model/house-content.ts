export interface HouseStat {
  value: string
  label: string
}

export const houseContent = {
  label: '05',
  title: 'Uma casa de família. Uma pedreira. Nenhuma explicação.',
  paragraphs: [
    'A Casa Seixo funciona numa casa de 1940, no interior de Minas Gerais, a poucos quilômetros de uma pedreira que pertence à família desde antes de a família se interessar por rochas.',
    'Dona Seixo administrou o negócio até 2004, quando passou a direção para a filha e se dedicou a escrever cartas para pessoas que nunca respondeu. A casa mantém o método: escolher pouco, numerar tudo, explicar nada.',
    'Cada edição nasce de uma caminhada pela pedreira. As rochas que não servem para construção são separadas, limpas, fotografadas e colocadas à venda. As que servem continuam servindo. A casa respeita a vocação de cada uma.',
  ],
  stats: [
    { value: '39', label: 'anos sem fabricar nada' },
    { value: '04', label: 'edições por ano' },
    { value: '00', label: 'funções declaradas' },
  ] satisfies HouseStat[],
  imageLabel: 'Imagem 3:2 / Casa Seixo',
  imageAlt: 'Fachada da Casa Seixo, uma casa de 1940 com paredes de gesso e porta de madeira.',
  caption: 'Sede da Casa Seixo, Minas Gerais. Foto: acervo fictício.',
} as const
