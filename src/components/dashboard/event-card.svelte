<script>
	import ApiService from '../../utils/api';
	import { userContext, getUserProfile } from '../../contexts/userContext';
	import Loading from '../shared/loading.svelte';

	const checkIfRegistered = async () => {
		const apiSrv = new ApiService(`/users/registered-summit/${$userContext.id}`);
		var registered = false;
		try {
			registered = !(await apiSrv.getData()) ? false : true;
		} catch (_) {
			registered = false;
		}
		return registered;
	};
</script>

{#await getUserProfile()}
	<Loading />
{:then _}
	{#await checkIfRegistered() then registered}
		<div class="card">
			<div class="image-wrapper">
				<img src="/home/summit.png" alt="Summit" />
			</div>
			<div class="details">
				Collegacy Summit
				{#if registered}
					<div class="wrapper-button">
						<button class="registered" disabled={true}>Registered</button>
					</div>
				{:else}
					<div class="wrapper-button">
						<a class="register" href="/dashboard/summit">Register Now</a>
					</div>
				{/if}
			</div>
		</div>
	{:catch err}
		<div>{err.toString()}</div>
	{/await}
{:catch err}
	<div>{err.toString()}</div>
{/await}

<style>
	.image-wrapper > img {
		top: 0px;
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
	}

	.image-wrapper {
		padding-top: 100%;
		position: relative;
	}

	.card {
		background-color: rgb(255, 255, 255);
		color: rgb(33, 43, 54);
		transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
		background-image: none;
		overflow: hidden;
		box-shadow: rgba(145, 158, 171, 0.24) 0px 0px 2px 0px,
			rgba(145, 158, 171, 0.24) 0px 16px 32px -4px;
		border-radius: 16px;
		position: relative;
		z-index: 0;
	}

	.details {
		font-weight: 700;
		display: flex;
		flex-direction: column;
		padding: 24px;
	}

	.wrapper-button {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}
	.register {
		background: transparent;
		border: 1px solid blue;
		color: blue;
		border-radius: 5px;
		cursor: pointer;
		font-size: 0.8rem;
		padding: 0.5rem;
	}

	.registered {
		background: transparent;
		border: 1px solid black;
		color: black;
		border-radius: 5px;
		cursor: pointer;
		font-size: 0.8rem;
		padding: 0.5rem;
	}
</style>
