import { error } from 'console';
import type { PageServerData } from '../$types';
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
