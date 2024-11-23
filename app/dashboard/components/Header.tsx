'use client'

import { useRouter } from "next/navigation"
import { Bell, Calendar, FileText, Home, LogOut, User, Microscope, GraduationCap, UserCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { SubmitAssignmentDialog } from "./SubmitAssignmentDialog"

export default function Header() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logout clicked")
    router.push('/signin')
  }

  const handleStudentDetailsClick = () => {
    router.push("/dashboard/student-details")
  }

  const handleSubmitAssignmentClick = () => {
    setIsDialogOpen(true);
  }

  const handleDashboardClick = () => {
    router.push("/dashboard")
  }

  return (
    <header className="bg-gray-200 text-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Student Dashboard</h2>
          </div>
          <div className="flex items-center space-x-4">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Button 
                    variant="ghost" 
                    className="text-gray-800 hover:text-primary hover:bg-gray-300"
                    onClick={handleDashboardClick}
                  >
                    <Home className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                </li>
                {/* <li>
                  <Button variant="ghost" className="text-gray-800 hover:text-primary hover:bg-gray-300">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule
                  </Button>
                </li> */}
                <li>
                  <Button 
                    variant="ghost" 
                    className="text-gray-800 hover:text-primary hover:bg-gray-300"
                    onClick={handleSubmitAssignmentClick}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Submit Assignment
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="text-gray-800 hover:text-primary hover:bg-gray-300">
                    <Microscope className="mr-2 h-4 w-4" />
                    Submit FNR
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="text-gray-800 hover:text-primary hover:bg-gray-300"
                    onClick={handleStudentDetailsClick}
                  >
                    <UserCircle className="mr-2 h-4 w-4" />
                    Student Details
                  </Button>
                </li>
              </ul>
            </nav>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-800 hover:text-primary hover:bg-gray-300">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <SubmitAssignmentDialog 
          open={isDialogOpen}
          setOpen={setIsDialogOpen}
        />
    </header>
  )
}