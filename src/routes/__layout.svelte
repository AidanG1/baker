<script lang="ts">
	import '../app.css';
	import type { pageType, dropdownType } from '$lib/types';
	// export let nav: Array<pageType> | Array<dropdownType>;
	import Nav from '../components/Nav.svelte';
</script>

<Nav />
<main class="container p-2 place-content-center">
	<slot />
</main>
