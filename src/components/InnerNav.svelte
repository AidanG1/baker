<script context="module">
	import { nav_items } from '../stores/navStore';
</script>

<li><a sveltekit:prefetch href="/">Home</a></li>
{#each $nav_items as nav_page}
	{#if nav_page.slug !== null}
		<li><a sveltekit:prefetch href={nav_page.slug.current}>{nav_page.title}</a></li>
	{:else}
		<div class="dropdown dropdown-hover">
			<span tabindex="0" class="btn m-1">{nav_page.title}</span>
			<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
				{#each nav_page.pages as nav_dropdown_page}
					<li>
						<a sveltekit:prefetch href={nav_dropdown_page.slug.current}>{nav_dropdown_page.title}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
{/each}

<style>
	li {
		font-size: larger;
	}
</style>
