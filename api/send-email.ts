import { Resend } from 'resend';

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { from_name, reply_to, message } = req.body;

    await resend.emails.send({
      from: 'onboarding@resend.dev', // Ensure you use a verified domain in Resend
      to: 'Hamza.officaill23@gmail.com',
      subject: `New Message from ${from_name}`,
      text: `Name: ${from_name}\nEmail: ${reply_to}\nMessage: ${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email' });
  }
}