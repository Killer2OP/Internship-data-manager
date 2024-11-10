import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Assignment from '@/models/Assignment';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    
    // Create assignment document
    const assignmentData = {
      title: body.title,
      description: body.description,
      dueDate: new Date(body.dueDate)
    };
    
    console.log('Creating assignment with data:', assignmentData);
    
    const assignment = await Assignment.create(assignmentData);
    console.log('Assignment created:', assignment);
    
    return NextResponse.json(assignment, { status: 201 });
  } catch (error: any) {
    console.error('Creation error:', {
      message: error.message,
      name: error.name,
      stack: error.stack
    });
    
    return NextResponse.json(
      { error: 'Failed to create assignment' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const assignments = await Assignment.find({}).sort({ createdAt: -1 });
    return NextResponse.json(assignments);
  } catch (error) {
    console.error('Assignment fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch assignments' },
      { status: 500 }
    );
  }
} 