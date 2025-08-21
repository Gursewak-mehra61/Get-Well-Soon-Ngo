import { Router } from 'express';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import ContactSubmission from '../models/ContactSubmission.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

// Submit contact form (no auth required)
router.post('/submit', async (req, res) => {
  try {
    console.log('Received contact submission:', req.body);
    const { name, email, message } = req.body || {};
    
    if (!name || !email || !message) {
      console.log('Missing fields:', { name: !!name, email: !!email, message: !!message });
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }
    
    // Check if MongoDB is connected
    if (mongoose.connection.readyState !== 1) {
      console.log('MongoDB not connected, storing to file:', { name, email, message });
      
      // Save to local file as backup
      const contactData = {
        id: 'temp-' + Date.now(),
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        timestamp: new Date().toISOString(),
        meta: { ua: req.headers['user-agent'] || 'unknown' }
      };
      
      const filePath = path.join(process.cwd(), 'contact-submissions.json');
      let submissions = [];
      
      try {
        if (fs.existsSync(filePath)) {
          const fileContent = fs.readFileSync(filePath, 'utf8');
          submissions = JSON.parse(fileContent);
        }
      } catch (err) {
        console.log('Creating new contact submissions file');
      }
      
      submissions.push(contactData);
      fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));
      
      return res.status(201).json({ ok: true, id: contactData.id, message: 'Stored to local file (MongoDB offline)' });
    }
    
    const doc = await ContactSubmission.create({ 
      name: name.trim(), 
      email: email.trim(), 
      message: message.trim(), 
      meta: { ua: req.headers['user-agent'] || 'unknown' } 
    });
    
    console.log('Created contact submission:', doc._id);
    return res.status(201).json({ ok: true, id: doc._id });
  } catch (err) {
    console.error('contact create error:', err.message, err.stack);
    return res.status(500).json({ ok: false, error: 'Server error: ' + err.message });
  }
});

// List contacts with pagination and search (requires auth)
router.get('/', requireAuth, async (req, res) => {
  try {
    const page = Math.max(parseInt(req.query.page || '1', 10), 1);
    const limit = Math.min(Math.max(parseInt(req.query.limit || '10', 10), 1), 100);
    const q = (req.query.q || '').toString().trim();
    
    // Check if MongoDB is connected
    if (mongoose.connection.readyState !== 1) {
      // Read from local file
      const filePath = path.join(process.cwd(), 'contact-submissions.json');
      let submissions = [];
      
      try {
        if (fs.existsSync(filePath)) {
          const fileContent = fs.readFileSync(filePath, 'utf8');
          submissions = JSON.parse(fileContent);
        }
      } catch (err) {
        console.error('Error reading contact file:', err);
        return res.status(500).json({ ok: false, error: 'Error reading data' });
      }
      
      // Filter submissions if search query exists
      if (q) {
        submissions = submissions.filter(item => 
          item.name.toLowerCase().includes(q.toLowerCase()) ||
          item.email.toLowerCase().includes(q.toLowerCase()) ||
          item.message.toLowerCase().includes(q.toLowerCase())
        );
      }
      
      // Sort by timestamp (newest first)
      submissions.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      
      // Pagination
      const total = submissions.length;
      const startIndex = (page - 1) * limit;
      const items = submissions.slice(startIndex, startIndex + limit);
      
      return res.json({ ok: true, items, total, page, limit, source: 'file' });
    }
    
    // MongoDB is connected - use database
    const filter = q
      ? {
          $or: [
            { name: { $regex: q, $options: 'i' } },
            { email: { $regex: q, $options: 'i' } },
            { message: { $regex: q, $options: 'i' } },
          ],
        }
      : {};
    const [items, total] = await Promise.all([
      ContactSubmission.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
      ContactSubmission.countDocuments(filter),
    ]);
    return res.json({ ok: true, items, total, page, limit, source: 'database' });
  } catch (err) {
    console.error('contact list error', err);
    return res.status(500).json({ ok: false, error: 'Server error' });
  }
});


export default router;


