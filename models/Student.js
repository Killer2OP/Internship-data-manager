import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  startDate: { type: Date, required: true },
  enrollmentNumber: { type: String, required: true },
  branch: { type: String, required: true },
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  companyName: { type: String, required: true },
  companyAddress: { type: String, required: true },
  mentorName: { type: String, required: true },
  mentorContact: { type: String, required: true },
  mentorEmail: { type: String, required: true },
  registrationNumber: { type: String, required: true },
  cinNumber: { type: String, required: true },
  city: { type: String, required: true },
  stipend: { type: Number, required: true },
  internshipMode: { type: String, required: true },
  universityMentor: { type: String, required: true },
  placementCompany: { type: String },
  photograph: { type: String },
  resume: { type: String },
}, { timestamps: true });

const Student = mongoose.models.Student || mongoose.model('Student', StudentSchema);
export default Student; 