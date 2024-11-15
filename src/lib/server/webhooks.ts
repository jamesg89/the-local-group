// src/lib/server/webhooks.ts
import { json, type RequestEvent } from '@sveltejs/kit';
import { createClerkClient } from '@clerk/clerk-sdk-node';
import type { WebhookEvent } from '@clerk/clerk-sdk-node';
import { CLERK_SECRET_KEY, CLERK_WEBHOOK_SECRET } from '$env/static/private';
import crypto from 'crypto';

// Initialize Clerk client
const clerk = createClerkClient({ secretKey: CLERK_SECRET_KEY });

// Verify webhook signature
function verifyWebhookSignature(body: string, signature: string, timestamp: string) {
    const payload = `${timestamp}.${body}`;
    const expectedSignature = crypto
        .createHmac('sha256', CLERK_WEBHOOK_SECRET)
        .update(payload)
        .digest('hex');

    const providedSignature = signature.split(',')[1].split('=')[1];

    return crypto.timingSafeEqual(
        Buffer.from(expectedSignature),
        Buffer.from(providedSignature)
    );
}

export async function handleClerkWebhook(event: RequestEvent) {
    try {
        const rawBody = await event.request.text();
        
        // Get the Clerk headers
        const signature = event.request.headers.get('svix-signature') || '';
        const timestamp = event.request.headers.get('svix-timestamp') || '';

        // Verify the webhook signature
        if (!signature || !timestamp || !verifyWebhookSignature(rawBody, signature, timestamp)) {
            throw new Error('Invalid webhook signature');
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