"use client"

import React from "react";
import { useState } from "react";
import StudentDetails from "./StudentDetails"; // Import the StudentDetails component
import { Dialog, DialogPortal } from '@radix-ui/react-dialog'; // Import DialogPortal separately

interface StudentCardProps {
  student: {
    id: string;
    name: string;
    course: string;
    year: number;
    enrollmentNumber: string;
  };
}

export default function StudentCard({ student }: StudentCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<StudentCardProps["student"] | null>(null);

  const handleCardClick = () => {
    setSelectedStudent(student); // Set the selected student
    setIsDialogOpen(true); // Open the dialog
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false); // Close the dialog
    setSelectedStudent(null); // Clear the selected student
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleCloseDialog}>
      <div className="card" onClick={handleCardClick}>
        <h3>{student.name}</h3>
        <p>Course: {student.course}</p>
        <p>Year: {student.year}</p>
        <p>Enroll: {student.enrollmentNumber}</p>
      </div>

      {selectedStudent && (
        <DialogPortal>
          <StudentDetails student={selectedStudent} onClose={handleCloseDialog} />
        </DialogPortal>
      )}
    </Dialog>
  );
}