# Casa Seixo

## Integrantes
- Lucas Eiki Gushiken

## Sobre o produto

A Casa Seixo é uma marca fictícia de rochas de edição limitada para quem já tem tudo. O site funciona como uma landing page editorial: apresenta o manifesto da casa, quatro edições numeradas, o ritual de compra, depoimentos, oferta, perguntas frequentes e um fluxo de reserva que gera um Certificado de Inutilidade. O público é formado por pessoas interessadas em design, objetos de coleção e humor seco; no contexto do projeto, o objetivo é demonstrar domínio de front-end com React, TypeScript e CSS, sem backend.

## Jornada de construção

### Ideia inicial

A ideia partiu de levar a sério uma premissa absurda: vender rochas sem função como peças de coleção. Em vez de uma loja convencional, pensamos em uma casa de família com arquivo, numeração, certificado e uma voz editorial muito segura de si. O produto fictício permitia testar catálogo, detalhe, oferta, depoimentos e reserva sem depender de um sistema real.

Como alternativa, foi considerada uma loja fictícia mais convencional, com produtos e categorias tradicionais. Ela foi descartada porque diluiria o tom da marca e não daria o mesmo espaço para o humor seco, a tipografia e o conceito de arquivo.

### Pesquisa e referências

Pesquisamos referências de design editorial, catálogos de arte e arquivos, rótulos, certificados e interfaces de e-commerce minimalistas. A identidade "Gesso & Tinta" reuniu papel quente, tinta, um vinho oxblood, réguas de 1px e tipografia editorial.

As principais referências visuais foram a combinação de Fraunces (display), Archivo (texto) e IBM Plex Mono (metadados), além de catálogos impressos e páginas de produto com bastante respiro. Para as imagens das edições, usamos referências pop: Bocchi the Rock, Minecraft, moai, Pedra Filosofal, Toph, Rock Lee e The Rock.

### Ferramentas utilizadas

- React 19 + TypeScript
- Vite
- CSS Modules e tokens globais
- OpenCode com DeepSeek V4.1 Flash Free
- WebStorm / OpenCode
- Git e GitHub
- Oxlint
- Chrome DevTools / headless Chrome para QA visual e de acessibilidade

### Uso de IA

- DeepSeek V4.1 Flash Free.

  O modelo foi usado para ler e organizar o projeto, planejar mudanças com OpenSpec, implementar componentes e estilos, revisar acessibilidade e responsividade e criar scripts de QA com Chrome DevTools.

- Por que escolhemos esse modelo: ele estava disponível gratuitamente no OpenCode, tinha contexto suficiente para ler o repositório inteiro e conseguia alternar entre discussão de design, código e verificação.

- Em que momento ele ajudou: na estruturação das features, na implementação do catálogo e do fluxo de reserva, na revisão de semântica e foco do diálogo, e na checagem em 320px, 640px e 1440px.

- Quando o resultado não foi satisfatório: a primeira proposta para a seção "A casa" foi uma ficha de arquivo, mas o resultado não correspondia à direção desejada. A seção foi refeita como faixa monumental; depois, o fundo escuro foi removido e a paleta original foi restaurada. Também houve um bloqueio de build causado por um import não usado no Manifesto, corrigido após confirmação.

- Quais sugestões da IA foram mantidas: HTML semântico, `aria-labelledby`, `<dl>` para as métricas, breakpoints responsivos, tokens de cor, fontes locais, imagens locais, diálogo nativo acessível, validação inline e persistência em `localStorage`.

- Quais foram alteradas: a seção "A casa" passou de ficha de arquivo para faixa monumental; a paleta da faixa passou de fundo escuro para papel/tinta; o tamanho da frase foi reduzido; os rótulos ganharam mais largura para não quebrar.

- Quais foram descartadas: a ficha de arquivo, o `h2` apenas visualmente oculto, o fundo preto da faixa e a ideia de uma faixa de estatísticas genérica sem a frase de abertura.

### Evolução da solução

A primeira versão era uma estrutura genérica de landing page. Ao longo do processo, o catálogo foi substituído por quatro edições customizadas, os depoimentos viraram personagens, o placeholder do hero foi trocado pela fotografia de seixos, a imagem do Manifesto foi removida e a seção "A casa" foi reestruturada para ficar mais curta e editorial. No fim, a página ganhou uma identidade mais coesa: papel, tinta, réguas finas, tipografia display e um fluxo de reserva que gera certificado sem sair do navegador.

### Resultado final

O resultado é uma landing page coesa, responsiva e acessível, com uma identidade visual clara e um fluxo de reserva completo que funciona offline. O ponto mais forte é a coerência entre o conceito fictício, a direção de arte e o conteúdo; o catálogo, os detalhes e o certificado sustentam a brincadeira sem parecer uma loja real.

Se houvesse mais tempo, eu faria testes com usuários, uma auditoria de acessibilidade com leitores de tela, testes automatizados para o fluxo de reserva e substituiria as imagens de referências pop por assets originais ou devidamente licenciados. Também refinaria o movimento das seções e testaria em mais dispositivos reais.