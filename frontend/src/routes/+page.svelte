<script lang="ts">
	import { cacheExchange, Client, fetchExchange, setContextClient } from '@urql/svelte';

	const client = new Client({
		url: 'http://localhost:3000/rpc/graphql',
		exchanges: [cacheExchange, fetchExchange]
	});

	setContextClient(client);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Manager for all dnd" />
</svelte:head>

<div>
	<section>
		<h1>Welcome to the DND manager!</h1>
	</section>
</div>

<style>
	h1 {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
