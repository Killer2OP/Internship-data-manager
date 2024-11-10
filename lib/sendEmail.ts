import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    if (!process.env.SMTP_FROM) {
      throw new Error('SMTP_FROM environment variable is not set');
    }
    if (!to) {
      throw new Error('Recipient email is not provided');
    }
    if (!subject) {
      throw new Error('Email subject is not provided');
    }
    if (!html) {
      throw new Error('Email content is not provided');
    }
    await resend.emails.send({
      from: process.env.SMTP_FROM,
      to,
      subject,
      html,
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}; 