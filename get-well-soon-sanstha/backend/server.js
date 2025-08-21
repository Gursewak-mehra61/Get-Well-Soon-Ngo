import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';

import contactRouter from './src/routes/contact.js';
import volunteerRouter from './src/routes/volunteer.js';
import authRouter from './src/routes/auth.js';
import { requireAuth } from './src/middleware/auth.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const mongoUri = process.env.MONGODB_URI || 'mongodb+srv://gursewakmehra189:test1234@cluster0.crie5jb.mongodb.net/getwellsoon';

app.use(helmet());
app.use(cors({
  origin: [
    'http://localhost:3000', 
    'http://127.0.0.1:3000',
    'https://get-well-soon-ngo.onrender.com'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'gws-backend', time: new Date().toISOString() });
});

app.use('/api/auth', authRouter);
app.use('/api/contact', contactRouter);
app.use('/api/volunteer', volunteerRouter); // Mixed auth - submit is public, list requires auth

async function start() {
  try {
    await mongoose.connect(mongoUri, { autoIndex: true });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.warn('MongoDB connection failed, using in-memory storage:', err.message);
    // Continue without MongoDB - use in-memory storage
  }
  
  app.listen(port, () => {
    console.log(`Backend listening on http://localhost:${port}`);
    console.log('MongoDB status:', mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected (using fallback)');
  });
}

start();


