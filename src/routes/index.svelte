<script lang="ts">
	import Calendar from '../components/Calendar.svelte';
	import Map from '../components/Map.svelte';
	import { ConfettiExplosion } from 'svelte-confetti-explosion';
	import { tick } from 'svelte';
	let isVisible: boolean = false;
	async function visibility() {
		isVisible = false;
		await tick();
		isVisible = true;
	}
</script>

<svelte:head>
	<title>Baker College</title>
</svelte:head>

{#if isVisible}
	<div id="confetti" class="justify-center flex">
		<ConfettiExplosion colors={['#862616', '#f2b30c', '#b3baba', '#040404', '#b3baba']} />
	</div>
{/if}
<div class="hero min-h-screen" style="background-image: url(bg-light-theme.svg)">
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center bg-base-100 rounded-lg">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">Welcome to Baker College</h1>
			<p class="mb-5">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
			<button class="btn btn-primary" on:click={visibility}>Celebrate!</button>
		</div>
	</div>
</div>

<Calendar />
<div class="flex justify-center">
	<Map />
</div>
