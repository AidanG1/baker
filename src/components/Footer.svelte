<script context="module">
	import { nav_items, page_length } from '../stores/navStore';
	import FooterSocials from './FooterSocials.svelte';
</script>

<footer class="footer p-10 bg-secondary text-secondary-content">
	<div>
		<img src="bakerCrest.svg" alt="Baker Logo" width="100" height="100" />
		<p>
			<a
				href="https://riceconnect.rice.edu/donation/support-baker-college"
				target="_blank"
				class="btn btn-accent">Donate!</a
			>
		</p>
		<p>Baker College<br />Number One Since 1957<br />6320 Main Street<br />Houston, Texas 77005</p>
	</div>
	<div>
		<p><a sveltekit:prefetch href="/feedback" class="btn btn-accent">Feedback</a></p>
		<span class="footer-title">Socials</span>
		<FooterSocials />
	</div>
	{#if $page_length !== $nav_items.length}
		<div>
			<span class="footer-title">Pages</span>
			{#each $nav_items as page}
				{#if page.slug !== null}
					<a sveltekit:prefetch href={page.slug.current}>{page.title}</a>
				{/if}
			{/each}
		</div>
	{/if}
	{#each $nav_items as dropdown}
		{#if dropdown.slug === null}
			<div>
				<span class="footer-title font-bold">{dropdown.title}</span>
				{#each dropdown.pages as page}
					<a sveltekit:prefetch href={page.slug.current}>{page.title}</a>
				{/each}
			</div>
		{/if}
	{/each}
</footer>

<style>
	footer {
		box-shadow: 0 100vh 0 100vh hsl(var(--s));
	}
</style>
