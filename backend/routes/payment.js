const express = require('express');
const router = express.Router();

// Örnek ödeme isteği simülasyonu
router.post('/deposit', (req, res) => {
  const { userId, amount } = req.body;
  // Normalde burada PayTR veya Papara API'sine istek atılır
  console.log(`Kullanıcı ${userId} ${amount}₺ yatırdı`);
  res.json({ success: true, newBalance: 100 + Number(amount) });
});

module.exports = router;
