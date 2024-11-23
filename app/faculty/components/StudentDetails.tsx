"use client"

import React from "react"
import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Student } from "@/lib/types/faculty"

interface StudentDetailsProps {
  student: Student
  onClose: () => void
}

export default function StudentDetails({ student, onClose }: StudentDetailsProps) {
  const handleApproval = () => {
    console.log(`Approved student: ${student.name}`)
    onClose()
  }

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{student.name}</DialogTitle>
        <DialogDescription>Student Details</DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        {Object.entries(student).map(([key, value]) => (
          <div key={key} className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor={key} className="text-right">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Label>
            <Input id={key} value={value} className="col-span-3" readOnly />
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <button onClick={handleApproval} className="btn btn-primary">
          Approve
        </button>
        <button onClick={onClose} className="btn btn-secondary ml-2">
          Close
        </button>
      </div>
    </DialogContent>
  )
}