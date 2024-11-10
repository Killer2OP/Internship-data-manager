import mongoose from 'mongoose';

// Clear any existing model
if (mongoose.models.Assignment) {
  delete mongoose.models.Assignment;
}

const AssignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
}, {
  collection: 'assignments_v2', // Use a completely new collection
  strict: true
});

export default mongoose.model('Assignment', AssignmentSchema); 