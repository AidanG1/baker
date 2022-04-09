import { readable, derived } from 'svelte/store';
import bakerClient from '$lib/sanity';

export const nav_items = readable([], (set) => {
    async function load() {
        const query = '*[_type == "nav" && nav_type == "navbar"][0] {"content": content[]->{title, slug, pages[]->{title, slug}}}';
        const nav = await bakerClient.fetch(query);
        return nav;
    }
    load().then((returned_pages) => {
        set(returned_pages.content)
    });
});

export const page_length = derived(
	nav_items,
	$nav_items => $nav_items.map(page => page.slug !== null).length
);