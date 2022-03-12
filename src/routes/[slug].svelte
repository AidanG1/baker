<script lang="ts">
	import type { pageType } from '$lib/types';
	import Image from '../customComponents/Image.svelte';
	export let page: pageType;
	import PortableText from '@portabletext/svelte';
	console.log(page);
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>
<PortableText
	blocks={[page.body]}
	serializers={{
		types: {
			image: Image
		}
	}}
/>
