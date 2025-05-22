require('dotenv').config();
const { Pool } = require('pg');

// Check if the app is in production mode
const isProduction = process.env.NODE_ENV === 'production';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction ? { rejectUnauthorized: false } : false  
});

module.exports = pool;
