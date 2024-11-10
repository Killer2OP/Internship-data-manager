import mongoose, { Document, Schema } from 'mongoose';

// Interface for the Submission document
export interface ISubmission extends Document {
  assignmentId: mongoose.Types.ObjectId;
  studentId: string;
  content: string;
  fileUrl?: string;
  submittedAt: Date;
  status: 'pending' | 'graded';
  grade?: number;
  feedback?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Create the schema
const SubmissionSchema = new Schema<ISubmission>(
  {
    assignmentId: {
      type: Schema.Types.ObjectId,
      ref: 'Assignment',
      required: true,
    },
    studentId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    fileUrl: {
      type: String,
      required: false,
    },
    submittedAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['pending', 'graded'],
      default: 'pending',
    },
    grade: {
      type: Number,
      min: 0,
      max: 100,
      required: false,
    },
    feedback: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create indexes for better query performance
SubmissionSchema.index({ assignmentId: 1, studentId: 1 }, { unique: true }); // One submission per student per assignment
SubmissionSchema.index({ studentId: 1 }); // For querying student's submissions
SubmissionSchema.index({ assignmentId: 1 }); // For querying assignment submissions

// Export the model
const Submission = mongoose.models.Submission || mongoose.model<ISubmission>('Submission', SubmissionSchema);

export default Submission; 