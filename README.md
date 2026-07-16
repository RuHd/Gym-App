# Gym App (Volt)

Aplicação de treino pessoal desenvolvida em Next.js, para criar exercícios, organizá-los em grupos de treino (A, B, C, D) e acompanhar sessões de treino em tempo real, com contagem de séries, repetições, carga e descanso entre séries.

Todo o armazenamento é feito localmente no navegador (via `localStorage`), sem necessidade de backend ou banco de dados — é um projeto front-end completo, ideal para uso pessoal ou como estudo de arquitetura front-end.

## Funcionalidades

- **Cadastro de perfil** — nome, e-mail, altura e peso, salvos localmente (sem autenticação real).
- **Criação de exercícios** — nome, número de séries/repetições e grupo muscular (A/B/C/D).
- **Sessão de treino** — tela dedicada para executar o treino do dia, com:
  - Lista de séries editável (repetições e carga por série).
  - Timer de descanso entre séries (iniciar, pular, adicionar +15s).
  - Histórico da última sessão.
- **Estado vazio guiado** — se nenhum exercício foi criado ainda, o usuário é direcionado a criar o primeiro.
- **Navegação inferior fixa** — acesso rápido a Início, Adicionar Exercício, Cadastro e Treino.

## Tecnologias

- [Next.js 16](https://nextjs.org/) (App Router) + [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://github.com/pmndrs/zustand) com middleware `persist` (estado global + localStorage)
- [Sass](https://sass-lang.com/) (um arquivo `.scss` por componente)
- [Storybook](https://storybook.js.org/) para desenvolvimento isolado de componentes
- [Vitest](https://vitest.dev/) + Playwright para testes
- [react-icons](https://react-icons.github.io/react-icons/)

## Estrutura do projeto

```
src/
├── app/            # Rotas (App Router), layout raiz e transições de página
├── components/     # Componentes de UI reutilizáveis (botões, inputs, timer, etc.)
├── features/        # Lógica de domínio por feature (authentication, workout)
│   ├── authentication/  # Tipos e store Zustand do perfil do usuário
│   └── workout/         # Tipos, mocks e store Zustand dos treinos/exercícios
├── hooks.tsx        # Hooks compartilhados
└── stories/         # Boilerplate do Storybook
```

## Rotas principais

| Rota | Descrição |
| --- | --- |
| `/` | Início, com atalhos para iniciar treino, listar e criar exercícios |
| `/AddTreino` | Formulário de criação de exercício |
| `/Treino` | Sessão de treino ativa (séries, timer de descanso) |
| `/emptyTraining` | Estado vazio, quando não há exercícios cadastrados |
| `/Cadastro` | Cadastro/edição do perfil do usuário |

## Getting Started

Instale as dependências e rode o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

Para desenvolver componentes isoladamente com o Storybook:

```bash
npm run storybook
```

## Testes

O projeto usa [Vitest](https://vitest.dev/) integrado ao Storybook para testes de componentes:

```bash
npx vitest
```
