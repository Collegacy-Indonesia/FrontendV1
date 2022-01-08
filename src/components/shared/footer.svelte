<script>
	const logoCollegacy = '/shared/logo-collegacy.svg';
	const instagramIcon = '/shared/instagram.svg';
	const linkedinIcon = '/shared/linkedin.svg';
	const mailIcon = '/shared/email.svg';
	let width;
	const socmeds = [
		{
			link: 'https://www.instagram.com/collegacyindonesia/',
			img: instagramIcon,
			alt: 'instagram icon'
		},
		{
			link: 'https://www.linkedin.com/company/collegacyindonesia/',
			img: linkedinIcon,
			alt: 'linkedin icon'
		},
		{
			link: 'mailto:collegacy.indonesia@gmail.com',
			img: mailIcon,
			alt: 'mail icon'
		}
	];
</script>

<svelte:window bind:innerWidth={width} />

<div class={'footer-container py-4 ' + (width > 1200 ? 'container-large' : '')}>
	<div class="footer-top d-flex flex-wrap justify-content-around">
		<div class="footer-top-left m-4">
			<img src={logoCollegacy} alt="logo-collegacy" />
		</div>
		<div class="footer-top-right m-4 text-center">
			<h1>Follow us on</h1>
			<div class="footer-socmed mt-2 d-flex justify-content-between align-items-center">
				{#each socmeds as socmed}
					<a href={socmed.link} target="_blank" rel="noopener noreferrer">
						<img src={socmed.img} alt={socmed.alt} />
					</a>
				{/each}
			</div>
		</div>
	</div>
	<div class="footer-bottom text-center mt-5">
		<h1>&copy; 2022 Collegacy Indonesia</h1>
	</div>
</div>

<style>
	.footer-container {
		background: #11101d;
	}
	.container-large {
		margin-left: 78px;
	}
	.footer-top-right > h1 {
		font-family: Raleway;
		font-weight: 900;
		font-size: 1.75rem;
		line-height: 143%;
		color: #fff;
	}
	.footer-socmed > * {
		margin: 0 22px;
		width: 45px;
		transition: all 0.3s ease-in-out;
	}
	.footer-socmed > *:hover {
		transform: scale(1.1);
		cursor: pointer;
	}
	.footer-bottom > h1 {
		font-weight: bold;
		font-size: 1.75rem;
		line-height: 118%;
		color: #f7f5e9;
	}
</style>
