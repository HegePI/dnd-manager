<script lang="ts">
	import { graphql } from '$lib/gql';
	import { getContextClient, queryStore } from '@urql/svelte';

	const getCharactersQuery = graphql(`
		query getCharacters {
			charactersCollection {
				pageInfo {
					hasNextPage
				}
				edges {
					node {
						userId
						name
						createdAt
					}
				}
			}
		}
	`);

	const characters = queryStore({
		client: getContextClient(),
		query: getCharactersQuery
	});
</script>

{#if $characters.fetching}
	<p>Loading...</p>
{:else if $characters.error}
	<p>Oh no... {$characters.error.message}</p>
{:else if $characters.data}
	<ul>
		{#each $characters.data.charactersCollection?.edges as edge (edge?.node.userId)}
			<li>{edge.node.name}</li>
		{/each}
	</ul>
{/if}
