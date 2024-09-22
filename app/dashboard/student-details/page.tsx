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

export default function StudentDetailsForm() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-200">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">Student Details Form</h1>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-black">Username</Label>
                <Input id="username" required className="text-black" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate" className="text-black">Internship Start Date</Label>
                <Input id="startDate" type="date" required className="text-black" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="enrollmentNumber" className="text-black">Student Enrollment Number</Label>
                <Input id="enrollmentNumber" required className="uppercase text-black" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="branch" className="text-black">Student Branch with Section</Label>
                <Input id="branch" required className="text-black" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-black">Student Name</Label>
                <Input id="name" required className="text-black" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-black">Student Mobile Number (WhatsApp)</Label>
                <Input id="mobile" type="tel" required className="text-black" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-black">Student Email ID</Label>
                <Input id="email" type="email" required className="text-black" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-black">Company Name</Label>
                <Input id="companyName" required className="text-black" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyAddress" className="text-black">Company Address</Label>
                <Textarea id="companyAddress" required className="text-black" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mentorName" className="text-black">Industry Mentor Name</Label>
                <Input id="mentorName" required className="text-black" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mentorContact" className="text-black">Contact Number of Industry Mentor</Label>
                <Input id="mentorContact" type="tel" required className="text-black" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mentorEmail" className="text-black">Industry Mentor Email</Label>
                <Input id="mentorEmail" type="email" required className="text-black" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="registrationNumber" className="text-black">Registration Number of Company</Label>
                <Input id="registrationNumber" required className="text-black" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cinNumber" className="text-black">Company's CIN Number</Label>
                <Input id="cinNumber" required className="text-black" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city" className="text-black">City (Company Located)</Label>
                <Input id="city" required className="text-black" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stipend" className="text-black">Stipend Amount (If any)</Label>
                <Input id="stipend" type="number" required className="text-black" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="offerLetter" className="text-black">Upload Offer Letter</Label>
                <Input id="offerLetter" type="file" accept=".pdf,.doc,.docx" required className="text-black" />
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
                <Input id="universityMentor" required className="text-black" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="placementCompany" className="text-black">If you have placed, then Write the Name of company</Label>
                <Input id="placementCompany" className="text-black" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="photograph" className="text-black">Upload Photograph</Label>
                <Input id="photograph" type="file" accept="image/*" required className="text-black" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="resume" className="text-black">Upload Resume</Label>
                <Input id="resume" type="file" accept=".pdf,.doc,.docx" required className="text-black" />
              </div>
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}