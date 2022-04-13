<script lang="ts">
	import { onMount } from 'svelte';
	import { Calendar } from '@fullcalendar/core';
	import dayGridPlugin from '@fullcalendar/daygrid';
	import googleCalendarPlugin from '@fullcalendar/google-calendar';
	import { ENV } from '$lib/env';

	let calendarEl;
	let calendar;

	onMount(async () => {
		await import('@fullcalendar/core/vdom');
		// console.log(ENV.TEST);
		calendar = new Calendar(calendarEl, {
			plugins: [dayGridPlugin, googleCalendarPlugin],
			// googleCalendarApiKey: import.meta.env.VITE_GCAL_KEY,
			googleCalendarApiKey: ENV.GCAL_KEY, // domain locked so okay to be here
			initialView: 'dayGridMonth',
			events: {
				googleCalendarId: 'c_99gthh6cl5ktjjjc6hnuu4p1k8@group.calendar.google.com',
				className: 'gcal-event'
			}
		});
		calendar.render();
	});
</script>

<a
	class="btn normal-case"
	href="https://calendar.google.com/calendar/render?cid=c_99gthh6cl5ktjjjc6hnuu4p1k8%40group.calendar.google.com"
>
	Add the Baker calendar to your Google Calendar
</a>
<div bind:this={calendarEl} />

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
