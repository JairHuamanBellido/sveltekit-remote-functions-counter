<script lang="ts">
	import { getCount, incrementCounter } from './counter.remote';
</script>

<svelte:head>
	<title>Counter</title>
</svelte:head>

<main>
	<p>Counter: {await getCount()}</p>
	<button
		onclick={async () => {
			try {
				await incrementCounter();
			} catch (error) {
				alert(error);
			}
		}}>	Increment by 1</button
	>
</main>

<style scoped>
	:root {
		--primary: #ff4343;
		--primaryForeground: #ffffff;
	}
	* {
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
	}
	p {
		font-size: 24px;
		font-weight: 300;
	}
	main {
		width: 100dvw;
		height: 100dvh;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		column-gap: 1rem;
	}

	button {
		border: none;
		padding: 12px 16px;
		background: var(--primary);
		color: var(--primaryForeground);
		border-radius: 0.5rem;
		font-size: 16px;
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}

	button:active {
		transform: scale(0.95);
	}
</style>
