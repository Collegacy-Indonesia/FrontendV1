<script>
	import { login } from "../contexts/userContext";
	
	let email = '';
	let password = '';

	const handleSubmit = async () => {
		if (await login(email, password)) {
			console.log("redirecting");
			window.location.href = '/';
		}
	}

</script>

<svelte:head>
	<title>Login Page</title>
</svelte:head>
<div class="container">
	<form on:submit|preventDefault={handleSubmit} class="form-box">
		<div class="header-text">Login</div>
		<input placeholder="Your Email Address" type="text" bind:value={email} />
		<input placeholder="Your Password" type="password" bind:value={password} />
		<input id="terms" type="checkbox" />
		<button type="submit">login</button>
		<span>Don't have an account? <a href="/register">Register</a></span>
	</form>
</div>

<style>
	* {
		box-sizing: border-box;
		display: inline-block;
	}
	a {
		color: rgb(77, 53, 212);
		text-decoration: none;
	}
	.container {
		position: relative;
		z-index: 3;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
	}
	.form-box {
		color: white;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		background: #11101d;
		padding: 2.5em;
		width: 90%;
		max-width: 37.5em;
	}
	.form-box .header-text {
		font-size: 2em;
		font-weight: 600;
		padding-bottom: 1.875em;
		text-align: center;
	}
	.form-box input {
		background: #1d1b31;
		color: #fff;
		margin: 0.625em 0em;
		border: none;
		padding: 0.625em;
		border-radius: 5px;
		width: 100%;
		font-size: 1.125em;
	}
	.form-box input[type='checkbox'] {
		display: none;
	}
	.form-box button {
		background: #1d1b31;
		color: #fff;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		width: 100%;
		font-size: 1.125em;
		padding: 0.625em;
		margin: 1.25em 0em;
	}
</style>
