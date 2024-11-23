'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Loader2 } from "lucide-react"

interface Assignment {
  _id: string;
  title: string;
  isSubmitted: boolean;
  dueDate?: string;
}

async function fetchActiveAssignments() {
  try {
    const { data } = await axios.get('/api/assignments/active')
    const unsubmittedAssignments = data.filter((assignment: Assignment) => 
      !assignment.isSubmitted
    )
    return unsubmittedAssignments
  } catch (error) {
    console.error('Error fetching assignments:', error)
    throw error
  }
}

export default function AssignmentsTab() {
  const { data: assignments, isLoading, error } = useQuery<Assignment[]>({
    queryKey: ['activeAssignments'],
    queryFn: fetchActiveAssignments,
    retry: 1,
  })

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex justify-center items-center min-h-[200px]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <CardContent className="text-red-500 p-4">
          Error loading assignments. Please try again later.
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Assignments to Submit</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {assignments && assignments.length > 0 ? (
            assignments.map((assignment) => (
              <li 
                key={assignment._id}
                className="p-2 hover:bg-gray-100 rounded-md transition-colors flex justify-between items-center"
              >
                <div>
                  <span className="font-medium">{assignment.title}</span>
                  {assignment.dueDate && (
                    <span className="text-sm text-gray-500 ml-2">
                      Due: {new Date(assignment.dueDate).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </li>
            ))
          ) : (
            <li className="text-gray-500 italic">No assignments pending submission</li>
          )}
        </ul>
      </CardContent>
    </Card>
  )
}
