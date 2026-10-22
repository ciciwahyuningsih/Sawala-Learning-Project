// Data sementara disimpan di array (hilang kalau server restart)
let articles = [
  { id: 1, judul: 'Belajar Node.js', penulis: 'Admin', isi: 'Node.js menjalankan JavaScript di server.' },
  { id: 2, judul: 'Kenalan dengan Express', penulis: 'Admin', isi: 'Express mempermudah pembuatan REST API.' },
];
let nextId = 3;

// GET /articles -> ambil semua artikel
exports.getAllArticles = (req, res) => {
  res.json(articles);
};

// GET /articles/:id -> ambil satu artikel
exports.getArticleById = (req, res) => {
  const id = Number(req.params.id);
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return res.status(404).json({ message: 'Artikel tidak ditemukan' });
  }

  res.json(article);
};

// POST /articles -> buat artikel baru
exports.createArticle = (req, res) => {
  const { judul, penulis, isi } = req.body || {};

  if (!judul || !penulis || !isi) {
    return res.status(400).json({ message: 'judul, penulis, dan isi wajib diisi' });
  }

  const newArticle = { id: nextId++, judul, penulis, isi };
  articles.push(newArticle);

  res.status(201).json(newArticle);
};

// PUT /articles/:id -> ubah artikel
exports.updateArticle = (req, res) => {
  const id = Number(req.params.id);
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return res.status(404).json({ message: 'Artikel tidak ditemukan' });
  }

  const { judul, penulis, isi } = req.body || {};
  if (judul) article.judul = judul;
  if (penulis) article.penulis = penulis;
  if (isi) article.isi = isi;

  res.json(article);
};

// DELETE /articles/:id -> hapus artikel
exports.deleteArticle = (req, res) => {
  const id = Number(req.params.id);
  const index = articles.findIndex((a) => a.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Artikel tidak ditemukan' });
  }

  const [deleted] = articles.splice(index, 1);
  res.json({ message: 'Artikel dihapus', data: deleted });
};