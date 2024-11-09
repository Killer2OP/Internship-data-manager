import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  facultyId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Student = mongoose.models.Student || mongoose.model('Student', StudentSchema);
export default Student; 