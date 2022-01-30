<script>
	import EventCard from '../../components/dashboard/event-card.svelte';
</script>

<div class="main-container">
	<h3>Register to our event!</h3>
	<div class="container-grid">
		<EventCard />
	</div>
</div>

<style>
	.container-grid {
		display: grid;
		grid-template-columns: auto auto auto auto auto;
		gap: 1rem;
	}

	h3 {
		margin-bottom: 3rem;
	}

	.main-container {
		padding: 3rem;
	}
</style>
