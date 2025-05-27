const router = require('express').Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Burada normalde veritabanı kontrolü yapılır
  if (email === 'admin@test.com' && password === '1234') {
    res.json({ status: 'success', token: 'demo-token' });
  } else {
    res.status(401).json({ status: 'fail' });
  }
});

module.exports = router;
