'use client'

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"; // Adjust imports based on your UI library
import {  Input } from "@/components/ui/input"; // Adjust imports based on your UI library
import {  Label } from "@/components/ui/label"; // Adjust imports based on your UI library
import { Textarea } from "@/components/ui/textarea"; // Adjust imports based on your UI library
import { toast } from "sonner"; // Install with: npm install sonner

interface FNRSubmission {
  id: string;
  description: string;
  fileUrl: string;
}

export default function FNRSubmissions() {
  const [submissions, setSubmissions] = useState<FNRSubmission[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<{ description: string; file: File | null }>({
    description: '',
    file: null,
  });
  const [loading, setLoading] = useState(false);

  // Function to fetch submissions
  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/fnr'); // Fetch from the API
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSubmissions(data); // Assuming the API returns an array of submissions
    } catch (error) {
      console.error('Error fetching submissions:', error);
      setError('Failed to fetch submissions');
    }
  };

  useEffect(() => {
    fetchSubmissions(); // Call fetchSubmissions on component mount
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;

    if (id === 'submission-file') {
      // Type assertion to specify that e.target is an HTMLInputElement
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        file: target.files ? target.files[0] : null, // Access files safely
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [id.replace('submission-', '')]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append('description', formData.description);
    if (formData.file) {
      formDataToSend.append('file', formData.file);
    }

    try {
      const response = await fetch('/api/fnr', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit assignment');
      }

      toast.success('Submission created successfully');
      setFormData({ description: '', file: null });
      // Refetch submissions after a successful submission
      await fetchSubmissions();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit assignment';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">FNR Submissions</h2>
      {error && <p className="text-red-500">{error}</p>} {/* Display error if any */}
      
      <form onSubmit={handleSubmit} className="space-y-4 mb-4">
        <div>
          <Label htmlFor="submission-description">Description</Label>
          <Textarea
            id="submission-description"
            placeholder="Enter submission description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="submission-file">Upload File</Label>
          <Input
            id="submission-file"
            type="file"
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Assignment'}
        </Button>
      </form>

      <ul>
        {submissions.map(submission => (
          <li key={submission.id} className="mb-2">
            <p>{submission.description}</p>
            <a href={submission.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600">
              View Document
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}