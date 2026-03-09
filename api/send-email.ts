import { Resend } from 'resend';

export default async function handler(req: any, res: any) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // We can ONLY send to your verified account email in sandbox mode
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'hamza.officaill23@gmail.com', // Your verified Resend email
      subject: `New Portfolio Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return res.status(403).json({ error });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}