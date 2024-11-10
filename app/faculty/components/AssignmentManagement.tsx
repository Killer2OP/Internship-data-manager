"use client"

import React, { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { toast } from "sonner" // Install with: npm install sonner

interface AssignmentForm {
  title: string;
  description: string;
  dueDate: string;
}

export default function AssignmentManagement() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<AssignmentForm>({
    title: '',
    description: '',
    dueDate: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id.replace('assignment-', '')]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Create the assignment
      const assignmentResponse = await fetch('/api/assignments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          dueDate: formData.dueDate,
          facultyId: "your-faculty-id", // Replace with actual faculty ID from auth
        }),
      });

      if (!assignmentResponse.ok) {
        throw new Error('Failed to create assignment');
      }

      // 2. Send email notifications
      const notificationResponse = await fetch('/api/notifications/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          assignmentTitle: formData.title,
          dueDate: formData.dueDate,
        }),
      });

      if (!notificationResponse.ok) {
        throw new Error('Failed to send notifications');
      }

      // Success
      toast.success('Assignment created and notifications sent!');
      
      // Reset form
      setFormData({
        title: '',
        description: '',
        dueDate: '',
      });

    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to create assignment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Assignment</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="assignment-title">Assignment Title</Label>
            <Input 
              id="assignment-title" 
              placeholder="Enter assignment title" 
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="assignment-description">Description</Label>
            <Textarea 
              id="assignment-description" 
              placeholder="Enter assignment description" 
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="assignment-dueDate">Due Date</Label>
            <Input 
              id="assignment-dueDate" 
              type="date" 
              value={formData.dueDate}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" disabled={loading}>
            <PlusCircle className="mr-2 h-4 w-4" />
            {loading ? 'Creating...' : 'Create Assignment'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}