import { radio, radioItems, text, textArea } from './form_dto';

type fieldType = {
	name: string;
	type: 'text' | 'textarea' | 'boolean';
};

export const field: (name: string, type: 'text' | 'textarea' | 'boolean') => fieldType = (
	name,
	type
) => ({ name, type });

export class Crud {
	fields: fieldType[];
	endpoint: string;

	constructor(fields: fieldType[], endpoint: string) {
		this.fields = fields;
		this.endpoint = endpoint;
	}

	getFields(): fieldType[] {
		return this.fields;
	}

	getProperties() {
		return this.fields.map((field) => field.name);
	}

	getFormFields() {
		return this.fields.map((field) => {
			switch (field.type) {
				case 'text':
					return text('text', {
						id: '_' + Math.random().toString(36).substr(2),
						name: field.name,
						placeholder: '',
						label: field.name,
						required: true
					});
				case 'textarea':
					return textArea({
						id: '_' + Math.random().toString(36).substr(2),
						name: field.name,
						placeholder: '',
						label: field.name,
						required: true,
						rows: 3,
						cols: 1
					});
				case 'boolean':
					return radio(
						[
							radioItems(Math.random().toString(36).substring(2), 'True', true),
							radioItems(Math.random().toString(36).substring(2), 'False', false)
						],
						{
							id: Math.random().toString(36).substring(2),
							name: field.name,
							label: field.name
						}
					);
			}
		});
	}
}

export const createCrud = (fields: fieldType[]) => {
	return {
		get: () => fields,
		getProperties: () => fields.map((field) => field.name),
		getFormFields: () =>
			fields.map((field) => {
				switch (field.type) {
					case 'text':
						return text('text', {
							id: '_' + Math.random().toString(36).substr(2),
							name: field.name,
							placeholder: '',
							label: field.name,
							required: true
						});
					case 'textarea':
						return textArea({
							id: '_' + Math.random().toString(36).substr(2),
							name: field.name,
							placeholder: '',
							label: field.name,
							required: true,
							rows: 3,
							cols: 1
						});
					case 'boolean':
						return radio(
							[
								radioItems(Math.random().toString(36).substring(2), 'True', true),
								radioItems(Math.random().toString(36).substring(2), 'False', false)
							],
							{
								id: Math.random().toString(36).substring(2),
								name: field.name,
								label: field.name
							}
						);
				}
			})
	};
};
