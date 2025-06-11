import express from 'express';
import cors from 'cors';
import db from './db.js'; 
import checkoutRoutes from './checkout.js';

const app = express();
app.use(cors());
app.use(express.json());

// add routes here
app.use('/api', checkoutRoutes);


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

app.get('/games', (req, res) => {
  db.query("SELECT * FROM games", [], (err, result) => {
    if (err) {
      console.error("DB ERROR:", err.message);
      return res.status(500).json({ error: err.message });
    }
    console.log("DB RESULT:", result)
    res.json(result);
  });
});

app.post('/games', (req, res) => {
  const { title, type, description, image, price } = req.body;

  console.log("Incoming game data:", req.body); 

  const sql = "INSERT INTO games (title, type, description, image, price) VALUES (?, ?, ?, ?, ?)";
  const values = [title, type, description, image, price];

  db.query(sql, values, function (err, result) {
    if (err) {
      console.error("DB INSERT ERROR:", err.message);
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({
      id: result.insertId,
      title,
      type,
      description,
      image,
      price
    });
  });
});



app.delete('/games/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM games WHERE id = ?', [id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.sendStatus(204);
  });
});