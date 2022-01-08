<script context="module">
	export async function load({ url }) {
		/**
		 * @type {import('@sveltejs/kit').Load}
		 */
		return {
			props: { url }
		};
	}
</script>

<script>
	import { getUserProfile, logout, userContext } from '../contexts/userContext';
	import { onMount } from 'svelte';
	import Footer from '../components/shared/footer.svelte';

	export let url;
	const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
	const parsePathToDisplay = (path) =>
		path === '/' ? 'Home' : capitalizeFirstLetter(path.slice(1, path.length)).split('/')[0];
	let open = false;
	let btnClass = 'bx bx-menu-alt-right';
	const toLink = (icon, content, to) => ({ icon, content, to });
	let links = [
		// toLink('bx-user', 'Profile', '/profile'),
		// toLink('bx-calendar-event', 'Events', '/'),
		// toLink('bx-mail-send', 'Mails', '/'),
		// toLink('bx-chat', 'Messages', '/'),
		// toLink('bx-cog', 'Setting', '/')
	];
	$: sidebarClass = open ? 'sidebar open' : 'sidebar';
	$: btnClass = open ? 'bx bx-menu-alt-right' : 'bx bx-menu';
	$: pageDisplayName = parsePathToDisplay(url.pathname);

	let width;

	onMount(() => {
		getUserProfile();
	});
</script>

<svelte:window bind:innerWidth={width} />

