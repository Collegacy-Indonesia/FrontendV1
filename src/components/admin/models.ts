import { createCrud, field } from './utils';

export default {
	event: createCrud([field('name', 'text'), field('description', 'textarea')])
};
