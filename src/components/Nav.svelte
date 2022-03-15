<script>
	import bakerClient from '$lib/sanity';
	async function load() {
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
		return nav_pages;
	}
	let nav_pages = [];
	load().then((returned_pages) => {
		nav_pages = returned_pages;
		console.log(nav_pages);
	});
</script>

{nav_pages}
