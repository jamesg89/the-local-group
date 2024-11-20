import { createClient } from '$lib/prismicio';
import type { LayoutServerLoad } from './$types';


export const load: LayoutServerLoad = async ({ fetch,  locals: { safeGetSession }, cookies }) => {
	// Create the Prismic client
	const client = createClient({ fetch, cookies });

	// Fetch Prismic settings
	const settings = await client.getSingle('settings');

	// Fetch session
	const { session } = await safeGetSession()
	return {
	  session,
	  settings,
	  cookies: cookies.getAll(),
	}
  }

export const prerender = 'auto';