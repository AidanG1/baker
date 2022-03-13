<script lang="ts">
	import type { BlockProps } from '@portabletext/svelte';
	import { Heading } from '@kahi-ui/framework';

	export let portableText: BlockProps;
	$: block = portableText.block;

	$: style = block.style;

	$: anchorId = `heading-${block._key}`;
</script>

<div class="relative mt-10'" id={anchorId}>
	<Heading is={style}>
		<slot />
		<a href="#{anchorId}">
			<span aria-label="Link to this heading">🔗</span>
		</a>
	</Heading>
</div>
