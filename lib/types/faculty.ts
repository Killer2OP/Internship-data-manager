export interface Student {
    id: number
    name: string
    course: string
    year: number
    enrollmentNumber: string
    username: string
    startDate: Date
    mobile: string
    email: string
    companyName: string
    companyAddress: string
    mentorName: string
    mentorContact: string
    mentorEmail: string
    registrationNumber: string
    cinNumber: string
    city: string
    stipend: number
    internshipMode: string
    universityMentor: string
    placementCompany: string
    photograph: string
    resume: string
  }
  
  export interface Assignment {
    id: string
    title: string
    description: string
    dueDate: string
    createdAt: string
  }
  
  export interface FNR {
    id: string
    title: string
    description: string
    date: string
    createdAt: string
  }