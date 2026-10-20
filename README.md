# Casa Seixo

Landing page fictícia da **Casa Seixo** — “pedras de edição limitada para quem já tem tudo”. O projeto foi construído como trabalho de Web Front-End da SPTech, com React, TypeScript e CSS Modules, sem backend, banco de dados ou APIs externas.

> **Aviso:** Casa Seixo é uma marca fictícia. Produtos, preços, depoimentos e reservas são fictícios. Nenhum pagamento é processado e nenhum dado sai do navegador.

## Stack

- React 19 + TypeScript
- Vite
- CSS Modules + tokens globais
- MVVM por feature
- Fontes self-hosted (Fraunces, Archivo e IBM Plex Mono)
- Sem router, state library, UI library ou novas dependências de runtime

## Como rodar

```bash
npm install
npm run dev
```

O Vite abre a aplicação em `http://localhost:5173`.

Para validar a versão de produção:

```bash
npm run lint
npm run build
npm run preview
```

`npm run build` executa `tsc -b` antes do build do Vite. O `preview` serve o conteúdo de `dist/`.

## Estrutura MVVM

```text
src/
├── app/
│   ├── App.tsx                  # composição da página
│   ├── providers/               # ReservationProvider, contexto e hook
│   └── styles/                  # fonts.css, tokens.css, global.css
├── shared/
│   ├── config/site.ts           # navegação, footer e metadados
│   ├── data/editions.ts         # catálogo único (galeria + oferta)
│   ├── lib/                     # preço, scroll, storage, reveal
│   ├── model/                   # Edition, Testimonial, FaqItem, WaitlistEntry, NavItem
│   └── ui/                      # Button, SectionLabel, Seal, ImageSlot, Dialog, Field, Price
└── features/
    ├── hero/                    # model + view
    ├── manifesto/               # model + view
    ├── editions/                # model + view + viewmodel (useEditions)
    ├── benefits/                # model + view
    ├── ritual/                  # model + view
    ├── house/                   # model + view
    ├── testimonials/            # model + view
    ├── offer/                   # model + view
    ├── faq/                     # model + view + viewmodel (useFaq)
    ├── waitlist/                # model + view + viewmodel (useWaitlist)
    ├── navigation/              # view + viewmodel (useNavigation)
    └── footer/                  # model + view
```

### Onde vive o estado

- **`ReservationProvider`** — dono de `selectedEditionId` e das ações `requestReservation` / `clearSelection`. Faz a ponte entre catálogo, oferta, CTAs e o formulário inline em `#lista`.
- **`useWaitlist`** — valores do formulário, validação, status de envio, certificado, restauração e persistência local.
- **`useEditions`** — edição ativa do diálogo, mantendo a última edição montada durante o fechamento.
- **`useFaq`** — item aberto do acordeão.
- **`useNavigation`** — seção ativa, menu móvel, estado de rolagem e travamento do body.
- **`useReveal`** — revelação suave das seções; não esconde conteúdo se o JavaScript falhar e respeita `prefers-reduced-motion`.

## Fluxo de conversão

1. Hero, header, ritual ou oferta levam a `#lista`.
2. Cards de edição abrem um `<dialog>` nativo com detalhes.
3. “Reservar esta edição” fecha o diálogo, seleciona a edição no provider, rola até o formulário e move o foco para o campo de edição.
4. O formulário é inline; não existe modal global de reserva.
5. O envio é simulado (700 ms). Nenhuma requisição de rede é feita.
6. O sucesso mostra o **Certificado de Inutilidade**, com protocolo, data, posição e download `.txt`.
7. A reserva é salva em `localStorage` sob a chave versionada `casa-seixo:reservation:v1`.
8. “Fazer nova reserva” limpa o armazenamento e devolve o formulário.

Se o `localStorage` estiver indisponível, a reserva continua funcionando em memória e um aviso é exibido. A edição **Óxido** é de arquivo: aparece no catálogo, mas não oferece reserva.

## Imagens

As imagens de produto ainda não foram fornecidas. O componente `ImageSlot` reserva a proporção final e exibe um placeholder rotulado, escondido de tecnologias assistivas:

- Hero e cards de edição: **4:5**
- Manifesto e casa: **3:2**
- Catálogo e oferta compartilham o mesmo objeto `Edition` em `src/shared/data/editions.ts`

Para trocar um placeholder por uma foto, coloque o arquivo em `public/images/` e preencha `image` na edição correspondente:

```ts
{
  id: 'basalto',
  image: '/images/basalto.jpg',
  alt: 'Pedra de basalto preta, fosca e irregular, sobre fundo de gesso claro.',
  // ...
}
```

Briefing de fotografia: pedra isolada sobre gesso ou papel algodão, luz lateral suave, sombra longa, sem props, sem mãos, sem ambiente doméstico. A pedra deve ocupar cerca de 50–60% do quadro. Manter o texto alternativo descritivo ao substituir a imagem.

## Acessibilidade e movimento

- Diálogo nativo com foco contido, retorno de foco, `Escape` e clique no backdrop.
- Formulário com labels, erros associados por `aria-describedby`, `aria-invalid` e foco no primeiro campo inválido.
- Região `aria-live` para progresso e confirmação; foco no certificado após o sucesso.
- Acordeão com `aria-expanded` / `aria-controls`.
- Contraste de texto AA; o cinza “stone” fica restrito a linhas decorativas e o tom `stone-text` é usado em metadados.
- `prefers-reduced-motion` desliga reveal, smooth scroll e animações.
- A página inteira funciona offline depois do build; as fontes são arquivos locais.

## Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com HMR |
| `npm run lint` | Oxlint em `src` |
| `npm run build` | Type-check + build de produção em `dist/` |
| `npm run preview` | Pré-visualização do build |
