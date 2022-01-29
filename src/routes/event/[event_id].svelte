<script lang="ts">
	import { page } from '$app/stores';
	import TimelineComponent from '../../components/event/timeline.svelte';
	import Accordion from '../../components/event/accordion.svelte';
</script>

<section class="event-headline-container">
	<div class="event-headline">
		<h1>Event {$page.params.event_id}</h1>
		<button class="cta-button">Checkout the timeline</button>
	</div>
	<p>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur alias exercitationem
		perferendis recusandae odit nihil dicta repudiandae. Voluptate quam minus facere explicabo quod
		officiis tempore voluptatibus nobis earum aut? In. Lorem ipsum dolor, sit amet consectetur
		adipisicing elit. Aspernatur alias exercitationem perferendis recusandae odit nihil dicta
		repudiandae. Voluptate quam minus facere explicabo quod officiis tempore voluptatibus nobis
		earum aut? In. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur alias
		exercitationem perferendis recusandae odit nihil dicta repudiandae. Voluptate quam minus facere
		explicabo quod officiis tempore voluptatibus nobis earum aut? In.
	</p>
</section>
<section class="timeline">
	<h1 style="text-align: center;padding:1rem;">Timeline</h1>
	<TimelineComponent />
	<TimelineComponent />
</section>
<section class="faq">
	<h1 style="text-align: center;padding:1rem;">Frequently Asked Question</h1>
	<Accordion />
</section>
<section class="faq">
	<h1 style="text-align: center;padding:1rem;">How to Register</h1>
	<Accordion />
</section>

<style>
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
		color: #dab232;
		position: relative;
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
