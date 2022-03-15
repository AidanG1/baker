<!-- <script context="module">
	import bakerClient from '$lib/sanity';
	export async function load() {
		const outer_query = '*[_type == "nav" && nav_type == "navbar"][0] {content}';
		const nav = await bakerClient.fetch(outer_query);
		let nav_pages = [];
		for (let nav_item of nav.content) {
			const query = '*[_id == $id][0]';
			const query_params = { id: nav_item._ref };
			const query_nav_item = await bakerClient.fetch(query, query_params);
			console.log(query_nav_item);
			nav_pages.push(query_nav_item);
		}
		return {
			props: {
				nav: nav_pages
			}
		};
	}
</script> -->
<script lang="ts">
	import '@kahi-ui/framework/dist/kahi-ui.framework.min.css';
	import '@kahi-ui/framework/dist/kahi-ui.theme.default.min.css';
	import { Anchor, Box, Divider, Menu, Omni, Popover, Text, Container } from '@kahi-ui/framework';
	const { Footer, Header, Section } = Omni;
	import type { pageType, dropdownType } from '$lib/types';
	// export let nav: Array<pageType> | Array<dropdownType>;
	import Nav from '../components/Nav.svelte';
</script>

<Nav />
<Omni.Container>
	<Omni.Header>
		<a href="/"><img src="/bakerCrest.svg" alt="Baker College Logo" width="50" />Baker College</a>
	</Omni.Header>

	<Omni.Section hidden={['mobile', 'tablet']}>
		<Menu.Container orientation="horizontal">
			<!-- {#each nav as nav_item}
				{#if nav_item._type == 'page'}
					<Menu.Button><a href={nav_item.slug.current}>{nav_item.title}</a></Menu.Button>
				{:else}
					{#each nav_item.pages as dropdown_page}
						<Menu.Button><a href={dropdown_page.slug.current}>{dropdown_page.title}</a></Menu.Button
						>
					{/each}
				{/if}
			{/each} -->
		</Menu.Container>
	</Omni.Section>

	<Omni.Footer>
		<Menu.Container hidden={['mobile', 'tablet']} orientation="horizontal" sizing="tiny">
			<Menu.Button>GitHub</Menu.Button>
		</Menu.Container>

		<Popover.Container hidden={['desktop', 'widescreen']} logic_id="omni-collapsing" dismissible>
			<Popover.Button palette="light" variation="clear">+</Popover.Button>

			<Popover.Section alignment_x="left" spacing="small">
				<Box variation="borders" elevation="medium" padding="medium" radius="tiny">
					<Menu.Container sizing="tiny">
						<Menu.Button active>Docs</Menu.Button>

						<Menu.Button>Playground</Menu.Button>

						<Menu.Button>Storybook</Menu.Button>

						<Menu.Button>GitHub</Menu.Button>
					</Menu.Container>
				</Box>
			</Popover.Section>
		</Popover.Container>
	</Omni.Footer>
</Omni.Container>
<main><slot /></main>

<style>
	main {
		padding: 1vw;
	}
</style>
