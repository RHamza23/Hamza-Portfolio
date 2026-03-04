import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { from_name, reply_to, message } = req.body;

    // 1. Email to YOU (with user's info)
    await resend.emails.send({
      from: 'Portfolio Contact <hello@yourdomain.com>', 
      to: 'Hamza.officaill23@gmail.com',
      replyTo: reply_to,
      subject: `New Message from ${from_name}`,
      text: `Name: ${from_name}\nEmail: ${reply_to}\nMessage: ${message}`,
    });

    // 2. Auto-reply Email to USER
    await resend.emails.send({
      from: 'Hamza Nisar <hello@yourdomain.com>',
      to: reply_to,
      subject: 'Query Received - Hamza Nisar',
      text: `Hi ${from_name},\n\nThanks for reaching out! I have received your query and will get back to you within 24-48 hours.\n\nBest regards,\nHamza Nisar`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}