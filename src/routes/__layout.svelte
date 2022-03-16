<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
	import '../app.css';
	import PageTransition from '../components/PageTransition.svelte';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	export let url: string;
</script>

<Nav />
<main class="container p-2 place-content-center">
	<PageTransition {url}>
		<slot />
	</PageTransition>
</main>
<Footer />
