<script lang="ts">
	import { get } from 'svelte/store';
	import { valuesForm, Field } from 'svelte-formly';
	import { Snackbar } from 'svelma';
	import 'bulma/css/bulma.css';

	export let fields;
	export let submitFunction;
	let values: any = {};
	const onSubmit = async () => {
		const data: any = get(valuesForm);
		values = data.values;
		if (data.valid) {
			Snackbar.create({ message: 'Loading...' });
			try {
				await submitFunction(values);
				Snackbar.create({ message: 'Success!' });
			} catch (error) {
				Snackbar.create({ message: error.toString() });
			}
		} else {
			Snackbar.create({ message: 'Form data invalid! please recheck the data' });
		}
	};
</script>

<form on:submit|preventDefault={onSubmit}>
	<Field {fields} />
	<button class="btn btn-secondary btn-lg btn-block" type="submit">Submit</button>
</form>
