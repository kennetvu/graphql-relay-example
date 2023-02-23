import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './src/graphql/schema.graphql',
  generates: {
    'src/graphql/__generated__/types.ts': {
      config: { contextType: '../../pages/api/graphql#Context' },
      plugins: ['typescript', 'typescript-resolvers'],
    },
    'src/graphql/__generated__/typedefs.ts': {
      plugins: ['src/graphql/codegen-typedefs.js'],
    },
  },
};

export default config;
