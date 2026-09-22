let namaSiswa: string = "kafka";
let umurSiswa: number = 17;
let sudahLulus: boolean = false;
let hobiSiswa: string[] = ["basket", "membaca"];

interface Siswa {
    id: number;
    nama: string;
    kelas: string;
    nilai: number;
    email?: string;
}

   const siswaSatu: Siswa = {
    id: 1,
    nama: "azka",
    kelas: "XII PPLG 3",
    nilai: 90,
   };

   type produk = {
    nama: string;
    harga: number;
   };

   type StatusRequest = "loading" | "succes" | "error";

   let statusSaatIni: StatusRequest = "loading";

   function hitungRataRata(nilai: number[]): number {
    const total = nilai.reduce((jumlah, n) => jumlah + n, 0);
    return total / nilai.length;
   }

   function sapaSiswa(siswa: Siswa): string {
    return `Halo,perkenalkan aku ${siswa.nama} dari kelas ${siswa.kelas}!`;
   }

   export type { Siswa, produk, StatusRequest };
   export { hitungRataRata, sapaSiswa, siswaSatu, namaSiswa};