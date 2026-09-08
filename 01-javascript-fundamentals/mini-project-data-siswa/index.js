import { dataSiswa } from './data.js'; 

console.log("=== Semua Siswa ===");
dataSiswa.forEach((siswa) => {
  console.log(`${siswa.nama}: ${siswa.nilai}`);
});

console.log("\n=== Siswa Lulus ===");
const siswaLulus = dataSiswa.filter((siswa) => siswa.nilai >= 75);
console.log(siswaLulus);

const totalNilai = dataSiswa.reduce((total, siswa) => total + siswa.nilai, 0);
const rataRata = totalNilai / dataSiswa.length;
console.log("\nTotal nilai:", totalNilai);
console.log("Rata-rata nilai:", rataRata.toFixed(2));

const nilaiTertinggi = Math.max(...dataSiswa.map((siswa) => siswa.nilai));
const nilaiTerendah = Math.min(...dataSiswa.map((siswa) => siswa.nilai));
console.log("Nilai tertinggi:", nilaiTertinggi);
console.log("Nilai terendah:", nilaiTerendah);

console.log("\n=== Urutan Nilai Tertinggi-Terendah ===");
const siswaUrut = [...dataSiswa].sort((a, b) => b.nilai - a.nilai);
siswaUrut.forEach((siswa) => {
  console.log(`${siswa.nama}: ${siswa.nilai}`);
});

console.log("\n=== Siswa dengan Predikat ===");
const siswaDenganPredikat = dataSiswa.map((siswa) => {
  let predikat;
  if (siswa.nilai >= 90) predikat = "A";
  else if (siswa.nilai >= 75) predikat = "B";
  else if (siswa.nilai >= 60) predikat = "C";
  else predikat = "D";
  return { ...siswa, predikat };
});
console.log(siswaDenganPredikat);