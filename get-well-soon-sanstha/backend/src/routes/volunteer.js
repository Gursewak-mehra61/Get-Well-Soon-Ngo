import { Router } from 'express';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import VolunteerApplication from '../models/VolunteerApplication.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

// Submit volunteer application (no auth required)
router.post('/submit', async (req, res) => {
  try {
    console.log('Received volunteer application:', req.body);
    const { name, phone, email, why } = req.body || {};
    
    if (!name || !phone || !email || !why) {
      console.log('Missing fields:', { name: !!name, phone: !!phone, email: !!email, why: !!why });
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }
    
    // Check if MongoDB is connected
    if (mongoose.connection.readyState !== 1) {
      console.log('MongoDB not connected, storing to file:', { name, phone, email, why });
      
      // Save to local file as backup
      const volunteerData = {
        id: 'temp-' + Date.now(),
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        why: why.trim(),
        timestamp: new Date().toISOString(),
        meta: { ua: req.headers['user-agent'] || 'unknown' }
      };
      
      const filePath = path.join(process.cwd(), 'volunteer-submissions.json');
      let submissions = [];
      
      try {
        if (fs.existsSync(filePath)) {
          const fileContent = fs.readFileSync(filePath, 'utf8');
          submissions = JSON.parse(fileContent);
        }
      } catch (err) {
        console.log('Creating new submissions file');
      }
      
      submissions.push(volunteerData);
      fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));
      
      return res.status(201).json({ ok: true, id: volunteerData.id, message: 'Stored to local file (MongoDB offline)' });
    }
    
    const doc = await VolunteerApplication.create({ 
      name: name.trim(), 
      phone: phone.trim(), 
      email: email.trim(), 
      why: why.trim(), 
      meta: { ua: req.headers['user-agent'] || 'unknown' } 
    });
    
    console.log('Created volunteer application:', doc._id);
    return res.status(201).json({ ok: true, id: doc._id });
  } catch (err) {
    console.error('volunteer create error:', err.message, err.stack);
    return res.status(500).json({ ok: false, error: 'Server error: ' + err.message });
  }
});

// List volunteers with pagination and search (requires auth)
router.get('/', requireAuth, async (req, res) => {
  try {
    const page = Math.max(parseInt(req.query.page || '1', 10), 1);
    const limit = Math.min(Math.max(parseInt(req.query.limit || '10', 10), 1), 100);
    const q = (req.query.q || '').toString().trim();
    
    // Check if MongoDB is connected
    if (mongoose.connection.readyState !== 1) {
      // Read from local file
      const filePath = path.join(process.cwd(), 'volunteer-submissions.json');
      let submissions = [];
      
      try {
        if (fs.existsSync(filePath)) {
          const fileContent = fs.readFileSync(filePath, 'utf8');
          submissions = JSON.parse(fileContent);
        }
      } catch (err) {
        console.error('Error reading volunteer file:', err);
        return res.status(500).json({ ok: false, error: 'Error reading data' });
      }
      
      // Filter submissions if search query exists
      if (q) {
        submissions = submissions.filter(item => 
          item.name.toLowerCase().includes(q.toLowerCase()) ||
          item.phone.includes(q) ||
          item.email.toLowerCase().includes(q.toLowerCase()) ||
          item.why.toLowerCase().includes(q.toLowerCase())
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
            { phone: { $regex: q, $options: 'i' } },
            { email: { $regex: q, $options: 'i' } },
            { why: { $regex: q, $options: 'i' } },
          ],
        }
      : {};
    const [items, total] = await Promise.all([
      VolunteerApplication.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
      VolunteerApplication.countDocuments(filter),
    ]);
    return res.json({ ok: true, items, total, page, limit, source: 'database' });
  } catch (err) {
    console.error('volunteer list error', err);
    return res.status(500).json({ ok: false, error: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    console.log('Received volunteer application:', req.body);
    const { name, phone, email, why } = req.body || {};
    
    if (!name || !phone || !email || !why) {
      console.log('Missing fields:', { name: !!name, phone: !!phone, email: !!email, why: !!why });
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }
    
    // Check if MongoDB is connected
    if (mongoose.connection.readyState !== 1) {
      console.log('MongoDB not connected, storing to file:', { name, phone, email, why });
      
      // Save to local file as backup
      const volunteerData = {
        id: 'temp-' + Date.now(),
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        why: why.trim(),
        timestamp: new Date().toISOString(),
        meta: { ua: req.headers['user-agent'] || 'unknown' }
      };
      
      const filePath = path.join(process.cwd(), 'volunteer-submissions.json');
      let submissions = [];
      
      try {
        if (fs.existsSync(filePath)) {
          const fileContent = fs.readFileSync(filePath, 'utf8');
          submissions = JSON.parse(fileContent);
        }
      } catch (err) {
        console.log('Creating new submissions file');
      }
      
      submissions.push(volunteerData);
      fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));
      
      return res.status(201).json({ ok: true, id: volunteerData.id, message: 'Stored to local file (MongoDB offline)' });
    }
    
    const doc = await VolunteerApplication.create({ 
      name: name.trim(), 
      phone: phone.trim(), 
      email: email.trim(), 
      why: why.trim(), 
      meta: { ua: req.headers['user-agent'] || 'unknown' } 
    });
    
    console.log('Created volunteer application:', doc._id);
    return res.status(201).json({ ok: true, id: doc._id });
  } catch (err) {
    console.error('volunteer create error:', err.message, err.stack);
    return res.status(500).json({ ok: false, error: 'Server error: ' + err.message });
  }
});

export default router;


