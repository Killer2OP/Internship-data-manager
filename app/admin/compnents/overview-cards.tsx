'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface OverviewCardsProps {
  teacherCount: number
  studentCount: number
}

export function OverviewCards({ teacherCount, studentCount }: OverviewCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Teachers</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">{teacherCount}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Students</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">{studentCount}</p>
        </CardContent>
      </Card>
    </div>
  )
}
