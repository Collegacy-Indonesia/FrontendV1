<script>
	const dummyImg = '/home/collegacy-logo.svg';

	const events = [
		{
			title: 'Bootcamp',
			desc: 'Collegacy Students Bootcamp is a two-week bootcamp designed to provide knowledge to enthusiastic participants in developing their ideas and innovations. According to our grand theme, "Cultivating the Spirit of Ideation to Shape the Future World for Achieving Sustainable Development Goals", this event aims to empower university students as participants to execute their ideas well with proper planning to make them better.',
			link: 'https://docs.google.com/forms/d/1mvddAUP4Mw7O_Dt3VOEeEkPSVV2j6BKx2a9JBJo6Hb4/edit?usp=drivesdk',
			img: '/home/bootcamp.png'
		},
		{
			title: 'Summit',
			desc: `Collegacy The Summit is a business competition held for college students to introduce and sharpen entrepreneurship skills with the hope the participants can create their startup. The competition will run as a combination of the hackathon and business competition. So, the participant can create an innovative startup within the Minimum Viable Product (MVP). This year's theme is "Shape The Future World through Innovation-Driven Entrepreneurship in The Society 5.0”.`,
			link: '/event/summit',
			img: '/home/summit.png'
		}
	];
	let width;
</script>

<svelte:window bind:innerWidth={width} />

<div class={`our-event ${width > 1200 ? 'container-large' : ''}`} id="events">
	<div
		id="our-event-carousel"
		class="carousel slide d-flex flex-column justify-content-center"
		data-bs-ride="carousel"
		data-ride="carousel"
	>
		<h1 class="text-center">Our Events</h1>
		<div class="carousel-indicators position-static d-inline-block mx-auto">
			{#each events as event, idx}
				<button
					type="button"
					data-bs-target="#our-event-carousel"
					data-bs-slide-to={idx + ''}
					class={'btn ' + (idx === 0 ? 'active' : '')}
					aria-current="true"
					aria-label={`Slide ${idx + 1}`}
				>
					{event.title}
				</button>
			{/each}
		</div>
		<div class="carousel-inner" style="padding:1rem;">
			{#each events as { desc, link, img, title, isComingSoon }, idx}
				<div class={`carousel-item ${idx === 0 ? 'active' : ''}`}>
					<div
						class="carousel-item-card d-flex flex-lg-nowrap flex-wrap-reverse justify-content-center align-items-center"
					>
						<div class={'carousel-item-card-left ' + (width > 1200 ? '' : 'm-small')}>
							<h1>{title}</h1>
							{#if !isComingSoon}
								<p class="text-justify">{desc}</p>
								<a href={link}>
									<button class="btn btn-more">Register</button>
								</a>
							{:else}
								<p class="text-justify bold">Coming Soon</p>
							{/if}
						</div>
						<div class="carousel-item-card-right my-3 my-lg-0">
							<img src={img} class="d-block" alt={`Event ${idx + 1} image`} />
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.our-event {
		padding: 2rem 1.5rem;
	}
	.container-large {
		padding: 3rem 5rem;
		margin-left: 78px;
	}
	.carousel > h1 {
		font-weight: 900;
		font-size: 3rem;
		line-height: 144%;
		text-transform: capitalize;
		color: #000;
		font-family: Raleway;
	}
	.carousel-indicators {
		border: 2px solid #112131;
		border-radius: 20px;
		margin: 0;
		z-index: 9;
	}
	.carousel-indicators > button {
		font-weight: 600;
		font-size: 1.875rem;
		line-height: 117%;
		color: #000;
		margin: -1px;
	}
	.carousel-indicators > .active {
		background: #112131;
		border: 2px solid #000;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 20px;
		color: #fff;
	}
	.carousel-inner {
		margin-top: 3rem;
	}
	.carousel-item-card-left {
		margin-right: 8.125rem;
	}
	.m-small {
		margin-right: 0.75rem;
	}
	.carousel-item-card-left > h1 {
		font-weight: 900;
		font-size: 2.5rem;
		line-height: 145%;
		text-transform: capitalize;
		color: #000;
		font-family: Raleway;
	}
	.carousel-item-card-left > p {
		font-weight: normal;
		font-size: 1.5rem;
		color: #112131;
	}
	.btn-more {
		height: 3.5rem;
		background: #000;
		border-radius: 20px;
		color: #fff;
		font-weight: normal;
		font-size: 1.875rem;
		line-height: 143%;
		text-align: center;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		font-family: Raleway;
	}
	.carousel-item-card-right > img {
		width: 28.125rem;
		height: 25.625rem;
		border-radius: 1rem;
	}
</style>
