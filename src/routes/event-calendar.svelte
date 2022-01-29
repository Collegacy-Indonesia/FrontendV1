<script>
	import { onMount } from 'svelte';

	// ...

	let FullCalendar;
	let options;
	onMount(async () => {
		FullCalendar = (await import('svelte-fullcalendar')).default;
		options = {
			...options,
			dateClick: (event) => alert('date click! ' + event.dateStr),
			events: [
				{ title: 'event 1', date: '2022-01-01' },
				{ title: 'event 2', date: '2022-01-02' }
			],
			plugins: [
				(await import('@fullcalendar/daygrid')).default,
				(await import('@fullcalendar/interaction')).default
			]
		};
	});
</script>

<div class="container">
	{#if FullCalendar}
		<FullCalendar {options} />
	{/if}
</div>

<style>
	.container {
		padding: 1rem;
	}
</style>
