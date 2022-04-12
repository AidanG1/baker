<script>
	import ThemeChange from './ThemeChange.svelte';
	import InnerNav from './InnerNav.svelte';
	import Search from './Search.svelte';
</script>

<div class="navbar bg-base-100 border-secondary border-b-2 border-bottom">
	<div class="navbar-start">
		<div class="dropdown">
			<span tabindex="0" class="btn btn-ghost btn-circle lg:hidden">
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
			</span>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
				z-index="15"
			>
				<InnerNav />
			</ul>
		</div>
		<a class="btn btn-ghost normal-case text-3xl text-accent" href="/">
			Baker <img src="bakerCrest.svg" alt="Baker Logo" width="45" height="45" />
		</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal p-0" z-index="15">
			<InnerNav />
		</ul>
	</div>
	<div class="navbar-end">
		<Search />
		<ThemeChange />
		<a class="btn" href="https://github.com/AidanG1/baker" target="_blank">
			<!-- <picture>
				<source srcset="/octocat1.avif" type="image/avif" width="45" />
				<img src="/octocat1.png" alt="Github Logo" width="45" />
			</picture> -->
			<img src="/octocat120x120.png" alt="Github Logo" width="45" height="45" />
		</a>
	</div>
</div>
