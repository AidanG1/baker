<script context="module">
	import bakerClient from '$lib/sanity';

	async function getSocials() {
		const query = '*[_type == "socials"]';
		const socials = await bakerClient.fetch(query);
		// console.log(socials);
		return socials;
	}
</script>

{#await getSocials() then socials}
	<div class="grid grid-flow-col gap-4">
        {#each socials as social}
        <a href={social.to_link} target="_blank">
            <img src={social.image_url} alt={social.social} width="50" class="outline rounded-lg outline-accent outline-dashed outline-offset-2">
        </a>
        {/each}
	</div>
{/await}
