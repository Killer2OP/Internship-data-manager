'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"

interface StudentReport {
  studentId: number
  studentName: string
  totalAssignments: number
  completedAssignments: number
  fnrSubmissions: number
  completionRate: number
}

interface StudentReportsProps {
  reports: StudentReport[]
}

export function StudentReports({ reports }: StudentReportsProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Student Assignment Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student Name</TableHead>
              <TableHead>Total Assignments</TableHead>
              <TableHead>Completed</TableHead>
              <TableHead>FNR Submissions</TableHead>
              <TableHead>Completion Rate</TableHead>
              <TableHead>Progress</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reports.map((report) => (
              <TableRow key={report.studentId}>
                <TableCell>{report.studentName}</TableCell>
                <TableCell>{report.totalAssignments}</TableCell>
                <TableCell>{report.completedAssignments}</TableCell>
                <TableCell>{report.fnrSubmissions}</TableCell>
                <TableCell>{report.completionRate}%</TableCell>
                <TableCell>
                  <Progress 
                    value={report.completionRate} 
                    className="w-[60%]"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
} 