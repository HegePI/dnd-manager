<script lang="ts">
	import './header.css';
	import Button from './Button.svelte';

	interface Props {
		user?: { name: string };
		onLogin?: () => void;
		onLogout?: () => void;
		onCreateAccount?: () => void;
	}

	const { user, onLogin, onLogout, onCreateAccount }: Props = $props();
</script>

<header>
	<div class="storybook-header">
		<nav>
			<a href="/">Home</a>
			<a href="/dashboard">Dashboard</a>
			<a href="/dashboard/character_sheet_creator">Character sheet creator</a>
		</nav>
		<div>
			{#if user}
				<span class="welcome">
					Welcome, <b>{user.name}</b>!
				</span>
				<Button size="small" onclick={onLogout} label="Log out" />
			{:else}
				<Button size="small" onclick={onLogin} label="Log in" />
				<Button primary size="small" onclick={onCreateAccount} label="Sign up" />
			{/if}
		</div>
	</div>
</header>
