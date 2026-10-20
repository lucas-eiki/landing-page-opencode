import type { FaqItem } from '../../../shared/model/faq'

export const faqContent = {
  label: '08',
  title: 'Perguntas que ninguém fez.',
  intro: 'Reunimos as dúvidas mais frequentes sobre uma pedra que não faz nada.',
  items: [
    {
      id: 'funcao',
      question: 'A pedra faz alguma coisa?',
      answer:
        'Não. Essa é a proposta. Se você procura um objeto com função, recomendamos uma cadeira.',
    },
    {
      id: 'verdadeira',
      question: 'Como sei que a pedra é verdadeira?',
      answer:
        'Toda edição acompanha um Certificado de Inutilidade numerado. A pedra é de verdade; a utilidade, não.',
    },
    {
      id: 'peso',
      question: 'Posso usar a pedra como peso de papel?',
      answer:
        'Pode. Não recomendamos. O peso de papel pode começar a acreditar que tem uma carreira.',
    },
    {
      id: 'prazo',
      question: 'Qual é o prazo de entrega?',
      answer:
        'De três a sete dias úteis para endereços no Brasil. O prazo da pedra é indefinido; ela não tem pressa.',
    },
    {
      id: 'devolucao',
      question: 'Posso devolver?',
      answer:
        'Sim. Em até sete dias, desde que a pedra esteja exatamente como chegou: sem função.',
    },
    {
      id: 'preco',
      question: 'Por que os preços são tão altos?',
      answer:
        'Pela curadoria, pela numeração, pelo papel e pela coragem de vender uma pedra sem prometer nada. O frete é fictício.',
    },
    {
      id: 'real',
      question: 'A Casa Seixo é real?',
      answer:
        'Não. Esta é uma marca fictícia criada para um trabalho acadêmico. Nenhum pagamento é processado e nenhum dado sai do seu navegador.',
    },
  ] satisfies FaqItem[],
} as const
