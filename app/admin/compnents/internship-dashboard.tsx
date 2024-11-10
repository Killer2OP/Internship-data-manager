'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OverviewCards } from './overview-cards'
import { PerformanceTable } from './performance-table'
import { TeacherAssignments } from './teacher-assignments'
import { AddPersonForm } from './add-person-form'
import { initialTeachers, initialStudents, initialPerformance } from '@/lib/admin/data'
import type { Teacher, Student, Performance } from '@/lib/types/index'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { LogOut } from 'lucide-react' // Import your logout icon

export default function InternshipDashboard() {
  const router = useRouter();
  const [performance, setPerformance] = useState<Performance[]>(initialPerformance)
  const [teachers, setTeachers] = useState<Teacher[]>(initialTeachers)
  const [students, setStudents] = useState<Student[]>(initialStudents)
  const [assignments, setAssignments] = useState<{[key: number]: number}>({})
  const [newTeacherName, setNewTeacherName] = useState('')
  const [newStudentName, setNewStudentName] = useState('')

  const assignTeacher = (studentId: number, teacherId: number) => {
    setAssignments(prev => ({ ...prev, [studentId]: teacherId }))
  }

  const addTeacher = () => {
    if (newTeacherName.trim()) {
      setTeachers(prev => [...prev, { id: prev.length + 1, name: newTeacherName.trim() }])
      setNewTeacherName('')
    }
  }

  const addStudent = () => {
    if (newStudentName.trim()) {
      setStudents(prev => [...prev, { id: prev.length + 1, name: newStudentName.trim() }])
      setNewStudentName('')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/signin")
  }

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <header className="bg-gray-200 text-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Admin Dashboard</h2>
          </div>
          <div className="flex items-center space-x-4">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Button variant="ghost" onClick={() => router.push("/")}>
                    Home
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" onClick={() => router.push("/performance-table")}>
                    Student Performance
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" onClick={() => router.push("/assignments")}>
                    Teacher Assignments
                  </Button>
                </li>
              </ul>
            </nav>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* <Tabs defaultValue="home">
        <TabsList className="flex justify-center space-x-4">
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="performance">Student Performance</TabsTrigger>
          <TabsTrigger value="assignments">Teacher Assignments</TabsTrigger>
        </TabsList>

        <TabsContent value="home">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Welcome to the Internship Data Manager</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">Here's a quick overview of your internship program:</p>
              <OverviewCards teacherCount={teachers.length} studentCount={students.length} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Student Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <PerformanceTable performance={performance} students={students} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assignments">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Assign Teachers to Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <AddPersonForm
                    title="Add New Teacher"
                    placeholder="Enter teacher name"
                    value={newTeacherName}
                    onChange={setNewTeacherName}
                    onAdd={addTeacher}
                  />
                  <AddPersonForm
                    title="Add New Student"
                    placeholder="Enter student name"
                    value={newStudentName}
                    onChange={setNewStudentName}
                    onAdd={addStudent}
                  />
                </div>
                <TeacherAssignments
                  students={students}
                  teachers={teachers}
                  assignments={assignments}
                  onAssign={assignTeacher}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs> */}
    </div>
  )
}