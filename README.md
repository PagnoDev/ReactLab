# React Lab

Projeto pessoal para praticar React na transição de Angular para React. Funciona como um catálogo visual, onde cada seção implementa uma funcionalidade independente focada em um conceito essencial do ecossistema. O foco é exercitar React, TypeScript e Tailwind construindo componentes e telas de verdade.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- React Router 7
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

## Estrutura

```
src/
  layouts/        AppLayout (sidebar de navegação + Outlet)
  pages/          uma página por seção
  components/
    ui/           componentes reutilizáveis (Box, Badge, ButtonProp, IconBox)
      Inputs/     família de inputs controlados
      Alert/      Alert e AlertContainer (sistema de toast)
    ModalComponent, CardComponentProp
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
- Composição com `children`
- Componentes controlados
- Listas com `key` e estado imutável (spread, filter)
- Callbacks via props (`onChange`, `onAction`, `onClose`)
- Renderização condicional
- Variantes de componente e tipagem com TypeScript (interfaces, `ComponentType`, `keyof typeof`, `Record`)

## Próximas seções

- **Rotas** (`/routes`) hoje é um esqueleto, vai crescer com rotas aninhadas, parâmetros e lazy loading
- **API e useEffect** já aparece no menu, falta a página, com consumo de API e estados de loading e erro
- **Estado compartilhado** com Context API
- **Listas e CRUD**

## Ferramentas e práticas pendentes

Stack planejada que ainda não entrou no projeto.

- [ ] React Query (TanStack Query) para data fetching
- [ ] Zustand para estado global
- [ ] cva + tailwind-merge para variantes de componentes
- [ ] Storybook para documentar os componentes
- [ ] Testes com Vitest e React Testing Library
- [ ] CI/CD com GitHub Actions e deploy na Vercel

## Status

Em desenvolvimento. As seções de Componentes e Formulários já estão completas e ricas. Rotas é um esqueleto, e as demais seções do catálogo seguem o roadmap.
