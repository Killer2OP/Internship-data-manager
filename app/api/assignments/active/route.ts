import { connectToDatabase } from "@/lib/mongodb"
import Assignment from "@/models/Assignment"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    await connectToDatabase()

    const assignments = await Assignment.find({})  // First get all assignments to debug
    console.log('All assignments:', assignments)  // Debug log

    const activeAssignments = await Assignment.find({ 
      isSubmitted: false 
    })
    console.log('Active assignments:', activeAssignments)  // Debug log

    return NextResponse.json(activeAssignments)
  } catch (error) {
    console.error('Error fetching assignments:', error)
    return NextResponse.json(
      { error: 'Failed to fetch assignments' },
      { status: 500 }
    )
  }
} 