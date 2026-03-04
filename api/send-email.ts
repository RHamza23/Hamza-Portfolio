// api/send-email.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  try {
    // Hardcode everything for this test
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'Hamza.officaill23@gmail.com', // Must be your Resend login email
      subject: 'Test Email',
      text: 'If you see this, your Vercel environment variables are working!',
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed' });
  }
}