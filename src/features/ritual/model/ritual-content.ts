export interface RitualStep {
  number: string
  title: string
  text: string
  cta?: string
}

export const ritualContent = {
  label: '04',
  title: 'Três passos. Nenhum deles é necessário.',
  intro:
    'O ritual foi desenhado para caber em uma pausa. A pedra, como sempre, não tem pressa.',
  steps: [
    {
      number: '01',
      title: 'Escolha',
      text: 'Percorra as edições. Nenhuma faz nada, mas cada uma faz de um jeito diferente.',
    },
    {
      number: '02',
      title: 'Reserve',
      text: 'Deixe seu nome e escolha a pedra. Não cobramos nada até você decidir pagar por nada.',
      cta: 'Começar o ritual',
    },
    {
      number: '03',
      title: 'Receba',
      text: 'A pedra chega com certificado, embalagem e instruções de uso: nenhuma.',
    },
  ] satisfies RitualStep[],
  note: 'O ritual leva menos de dois minutos. A pedra leva a vida inteira.',
} as const
