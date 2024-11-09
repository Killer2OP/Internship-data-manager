"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface StudentCardProps {
  student: {
    id: string
    name: string
    course: string
    year: number
    enrollmentNumber: string
  }
}

export default function StudentCard({ student }: StudentCardProps) {
  return (
    <Card className="hover:bg-gray-50 cursor-pointer transition-colors">
      <CardHeader>
        <CardTitle className="text-lg">{student.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">Course: {student.course}</p>
        <p className="text-sm text-gray-600">Year: {student.year}</p>
        <p className="text-sm text-gray-600">ID: {student.enrollmentNumber}</p>
      </CardContent>
    </Card>
  )
}