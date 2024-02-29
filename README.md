# Turborepo Starter

## Getting Started

This repository is a simle Turborepo starter which contains the basic Turborepo setup and configuration.

To start using, you can use the following commands:

```zsh
pnpm install

pnpm dev

pnpm build

pnpm test
```

This project also has some configured some tools like:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Jest](https://jestjs.io/) for unit testing
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Applications

Located under `/apps`, you will find an application.

- `app-one`: a simple [Next.js](https://nextjs.org/) app



## Packages

In this example, there is a single shared package called `commerce` which is basic shared package which comes pre-configured.



## Shared Configuration

Located under `/packages/config` is all of the shared configuration which the Turborepo uses. This is a great space to put handy developer tools and code cleanliness configuration.

- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/jest-config`: `jest` configurations for `browser` and `node` configurations
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo



## Useful Turborepo Links

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
