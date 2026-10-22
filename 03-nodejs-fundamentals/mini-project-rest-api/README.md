# REST API Artikel

REST API sederhana untuk mengelola data artikel (CRUD) menggunakan Node.js dan Express. Data disimpan sementara di memori, jadi akan hilang saat server restart.

## Prasyarat
- Node.js versi 18 atau lebih baru
- Postman atau Thunder Client untuk menguji API

## Cara Menjalankan
1. Masuk ke folder project:
```bash
   cd 03-nodejs-fundamentals/mini-project-rest-api
```
2. Install dependency:
```bash
   npm install
```
3. Buat file `.env` dengan menyalin `.env.example`, lalu sesuaikan isinya.
4. Jalankan server:
```bash
   npm start      # mode biasa
   npm run dev    # restart otomatis saat file berubah
```
5. Buka `http://localhost:3000`

## Endpoint
| Method | URL | Keterangan |
|--------|-----|------------|
| GET | /articles | Ambil semua artikel |
| GET | /articles/:id | Ambil satu artikel |
| POST | /articles | Tambah artikel |
| PUT | /articles/:id | Ubah artikel |
| DELETE | /articles/:id | Hapus artikel |

Contoh body untuk POST:
```json
{
  "judul": "Judul Artikel",
  "penulis": "Nama Penulis",
  "isi": "Isi artikel"
}
```

## Struktur Folder
```
src/
├── routes/        # definisi URL
├── controllers/   # logika tiap endpoint
├── middlewares/   # logger request
└── server.js      # entry point
```

## Environment Variable
| Nama | Contoh | Keterangan |
|------|--------|------------|
| PORT | 3000 | Port server |
| NODE_ENV | development | Mode environment |