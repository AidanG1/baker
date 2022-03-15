<script>
	import ThemeChange from './ThemeChange.svelte';
	import { nav_items } from '../stores/navStore';
</script>

<div class="navbar bg-base-100 border-secondary border-b-2 border-bottom">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				{#each $nav_items as nav_page}
					{#if nav_page._type == 'page'}
						<li><a sveltekit:prefetch href={nav_page.slug.current}>{nav_page.title}</a></li>
					{:else}
						<!-- <li tabindex="0">
					<a class="justify-between">
						Parent
						<svg
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg
						>
					</a>
					<ul class="p-2">
						<li><a>Submenu 1</a></li>
						<li><a>Submenu 2</a></li>
					</ul>
				</li> -->
					{/if}
				{/each}
			</ul>
		</div>
		<a class="btn btn-ghost normal-case text-xl" href="/"
			>Baker <img src="bakerCrest.svg" alt="Baker Logo" width="45" /></a
		>
	</div>
	<div class="navbar-center hidden md:flex">
		<ul class="menu menu-horizontal p-0">
			{#each $nav_items as nav_page}
				{#if nav_page._type == 'page'}
					<li><a sveltekit:prefetch href={nav_page.slug.current}>{nav_page.title}</a></li>
				{:else}
					<!-- <li tabindex="0">
					<a>
						Parent
						<svg
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
						>
					</a>
					<ul class="p-2">
						<li><a>Submenu 1</a></li>
						<li><a>Submenu 2</a></li>
					</ul>
				</li> -->
				{/if}
			{/each}
		</ul>
	</div>
	<div class="navbar-end">
		<ThemeChange />
		<a class="btn" href="https://github.com/AidanG1/baker" target="_blank"
			><img src="octocat1.png" alt="Github Logo" width="45" /></a
		>
	</div>
</div>
