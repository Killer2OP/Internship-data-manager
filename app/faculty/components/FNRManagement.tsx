"use client"

import React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export default function FNRManagement() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("FNR form submitted")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New FNR</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="fnr-title">FNR Title</Label>
            <Input id="fnr-title" placeholder="Enter FNR title" />
          </div>
          <div>
            <Label htmlFor="fnr-description">Description</Label>
            <Textarea id="fnr-description" placeholder="Enter FNR description" />
          </div>
          <div>
            <Label htmlFor="fnr-date">Date</Label>
            <Input id="fnr-date" type="date" />
          </div>
          <Button type="submit">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create FNR
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}