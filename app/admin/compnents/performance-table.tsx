'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import type { Student, Performance } from '@/lib/types/index'

interface PerformanceTableProps {
  performance: Performance[]
  students: Student[]
}

export function PerformanceTable({ performance, students }: PerformanceTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Student</TableHead>
          <TableHead>Completed Assignments</TableHead>
          <TableHead>Overall Score</TableHead>
          <TableHead>Progress</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {performance.map((perf) => {
          const student = students.find(s => s.id === perf.studentId)
          return (
            <TableRow key={perf.studentId}>
              <TableCell>{student?.name}</TableCell>
              <TableCell>{perf.completedAssignments} / {perf.totalAssignments}</TableCell>
              <TableCell>{perf.overallScore}%</TableCell>
              <TableCell>
                <Progress 
                  value={(perf.completedAssignments / perf.totalAssignments) * 100} 
                  className="w-[60%]"
                />
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}