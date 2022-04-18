<script lang="ts">
	import { onMount } from 'svelte';
	import { Calendar } from '@fullcalendar/core';
	import dayGridPlugin from '@fullcalendar/daygrid';
	import googleCalendarPlugin from '@fullcalendar/google-calendar';
	import { ENV } from '$lib/env';

	let calendarEl;
	let calendar;
	let view:string = 'dayGridWeek';
	const view_options:string[] = ['dayGrid', 'dayGridWeek', 'dayGridMonth'];
	let render_cal = (view) => {};

	onMount(async () => {
		await import('@fullcalendar/core/vdom');
		// console.log(ENV.TEST);
		render_cal = (view) => {
			calendar = new Calendar(calendarEl, {
				plugins: [dayGridPlugin, googleCalendarPlugin],
				// googleCalendarApiKey: import.meta.env.VITE_GCAL_KEY,
				googleCalendarApiKey: ENV.GCAL_KEY, // domain locked so okay to be here
				initialView: view,
				events: {
					googleCalendarId: 'c_99gthh6cl5ktjjjc6hnuu4p1k8@group.calendar.google.com',
					className: 'gcal-event'
				}
			});
			calendar.render();
		};
		render_cal(view);
	});
	$: {
		render_cal(view)
	}
</script>

<div class="block p-2 md:w-1/2">
	<a
		class="btn normal-case"
		href="https://calendar.google.com/calendar/render?cid=c_99gthh6cl5ktjjjc6hnuu4p1k8%40group.calendar.google.com"
	>
		Add the Baker calendar to your Google Calendar
	</a>
	<select class="select max-w-xs select-bordered mr-1" bind:value={view}>
		{#each view_options as view_option}
			<option value={view_option}>View: {view_option}</option>
		{/each}
	</select>
	<div bind:this={calendarEl} />
</div>

<style>
	:global(.gcal-event) {
		text-transform: capitalize;
		transition: transform 0.3s;
	}

	:global(.gcal-event:hover) {
		transform: scale(1.3);
		z-index: 50;
		color: hsl(var(--a));
	}
</style>
