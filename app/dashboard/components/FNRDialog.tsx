'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FNRDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function FNRDialog({ open, setOpen }: FNRDialogProps) {
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (file) {
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
          setFile(null);
          setDescription('');
          setOpen(false);
      } catch (error: unknown) { // Specify the type of error
          if (error instanceof Error) {
              console.error('Error:', error.message); // Now you can safely access error.message
          } else {
              console.error('Unexpected error:', error); // Handle unexpected error types
          }
      }
  } else {
      console.error("No file selected");
  }
};

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Submit FNR</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fnr-file" className="block text-sm font-medium text-gray-700">Upload Document</label>
            <Input 
              id="fnr-file" 
              type="file" 
              onChange={handleFileChange}
              required
            />
          </div>
          <div>
            <label htmlFor="fnr-description" className="block text-sm font-medium text-gray-700">Description</label>
            <Input 
              id="fnr-description" 
              placeholder="Enter FNR description" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Submit FNR</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}