const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
ssl: false    

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

app.set('pool', pool);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

const todoRoutes = require('./routes/todos');
const authRoutes = require('./routes/auth'); 

app.use('/todos', todoRoutes);
app.use('/auth', authRoutes); 

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
