type TextType = 'text' | 'password' | 'number' | 'email' | 'tel';
type TextProperty = {
	id: string;
	name: string;
	placeholder: string;
	label: string;
	required: boolean;
};

export const text = (type: TextType, property: TextProperty) => ({
	name: property.name,
	attributes: {
		type,
		id: property.id,
		placeholder: property.placeholder,
		label: property.label,
		classes: ['form-control']
	},
	type: 'input',
	rules: property.required ? ['required'] : null
});

type TextAreaProperty = {
	id: string;
	name: string;
	placeholder: string;
	label: string;
	rows: number;
	cols: number;
	required: boolean;
};

export const textArea = (property: TextAreaProperty) => ({
	name: property.name,
	attributes: {
		id: property.id,
		label: property.label,
		placeholder: property.placeholder,
		rows: property.rows,
		cols: property.cols,
		classes: ['form-control']
	},
	type: 'textarea',
	rules: property.required ? ['required'] : null
});

type SelectOption = {
	value: any;
	title: string;
};

type SelectProperty = {
	id: string;
	name: string;
	label: string;
};

export const selectOption = (value, title): SelectOption => ({
	value,
	title
});

export const select = (options: SelectOption[], property: SelectProperty) => ({
	type: 'select',
	name: property.name,
	attributes: {
		id: property.id,
		label: property.label,
		classes: ['form-control']
	},
	extra: {
		options
	}
});

type RadioItems = {
	id: string;
	value: any;
	title: string;
};

type RadioProperty = {
	id: string;
	name: string;
	label: string;
};

export const radioItems = (id, title, value): RadioItems => ({
	id,
	title,
	value
});

export const radio = (items: RadioItems[], property: RadioProperty) => ({
	type: 'radio',
	name: property.name,
	attributes: {
		id: property.id,
		label: property.label,
		classes: ['form-check-input'],
		disabled: false
	},
	extra: {
		items,
		aligne: 'default'
	}
});

type FileProperty = {
	id: string;
	name: string;
	label: string;
	multiple: boolean;
	showPreview: boolean;
};

export const file = (property: FileProperty) => ({
	type: 'file',
	name: property.name,
	attributes: {
		id: property.id,
		classes: ['form-control'],
		label: property.label
	},
	extra: {
		multiple: property.multiple,
		showPreview: property.showPreview
	},
	rules: ['file']
});
