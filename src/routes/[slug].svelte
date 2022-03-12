<script context="module">
	import { pageClient } from '$lib/sanity';
	import { page } from '$app/stores';
	/** @type {import('@sveltejs/kit').Load */
	export async function load({ props }) {
		const query = '*[slug == $slug] {title, slug, body}';
		const query_params = { slug: page.params.slug };

		pageClient.fetch(query, query_params).then((page) => {
			page = props.page;
		});

		return { props };
	}
</script>

<script lang="ts">
	export let props: object;
	import PortableText from '@portabletext/svelte';
</script>

<PortableText blocks={[props.content]} />
