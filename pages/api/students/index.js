import dbConnect from '../../../lib/dbConnect';
import Student from '../../../models/Student';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const students = await Student.find({});
    res.status(200).json(students);
  } else if (req.method === 'POST') {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json(newStudent);
  }
} 