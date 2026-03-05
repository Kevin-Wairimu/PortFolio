import { Resend } from 'resend';

export const config = {
  runtime: 'edge',
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(request: Request) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { from_name, from_email, message } = await request.json();

    // 1. Send the email to YOU (the owner)
    const { data: ownerData, error: ownerError } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resend's default sender for testing
      to: 'kevinkhalid21@gmail.com', // Your email
      subject: `New Portfolio Message from ${from_name}`,
      replyTo: from_email,
      text: `You have received a new message from your portfolio:\n\nName: ${from_name}\nEmail: ${from_email}\n\nMessage:\n${message}`,
    });

    if (ownerError) {
      console.error('Owner Email Error:', ownerError);
      return new Response(JSON.stringify({ error: 'Failed to send owner email' }), { status: 500 });
    }

    // 2. Send the Auto-Reply to the SENDER
    const { data: senderData, error: senderError } = await resend.emails.send({
      from: 'Kevin Wairimu <onboarding@resend.dev>', // Your name
      to: from_email, // The sender's email
      subject: `Thank you for contacting me, ${from_name}!`,
      text: `Hi ${from_name},\n\nThank you for reaching out! I've received your message and will get back to you as soon as possible.\n\nBest regards,\nKevin Ng'amau Wairimu`,
    });

    if (senderError) {
        console.error('Sender Email Error:', senderError);
        // We don't necessarily fail the whole request if only the auto-reply fails
    }

    return new Response(JSON.stringify({ success: true, ownerData, senderData }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Unexpected Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
