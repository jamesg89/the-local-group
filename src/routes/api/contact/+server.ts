import type { RequestHandler } from './$types';

// @ts-expect-error doesnt need to be declared
import nodemailer from 'nodemailer';

export const POST: RequestHandler = async ({ request }) => {
  const { name, email, phone, message } = await request.json();

  if (!name || !email || !phone) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  // Nodemailer configuration
  const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {
      user: 'jamesgoodwinrealty@gmail.comy', // This is the SendGrid username for all accounts
      pass: process.env.SENDGRID_API_KEY,
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: 'New Contact Form Submission',
    html: `
      <h1>Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message || 'No message provided'}</p>
        `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
};
