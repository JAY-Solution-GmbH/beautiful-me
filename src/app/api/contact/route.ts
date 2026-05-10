import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { services, contactMethods, name, email, phone } = data;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name und Telefonnummer sind Pflichtfelder.' },
        { status: 400 }
      );
    }

    const { data: resendData, error } = await resend.emails.send({
      from: 'Beautiful Me <beautifulme@jayboost.com>',
      to: 'beautiful.me@gmx.at',
      subject: `Neue Anfrage von ${name}`,
      html: `
        <h2>Neue Kundenanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>E-Mail:</strong> ${email || 'Nicht angegeben'}</p>
        
        <h3>Gewünschte Leistungen:</h3>
        <ul>
          ${services && services.length > 0 ? services.map((s: string) => `<li>${s}</li>`).join('') : '<li>Keine Auswahl</li>'}
        </ul>
        
        <h3>Bevorzugte Kontaktwege:</h3>
        <ul>
          ${contactMethods && contactMethods.length > 0 ? contactMethods.map((m: string) => `<li>${m}</li>`).join('') : '<li>Keine Auswahl</li>'}
        </ul>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: resendData });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Interner Serverfehler beim Senden der Anfrage.' },
      { status: 500 }
    );
  }
}
