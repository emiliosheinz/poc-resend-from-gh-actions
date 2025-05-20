import { Resend } from 'resend';
import * as dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

(async () => {
  try {
    const response = await resend.emails.send({
      from: process.env.FROM ,
      to: process.env.TO,
      subject: 'GitHub Actions Email Test',
      html: '<p>This is a test email from GitHub Actions</p>',
    });

    if (response.error) {
      console.error('Resend error:', response.error);
      process.exit(1);
    }

    console.log('Email sent successfully:', response);
  } catch (err) {
    console.error('Caught error:', err);
    process.exit(1);
  }
})();
