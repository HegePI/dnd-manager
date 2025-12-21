import { graphql } from '$lib/gql';
import type { PageServerLoad } from './$types';
import { serverUrqlClient } from '$lib/server/urql';

export const load: PageServerLoad = async () => {
	const getCharactersQuery = graphql(`
		query getCharacters {
			charactersCollection {
				pageInfo {
					hasNextPage
				}
				edges {
					node {
						id
						userId
						name
						createdAt
					}
				}
			}
		}
	`);

	const data = await serverUrqlClient.query(getCharactersQuery, {}).toPromise();

	return data;
};
