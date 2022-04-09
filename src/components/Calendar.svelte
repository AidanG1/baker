<script lang="ts">
	import { onMount } from 'svelte';
	import { Calendar } from '@fullcalendar/core';
	import dayGridPlugin from '@fullcalendar/daygrid';
	import googleCalendarPlugin from '@fullcalendar/google-calendar';
	import { ENV } from '$lib/env'
	console.log(ENV)

	let calendarEl;
	let calendar;

	onMount(async () => {
		await import('@fullcalendar/core/vdom');
		calendar = new Calendar(calendarEl, {
			plugins: [dayGridPlugin, googleCalendarPlugin],
			googleCalendarApiKey: ENV.GCAL_KEY,
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
