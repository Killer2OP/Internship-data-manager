'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { SubmitAssignmentForm } from "./SubmitAssignmentForm";

interface Assignment {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
}

interface SubmitAssignmentDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function SubmitAssignmentDialog({ open, setOpen }: SubmitAssignmentDialogProps) {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);

  // Fetch unsubmitted assignments when dialog opens
  const fetchUnsubmittedAssignments = async () => {
    try {
      const response = await fetch("/api/assignments/unsubmitted");
      if (!response.ok) throw new Error("Failed to fetch assignments");
      const data = await response.json();
      setAssignments(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (open) {
      fetchUnsubmittedAssignments();
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Submit Assignment</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {assignments.length === 0 ? (
            <p>No pending assignments</p>
          ) : (
            assignments.map((assignment) => (
              <div
                key={assignment._id}
                className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                onClick={() => setSelectedAssignment(assignment)}
              >
                <h3 className="font-medium">{assignment.title}</h3>
                <p className="text-sm text-gray-500">
                  Due: {new Date(assignment.dueDate).toLocaleDateString()}
                </p>
              </div>
            ))
          )}
          {selectedAssignment && (
            <SubmitAssignmentForm
              assignment={selectedAssignment}
              onSubmit={() => {
                setOpen(false);
                setSelectedAssignment(null);
                fetchUnsubmittedAssignments();
              }}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
