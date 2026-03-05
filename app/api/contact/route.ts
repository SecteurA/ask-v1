export const runtime = 'edge';

export async function POST(request: Request) {
  const { name, company, email, phone, subject, message } = await request.json();

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Contact ASK Advisory <contact@askadvisory.ma>',
      to: 'k.dounia@askadvisory.ma',
      cc: 'm.ellaba@askadvisory.ma',
      reply_to: email,
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
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    console.error('Resend error:', error);
    return new Response(JSON.stringify({ error }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
