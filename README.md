# Overview

This is the official website for *25 To Life: Classic* built with [SvelteKit](https://kit.svelte.dev/).

The project uses SvelteKit with plain JavaScript and consists of:

- [SQLite](https://www.sqlite.org/index.html) database (not included)
- SvelteKit server (Node.js)

# Additional dependencies

The SvelteKit server targets [Node.js](https://nodejs.org/en/) and makes use of [@sveltejs/adapter-node](https://www.npmjs.com/package/@sveltejs/adapter-node).

The code utilizes:

- [ESLint](https://eslint.org/)
- [Prisma](https://www.prisma.io/) (ORM)
- [Svelte Material UI](https://sveltematerialui.com/) components (Svelte components)
- [TailwindCSS](https://tailwindcss.com/) (styling)

# How to run

## Configuration

Make sure you have Node.js installed (v16.15.1 or newer):

```
node -v
```

Create `.env` file with `DATABASE_URL` variable containing SQLite connection string in [Prisma's format](https://www.prisma.io/docs/concepts/database-connectors/sqlite#example):

```
DATABASE_URL=<relative or absolute sqlite file path>
```

## Installation

1. Install dependencies:

```
npm install
```

2. [Generate Prisma client](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/generating-prisma-client):

```
npx prisma generate
```

## Running

```
npm run dev
```
