# prisma-generator-graphql

> A prisma generator that generates a graphql schema from your prisma schema

## usage

```sh
npm i -D @stringke/prisma-generator-graphql
```

```sh
yarn add -D @stringke/prisma-generator-graphql
```

```sh
pnpm i -D @stringke/prisma-generator-graphql
```

```prisma
generator graphql {
  provider = "prisma-generator-graphql"
  output   = "./generated"
  outputName = "schema.graphql"
}
```

