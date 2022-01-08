<script>
	import axios from 'axios';

	let width;
	const dummyIgPost = '/home/dummy-ig-post.png';
	const dummyData = [
		{
			link: 'https://instagram.com/collegacyindonesia',
			image: '/home/post-1.jpg',
			caption:
				"Congratulations and welcome on board, Campus Ambassadors!\n\nWe are very excited to introduce the newest members of Collegacy Indonesia family!\n\nIt was a very difficult decision because we truly see great potential in each and every one of you. To those who haven't passed, we wish nothing but the best, future leaders, and we hope to meet again with you in the future!\n\n#LeaveYourMark\n\nReach us through\nDM: @collegacyindonesia\nTiktok: @collegacyindonesia\nLinkedIn: Collegacy Indonesia\nMedium: @collegacyindonesia"
		},
		{
			link: 'https://instagram.com/collegacyindonesia',
			image: '/home/post-2.jpg',
			caption:
				"Congratulations and welcome on board, Campus Ambassadors!\n\nWe are very excited to introduce the newest members of Collegacy Indonesia family!\n\nIt was a very difficult decision because we truly see great potential in each and every one of you. To those who haven't passed, we wish nothing but the best, future leaders, and we hope to meet again with you in the future!\n\n#LeaveYourMark\n\nReach us through\nDM: @collegacyindonesia\nTiktok: @collegacyindonesia\nLinkedIn: Collegacy Indonesia\nMedium: @collegacyindonesia"
		},
		{
			link: 'https://instagram.com/collegacyindonesia',
			image: '/home/post-3.jpg',
			caption:
				"Congratulations and welcome on board, Campus Ambassadors!\n\nWe are very excited to introduce the newest members of Collegacy Indonesia family!\n\nIt was a very difficult decision because we truly see great potential in each and every one of you. To those who haven't passed, we wish nothing but the best, future leaders, and we hope to meet again with you in the future!\n\n#LeaveYourMark\n\nReach us through\nDM: @collegacyindonesia\nTiktok: @collegacyindonesia\nLinkedIn: Collegacy Indonesia\nMedium: @collegacyindonesia"
		}
	];

	let showCaps = Array(dummyData.length).fill(false);
	const handleHover = (idx) => {
		showCaps[idx] = true;
	};
	const handleHoverOut = (idx) => {
		showCaps[idx] = false;
	};
</script>

<svelte:window bind:innerWidth={width} />

<div class={'instagram-post-container py-5 px-3' + (width > 1200 ? ' container-large' : '')}>
	<div class="instagram-post-header text-center my-3">
		<h1>Check out our instagram posts!</h1>
	</div>
	<div class="instagram-post-content d-flex flex-wrap justify-content-center position-relative">
		{#each dummyData as { link, image, caption }, idx}
			<div
				class="instagram-post-card m-4"
				on:mouseover={() => handleHover(idx)}
				on:focus={() => handleHover(idx)}
				on:mouseout={() => handleHoverOut(idx)}
				on:blur={() => handleHoverOut(idx)}
			>
				<div><img src={image} alt="Post Instagram" /></div>
				<div
					class={'instagram-post-caption p-3 mx-auto position-absolute text-justify ' +
						(showCaps[idx] ? '' : 'opacity-0')}
				>
					<p>{caption}</p>
					<button class="btn mx-auto d-block" on:click={() => (window.location.href = link)}
						>More</button
					>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.container-large {
		margin-left: 78px;
	}
	.instagram-post-header > h1 {
		font-family: Raleway;
		font-style: normal;
		font-weight: bold;
		font-size: 3rem;
		line-height: 117%;
		text-transform: capitalize;
		color: #000000;
	}
	.instagram-post-card {
		width: 379px;
		height: 379px;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
		border-radius: 3.3rem;
		transition: all 0.3s ease-in-out;
	}
	.instagram-post-card:hover {
		transform: scale(1.05);
	}
	.instagram-post-card img {
		width: 100%;
		border-radius: 3.3rem;
	}
	.instagram-post-caption {
		width: 85%;
		transition: all 0.5s ease;
		border-radius: 1rem;
		background: #ffffff;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
	}
	.instagram-post-caption > p {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		font-weight: bold;
		font-size: 0.875rem;
		line-height: 1rem;
		text-transform: capitalize;
		color: #000000;
	}
	.instagram-post-caption > button {
		max-width: 200px;
		width: 80%;
		background: #000000;
		border-radius: 1rem;

		font-style: normal;
		font-weight: bold;
		font-size: 0.875rem;
		line-height: 1rem;
		text-transform: capitalize;
		color: #ffffff;
	}

	.opacity-0 {
		opacity: 0;
		transform: translate(-50%, 25px);
	}

	@media screen and (max-width: 1024px) {
		.instagram-post-card {
			width: 320px;
			height: 320px;
		}
	}
</style>
