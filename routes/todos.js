const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
  const userId = req.headers['user-id'];
  if (!userId) return res.status(400).json({ error: 'User ID missing' });

  try {
    const result = await pool.query('SELECT * FROM todos WHERE user_id = $1', [userId]);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching todos:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post('/', async (req, res) => {
  const userId = req.headers['user-id'];
  const { text } = req.body;
  if (!userId) return res.status(400).json({ error: 'User ID missing' });

  try {
    const result = await pool.query(
      'INSERT INTO todos (text, user_id) VALUES ($1, $2) RETURNING *',
      [text, userId]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error inserting todo:', err);
    res.status(500).send('Server error');
  }
});



router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  try {
    const result = await pool.query(
      'UPDATE todos SET text = $1 WHERE id = $2 RETURNING *',
      [text, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating todo:', err);
    res.status(500).send('Server error');
  }
});

router.delete('/:id', async (req, res) => {
  const userId = req.headers['user-id'];
  const id = req.params.id;
  if (!userId) return res.status(400).json({ error: 'User ID missing' });

  try {
    const result = await pool.query(
      'DELETE FROM todos WHERE id = $1 AND user_id = $2 RETURNING *',
      [id, userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Todo not found or not authorized' });
    }

    res.json({ message: 'Todo deleted' });
  } catch (err) {
    console.error('Error deleting todo:', err);
    res.status(500).send('Server error');
  }
});


module.exports = router;
   