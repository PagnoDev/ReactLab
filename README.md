# React Lab

Projeto pessoal para praticar React na transição de Angular para React. Funciona como um catálogo visual, onde cada seção implementa uma funcionalidade independente focada em um conceito essencial do ecossistema. O foco é exercitar React, TypeScript e Tailwind construindo componentes e telas de verdade.

O projeto em seu estado mais recente de desenvolvimento se encontra hospedado na Vercel e já é possível [acessar](reactlab-blue.vercel.app) e acompanhar o desenvolvimento

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- React Router 7
- TanStack Query (React Query) para data fetching
- vite-plugin-svgr (importa os SVG como componente React)

## Como rodar

Requisitos: Node 20+ e npm.

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
npm run preview  # serve o build localmente
npm run lint     # ESLint
```

O app sobe em `http://localhost:5173`.

## Variáveis de ambiente

A seção de API consome a API do TMDB e precisa de um token. Crie um arquivo `.env` na pasta do projeto (a mesma do `package.json`) com o token de leitura v4.

```bash
VITE_TMDB_API_KEY=seu_token_de_leitura_v4
```

O token é o **API Read Access Token** (o longo, que começa com `eyJ...`), pego em https://www.themoviedb.org/settings/api. A API key v3 curta de 32 caracteres não funciona aqui, porque o cliente HTTP autentica via header `Authorization: Bearer`. O Vite só expõe variáveis com o prefixo `VITE_`, e o `.env` precisa de um restart do dev server pra ser lido.

## Estrutura

```
src/
  main.tsx        bootstrap (BrowserRouter + QueryClientProvider)
  App.tsx         definição das rotas
  layouts/        AppLayout (sidebar de navegação + Outlet)
  pages/          uma página por seção
  components/
    ui/           componentes reutilizáveis (Box, Badge, ButtonProp, IconBox)
      Inputs/     família de inputs controlados
      Alert/      Alert e AlertContainer (sistema de toast)
    ModalComponent, CardComponentProp
  data/           acesso à API (httpClientBase genérico + movie.data)
  hooks/          data fetching com React Query (useMovie)
  types/          tipos de domínio (Movie, MovieDetails) e Paginated<T>
  assets/icons/   biblioteca de ícones SVG
```

## Seções implementadas

### Componentes (`/components`)
Vitrine de componentes reutilizáveis em uso.

- **Modal** controlado por estado, com fechamento por ESC e por clique no fundo, e trava do scroll da página (useEffect com cleanup).
- **Alerts / Toast** empilháveis no canto, com tipos (sucesso, aviso, erro) e auto-dismiss por timer. A lista é gerenciada com estado imutável, adicionando com spread e removendo com filter.
- **Buttons** com variantes de cor.
- **Input controlado** que atualiza um texto na tela em tempo real.

### Formulários (`/forms`)
Duas abordagens de estado lado a lado.

- Um campo simples com **useState**.
- Um formulário completo com **useReducer** (actions `SET_FIELD` e `RESET`), cobrindo texto, select, multiselect, radio, checkbox e textarea.
- Um painel ao lado mostra o estado do formulário **atualizando em tempo real**.

### API (`/api-demo`)
Consumo da API do TMDB com React Query.

- `data/httpClientBase.ts` é um cliente HTTP genérico, `HttpClientBase<T>`, que monta a URL base, adiciona `language=pt-BR`, injeta o token via header `Authorization: Bearer` e lança erro quando a resposta não vem ok.
- `data/movie.data.ts` define as funções de endpoint (populares, now playing, top rated, upcoming e detalhe), tipadas com `Paginated<Movie>` nas listas e `MovieDetails` no detalhe.
- `hooks/useMovie.ts` embrulha cada função num `useQuery`, com `queryKey` próprio e `staleTime` de 5 minutos.
- A página lista os filmes populares com estados de `isLoading` e `isError`. O endpoint de lista do TMDB devolve um envelope `{ page, results, total_pages, total_results }`, modelado por `Paginated<T>`, e o componente lê `data.results`.

### Família de inputs controlados
Componentes de formulário próprios, todos controlados via `value` e `onChange`.

- `InputText`, `InputTextBox` (textarea), `InputSelect`
- `InputMultiSelect` com dropdown próprio, chips de seleção e fechamento ao clicar fora (useRef + useEffect)
- `InputCheckbox`, `InputRadio` (agrupado por `name`), `InputToggle`

### Componentes base reutilizáveis
`Box` (container com children), `CardComponentProp`, `Badge`, `ButtonProp` (com mapa de variantes de cor) e `IconBox`.

## Conceitos de React já praticados

- `useState`, `useReducer` e `useRef`
- `useEffect` com função de cleanup (ESC do modal, timer do alert, clique fora do multiselect)
- Data fetching com React Query (`useQuery`, `queryKey`, `staleTime`, estados `isLoading` e `isError`)
- Camada de serviço com cliente HTTP genérico e generics em TypeScript (`Paginated<T>`)
- Variáveis de ambiente do Vite (`import.meta.env`, prefixo `VITE_`)
- Composição com `children`
- Componentes controlados
- Listas com `key` e estado imutável (spread, filter)
- Callbacks via props (`onChange`, `onAction`, `onClose`)
- Renderização condicional
- Variantes de componente e tipagem com TypeScript (interfaces, `ComponentType`, `keyof typeof`, `Record`)

## Próximas seções

- **Rotas** (`/routes`) hoje é um esqueleto, vai crescer com rotas aninhadas, parâmetros e lazy loading
- **API** já lista filmes populares, falta usar os outros hooks (now playing, top rated, upcoming, detalhe) e tratar paginação
- **Estado compartilhado** com Context API
- **Listas e CRUD**

## Ferramentas e práticas pendentes

Stack planejada que ainda não entrou no projeto.

- [x] React Query (TanStack Query) para data fetching
- [x] Deploy na Vercel
- [ ] Zustand para estado global
- [ ] cva + tailwind-merge para variantes de componentes
- [ ] Storybook para documentar os componentes
- [ ] Testes com Vitest e React Testing Library
- [ ] CI com GitHub Actions (checagem de tipos e lint nos Pull Requests)

## Deploy

Publicado na Vercel a partir deste repositório. Como o projeto Vite mora na subpasta `ReactLab/`, o **Root Directory** do projeto na Vercel aponta pra essa pasta. A variável `VITE_TMDB_API_KEY` precisa estar configurada também nas Environment Variables da Vercel, já que o `.env` é local e não vai pro Git.

## Status

Em desenvolvimento, publicado na Vercel. As seções de Componentes e Formulários estão completas, e a de API já consome o TMDB com React Query e estados de loading e erro. Rotas segue como esqueleto, e as demais seções do catálogo seguem o roadmap.
