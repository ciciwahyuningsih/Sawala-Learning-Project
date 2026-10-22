function logger(req, res, next) {
  const mulai = Date.now();

  res.on('finish', () => {
    const durasi = Date.now() - mulai;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${durasi}ms`);
  });

  next();
}

module.exports = logger;