<script lang="ts">
	import { text, textArea } from '../../components/admin/form_dto';

	let selectedMode;
	import Form from '../../components/shared/form-generator.svelte';
</script>

<div class="container">
	<div class="header">
		<h1>TITLE</h1>
		<select bind:value={selectedMode}>
			<option value="create">Create</option>
			<option value="read">Read</option>
			<option value="update">Update</option>
			<option value="delete">Delete</option>
		</select>
	</div>
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
	.container {
		padding: 1rem;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	select {
		cursor: pointer;
		background: white;
		padding: 0.5rem;
		border-radius: 15px;
	}
</style>
