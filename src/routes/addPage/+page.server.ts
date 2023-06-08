import type { Actions } from '@sveltejs/kit';
import { prisma } from '../../lib/server/prisma';
import { fail } from '@sveltejs/kit';
export const actions: Actions = {
	default: async ({ request }) => {
		const { title, label,content, date } = Object.fromEntries(
			await request.formData()
		) as unknown as {
			title: string;
			label: string;
			content: string;
			date: string;
		};
		if (title.length > 30) {
			return fail(400, { message: 'msg too long' });
		}
		if (content.length > 200) {
			return fail(400, { message: 'name too long' });
		}
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
