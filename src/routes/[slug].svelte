<script lang="ts">
	import type { pageType } from '$lib/types';
	import Image from '../customComponents/Image.svelte';
	import CustomHeading from '../customComponents/CustomHeading.svelte';
	import CustomParagraph from '../customComponents/CustomParagraph.svelte';
	export let page: pageType;
	import PortableText from '@portabletext/svelte';
	import BackToTop from '../components/BackToTop.svelte';
	console.log(page);
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>
<article class="prose place-self-center lg:max-w-none">
	{#if page.body !== null}
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
	{/if}
	{#if page.files !== null}
		{#each page.files as file}
			<a class="btn" href={file.url} target="_blank">{file.originalFilename}</a>
		{/each}
	{/if}
	<BackToTop />
	<p>Last updated: {page._updatedAt.slice(0, 10)}</p>
</article>
