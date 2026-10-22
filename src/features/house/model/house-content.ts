export interface HouseStat {
  value: string
  label: string
}

export const houseContent = {
  label: '05',
  phrase: 'Escolher pouco, numerar tudo, explicar nada.',
  stats: [
    { value: '39', label: 'anos sem fabricar nada' },
    { value: '04', label: 'edições por ano' },
    { value: '00', label: 'funções declaradas' },
  ] satisfies HouseStat[],
} as const
