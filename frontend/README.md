# Modern React + TypeScript Project Template

A modern React project template with TypeScript, ESLint, Prettier, and Git hooks.

## Features

### Core

- ⚡️ [Vite](https://vitejs.dev/) - Lightning fast build tool
- ⚛️ [React 18](https://reactjs.org/) - JavaScript library for user interfaces
- 📘 [TypeScript](https://www.typescriptlang.org/) - Type safety
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- 💅 [DaisyUI](https://daisyui.com/) - Tailwind CSS component library

### Code Quality

- 📝 [ESLint](https://eslint.org/) - Linting utility
- 💖 [Prettier](https://prettier.io/) - Code formatter
- 🐶 [Husky](https://typicode.github.io/husky/) - Git hooks
- 📋 [lint-staged](https://github.com/okonet/lint-staged) - Run linters on git staged files
- 📏 [commitlint](https://commitlint.js.org/) - Lint commit messages

### Development Features

- 📁 Path Aliases (`@/*`, `@components/*`, etc.)
- 🔄 Hot Module Replacement
- ⚡️ Auto Import Sorting
- 🔍 TypeScript strict mode
- 🧹 Auto-fix on save
- 💪 Enforced code style

## Getting Started

### Prerequisites

- Node.js 16+
- Yarn

### Installation

1. Clone this repository:

```bash
git clone https://github.com/yourusername/your-repo.git
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

4. Build for production:

```bash
yarn build
```

5. Open your browser and navigate to `http://localhost:5173` to see the app in action.

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Check for linting errors
- `yarn lint:fix` - Fix linting errors
- `yarn format` - Format code with Prettier

### Git Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git commit -m "feat: add new feature"
```

### Format

type(scope?): description

- feat: A new feature
- fix: A bug fix
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing tests or correcting existing tests

### Project Structure

```bash
src/
├── components/ # Reusable components
├── pages/ # Page components
├── hooks/ # Custom hooks
├── utils/ # Helper functions
├── services/ # API calls
├── types/ # TypeScript types
└── assets/ # Static assets
```