<div class={sidebarClass + (width > 1200 || open ? '' : ' sidebar-small')}>
	<div class="logo-details">
		<i class="bx bxl-c-plus-plus icon" />
		<div class="logo_name">Collegacy</div>
		<i class={btnClass} id="btn" on:click={() => (open = !open)} />
	</div>
	<ul class={`nav-list ${width > 1200 || open ? '' : 'd-none'}`}>
		<li>
			<i class="bx bx-search" />
			<input type="text" placeholder="Search..." />
			<span class="tooltip">Search</span>
		</li>
		<li>
			<a href="/">
				<i class="bx bx-grid-alt" />
				<span class="links_name">Home</span>
			</a>
			<span class="tooltip">Home</span>
		</li>
		{#each links as link}
			<li>
				<a href={link.to}>
					<i class={`bx ${link.icon}`} />
					<span class="links_name">{link.content}</span>
				</a>
				<span class="tooltip">{link.content}</span>
			</li>
		{/each}
	</ul>
</div>
<section class="home-section">
	<div class="navbar" style={open ? 'width: calc(100% - 249px);' : 'width:calc(100% - 77px);'}>
		{#if width > 1200}
			<span>{pageDisplayName}</span>
			{#if $userContext === undefined || $userContext === null}
				<a href="login">
					<i class="bx bxs-log-in" />
					<span class="links_name">Login</span>
				</a>
			{:else}
				<a href="/" class="d-inline-block" on:click={logout}>
					<i class="bx bxs-log-out" />
					<span class="links_name">Logout</span>
				</a>
			{/if}
		{/if}
	</div>
	<slot style={width > 1200 ? 'padding-left: 78px;' : ''} />
	<Footer />
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600;700&display=swap');
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Raleway', sans-serif;
	}
	.sidebar {
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 78px;
		background: #11101d;
		padding: 6px 14px;
		z-index: 99;
		transition: all 0.5s ease;
	}
	.sidebar-small {
		height: 60px;
	}
	.sidebar.open {
		width: 250px;
	}
	.sidebar .logo-details {
		height: 60px;
		display: flex;
		align-items: center;
		position: relative;
	}
	.sidebar .logo-details .icon {
		opacity: 0;
		transition: all 0.5s ease;
	}
	.sidebar .logo-details .logo_name {
		color: #fff;
		font-size: 20px;
		font-weight: 600;
		opacity: 0;
		transition: all 0.5s ease;
	}
	.sidebar.open .logo-details .icon,
	.sidebar.open .logo-details .logo_name {
		opacity: 1;
	}
	.sidebar .logo-details #btn {
		position: absolute;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
		font-size: 22px;
		transition: all 0.4s ease;
		font-size: 23px;
		text-align: center;
		cursor: pointer;
		transition: all 0.5s ease;
	}
	.sidebar.open .logo-details #btn {
		text-align: right;
	}
	.sidebar i {
		color: #fff;
		height: 60px;
		min-width: 50px;
		font-size: 28px;
		text-align: center;
		line-height: 60px;
	}
	.sidebar .nav-list {
		margin-top: 20px;
		height: 100%;
	}
	.sidebar li {
		position: relative;
		margin: 8px 0;
		list-style: none;
	}
	.sidebar li .tooltip {
		position: absolute;
		top: -20px;
		left: calc(100% + 15px);
		z-index: 3;
		background: #fff;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
		padding: 6px 12px;
		border-radius: 4px;
		font-size: 15px;
		font-weight: 400;
		opacity: 0;
		white-space: nowrap;
		pointer-events: none;
		transition: 0s;
	}
	.sidebar li:hover .tooltip {
		opacity: 1;
		pointer-events: auto;
		transition: all 0.4s ease;
		top: 50%;
		transform: translateY(-50%);
	}
	.sidebar.open li .tooltip {
		display: none;
	}
	.sidebar input {
		font-size: 15px;
		color: #fff;
		font-weight: 400;
		outline: none;
		height: 50px;
		width: 100%;
		width: 50px;
		border: none;
		border-radius: 12px;
		transition: all 0.5s ease;
		background: #1d1b31;
	}
	.sidebar.open input {
		padding: 0 20px 0 50px;
		width: 100%;
	}
	.sidebar .bx-search {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		font-size: 22px;
		background: #1d1b31;
		color: #fff;
	}
	.sidebar.open .bx-search:hover {
		background: #1d1b31;
		color: #fff;
	}
	.sidebar .bx-search:hover {
		background: #fff;
		color: #11101d;
	}
	.sidebar li a {
		display: flex;
		height: 100%;
		width: 100%;
		border-radius: 12px;
		align-items: center;
		text-decoration: none;
		transition: all 0.4s ease;
		background: #11101d;
	}
	.sidebar li a:hover {
		background: #fff;
	}
	.sidebar li a .links_name {
		color: #fff;
		font-size: 15px;
		font-weight: 400;
		white-space: nowrap;
		opacity: 0;
		pointer-events: none;
		transition: 0.4s;
	}
	.sidebar.open li a .links_name {
		opacity: 1;
		pointer-events: auto;
	}
	.sidebar li a:hover .links_name,
	.sidebar li a:hover i {
		transition: all 0.5s ease;
		color: #11101d;
	}
	.sidebar li i {
		height: 50px;
		line-height: 50px;
		font-size: 18px;
		border-radius: 12px;
	}
	.sidebar li .profile-details {
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
	}
	.sidebar li.profile .name,
	.sidebar li.profile .job {
		font-size: 15px;
		font-weight: 400;
		color: #fff;
		white-space: nowrap;
	}
	.sidebar li.profile .job {
		font-size: 12px;
	}
	.home-section {
		padding: 0;
		margin: 0;
		background: #f7f5e9;
		min-height: 100vh;
		width: 100%;
		transition: all 0.5s ease;
		z-index: 2;
	}
	.home-section .text {
		display: inline-block;
		color: #11101d;
		font-size: 25px;
		font-weight: 500;
		margin: 18px;
	}
	.navbar {
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		z-index: 10;
		padding: 0.3rem 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 60px;
		background: #11101d;
		transition: all 0.5s ease;
	}
	.navbar * {
		display: inline-block;
		color: white;
		font-size: 1rem;
		margin: auto 0;
	}
	.navbar a {
		border-radius: 12px;
		padding: 0.7rem;
		align-items: center;
		text-decoration: none;
		transition: all 0.4s ease;
		background: #11101d;
	}
	.navbar a:hover {
		background: #fff;
	}
	.navbar a .links_name {
		font-size: 15px;
		font-weight: 400;
		white-space: nowrap;
		pointer-events: none;
		transition: 0.4s;
	}
	.navbar a:hover .links_name,
	.navbar a:hover i {
		transition: all 0.5s ease;
		color: #11101d;
	}
	@media (max-width: 420px) {
		.sidebar li .tooltip {
			display: none;
		}
	}
</style>
