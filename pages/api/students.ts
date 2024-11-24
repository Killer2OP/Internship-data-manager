import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' }); // Specify your upload directory
const uri = process.env.MONGODB_URI || '';
const client = new MongoClient(uri);

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parsing
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    upload.fields([
      { name: 'photograph', maxCount: 1 },
      { name: 'offerLetter', maxCount: 1 },
      { name: 'resume', maxCount: 1 }
    ])(req as any, res as any, async (err) => {
      if (err) {
        console.error('Error uploading file:', err);
        return res.status(500).json({ error: 'Error uploading file' });
      }

      try {
        await client.connect();
        const database = client.db('test');
        const collection = database.collection('students');

        const studentData = {
          username: req.body.username,
          startDate: new Date(req.body.startDate), // Ensure this is a valid date
          enrollmentNumber: req.body.enrollmentNumber,
          branch: req.body.branch,
          name: req.body.name,
          mobile: req.body.mobile,
          email: req.body.email,
          companyName: req.body.companyName,
          companyAddress: req.body.companyAddress,
          mentorName: req.body.mentorName,
          mentorContact: req.body.mentorContact,
          mentorEmail: req.body.mentorEmail,
          registrationNumber: req.body.registrationNumber,
          cinNumber: req.body.cinNumber,
          city: req.body.city,
          stipend: parseFloat(req.body.stipend), // Ensure this is a valid number
          internshipMode: req.body.internshipMode,
          universityMentor: req.body.universityMentor,
          placementCompany: req.body.placementCompany,
          photograph: (req as any).file?.path, // Save the file path
          resume: (req as any).file?.path, // Save the file path for resume if applicable
        };

        console.log("Received student data:", studentData); // Log the received data

        const result = await collection.insertOne(studentData);
        console.log("Insert result:", result);

        res.status(201).json(result);
      } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        res.status(500).json({ error: 'Failed to save data' });
      } finally {
        await client.close();
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 