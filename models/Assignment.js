import mongoose from 'mongoose';

const AssignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  facultyId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Assignment = mongoose.models.Assignment || mongoose.model('Assignment', AssignmentSchema);
export default Assignment; 