<script context="module">
	import { nav_items } from '../stores/navStore';
</script>

<li><a sveltekit:prefetch href="/">Home</a></li>
{#each $nav_items as nav_page}
	{#if nav_page.slug !== null}
		<li><a sveltekit:prefetch href={nav_page.slug.current}>{nav_page.title}</a></li>
	{:else}
		<li tabindex="0">
			<span class="justify-between">
				{nav_page.title}
				<svg
					class="fill-current"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg
				>
			</span>
			<ul class="dropdown-content menu p-2 shadow bg-secondary rounded-box z-50">
				{#each nav_page.pages as nav_dropdown_page}
					<li>
						<a sveltekit:prefetch href={nav_dropdown_page.slug.current} class="hover:underline">{nav_dropdown_page.title}</a
						>
					</li>
				{/each}
			</ul>
		</li>
	{/if}
{/each}

<style>
	li {
		font-size: larger;
	}
</style>
