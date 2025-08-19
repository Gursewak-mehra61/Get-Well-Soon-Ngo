import { Router } from 'express';
import VolunteerApplication from '../models/VolunteerApplication.js';

const router = Router();

// List volunteers with pagination and search
router.get('/', async (req, res) => {
  try {
    const page = Math.max(parseInt(req.query.page || '1', 10), 1);
    const limit = Math.min(Math.max(parseInt(req.query.limit || '10', 10), 1), 100);
    const q = (req.query.q || '').toString().trim();
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
    return res.json({ ok: true, items, total, page, limit });
  } catch (err) {
    console.error('volunteer list error', err);
    return res.status(500).json({ ok: false, error: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, phone, email, why } = req.body || {};
    if (!name || !phone || !email || !why) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }
    const doc = await VolunteerApplication.create({ name, phone, email, why, meta: { ua: req.headers['user-agent'] } });
    return res.status(201).json({ ok: true, id: doc._id });
  } catch (err) {
    console.error('volunteer create error', err);
    return res.status(500).json({ ok: false, error: 'Server error' });
  }
});

export default router;


