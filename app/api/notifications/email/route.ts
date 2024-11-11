import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/sendEmail';
import dbConnect from '@/lib/dbConnect';
import Student from '@/models/Student'; // You'll need to create this model
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const TEMP_STUDENT_EMAILS = [
  'lightyagamikira403@gmail.com',
  // Add more test emails as needed
];

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { assignmentTitle, dueDate } = await req.json();

    // // Fetch all student emails from the database
    // const students = await Student.find({}, 'email');
    // const studentEmails = students.map(student => student.email);

    // if (!studentEmails.length) {
    //   return NextResponse.json(
    //     { error: 'No student emails found' },
    //     { status: 400 }
    //   );
    // }

    // Use the temporary email array instead of getting emails from the request
    await Promise.all(
        TEMP_STUDENT_EMAILS.map(async (email) => {
          await resend.emails.send({
            from: 'onboarding@resend.dev', // or your verified domain
            to: email,
            subject: `New Assignment: ${assignmentTitle}`,
            html: ` 
              <h1>New Assignment Posted</h1>
              <p>A new assignment has been posted:</p>
              <p><strong>Title:</strong> ${assignmentTitle}</p>
              <p><strong>Due Date:</strong> ${new Date(dueDate).toLocaleDateString()}</p>
              <p>Please log in to your dashboard to view the full details and submit your work.</p>
            `
          });
        })
      );

    // Send email to each student
    await Promise.all(
    //   studentEmails.map((email: string) =>
        TEMP_STUDENT_EMAILS.map((email: string) =>
        sendEmail(
          email,
          `New Assignment: ${assignmentTitle}`,
          `
            <h1>New Assignment Posted</h1>
            <p>A new assignment has been posted:</p>
            <p><strong>Title:</strong> ${assignmentTitle}</p>
            <p><strong>Due Date:</strong> ${new Date(dueDate).toLocaleDateString()}</p>
            <p>Please log in to your dashboard to view the full details and submit your work.</p>
          `
        )
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