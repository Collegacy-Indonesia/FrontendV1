<script>
	export let date;
	export let title;
	export let description;
</script>

<div class="timeline-component">
	<div class="decoration">
		<div class="circle" />
		<div class="line" />
	</div>
	<div class="content">
		<div class="date-and-title">
			<div class="date">{date}</div>
			<div class="title">{title}</div>
		</div>
		<p class="description">
			{description}
		</p>
	</div>
</div>

<style>
	.timeline-component {
		position: relative;
		display: flex;
		width: 60vw;
		margin: 0 auto;
	}

	.decoration {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: fit-content;
	}

	.circle {
		width: 1rem;
		height: 1rem;
		border-radius: 24px;
		background: #dab232;
	}

	.title {
		color: #dab232;
	}

	.line {
		background-color: azure;
		width: 3px;
		flex-grow: 1;
	}

	.date-and-title {
		display: flex;
		gap: 1rem;
		margin-left: 1rem;
	}

	.date {
		color: white;
		font-weight: 800;
		background: #dab232;
		border-radius: 15px;
		padding: 0 1rem;
	}

	.title {
		font-weight: 800;
	}

	.description {
		padding: 1rem;
		text-align: justify;
		margin: 0;
	}

	@media (max-width: 575.98px) {
		.timeline-component {
			width: 80vw;
		}
	}
</style>
