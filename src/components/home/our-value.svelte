<script>
	const learnMore = '/home/learn-more-btn.svg';
	let width;
	const bgLarge = '/home/curved-our-value.svg';
	const values = [
		{
			icon: '/home/upload-icon.svg',
			title: 'Escalate'
		},
		{
			icon: '/home/build.svg',
			title: 'Build'
		},
		{
			icon: '/home/inspire.svg',
			title: 'Inspire'
		}
	];
	const handleLearnMore = () => {
		console.log('clickked');
	};
</script>

<svelte:window bind:innerWidth={width} />

<div
	class="our-values-container position-relative"
	style={width > 1200 ? `background-image: url(${bgLarge})` : 'background: #000'}
>
	{#if width > 1200}
		<a href="#events">
			<img
				src={learnMore}
				alt=""
				class="learn-more-btn position-absolute"
				on:click={handleLearnMore}
			/>
		</a>
	{/if}
	<div class="header text-center">
		<h1>Our Values</h1>
	</div>
	<div class="content d-flex flex-wrap justify-content-center">
		{#each values as { icon, title }, i}
			<div class="value-container d-flex flex-column align-items-center text-center">
				<img src={icon} alt={title + ' icon'} class="icon" />
				<h1>{title}</h1>
			</div>
		{/each}
	</div>
</div>

<style>
	.our-values-container {
		background-size: 100%;
		background-repeat: no-repeat;
		padding: 2.5rem 0 5.625rem;
		color: #dab232;
	}
	.learn-more-btn {
		top: -100px;
		right: 10.2vw;
		cursor: pointer;
	}
	.header > h1 {
		font-weight: bold;
		font-size: 3rem;
		line-height: 3.5rem;
		text-transform: capitalize;
	}
	.content {
		margin-top: 3.875rem;
	}
	.value-container {
		margin: 0.625rem 7rem;
	}
	.value-container > h1 {
		font-weight: bold;
		font-size: 2.25rem;
		line-height: 2.625rem;
		text-transform: capitalize;
	}
	.icon {
		height: 4rem;
		margin-bottom: 0.5rem;
	}

	@media screen and (max-width: 576px) {
		.value-container > img {
			width: 60px;
			height: 60px;
		}
	}
</style>
