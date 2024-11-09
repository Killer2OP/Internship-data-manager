'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Student, Performance, Teacher } from '@/lib/types/index'

interface TeacherAssignmentsProps {
  students: Student[]
  teachers: Teacher[]
  assignments: { [key: number]: number }
  onAssign: (studentId: number, teacherId: number) => void
}

export function TeacherAssignments({ 
  students, 
  teachers, 
  assignments, 
  onAssign 
}: TeacherAssignmentsProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Student</TableHead>
          <TableHead>Assigned Teacher</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map(student => (
          <TableRow key={student.id}>
            <TableCell>{student.name}</TableCell>
            <TableCell>
              {assignments[student.id] 
                ? teachers.find(t => t.id === assignments[student.id])?.name 
                : 'Not assigned'}
            </TableCell>
            <TableCell>
              <Select onValueChange={(value) => onAssign(student.id, parseInt(value))}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a teacher" />
                </SelectTrigger>
                <SelectContent>
                  {teachers.map(teacher => (
                    <SelectItem key={teacher.id} value={teacher.id.toString()}>
                      {teacher.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}