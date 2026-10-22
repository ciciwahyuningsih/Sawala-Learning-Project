# Dashboard Artikel (React + TypeScript)

Mini project dashboard artikel sederhana, dibuat dengan React, TypeScript, dan Vite.

## Fitur
- Menampilkan daftar artikel dalam bentuk kartu
- Menambah artikel baru lewat form
- Menghapus artikel
- Menandai artikel sebagai unggulan
- Ringkasan jumlah artikel dan artikel unggulan

## Cara Menjalankan
1. Masuk ke folder project:
```bash
   cd 04-react-fundamentals/mini-project-react-dashboard
```
2. Install dependency:
```bash
   npm install
```
3. Jalankan server development:
```bash
   npm run dev
```
4. Buka `http://localhost:5173`

Untuk mengecek build: `npm run build`

## Struktur Folder
```
src/
├── components/
│   ├── Button.tsx   # tombol dengan props label, onClick, variant
│   └── Card.tsx     # kartu artikel dengan props title, content, author, featured
├── App.tsx          # component utama (state, list rendering, useEffect)
├── index.css        # gaya dasar
└── main.tsx         # entry point
```

## Materi yang Dipraktikkan
| Materi | Dipakai di |
|--------|------------|
| JSX dan component | App, Button, Card |
| Props dan state | Props di Button dan Card, state di App |
| Event handling | onClick, onChange |
| Conditional rendering | Badge unggulan, teks loading, daftar kosong |
| List rendering | `articles.map` di App |
| useEffect dasar | Timer loading dan judul tab browser |

## Progress
- [x] Setup project React + TypeScript dengan Vite
- [x] Component Button (props dan event handling)
- [x] Component Card (props dan conditional rendering)
- [x] State, list rendering, dan useEffect di App
- [x] Tambah, hapus, dan tandai unggulan artikel
- [ ] Review struktur component bersama teman
- [ ] Penyimpanan data (belum, data hilang saat refresh)