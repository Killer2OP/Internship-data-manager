import mongoose, { Schema } from 'mongoose';

const AssignmentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isSubmitted: {
    type: Boolean,
    default: false,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Check if the model exists before creating a new one
const Assignment = mongoose.models.Assignment || mongoose.model('Assignment', AssignmentSchema);

export default Assignment;