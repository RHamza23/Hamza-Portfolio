// api/send-email.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const { name, email, message } = req.body;

    // Send only ONE email for testing to your own account
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'Hamza.officaill23@gmail.com', // Must be your verified Resend email
      subject: 'New Contact Form Submission',
      text: `From: ${name} (${email})\n\nMessage: ${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend Error:", error);
    return res.status(500).json({ error: 'Failed' });
  }
}