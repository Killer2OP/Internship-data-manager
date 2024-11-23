"use client"

import React, { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { toast } from "sonner" // Install with: npm install sonner

export default function FNRManagement() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id.replace('fnr-', '')]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("FNR form submitted");

    try {
      const response = await fetch('/api/fnr-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          date: new Date(formData.date).toISOString(),
          studentEmails: ['lightyagamikira403@gmail.com', 'student2@example.com'], // Add logic to fetch student emails
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create FNR');
      }

      toast.success('FNR created successfully');
      setFormData({
        title: '',
        description: '',
        date: '',
      });

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to create FNR';
      toast.error(errorMessage);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New FNR</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="fnr-title">FNR Title</Label>
            <Input 
              id="fnr-title" 
              placeholder="Enter FNR title" 
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="fnr-description">Description</Label>
            <Textarea 
              id="fnr-description" 
              placeholder="Enter FNR description" 
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="fnr-date">Date</Label>
            <Input 
              id="fnr-date" 
              type="date" 
              value={formData.date}
              onChange={handleChange}
              required
            />
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