import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

export async function connectToDatabase() {
  try {
    const mongoose_instance = await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected successfully');
    return mongoose_instance;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
} 