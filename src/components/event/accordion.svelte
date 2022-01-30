<script>
	export let question;
	export let answer;
</script>

<div class="accordion">
	<details>
		<summary>{question}</summary>
		<p>
			{answer}
		</p>
	</details>
</div>

<style>
	.accordion {
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 16px;
		width: 60vw;
		margin: 0 auto;
		padding: 1rem;
		margin-bottom: 1rem;
	}

	summary {
		font-weight: 700;
	}

	@media (max-width: 575.98px) {
		.accordion {
			width: 80vw;
		}
	}
</style>
