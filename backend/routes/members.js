const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Member = require('../models/Member');

// Configure Multer for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// POST /api/members — Add a new team member
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, roll, year, degree, project, hobbies, certificate, internship, aboutYourAim } = req.body;

    const newMember = new Member({
      name,
      roll,
      year,
      degree,
      project,
      hobbies: hobbies ? hobbies.split(',').map(h => h.trim()) : [],
      certificate,
      internship,
      aboutYourAim,
      image: req.file ? `uploads/${req.file.filename}` : ''
    });

    const savedMember = await newMember.save();
    res.status(201).json(savedMember);
  } catch (error) {
    console.error('Error adding member:', error);
    res.status(500).json({ message: 'Error adding member', error: error.message });
  }
});

// GET /api/members — Get all team members
router.get('/', async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).json({ message: 'Error fetching members', error: error.message });
  }
});

// GET /api/members/:id — Get a single team member by ID
router.get('/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }
    res.json(member);
  } catch (error) {
    console.error('Error fetching member:', error);
    res.status(500).json({ message: 'Error fetching member', error: error.message });
  }
});

module.exports = router;
