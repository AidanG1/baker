<script context="module">
	import bakerClient from '$lib/sanity';
	export async function load({}) {
		const query = '*[_type == "page"]';
		const nav = await bakerClient.fetch(query, {});
        console.log(nav)
		if (nav) {
			return {
				props: {
					nav: nav
				}
			};
		} else {
			return {
				props: {
					nav: []
				}
			};
		}
	}
</script>

<script>
	export let nav;
	console.log(nav);
</script>

{nav}
