<script lang="ts">
	import type { BlockProps } from '@portabletext/svelte';

	export let portableText: BlockProps;
	$: block = portableText.block;
</script>

<p><slot /></p>
