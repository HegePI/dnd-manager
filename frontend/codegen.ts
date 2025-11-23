import type { CodegenConfig } from '@graphql-codegen/cli';
import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset';

const config: CodegenConfig = {
	schema: 'http://localhost:3001/rpc/graphql', // Using the local endpoint, update if needed
	documents: 'src/**/*.gql',
	overwrite: true,
	ignoreNoDocuments: true,
	generates: {
		'src/lib/gql/': {
			preset: 'client',
			documentTransforms: [addTypenameSelectionDocumentTransform],
			plugins: ['typescript', 'typescript-operations', 'graphql-codegen-svelte-apollo'],
			config: {
				scalars: {
					UUID: 'string',
					Date: 'string',
					Time: 'string',
					Datetime: 'string',
					JSON: 'string',
					BigInt: 'string',
					BigFloat: 'string',
					Opaque: 'any'
				}
			}
		}
	},
	hooks: {
		afterAllFileWrite: ['bun run prettier'] // optional
	}
};

export default config;
