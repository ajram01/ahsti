import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { to, subject, html, token } = await req.json();

    if (!token) {
      return NextResponse.json({ error: 'Missing captcha token' }, { status: 400 });
    }

    const captchaRes = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const captchaData = await captchaRes.json();

    if (
      !captchaData.success ||
      captchaData.score < 0.5 ||
      captchaData.action !== 'contact_form'
    ) {
      return NextResponse.json({ error: 'Captcha verification failed' }, { status: 403 });
    }

    const data = await resend.emails.send({
      from: 'Your App <onboarding@resend.dev>', // or a custom domain
      to,
      subject,
      html,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}