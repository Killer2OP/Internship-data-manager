"use client"

import React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export default function AssignmentManagement() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Assignment form submitted")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Assignment</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="assignment-title">Assignment Title</Label>
            <Input id="assignment-title" placeholder="Enter assignment title" />
          </div>
          <div>
            <Label htmlFor="assignment-description">Description</Label>
            <Textarea id="assignment-description" placeholder="Enter assignment description" />
          </div>
          <div>
            <Label htmlFor="assignment-due-date">Due Date</Label>
            <Input id="assignment-due-date" type="date" />
          </div>
          <Button type="submit">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Assignment
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}