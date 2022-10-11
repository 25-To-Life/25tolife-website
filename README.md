# Overview

This is the official website for *25 To Life: Classic* built with [SvelteKit](https://kit.svelte.dev/).

The project uses SvelteKit with plain JavaScript and consists of:

- [SQLite](https://www.sqlite.org/index.html) database (not included)
- SvelteKit server (Node.js)

# Additional dependencies

[Vite 3](https://vitejs.dev/) server is used in development and [Node.js](https://nodejs.org/en/) in production - the project makes use of [@sveltejs/adapter-node](https://www.npmjs.com/package/@sveltejs/adapter-node).

The code utilizes:

- [ESLint](https://eslint.org/)
- [Prisma](https://www.prisma.io/) (ORM)
- [Svelte Material UI](https://sveltematerialui.com/) components (Svelte components)
- [svelte-carousel](https://github.com/vadimkorr/svelte-carousel)
- [TailwindCSS](https://tailwindcss.com/) (styling)

# How to run

## Configuration

Make sure you have Node.js installed (v16.9 or newer):

```
node -v
```

Create `.env` file with `DATABASE_URL` variable containing SQLite connection string in [Prisma's format](https://www.prisma.io/docs/concepts/database-connectors/sqlite#example):

```
DATABASE_URL="file:<relative or absolute sqlite file path>"
```

Add `LIVE_API_URL` with the base URL of game's web API.

## Installation

1. Install dependencies:

```
npm install
```

2. [Generate Prisma client](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/generating-prisma-client). Generation is needed anytime there's a change in `prisma/schema.prisma`.

```
npx prisma generate
```

3. Compile [SMUI SCSS themes](https://sveltematerialui.com/THEMING.md) (`src/theme`). Recompilation is needed anytime there's a change in `.scss` files.

```
npm run prepare
```

## Running

### Development

Start in development mode:
```
npm run dev
```
### Production

1. Build the project:
```
npm run build
```
2. Move the `.env` file into `build` directory.

3. Optionally preview the build:
```
npm run preview
```
4. Start in production mode:
```
npm run start
```
