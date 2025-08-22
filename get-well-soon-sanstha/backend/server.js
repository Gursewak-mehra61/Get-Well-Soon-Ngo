import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';

import contactRouter from './src/routes/contact.js';
import volunteerRouter from './src/routes/volunteer.js';
import authRouter from './src/routes/auth.js';
// import { requireAuth } from './src/middleware/auth.js';  // required jahan use ho

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  console.error('Missing MongoDB URI in environment variables.');
  process.exit(1);
}

app.use(helmet());

app.use(cors({
  origin: [
    'http://localhost:3000', 
    'http://127.0.0.1:3000',
    'https://get-well-soon-ngo.onrender.com',
    /\.vercel\.app$/,
    /\.netlify\.app$/,
    'https://getwellsoonsewasamiti.com'
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

// Example in-memory db fallback (simple)
const inMemoryDB = {
  contacts: [],
  volunteers: [],
  users: []
};

async function start() {
  try {
    await mongoose.connect(mongoUri, { autoIndex: true });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.warn('MongoDB connection failed, using in-memory storage:', err.message);

    // Here you can optionally overwrite Mongoose models or logic to use inMemoryDB
    // For now, backend will still run, but DB ops will fail if mongoose is used directly
  }

  app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
    console.log('MongoDB status:', mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected (using fallback)');
  });
}

start();
