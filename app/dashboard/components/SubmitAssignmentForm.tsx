"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface Assignment {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
}

interface SubmitAssignmentFormProps {
  assignment: Assignment;
  onSubmit: () => void;
}

export function SubmitAssignmentForm({ assignment, onSubmit }: SubmitAssignmentFormProps) {
  const [submission, setSubmission] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("assignmentId", assignment._id);
      formData.append("content", submission);
      if (file) {
        formData.append("file", file);
      }

      const response = await fetch("/api/submissions", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit assignment");
      }

      toast.success("Assignment submitted successfully!");
      onSubmit();
      setSubmission("");
      setFile(null);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to submit assignment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="submission">Your Submission</Label>
        <Textarea
          id="submission"
          value={submission}
          onChange={(e) => setSubmission(e.target.value)}
          placeholder="Enter your submission content"
          required
        />
      </div>
      <div>
        <Label htmlFor="file">Attachment (optional)</Label>
        <Input
          id="file"
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit Assignment"}
      </Button>
    </form>
  );
} 