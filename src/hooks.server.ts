import { sequence } from '@sveltejs/kit/hooks';
import { handleClerk } from 'clerk-sveltekit/server';
import { CLERK_SECRET_KEY } from '$env/static/private';
import { handleClerkWebhook } from '$lib/server/webhooks';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = sequence(
    // First handler: Check if it's a webhook
    async ({ event, resolve }) => {
        if (event.url.pathname === '/api/webhooks/clerk') {
            return handleClerkWebhook(event);
        }
        return resolve(event);
    },
    // Second handler: Regular Clerk authentication
    handleClerk(CLERK_SECRET_KEY, {
        debug: true,
        protectedPaths: ['/admin'],
        signInUrl: '/sign-in',
    })
);