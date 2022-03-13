<script lang="ts">
	import type { BlockProps } from '@portabletext/svelte';
	import urlFor, { captionFor } from '$lib/url_builder';
	export let portableText: BlockProps<{
		asset: {
			_ref: string;
			_type: string;
		};
		_key: string;
		_type: string;
		caption: string;
	}>;
	$: asset = portableText.block.asset;
	$: caption = portableText.block.caption;
</script>

<figure>
	<img src={urlFor(asset._ref).url()} alt={caption} />
	<figcaption>{caption}</figcaption>
</figure>
