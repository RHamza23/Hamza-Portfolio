import { Resend } from 'resend';

// Initialize the client OUTSIDE the handler or INSIDE? 
// Let's do it INSIDE to be 100% sure it grabs the Vercel env at runtime.

export default async function handler(req: any, res: any) {
  // Move this here
  const resend = new Resend(process.env.RESEND_API_KEY);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'Hamza.officaill23@gmail.com',
      subject: `Portfolio: Message from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    console.log("Resend Success:", data);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend Error Detail:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}