// app/dashboard/components/FNRTab.tsx
'use client'

import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Adjust imports based on your UI library
import { Input } from "@/components/ui/input";

export default function FNRTab() {
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !description) {
      alert("Please provide a file and description.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('description', description);

    try {
      const response = await fetch('/api/fnr', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success:', data);
      // Optionally reset the form or show a success message
      setFile(null);
      setDescription('');
    } catch (error) {
      console.error('Error submitting FNR:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-2xl font-bold mb-4">Submit FNR</h2>
      <div className="mb-4">
        <label className="block mb-2">Description</label>
        <Input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Upload Document</label>
        <Input
          type="file"
          onChange={handleFileChange}
          required
        />
      </div>
      <Button type="submit">Submit FNR</Button>
    </form>
  );
}