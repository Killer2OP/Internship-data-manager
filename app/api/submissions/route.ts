import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Submission from "@/models/Submission";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const formData = await req.formData();
    
    const submission = await Submission.create({
      assignmentId: formData.get("assignmentId"),
      content: formData.get("content"),
      studentId: "current-student-id", // Replace with actual student ID from auth
      submittedAt: new Date(),
      // Handle file upload if needed
    });

    return NextResponse.json(submission, { status: 201 });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit assignment" },
      { status: 500 }
    );
  }
} 