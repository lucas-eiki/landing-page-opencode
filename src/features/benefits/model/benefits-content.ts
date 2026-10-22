export interface Benefit {
  number: string
  title: string
  text: string
}

export interface ComparisonRow {
  question: string
  house: string
  useful: string
}

export const benefitsContent = {
  label: '03',
  title: 'Ela não faz nada. E faz isso muito bem.',
  intro:
    'O que a Casa Seixo oferece é uma pausa material. Um objeto que não pede atualização, não apita, não coleta dados e não tenta melhorar sua vida.',
  benefits: [
    {
      number: '01',
      title: 'Não ocupa a mente',
      text: 'Uma rocha não tem notificações. A sua atenção continua sendo sua.',
    },
    {
      number: '02',
      title: 'Não pede manutenção',
      text: 'Se acumular poeira, passe um pano. Se não quiser, a poeira também é uma escolha.',
    },
    {
      number: '03',
      title: 'Não fica obsoleta',
      text: 'A cada ano lançamos novas edições. A rocha antiga continua exatamente igual.',
    },
    {
      number: '04',
      title: 'Não promete felicidade',
      text: 'Promessas são para produtos. A rocha prefere não se comprometer.',
    },
  ] satisfies Benefit[],
  table: {
    caption: 'Comparação entre a Casa Seixo e um objeto útil.',
    headers: ['Pergunta', 'Casa Seixo', 'Objeto útil'],
    rows: [
      { question: 'Precisa de manual?', house: 'Não', useful: 'Sim' },
      { question: 'Faz barulho?', house: 'Não', useful: 'Às vezes' },
      { question: 'Pede atualização?', house: 'Nunca', useful: 'Constantemente' },
      { question: 'Fica obsoleto?', house: 'Não', useful: 'Rapidamente' },
      { question: 'Serve para alguma coisa?', house: 'Não', useful: 'Infelizmente' },
    ] satisfies ComparisonRow[],
  },
} as const
