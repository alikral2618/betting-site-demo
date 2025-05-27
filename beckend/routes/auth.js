const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const users = [{ id: 1, email: 'admin@test.com', password: '1234', isAdmin: true }];

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ error: 'Hatalı giriş' });

  const token = jwt.sign({ userId: user.id, isAdmin: user.isAdmin }, 'GIZLIANAHTAR', { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
