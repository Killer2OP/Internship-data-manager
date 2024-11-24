"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Header from "../components/Header"

export default function StudentDetailsForm() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const response = await fetch("/api/students");
    const data = await response.json();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    console.log("Submitting data:", Array.from(formData.entries())); // Log FormData entries

    try {
      const response = await fetch("/api/students", {
        method: "POST",
        body: formData, // Send FormData directly
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      fetchStudents();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="py-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-200">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Student Details Form</h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-black">Username</Label>
                  <Input id="username" name="username" required className="text-black" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="startDate" className="text-black">Internship Start Date</Label>
                  <Input id="startDate" name="startDate" type="date" required className="text-black" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="enrollmentNumber" className="text-black">Student Enrollment Number</Label>
                  <Input id="enrollmentNumber" name="enrollmentNumber" required className="uppercase text-black" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="branch" className="text-black">Student Branch with Section</Label>
                  <Input id="branch" name="branch" required className="text-black" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-black">Student Name</Label>
                  <Input id="name" name="name" required className="text-black" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-black">Student Mobile Number (WhatsApp)</Label>
                  <Input id="mobile" name="mobile" type="tel" required className="text-black" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-black">Student Email ID</Label>
                  <Input id="email" name="email" type="email" required className="text-black" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-black">Company Name</Label>
                  <Input id="companyName" name="companyName" required className="text-black" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyAddress" className="text-black">Company Address</Label>
                  <Textarea id="companyAddress" name="companyAddress" required className="text-black" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mentorName" className="text-black">Industry Mentor Name</Label>
                  <Input id="mentorName" name="mentorName" required className="text-black" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mentorContact" className="text-black">Contact Number of Industry Mentor</Label>
                  <Input id="mentorContact" name="mentorContact" type="tel" required className="text-black" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mentorEmail" className="text-black">Industry Mentor Email</Label>
                  <Input id="mentorEmail" name="mentorEmail" type="email" required className="text-black" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="registrationNumber" className="text-black">Registration Number of Company</Label>
                  <Input id="registrationNumber" name="registrationNumber" required className="text-black" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cinNumber" className="text-black">Company's CIN Number</Label>
                  <Input id="cinNumber" name="cinNumber" required className="text-black" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-black">City (Company Located)</Label>
                  <Input id="city" name="city" required className="text-black" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stipend" className="text-black">Stipend Amount (If any)</Label>
                  <Input id="stipend" name="stipend" type="number" required className="text-black" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="offerLetter" className="text-black">Upload Offer Letter</Label>
                  <Input id="offerLetter" name="offerLetter" type="file" accept=".pdf,.doc,.docx" required className="text-black" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="internshipMode" className="text-black">Mode of Internship</Label>
                  <Select>
                    <SelectTrigger id="internshipMode" className="text-black">
                      <SelectValue placeholder="Select mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="onsite">On-site</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="universityMentor" className="text-black">Name of The University Mentor</Label>
                  <Input id="universityMentor" name="universityMentor" required className="text-black" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="placementCompany" className="text-black">If you have placed, then Write the Name of company</Label>
                  <Input id="placementCompany" name="placementCompany" className="text-black" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="photograph" className="text-black">Upload Photograph</Label>
                  <Input id="photograph" name="photograph" type="file" accept="image/*" required className="text-black" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="resume" className="text-black">Upload Resume</Label>
                  <Input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" required className="text-black" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">Submit</Button>
              </div>
            </form>
            {/* <h2 className="text-xl font-bold mt-8">Submitted Students</h2>
            <ul>
              {students.map((student) => (
                <li key={student.id} className="border-b py-2">
                  {student.name} - {student.email} - {student.mobile}
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  )
}