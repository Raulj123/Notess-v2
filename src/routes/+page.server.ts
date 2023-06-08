
import { fail } from '@sveltejs/kit';
import { prisma } from '../lib/server/prisma';
import type { Actions, PageServerLoad } from './$types';
export const load: PageServerLoad = async () => {
	return {
		notes: await prisma.notes.findMany()
	};
};
export const actions: Actions = {
	deleteNote: async ({ url }) => {
		const id = url.searchParams.get('id');
		if (!id) {
			return fail(500, { message: 'null' });
		}
		try {
			await prisma.notes.delete({
				where: {
					id: Number(id)
				}
			});
		} catch (err) {
			console.log(err);
		}
		return {
			status: 201
		};
	}
	
}
