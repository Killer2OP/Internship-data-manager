'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface StudentCardProps {
  studentName: string
}

export function StudentCard({ studentName }: StudentCardProps) {
  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-shadow" 
      onClick={() => alert(`Clicked on ${studentName}'s card`)}
    >
      <CardHeader>
        <CardTitle>Student Information</CardTitle>
        <CardDescription>Click to view detailed information</CardDescription>
      </CardHeader>
      <CardContent>
        <h2 className="text-2xl font-bold mb-4">{studentName}</h2>
        <p className="text-muted-foreground">
          Click to view more details and options.
        </p>
      </CardContent>
    </Card>
  )
}