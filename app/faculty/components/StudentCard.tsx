"use client"

import React from "react";
import { useState } from "react";
import StudentDetails from "./StudentDetails"; // Import the StudentDetails component
import { Dialog, DialogPortal } from '@radix-ui/react-dialog'; // Import DialogPortal separately

interface StudentCardProps {
  student: {
    id: number;
    name: string;
    course: string;
    year: number;
    enrollmentNumber: string;
    username: string;
    startDate: Date;
    mobile: string;
    email: string;
    companyName: string;
    companyAddress: string;
    mentorName: string;
    mentorContact: string;
    mentorEmail: string;
    registrationNumber: string;
    cinNumber: string;
    city: string;
    stipend: number;
    internshipMode: string;
    universityMentor: string;
    placementCompany: string;
    photograph: string;
    resume: string;
  };
}

export default function StudentCard({ student }: StudentCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<StudentCardProps["student"] | null>(null);

  const handleCardClick = () => {
    setSelectedStudent(student); // Ensure this student object has all fields
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