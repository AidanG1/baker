<script>
	import bakerClient from '$lib/sanity';

	async function getNav() {
		const query = '*[_type == "nav" && nav_type == "navbar"][0]';
		const nav = await bakerClient.fetch(query);
		if (nav) {
			return nav;
		} else {
			return [];
		}
	}

	let nav = [];
	getNav()
		.then((navbar) => {
			nav = navbar;
		})
		.catch((error) => {
			console.log(error);
		});
	console.log(nav);
</script>

{nav}
