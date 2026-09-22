import type { Siswa } from "./type-interface.ts";
import { hitungRataRata, sapaSiswa, siswaSatu, namaSiswa } from "./type-interface.ts";

const daftarSiswa: Siswa[] = [
  { id: 1, nama: "Andi", kelas: "XII RPL 1", nilai: 85 },
  { id: 2, nama: "Budi", kelas: "XII RPL 1", nilai: 78 },
  { id: 3, nama: "Citra", kelas: "XII RPL 2", nilai: 92 },
];

const semuaNilai: number[] = daftarSiswa.map((siswa) => siswa.nilai);

const rataRata = hitungRataRata(semuaNilai);
console.log("Rata-rata nilai:", rataRata);

daftarSiswa.forEach((siswa) => {
  console.log(sapaSiswa(siswa));
});

console.log(siswaSatu);
console.log(namaSiswa);