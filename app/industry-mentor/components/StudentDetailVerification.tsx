'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'

type Student = {
  id: string;
  name: string;
  course: string;
  year: number;
  gpa: number;
}

const students: Student[] = [
  { id: '1', name: 'Alice Johnson', course: 'Computer Science', year: 3, gpa: 3.8 },
  { id: '2', name: 'Bob Smith', course: 'Electrical Engineering', year: 2, gpa: 3.5 },
  { id: '3', name: 'Charlie Brown', course: 'Mechanical Engineering', year: 4, gpa: 3.9 },
  { id: '4', name: 'Diana Prince', course: 'Data Science', year: 1, gpa: 3.7 },
]

export default function StudentVerification() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  const handleApprove = (id: string) => {
    // Here you would typically send an API request to approve the student
    alert(`Student ${id} approved!`)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Student Detail Verification</h1>
          <Link href="/">
            <Button variant="outline">Back to Dashboard</Button>
          </Link>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => (
            <Card key={student.id} className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {student.name}
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={() => toggleCard(student.id)}>
                  {expandedCard === student.id ? <ChevronUp /> : <ChevronDown />}
                </Button>
              </CardHeader>
              <CardContent>
                <CardDescription>{student.course}</CardDescription>
                {expandedCard === student.id && (
                  <div className="mt-4 space-y-2">
                    <p>Year: {student.year}</p>
                    <p>GPA: {student.gpa}</p>
                    <Button 
                      className="w-full mt-4" 
                      onClick={() => handleApprove(student.id)}
                    >
                      <CheckCircle className="mr-2 h-4 w-4" /> Approve
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}