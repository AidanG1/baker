<script lang="ts">
	import type { pageType } from '$lib/types';
	import Image from '../customComponents/Image.svelte';
	import CustomHeading from '../customComponents/CustomHeading.svelte';
	import CustomParagraph from '../customComponents/CustomParagraph.svelte';
	export let page: pageType;
	import PortableText from '@portabletext/svelte';
	console.log(page);
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>
<article class="prose place-self-center">
	<PortableText
		blocks={page.body}
		serializers={{
			types: {
				image: Image
			},
			blockStyles: {
				normal: CustomParagraph,
				h1: CustomHeading,
				h2: CustomHeading,
				h3: CustomHeading
			}
		}}
	/>
	<p>Last updated: {page._updatedAt.slice(0, 10)}</p>
</article>
