<script lang="ts">
	import bakerClient from '$lib/sanity';
	import type { pageType } from '$lib/types';

	let search_query = '';
	let recent_run = new Date().getTime();
	let search_results = [];

	async function search(searchQuery: string): Promise<any> {
		if (new Date().getTime() - recent_run < 500) {
			recent_run = new Date().getTime();
			return;
		}
		const query =
			'*[type === "page"] | score(pt::text(body) match $searchQuery) | order(score desc) { title, slug, body}';
		const query_params = { searchQuery: searchQuery };
		const results = await bakerClient.fetch(query, query_params);
		results.then((res: pageType[]) => {
			search_results = res;
		});
	}

	$: {
		search(search_query);
	}
</script>

<!-- The button to open modal -->
<label for="my-modal-4" class="btn modal-button kbd">🔎</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-4" class="modal-toggle" />
<label for="my-modal-4" class="modal cursor-pointer">
	<label class="modal-box relative" for="">
		<label class="input-group p-2 text-xl">
			<span>Search</span>
			<input
				type="text"
				placeholder="Search"
				class="input input-accent text-xl"
				bind:value={search_query}
			/>
		</label>
		<ol>
			{#each search_results as result}
				<li><a href={result.slug}>{result.title}</a></li>
			{/each}
		</ol>
	</label>
</label>
