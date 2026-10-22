# Final Project: Aplikasi Artikel (Next.js + Strapi)

Aplikasi artikel sederhana. **Strapi** sebagai CMS (backend) dan **Next.js** sebagai frontend.

## Alur Data
```
Admin mengisi artikel di Strapi
  → Strapi menyimpan ke database dan menyediakan REST API (/api/articles)
  → Next.js mengambil data di Server Component (lib/strapi.ts)
  → Data ditampilkan sebagai UI (component Atomic Design)
```

## Fitur
- Daftar artikel dari Strapi
- Halaman detail artikel berdasarkan slug (`/articles/[slug]`)
- Pencarian artikel (Client Component)
- Halaman 404 untuk artikel yang tidak ditemukan

## Teknologi
| Bagian | Teknologi |
|--------|-----------|
| Frontend | Next.js (App Router), React, TypeScript |
| Backend/CMS | Strapi v5 (SQLite) |

## Struktur Folder
```
05-nextjs-strapi-final-project/
├── frontend-nextjs/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── articles/[slug]/page.tsx
│   ├── components/
│   │   ├── atoms/Button.tsx
│   │   ├── molecules/ArticleCard.tsx, SearchBar.tsx
│   │   └── organisms/ArticleList.tsx, SearchableArticleList.tsx
│   ├── lib/strapi.ts
│   └── .env.example
└── backend-strapi/
    └── src/api/article/
```

## Cara Menjalankan

Prasyarat: Node.js (versi LTS disarankan).

### 1. Backend (Strapi)
```bash
cd backend-strapi
npm install
npm run develop
```
Buka `http://localhost:1337/admin`, lalu buat akun admin (email dan password bebas).

Database tidak ikut ke GitHub, jadi setelah login lakukan dua hal:
1. **Atur izin:** Settings → Users & Permissions plugin → Roles → Public → Article → centang `find` dan `findOne` → Save.
2. **Isi artikel:** Content Manager → Article → Create new entry (isi `title` dan `content`; `slug` terisi otomatis) → **Publish**. Buat minimal 3 artikel.

Content type **Article** sudah ada di kode (`src/api/article`), jadi tidak perlu dibuat ulang.

Cek API: `http://localhost:1337/api/articles` harus menampilkan artikel.

### 2. Frontend (Next.js)
Buka terminal baru:
```bash
cd frontend-nextjs
npm install
cp .env.example .env.local     # Windows: copy .env.example .env.local
npm run dev
```
Buka `http://localhost:3000`.

Strapi dan Next.js harus berjalan bersamaan di dua terminal.

## Hasil yang Diharapkan
- `http://localhost:1337/api/articles` menampilkan daftar artikel dalam format JSON.
- `http://localhost:3000` menampilkan daftar artikel dalam bentuk kartu, lengkap dengan kolom pencarian.
- Tombol "Baca selengkapnya" membuka halaman detail di `/articles/<slug>`.
- Alamat seperti `/articles/tidak-ada` menampilkan halaman 404.

## Environment Variable
| File | Variabel | Contoh | Keterangan |
|------|----------|--------|------------|
| `frontend-nextjs/.env.local` | `STRAPI_URL` | `http://localhost:1337` | Alamat Strapi, dibaca di server |
| `backend-strapi/.env` | (dibuat Strapi) | - | Kunci rahasia Strapi, jangan di-commit |

## Atomic Design
| Tingkat | Component | Keterangan |
|---------|-----------|------------|
| Atom | `Button` | Tautan bergaya tombol |
| Molecule | `ArticleCard`, `SearchBar` | Kartu artikel, kolom pencarian |
| Organism | `ArticleList`, `SearchableArticleList` | Daftar artikel, daftar dengan pencarian |

## Server vs Client Component
- **Server Component** (bawaan): `layout`, halaman, `ArticleList`, `ArticleCard`. Halaman mengambil data dari Strapi langsung dengan `await`.
- **Client Component** (`'use client'`): `SearchableArticleList`, karena memakai `useState` untuk pencarian.

## Pembagian Tugas dan Kontribusi
Task dibagi lewat GitHub Issues dan dikerjakan lewat Pull Request.

Kontributor: (tulis namamu di sini)