<script>
	import { onMount } from 'svelte';

	let FullCalendar;
	let options;
	const toTimeline = (date, title, description) => ({ date, title, description });
	const timelines = [
		toTimeline(
			'2022-02-23',
			'Deadline Proposal Ide Summit',
			'Peserta mengumpulkan proposal ide startup (untuk ketentuan cek bagian selanjutnya) sesuai dengan perspektif peran (Hustler, Hacker, atau Hipster) dan bidang kategori (Education, Healthcare, atau SME) sesuai dengan yang telah dipilih oleh peserta.'
		),
		toTimeline(
			'2022-03-09',
			'Pengumuman Lolos Hacksprint Summit',
			'Pengumuman peserta yang lolos ke tahap Hacksprint akan diumumkan pada tanggal 9 Maret 2022 dan panitia akan mengundang ke grup Whatsapp untuk arahan informasi lebih lanjut.'
		),
		toTimeline(
			'2022-03-12',
			'Hacksprint Summit',
			`Peserta yang lolos tahap Hacksprint diwajibkan mengikuti Workshop I dengan topik “Startup Problem-Solution Fit” pada tanggal 12 Maret 2022. Tahap Hacksprint menggunakan metode design sprint dengan tujuan untuk dapat merumuskan ide, brainstorming dan dapat mencapai problem-solution fit. Tahap Hacksprint dilaksanakan selama dua pertemuan, masing-masing pada tanggal 12 Maret dan 19 Maret 2022.`
		),
		toTimeline(
			'2022-03-26',
			'Proses tahap final summit',
			`Tahap Product Demo bertujuan agar setiap tim dapat merealisasikan ide startupnya menjadi produk awal/Minimum Viable Product (MVP) dan melakukan pitching.`
		)
	];
	onMount(async () => {
		FullCalendar = (await import('svelte-fullcalendar')).default;
		const common = (await import('@fullcalendar/common')).default;
		options = {
			...options,
			eventClick: (event) => console.log(event),
			events: [...timelines.map((timeline) => ({ title: timeline.title, date: timeline.date }))],
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
