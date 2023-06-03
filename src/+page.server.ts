import type { PageServerLoad } from './$types';
import { prisma } from './lib/server/prisma';
console.log('Retrieved data:');

export const load: PageServerLoad = async () => {
	return {
		notes: await prisma.notes.findMany()
	};
};
