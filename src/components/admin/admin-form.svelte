<script lang="ts">
	import { text, textArea } from '../../components/admin/form_dto';

	export let formType: 'create' | 'update' | 'delete';
	export let model;
	import Form from '../shared/form-generator.svelte';

	const submitFunction = async () => {
		switch (formType) {
		// 	case 'create':
		// 		await model.create(form.getValues());
		// 		break;
		// 	case 'update':
		// 		await model.update(form.getValues());
		// 		break;
		// 	case 'delete':
		// 		await model.delete(form.getValues());
		// 		break;
		// }
	};
</script>

<Form fields={model.getFormFields} {submitFunction} />
