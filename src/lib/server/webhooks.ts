// src/lib/server/webhooks.ts
import { json, type RequestEvent } from '@sveltejs/kit';
import { createClerkClient } from '@clerk/clerk-sdk-node';
import type { WebhookEvent } from '@clerk/clerk-sdk-node';
import { CLERK_SECRET_KEY, CLERK_WEBHOOK_SECRET } from '$env/static/private';

// Initialize Clerk client
const clerk = createClerkClient({ secretKey: CLERK_SECRET_KEY });

export async function handleClerkWebhook(event: RequestEvent) {
    try {
        const rawBody = await event.request.text();
        
        // Get the Clerk-Signature header
        const signature = event.request.headers.get('Clerk-Signature') || '';

        // Simple webhook verification
        if (!signature) {
            throw new Error('No signature found');
        }

        // Parse the webhook body
        const payload = JSON.parse(rawBody) as WebhookEvent;
        
        if (payload.type === 'user.created') {
            const { id: userId } = payload.data;
            
            await clerk.users.updateUser(userId, {
                privateMetadata: {
                    createdAt: new Date().toISOString()
                }
            });
            
            console.log(`Updated creation date for user ${userId}`);
        }
        
        return json({ success: true }, { status: 200 });
    } catch (err) {
        console.error('Webhook error:', err);
        return json({ error: 'Webhook verification failed' }, { status: 400 });
    }
}