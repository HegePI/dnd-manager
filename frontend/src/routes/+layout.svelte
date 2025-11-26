<script lang="ts">
	import { cacheExchange, Client, fetchExchange, setContextClient } from '@urql/svelte';
	import Footer from '../stories/Footer.svelte';
	import Header from '../stories/Header.svelte';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();

	const client = new Client({
		url: 'http://localhost:3000/rpc/graphql',
		exchanges: [cacheExchange, fetchExchange]
	});

	setContextClient(client);

	const onLogin = () => {
		alert('Login clicked');
	};
	const onLogout = () => {
		alert('Logout clicked');
	};
	const onCreateAccount = () => {
		alert('Create Account clicked');
	};
</script>

<div class="app">
	<Header {onLogin} {onLogout} {onCreateAccount} />
	<main>
		{@render children?.()}
	</main>
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
