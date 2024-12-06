"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Calendar, FileText, Home, LogOut, Microscope, GraduationCap, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Header() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = () => {
    setIsLoading(true)
    setTimeout(() => {
      localStorage.removeItem("user")
      router.push("/signin")
    }, 1000)
  }

  const handleNavigation = (path: string) => {
    setIsLoading(true)
    router.push(path)
  }

  const handleAssignmentsNavigation = () => {
    router.push("/assignments")
  }

  return (
    <header className="bg-gray-200 text-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Faculty Dashboard</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4">
              {[
                { icon: Home, label: "Dashboard", path: "/" },
                // { icon: Calendar, label: "Schedule", path: "/schedule" },
                { icon: FileText, label: "Assignments", path: "/assignments" },
                { icon: Microscope, label: "FNR Submissions", path: "/fnr-submissions" },
                { icon: FileText, label: "Assignments", onClick: handleAssignmentsNavigation },
                { icon: Microscope, label: "FNR", path: "/fnr" },
                { icon: CheckCircle, label: "Verify", path: "https://www.mca.gov.in/content/mca/global/en/mca/fo-llp-services/company-llp-name-search.html", external: true },
              ].map(({ icon: Icon, label, path, external, onClick }) => (
                <li key={path}>
                  <Button
                    variant="ghost"
                    className="text-gray-800 hover:text-primary hover:bg-gray-300"
                    onClick={() => external ? window.open(path, '_blank') : onClick ? onClick() : handleNavigation(path)}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {label}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Faculty" />
                  <AvatarFallback>FC</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>{isLoading ? "Logging out..." : "Log out"}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}