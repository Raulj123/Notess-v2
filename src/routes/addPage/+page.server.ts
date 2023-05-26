import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const { title, label, content, date } = Object.fromEntries(await request.formData()) as {
			title: string;
			label: string;
			content: string;
			date: string;
		};
		console.log(title);
	}
};
