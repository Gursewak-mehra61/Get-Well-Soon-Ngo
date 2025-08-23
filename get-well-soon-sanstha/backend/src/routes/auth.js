import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body || {};
  const adminUser = process.env.ADMIN_USER || 'getwellsoonsewasamitihansi@gmail.com';
  const adminPass = process.env.ADMIN_PASS || 'getwell@45';
  if (username !== adminUser || password !== adminPass) {
    return res.status(401).json({ ok: false, error: 'Invalid credentials' });
  }
  const secret = process.env.JWT_SECRET || 'dev-secret';
  const token = jwt.sign({ sub: 'admin', role: 'admin', username }, secret, { expiresIn: '8h' });
  return res.json({ ok: true, token });
});

export default router;


