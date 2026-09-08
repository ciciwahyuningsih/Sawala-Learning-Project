import { daftarProduk } from './data.js';

// Function: tampilkan semua produk
function tampilkanSemua(produk) {
  console.log("=== Semua Produk ===");
  produk.forEach((p) => {
    console.log(`[${p.id}] ${p.nama} | ${p.kategori} | Rp${p.harga.toLocaleString()}`);
  });
}

// Function: filter berdasarkan kategori
function filterKategori(produk, kategori) {
  return produk.filter((p) => p.kategori.toLowerCase() === kategori.toLowerCase());
}

// Function: filter berdasarkan range harga
function filterHarga(produk, min, max) {
  return produk.filter((p) => p.harga >= min && p.harga <= max);
}

// Function: pencarian berdasarkan nama
function cariProduk(produk, keyword) {
  return produk.filter((p) => p.nama.toLowerCase().includes(keyword.toLowerCase()));
}

// Function: urutkan berdasarkan harga
function urutkanHarga(produk, urutan = "asc") {
  const hasil = [...produk];
  if (urutan === "asc") {
    return hasil.sort((a, b) => a.harga - b.harga);
  } else {
    return hasil.sort((a, b) => b.harga - a.harga);
  }
}

tampilkanSemua(daftarProduk);

console.log("\n=== Cari: 'kaos' ===");
console.log(cariProduk(daftarProduk, "kaos"));
