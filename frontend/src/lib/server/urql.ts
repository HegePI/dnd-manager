import { Client, fetchExchange } from '@urql/core';
import { env } from '$env/dynamic/public';

export const serverUrqlClient = new Client({
	url: env.PUBLIC_GRAPHQL_URL || 'http://localhost:3000/rpc/graphql',
	exchanges: [fetchExchange],
	fetchOptions: {
		headers: {
			'Content-Type': 'application/json'
		}
	}
});
