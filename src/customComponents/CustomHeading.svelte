<script lang="ts">
	import type { BlockProps } from '@portabletext/svelte';

	export let portableText: BlockProps;
	$: block = portableText.block;

	$: style = block.style;

	$: anchorId = `heading-${block._key}`;
</script>

<div class="relative mt-10'" id={anchorId}>
	{#if style == 'h1'}
		<h1>
			<slot />
			<a href="#{anchorId}">
				<span aria-label="Link to this heading">🔗</span>
			</a>
		</h1>
	{:else if style == 'h2'}
		<h2>
			<slot />
			<a href="#{anchorId}">
				<span aria-label="Link to this heading">🔗</span>
			</a>
		</h2>
	{:else if style == 'h3'}
		<h3>
			<slot />
			<a href="#{anchorId}">
				<span aria-label="Link to this heading">🔗</span>
			</a>
		</h3>
	{:else if style == 'h4'}
		<h4>
			<slot />
			<a href="#{anchorId}">
				<span aria-label="Link to this heading">🔗</span>
			</a>
		</h4>
	{:else if style == 'h5'}
		<h5>
			<slot />
			<a href="#{anchorId}">
				<span aria-label="Link to this heading">🔗</span>
			</a>
		</h5>
	{:else}
		<h6>
			<slot />
			<a href="#{anchorId}">
				<span aria-label="Link to this heading">🔗</span>
			</a>
		</h6>
	{/if}
</div>
