<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import bakerClient from '$lib/sanity';
	import type { searchResults } from '$lib/types';
import { loop_guard } from 'svelte/internal';

	let search_query: string = '';
	let search_results: searchResults[] = [];
	let change: boolean = false;

	async function search(SQ: string) {
		console.log(SQ);
		change = false;
		const query = `*[_type == "page"] | score( 
                boost(title match $SQ, 4), 
                boost(pt::text(body) match $SQ, 1)
            ) | order(
                _score desc
            ) {_score, title, slug, "plaintextBody": pt::text(body)}`;
		const query_params = { SQ: SQ };
		const results = await bakerClient.fetch(query, query_params);
		console.log(results);
		search_results = results.filter((result) => result._score > 0);
		console.log(search_results);
	}
	let interval: NodeJS.Timer;
	onMount(() => {
		interval = setInterval(() => {
			if (change && search_query.length > 0) {
				search(search_query);
			}
		}, 1500);
	});

	onDestroy(() => {
		clearInterval(interval);
	});

	const search_query_change = (sq: string) => {
		change = true;
	};

	$: {
		search_query_change(search_query);
	}
</script>
<!-- The button to open modal -->
<label for="search-modal" class="btn modal-button kbd">🔎</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="search-modal" class="modal-toggle" />
<label for="search-modal" class="modal cursor-pointer">
	<label class="modal-box relative border border-secondary" for="">
		<label class="input-group p-2 text-xl">
			<span>Search</span>
			<input
				type="text"
				placeholder="Search"
				class="input input-accent text-xl"
				bind:value={search_query}
			/>
		</label>
		{#if search_query.length > 0}
			<h2 class="text-l">Found {search_results.length} results</h2>
		{/if}
		<ol>
			{#each search_results as result}
				{@const index = result.plaintextBody.indexOf(search_query)}
				<li>
					<a href={result.slug.current} class="text-secondary">{result.title}</a>
					<em
						>{result.plaintextBody.slice(index - 25, index)}
						<strong>{result.plaintextBody.slice(index, index + search_query.length)}</strong>
						{result.plaintextBody.slice(
							search_query.length + index,
							index + 25 - search_query.length
						)}
					</em>
				</li>
			{/each}
		</ol>
	</label>
</label>
