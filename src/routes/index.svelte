<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import Intro from '../components/home/intro.svelte';
	import OurValue from '../components/home/our-value.svelte';
	import OurEvents from '../components/home/our-events.svelte';
	import InstagramPost from '../components/home/instagram-post.svelte';
	import OurTeams from '../components/home/our-teams.svelte';
	import SponsorAndMedpar from '../components/home/sponsor-and-medpar.svelte';
	import { getUserProfile, logout, userContext } from '../contexts/userContext';
	import SponsorAndMedpar from '../components/home/sponsor-and-medpar.svelte';

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
	<Intro />
	<OurValue />
	<OurEvents />
	<InstagramPost />
	<!-- <OurTeams /> -->
	<SponsorAndMedpar />
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
		margin-top: 60px;
		overflow: hidden;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Raleway', sans-serif;
	}
</style>
