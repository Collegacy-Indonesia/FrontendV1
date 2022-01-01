<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import Shape from '../components/shared/shapes.svelte';
	import { getUserProfile, logout, userContext } from '../contexts/userContext';

	let ready = false;
	let moveY;
	let keyframes = [...Array(10).keys()].map((i) => ({
		x: -100,
		delay: 500 * i + 1,
		duration: 1000
	}));
	onMount(() => {
		ready = true;
		getUserProfile();
	});
	const handleLogout = () => {
		logout();
	};
</script>

<svelte:window bind:scrollY={moveY} />
<svelte:head>
	<title>Collegacy Indonesia Website</title>
</svelte:head>

<div class="page">
	{#if ready}
		<div class="container">
			<Shape
				animation={{ ...keyframes[3], y: -100, x: 0, duration: 2000, easing: elasticOut }}
				type="circle"
				y="-5px"
				x="80%"
				color="#bf97ac"
				{moveY}
			/>
			<Shape
				animation={{ ...keyframes[4], y: 0, x: -50, duration: 2000, easing: elasticOut }}
				type="triangle"
				y="30%"
				x="20%"
				color=""
				{moveY}
			/>
			<Shape
				animation={{ ...keyframes[5], y: 50, x: 0, duration: 2000, easing: elasticOut }}
				type="innercircle"
				y="90%"
				x="70%"
				color=""
				{moveY}
			/>
			<div class="hero">
				<h1 class="title" in:fly={keyframes[0]}>Collegacy Indonesia</h1>
				<br />
				<p in:fly={keyframes[1]}>
					Student Organization committed to enhance in-demand skills in today's workforce to create
					well developed future leaders <span class="tags">#LeaveYourMark</span>
				</p>
			</div>
			<div>
				<h1>INFORMATION</h1>
				{#if $userContext === undefined}
					<h1>Please Login</h1>
				{:else if $userContext === null}
					<h1>...loading</h1>
				{:else}
					<h1>Hi {$userContext.email}!</h1>
					<h2>{JSON.stringify($userContext)}</h2>
				{/if}
			</div>
			<div>
				<button on:click={handleLogout}> LOGOUT </button>
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
	* {
		user-select: none;
		-moz-user-select: none;
		-khtml-user-select: none;
		-webkit-user-select: none;
		-o-user-select: none;
	}
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
