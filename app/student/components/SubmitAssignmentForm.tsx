"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SubmitAssignmentForm({ assignmentId }: { assignmentId: string }) {
  const [submission, setSubmission] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement submission logic here
    const response = await fetch('/api/submissions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        assignmentId,
        content: submission,
        studentId: 'current-student-id', // Get from auth
      }),
    });

    if (response.ok) {
      // Handle success
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Textarea
        value={submission}
        onChange={(e) => setSubmission(e.target.value)}
        placeholder="Enter your submission"
      />
      <Button type="submit">Submit Assignment</Button>
    </form>
  );
} 