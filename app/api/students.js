// Using Express and Multer for file uploads
const express = require('express');
const multer = require('multer');
const router = express.Router();

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Handle multiple file uploads
const fileFields = [
  { name: 'offerLetter', maxCount: 1 },
  { name: 'photograph', maxCount: 1 },
  { name: 'resume', maxCount: 1 }
];

router.post('/api/students', upload.fields(fileFields), async (req, res) => {
  try {
    // Access form fields from req.body
    // Access files from req.files
    
    // Create new student document
    const student = new Student({
      ...req.body,
      offerLetter: req.files['offerLetter'][0].buffer,
      photograph: req.files['photograph'][0].buffer,
      resume: req.files['resume'][0].buffer,
    });

    await student.save();
    res.status(201).json({ message: 'Student created successfully' });
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({ error: 'Failed to create student' });
  }
});