const daftarSiswa = [
    { nama:  "budi", nilai: 89},
    { nama: "siti", nilai: 90},
    { nama: "Rina", nilai: 78}
];

daftarSiswa.forEach((siswa) => {
    console.log(`{$siswa.nama} : {$siswa.nilai}`);
})

const namaSiswa = daftarSiswa.map((siswa) => siswa.nama);
console.log("daftar nama:", namaSiswa);

const siswaLulus = daftarSiswa.filter((siswa) => siswa.nilai >=75);
console.log("siswa lulus:", siswaLulus);

const cariRina = daftarSiswa.find((siswa) => siswa.nama);
console.log("ditemukan:", cariRina);

const totalNilai = daftarSiswa.reduce((total, siswa) => total + siswa.nilai, 0);
console.log("Total nilai:", totalNilai);
console.log("Rata-rata:", totalNilai / daftarSiswa.length);