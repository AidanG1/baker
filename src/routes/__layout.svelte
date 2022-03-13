<script>
	import '@kahi-ui/framework/dist/kahi-ui.framework.min.css';
	import '@kahi-ui/framework/dist/kahi-ui.theme.default.min.css';
	import { Anchor, Box, Divider, Menu, Omni, Popover, Text, Container } from '@kahi-ui/framework';
	import Navbar from '../components/Navbar.svelte';
	const { Footer, Header, Section } = Omni;
</script>

<Navbar />
<Omni.Container>
	<Omni.Header>
		<Anchor href="/"><img src="/bakerCrest.svg" alt="Baker College Logo" width=50>Baker College</Anchor>
	</Omni.Header>

	<Omni.Section hidden={['mobile', 'tablet']}>
		<Menu.Container orientation="horizontal" sizing="tiny">
			<Menu.Button active>Docs</Menu.Button>
			<Menu.Button>Playground</Menu.Button>
			<Menu.Button>Storybook</Menu.Button>
		</Menu.Container>
	</Omni.Section>

	<Omni.Footer>
		<Menu.Container hidden={['mobile', 'tablet']} orientation="horizontal" sizing="tiny">
			<Menu.Button>GitHub</Menu.Button>
		</Menu.Container>

		<Popover.Container hidden={['desktop', 'widescreen']} logic_id="omni-collapsing" dismissible>
			<Popover.Button palette="light" variation="clear">+</Popover.Button>

			<Popover.Section alignment_x="left" spacing="small">
				<Box variation="borders" elevation="medium" padding="medium" radius="tiny">
					<Menu.Container sizing="tiny">
						<Menu.Button active>Docs</Menu.Button>

						<Menu.Button>Playground</Menu.Button>

						<Menu.Button>Storybook</Menu.Button>

						<Menu.Button>GitHub</Menu.Button>
					</Menu.Container>
				</Box>
			</Popover.Section>
		</Popover.Container>
	</Omni.Footer>
</Omni.Container>
<main><slot /></main>

<style>
	main {
		padding: 1vw;
	}
</style>
