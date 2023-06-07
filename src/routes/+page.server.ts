
import { prisma } from '../lib/server/prisma';
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async () => {
	return {
		notes: await prisma.notes.findMany()
	};
};
