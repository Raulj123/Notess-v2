import type { Actions } from '@sveltejs/kit';
import { prisma } from '../../lib/server/prisma';
import { fail } from '@sveltejs/kit';
export const actions: Actions = {
	default: async ({ request }) => {
		const { title, label, content, date } = Object.fromEntries(await request.formData()) as {
			title: string;
			label: string;
			content: string;
			date: string;
		};
		try {
			await prisma.notes.create({
				data: {
					title,
					label,
					content,
					date
				}
			});
		} catch (error) {
			console.log(error);
			return fail(500, { message: 'Could make notes' });
		}
		return {
			status: 201
		};
	}
};
