<script>
	import { register } from "../contexts/userContext";
	
	let email = '';
	let password = '';

	const handleSubmit = async () => {
		if (await register(email, password)) {
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
		<div class="header-text">Register</div>
		<input placeholder="Your Email Address" type="text" bind:value={email} />
		<input placeholder="Your Password" type="password" bind:value={password} />
		<input id="terms" type="checkbox" />
		<button type="submit">register</button>
		<span>Already have an account? <a href="/login">Login</a></span>
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
		padding: 40px;
		width: 90%;
		max-width: 600px;
	}
	.form-box .header-text {
		font-size: 32px;
		font-weight: 600;
		padding-bottom: 30px;
		text-align: center;
	}
	.form-box input {
		background: #1d1b31;
		color: #fff;
		margin: 10px 0px;
		border: none;
		padding: 10px;
		border-radius: 5px;
		width: 100%;
		font-size: 18px;
		font-family: poppins;
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
		font-size: 18px;
		padding: 10px;
		margin: 20px 0px;
	}
</style>
