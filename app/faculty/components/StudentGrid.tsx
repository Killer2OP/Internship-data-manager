"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import StudentCard from "./StudentCard"

const students = [
  {
    id: "1",
    name: "John Doe",
    course: "Computer Science",
    year: 3,
    enrollmentNumber: "CS2021001",
  },
  // Add more students...
]

export default function StudentGrid() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}