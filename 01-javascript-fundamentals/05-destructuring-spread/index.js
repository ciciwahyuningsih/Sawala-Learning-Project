const siswa = { nama: "Budi", umur: 20, kelas: "12 IPA 1" };
const { nama, kelas } = siswa;
console.log(nama, "-", kelas); 

const angka = [10, 20, 30];
const [pertama, kedua] = angka;
console.log("Pertama:", pertama, "Kedua:", kedua);

const buahLokal = ["mangga", "pisang"];
const buahImpor = ["apel", "anggur"];
const semuaBuah = [...buahLokal, ...buahImpor];
console.log("Semua buah:", semuaBuah);

const siswaUpdate = { ...siswa, kelas: "12 IPA 2" };
console.log("Data asli:", siswa);
console.log("Data update:", siswaUpdate);