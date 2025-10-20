require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const http = require('http');
const socketIo = require('socket.io');
const winston = require('winston');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: { origin: process.env.FRONTEND_URL }
});
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(bodyParser.json());

// Logging setup
const logger = winston.createLogger({
  transports: [new winston.transports.Console()]
});

// Auth middleware
function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Register/login endpoints
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hash]);
  res.sendStatus(201);
});
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const result = await pool.query('SELECT * FROM users WHERE username=$1', [username]);
  if (result.rows.length === 0) return res.sendStatus(401);
  if (!(await bcrypt.compare(password, result.rows[0].password))) return res.sendStatus(401);
  const token = jwt.sign({ username }, process.env.JWT_SECRET);
  res.json({ token });
});

// Results/scoreboard endpoints
app.get('/api/results/:meet', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM results WHERE meet_id=$1', [req.params.meet]);
    res.json(rows);
  } catch (err) {
    logger.error(err);
    res.status(500).send('DB error');
  }
});
app.get('/api/scoreboard/:meet', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM scoreboard WHERE meet_id=$1', [req.params.meet]);
    res.json(rows);
  } catch (err) {
    logger.error(err);
    res.status(500).send('DB error');
  }
});
app.post('/api/results/:meet', authenticateToken, async (req, res) => {
  // Validate, then upsert results
  // Broadcast via WebSocket
  // ...
  io.emit('resultsUpdate', req.body);
  res.json({ status: 'ok' });
});
app.post('/api/scoreboard/:meet', authenticateToken, async (req, res) => {
  // Validate, then upsert scoreboard
  io.emit('scoreboardUpdate', req.body);
  res.json({ status: 'ok' });
});

// WebSocket for live updates
io.on('connection', socket => {
  logger.info('Client connected');
});

// Error boundary
app.use((err, req, res, next) => {
  logger.error(err);
  res.status(500).send('Server error');
});

server.listen(process.env.PORT || 3000, () => logger.info('Backend running'));