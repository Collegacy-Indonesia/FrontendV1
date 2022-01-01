<script>
	import ApiService from '../utils/api';
	import ContextTest from '../components/shared/contextTest.svelte';
	import Form from '../components/shared/formGenerator.svelte';
	import { textArea, text } from '../utils/form_dto';

	const handleClick = async () => {
		console.log('clicked');
		const apiSrv = new ApiService('/users');
		const dataUsers = await apiSrv.getData();
		console.log(dataUsers);

		if (!dataUsers) {
			alert('you dont have permission');
		}
		console.log('fetching finish');
	};
</script>

<svelte:head>
	<title>Test JWT</title>
</svelte:head>
<div class="test-jwt">
	<br />
	<br />
	<br />
	<br />
	<br />
	<h1>test-jwt</h1>
	<button on:click={handleClick} class="big-btn"> GET USERS </button>
	<ContextTest />
	<Form
		submitFunction={(values) => {
			console.log(values);
		}}
		fields={[
			textArea({
				id: 'test',
				name: 'test',
				label: 'a text area',
				rows: 10,
				cols: 1,
				required: true,
				placeholder: 'A place holder'
			}),
			text('email', {
				id: 'another_test',
				name: 'testing',
				label: 'a text',
				required: false,
				placeholder: 'A place holder'
			})
		]}
	/>
</div>

<style>
	.big-btn {
		margin: 5vh;
	}
</style>
