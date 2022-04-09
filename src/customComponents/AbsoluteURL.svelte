<!-- AbsoluteURL (custom mark) -->
<script lang="ts">
	import type { MarkProps } from '@portabletext/svelte';

	// Property custom marks receive from @portabletext/svelte when redered
	export let portableText: MarkProps<{
		href?: string;
	}>;

	// Remember to make your variables reactive so that they can reflect prop changes
	// See: https://svelte.dev/docs#3_$_marks_a_statement_as_reactive
	$: mark = portableText.mark;
</script>

{#if mark.href}
	<a href={mark.href} target="_blank"><slot /></a>
{:else}
	<slot />
{/if}
