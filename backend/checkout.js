import express from 'express';
import db from './db.js';
const router = express.Router();

router.post('/checkout', (req, res) => {
  console.log('✅ /api/checkout POST called');
  console.log('📦 Request body:', req.body);
  const {
    fullName,
    email,
    address,
    city,
    zip,
    cardNumber,
    expiry,
    cvc,
  } = req.body;

  const query = `
    INSERT INTO orders (full_name, email, address, city, zip, card_number, expiry, cvc)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [fullName, email, address, city, zip, cardNumber, expiry, cvc],
    (err, result) => {
      if (err) {
        console.error('DB insert error:', err);
        return res.status(500).json({ message: 'Database error' });
      }
      res.status(200).json({ message: 'Order saved successfully' });
    }
  );
});

export default router; 
