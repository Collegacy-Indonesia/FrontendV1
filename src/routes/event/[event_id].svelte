<script lang="ts">
	import { page } from '$app/stores';
	import TimelineComponent from '../../components/event/timeline.svelte';
	import Accordion from '../../components/event/accordion.svelte';

	const toTimeline = (date, title, description) => ({ date, title, description });

	const timelines = [
		toTimeline(
			'23 Februari 2022',
			'Deadline Proposal Ide',
			'Peserta mengumpulkan proposal ide startup (untuk ketentuan cek bagian selanjutnya) sesuai dengan perspektif peran (Hustler, Hacker, atau Hipster) dan bidang kategori (Education, Healthcare, atau SME) sesuai dengan yang telah dipilih oleh peserta.'
		),
		toTimeline(
			'9 Maret 2022',
			'Pengumuman Lolos Hacksprint',
			'Pengumuman peserta yang lolos ke tahap Hacksprint akan diumumkan pada tanggal 9 Maret 2022 dan panitia akan mengundang ke grup Whatsapp untuk arahan informasi lebih lanjut.'
		),
		toTimeline(
			'12 Maret 2022 - 19 Maret 2022',
			'Hacksprint',
			`Peserta yang lolos tahap Hacksprint diwajibkan mengikuti Workshop I dengan topik “Startup Problem-Solution Fit” pada tanggal 12 Maret 2022. Tahap Hacksprint menggunakan metode design sprint dengan tujuan untuk dapat merumuskan ide, brainstorming dan dapat mencapai problem-solution fit. Tahap Hacksprint dilaksanakan selama dua pertemuan, masing-masing pada tanggal 12 Maret dan 19 Maret 2022.`
		),
		toTimeline(
			'26 Maret 2022 - 20 April 2022',
			'Proses tahap final',
			`Tahap Product Demo bertujuan agar setiap tim dapat merealisasikan ide startupnya menjadi produk awal/Minimum Viable Product (MVP) dan melakukan pitching.`
		)
	];
</script>

<div class="wrapper-event">
	<section class="event-headline-container">
		<div class="event-headline">
			<h1>Collegacy Summit</h1>
			<a class="cta-button" href="#timeline">Checkout the timeline</a>
		</div>
		<p style="margin: auto 0;">
			Collegacy The Summit is a business competition held for college students to introduce and
			sharpen entrepreneurship skills with the hope the participants can create their startup. The
			competition will run as a combination of the hackathon and business competition. So, the
			participant can create an innovative startup within the Minimum Viable Product (MVP). This
			year's theme is "Shape The Future World through Innovation-Driven Entrepreneurship in The
			Society 5.0”.
		</p>
	</section>
	<section class="timeline" id="timeline">
		<h1 style="text-align: center;padding:1rem;">Timeline</h1>
		{#each timelines as { date, title, description }}
			<TimelineComponent {date} {title} {description} />
		{/each}
	</section>
	<section class="faq">
		<h1 style="text-align: center;padding:1rem;">How to Register</h1>
		<Accordion
			question="Login to collegacy web"
			answer="Buat akun di website collegacy dengan tombol yang terdapat pada kanan atas laman ini. Atau pergi ke https://collegacy.id/login."
		/>
		<Accordion
			question="Pergi ke section dashboard"
			answer="Setelah login, user akan dapat melihat section dashboard pada tampilan kiri website."
		/>
		<Accordion
			question="Isi form sesuai dengan event yang ingin diikuti"
			answer="Dalam laman dashboard, terdapat berbagai macam event yang dapat diikuti. User dapat mengisi sesuai dengan data yang diperlukan masing-masing event."
		/>
	</section>
	<div />
</div>

<style>
	.wrapper-event {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.event-headline-container {
		display: flex;
		padding: 4rem;
	}

	.event-headline-container > p {
		padding-left: 4rem;
		padding-right: 4rem;
		text-align: justify;
		font-weight: 600;
	}

	.event-headline {
		text-align: center;
		min-width: 15rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.cta-button {
		background: #000000;
		color: white;
		border-radius: 20px;
		font-weight: 800;
		padding: 1rem;
	}

	.timeline {
		background: #000000;
		padding: 1rem;
		color: #f7f5e9;
		position: relative;
	}

	.timeline > h1 {
		color: #dab232;
	}

	@media (max-width: 768px) {
		.event-headline-container {
			flex-direction: column;
			gap: 1rem;
		}

		.cta-button {
			display: none;
		}
	}
</style>
