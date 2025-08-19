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
  origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3000'],
  credentials: false,
}));
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'gws-backend', time: new Date().toISOString() });
});

app.use('/api/auth', authRouter);
app.use('/api/contact', requireAuth, contactRouter);
app.use('/api/volunteer', requireAuth, volunteerRouter);

async function start() {
  try {
    await mongoose.connect(mongoUri, { autoIndex: true });
    console.log('Connected to MongoDB');
    app.listen(port, () => console.log(`Backend listening on http://localhost:${port}`));
  } catch (err) {
    console.error('Failed to start server', err);
    process.exit(1);
  }
}

start();


