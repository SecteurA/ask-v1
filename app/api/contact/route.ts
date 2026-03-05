import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, company, email, phone, subject, message } = await request.json();

  const { error } = await resend.emails.send({
    from: 'Contact ASK Advisory <contact@askadvisory.ma>',
    to: 'k.dounia@askadvisory.ma',
    cc: 'm.ellaba@askadvisory.ma',
    replyTo: email,
    subject: `[Contact] ${subject} — ${name}`,
    html: `
      <h2>Nouveau message de contact</h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Entreprise :</strong> ${company}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${phone || '—'}</p>
      <p><strong>Sujet :</strong> ${subject}</p>
      <hr />
      <p><strong>Message :</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `,
  });

  if (error) {
    console.error('Resend error:', JSON.stringify(error));
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
