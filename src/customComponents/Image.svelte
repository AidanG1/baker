<script lang="ts">
	import type { BlockProps } from '@portabletext/svelte';
	import bakerClient from '$lib/sanity';

	export let portableText: BlockProps<{
		asset: {
			_ref: string;
			_type: string;
		};
		_key: string;
		_type: string;
	}>;
	async function get_img() {
		const query = '*[_type == "image" && _id == $ref][0]';
		const query_params = { ref: block.asset._ref };
		const { img } = await bakerClient.fetch(query, query_params);
        return img
	}
	$: image = get_img();
</script>

<figure>
	<img src={image.url} alt={image.alt} />
</figure>
