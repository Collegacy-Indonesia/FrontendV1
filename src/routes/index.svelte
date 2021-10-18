<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Shape from '../components/shared/shapes.svelte';

	let window;
	let ready = false;
	let name: string = 'Anonymous';
	let keyframes = [...Array(10).keys()].map((i) => ({
		x: -100,
		delay: 500 * i + 1,
		duration: 1000
	}));
	console.log(window);
	$: something = name + ' ' + 'wtf';
	onMount(() => (ready = true));
</script>

<div class="page">
	{#if ready}
		<div class="container">
			<Shape
				animation={{ ...keyframes[3], y: -10, x: 0 }}
				type="circle"
				y="-5px"
				x="80%"
				color="#bf97ac"
			/>
			<Shape animation={keyframes[4]} type="triangle" y="30%" x="20%" color="" />
			<Shape animation={keyframes[5]} type="innercircle" y="90%" x="70%" color="" />
			<div class="hero">
				<h1 class="title" transition:fly={keyframes[0]}>Collegacy Indonesia</h1>
				<br />
				<p transition:fly={keyframes[1]}>
					Student Organization committed to enhance in-demand skills in today's workforce to create
					well developed future leaders <span class="tags">#LeaveYourMark</span>
				</p>
			</div>
		</div>

		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
		<div>nananan</div>
	{/if}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
	.page {
		background: #e4e9f7;
	}
	.container {
		position: relative;
		z-index: 3;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: calc(100vh - 65px);
	}
	.hero {
		max-width: 600px;
		text-align: justify;
	}
	.title {
		font-size: 3rem;
		font-weight: bold;
	}
	.container p {
		font-size: 1.5rem;
	}
	.tags {
		background: #11101d;
		color: white;
		padding: 0.25rem;
		border-radius: 15px;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
	}
</style>
