<script lang="ts">
	import type { BlockProps } from '@portabletext/svelte';
	import { Text } from '@kahi-ui/framework';

	export let portableText: BlockProps;
	$: block = portableText.block;
</script>

<Text sizing="large"><slot /></Text>
