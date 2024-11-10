import { NextResponse } from 'next/server';
import { Resend } from 'resend'; // We'll use Resend.com for emails

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { assignmentTitle, dueDate } = await req.json();

    // In a real application, you would fetch this from your database
    const studentEmails = ['student@example.com']; // Replace with actual student emails

    // Send email to each student
    await Promise.all(
      studentEmails.map((email) =>
        resend.emails.send({
          from: 'notifications@yourdomain.com',
          to: email,
          subject: `New Assignment: ${assignmentTitle}`,
          html: `
            <h1>New Assignment Posted</h1>
            <p>A new assignment has been posted:</p>
            <p><strong>Title:</strong> ${assignmentTitle}</p>
            <p><strong>Due Date:</strong> ${new Date(dueDate).toLocaleDateString()}</p>
            <p>Please log in to your dashboard to view the full details and submit your work.</p>
          `,
        })
      )
    );

    return NextResponse.json({ message: 'Notifications sent successfully' });
  } catch (error) {
    console.error('Email notification error:', error);
    return NextResponse.json(
      { error: 'Failed to send notifications' },
      { status: 500 }
    );
  }
} 