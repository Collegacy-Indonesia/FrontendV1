<script>
	import Gallery from 'svelte-image-gallery';
	import SponsorGallery from 'svelte-gallery';

	import axios from 'axios';
	let getPhoto = axios.get('https://picsum.photos/v2/list');
	const images = [
		{
			src: '/home/sponsor-1.png',
			height: 200
		},
		{
			src: '/home/sponsor-2.png',
			height: 50
		}
	];

	let medpar = Array(6)
		.fill()
		.map((_, idx) => ({
			src: `/home/medpar-${idx + 1}.png`,
			alt: `Medpar ${idx + 1}`
		}));

	let width;
</script>

<svelte:window bind:innerWidth={width} />

<div class={'py-5 px-3' + (width > 1200 ? ' container-large' : '')}>
	<h1 class="header text-center my-3">Our sponsors</h1>
	<SponsorGallery {images} />
</div>
<div class={'py-5 px-3' + (width > 1200 ? ' container-large' : '')}>
	<h1 class="header text-center my-3">Our Media Partners</h1>
	<Gallery gap={10} maxColumnWidth={200}>
		{#each medpar as imageData}
			<img src={imageData.src} alt={imageData.alt} />
		{/each}
	</Gallery>
</div>

<style>
	.header {
		font-family: Raleway;
		font-style: normal;
		font-weight: bold;
		font-size: 3rem;
		line-height: 117%;
		text-transform: capitalize;
		color: #000000;
	}
	.container-large {
		margin-left: 78px;
	}
</style>
