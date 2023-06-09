import { error, fail } from '@sveltejs/kit';
import type { Actions, PageServerData } from '../$types';
import { prisma } from '$lib/server/prisma';
export const load: PageServerData = async ({ params }) => {
	const getNotes = async () => {
		const note = await prisma.notes.findUnique({
			where: {
				id: Number(params.notesid)
			}
		});
		if (!note) {
			throw error(404, 'not found');
		}
		return note;
	};
	return {
		note: getNotes()
	};
};

export const actions: Actions = {
	updateNotes: async ({ request, params }) => {
		const { title, label, content, date } = Object.fromEntries(await request.formData()) as {
			title: string;
			label: string;
			content: string;
			date: string;
		};
		try {
			await prisma.notes.update({
				where: {
					id: Number(params.notesid)
				},
				data: {
					title,
					label,
					content,
					date
				}
			});
		} catch (error) {
			console.log(error);
			return fail(500, { message: 'no' });
		}
		return {
			status: 200
		};
	}
};
