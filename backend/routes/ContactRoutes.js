import express from 'express';
import { addContactMessage, getAllContactMessages } from '../controllers/ContactController.js';

const router = express.Router();

// Route to submit a contact message
router.post('/submit', addContactMessage);

// Route to get all contact messages
router.get('/all', getAllContactMessages);

export default router;
