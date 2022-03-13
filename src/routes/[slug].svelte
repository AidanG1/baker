<script lang="ts">
	import type { pageType } from '$lib/types';
	import Image from '../customComponents/Image.svelte';
	import CustomHeading from '../customComponents/CustomHeading.svelte';
	import CustomParagraph from '../customComponents/CustomParagraph.svelte';
	export let page: pageType;
	import PortableText from '@portabletext/svelte';
	import { Heading, Container } from '@kahi-ui/framework';
	// console.log(page);
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>
<Container is="article">
	<div id="article-heading">
		<Heading is="h1" alignment_x="center">{page.title}</Heading>
	</div>
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
</Container>

<style>
	#article-heading {
		margin-bottom: 3vh;
	}
</style>
