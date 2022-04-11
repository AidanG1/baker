<script lang="ts">
	import { onMount } from 'svelte';
	import { Calendar } from '@fullcalendar/core';
	import dayGridPlugin from '@fullcalendar/daygrid';
	import googleCalendarPlugin from '@fullcalendar/google-calendar';

	let calendarEl;
	let calendar;

	onMount(async () => {
		await import('@fullcalendar/core/vdom');
		calendar = new Calendar(calendarEl, {
			plugins: [dayGridPlugin, googleCalendarPlugin],
			// googleCalendarApiKey: import.meta.env.VITE_GCAL_KEY,
			googleCalendarApiKey: 'AIzaSyCC4tBQDTotjL2YjmVjtlFIsv7KUwgSvGQ', // domain locked so okay to be here
			initialView: 'dayGridMonth',
			events: {
				googleCalendarId: 'c_99gthh6cl5ktjjjc6hnuu4p1k8@group.calendar.google.com',
				className: 'gcal-event'
			}
		});
		calendar.render();
	});
</script>

<a class="btn normal-case" href="https://calendar.google.com/calendar/render?cid=c_99gthh6cl5ktjjjc6hnuu4p1k8%40group.calendar.google.com">
	Add this to Google Calendar
</a>
<div bind:this={calendarEl} />

<style>
	:global(.gcal-event) {
		text-transform: capitalize;
	}
</style>
