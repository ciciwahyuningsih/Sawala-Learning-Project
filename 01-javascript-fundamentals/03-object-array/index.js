const siswa ={
    nama: "budi",
    umur: 17,
    nilai: 88
};

console.log(siswa.nama, "-",  siswa.umur, "-", siswa.nilai);

const daftarSiswa = [
    { nama: budi, nilai: 89},
    { nama: siti, nilai: 90},
    {nama: rina, nilai: 78}
];

for (let i =0; i < daftarSiswa.length; i++) {
    console.log(daftarSiswa[i].nama, "", daftarSiswa[i].nilai);
}