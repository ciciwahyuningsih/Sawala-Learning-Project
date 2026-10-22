require('dotenv').config();
const express = require('express');
const logger = require('./middlewares/logger.middleware');
const articleRoutes = require('./routes/articles.route');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'API Artikel berjalan' });
});
app.use('/articles', articleRoutes);

// Kalau URL tidak cocok dengan route mana pun
app.use((req, res) => {
  res.status(404).json({ message: 'Route tidak ditemukan' });
});

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});