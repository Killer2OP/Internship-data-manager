import dbConnect from '../../../lib/dbConnect';
import Assignment from '../../../models/Assignment';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const assignments = await Assignment.find({});
    res.status(200).json(assignments);
  } else if (req.method === 'POST') {
    const newAssignment = new Assignment(req.body);
    await newAssignment.save();
    res.status(201).json(newAssignment);
  }
} 