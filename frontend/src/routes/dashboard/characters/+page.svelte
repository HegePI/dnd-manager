<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

{#if data.error}
	<p>Error loading characters: {data.error.message}</p>
{:else if data.data}
	<p>Characters loaded successfully.</p>
	<ul>
		{#each data.data.charactersCollection?.edges ?? [] as edge (edge?.node?.id)}
			<li>{edge?.node?.name}</li>
		{/each}
	</ul>
{/if}
