<script>
	// https://angelblanco.dev/articles/simple-svelte-back-to-top/
	export let showOnPx = 150;
	let hidden = true;

	function goTop() {
		document.body.scrollIntoView();
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="back-to-top btn text-4xl" on:click={goTop} class:hidden>↑</div>

<style>
	.back-to-top {
		opacity: 1;
		transition: opacity 0.5s, visibility 0.5s;
		position: fixed;
		z-index: 99;
		right: 20px;
		user-select: none;
		bottom: 20px;
		color: hsla(var(--bc) / var(--tw-text-opacity, 1));
		background-color:  hsla(var(--b1) / var(--tw-text-opacity, 1));
	}

	.back-to-top.hidden {
		opacity: 0;
		visibility: hidden;
	}
</style>
