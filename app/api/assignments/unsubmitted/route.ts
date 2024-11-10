import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Assignment from "@/models/Assignment";
import Submission from "@/models/Submission";

export async function GET() {
  try {
    await dbConnect();
    
    // Get all assignments
    const assignments = await Assignment.find({});
    
    // Get student's submissions
    const submissions = await Submission.find({
      studentId: "current-student-id", // Replace with actual student ID from auth
    });

    // Filter out submitted assignments
    const submittedAssignmentIds = submissions.map(sub => sub.assignmentId.toString());
    const unsubmittedAssignments = assignments.filter(
      assignment => !submittedAssignmentIds.includes(assignment._id.toString())
    );

    return NextResponse.json(unsubmittedAssignments);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch unsubmitted assignments" },
      { status: 500 }
    );
  }
} 