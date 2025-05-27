const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const users = [{ id: 1, email: 'admin@test.com', password: '1234', isAdmin: true }];

router.get('/users', (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];
  try {
    const decoded = jwt.verify(token, 'GIZLIANAHTAR');
    if (!decoded.isAdmin) return res.status(403).json({ error: 'Yetkisiz' });
    res.json(users);
  } catch (err) {
    res.status(401).json({ error: 'Geçersiz token' });
  }
});

module.exports = router;
