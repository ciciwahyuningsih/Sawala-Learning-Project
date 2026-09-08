import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function kalkulator(angka1, angka2, operasi) {
  if (operasi === "tambah") return angka1 + angka2;
  if (operasi === "kurang") return angka1 - angka2;
  if (operasi === "kali") return angka1 * angka2;
  if (operasi === "bagi") {
    if (angka2 === 0) return "Error: tidak bisa bagi dengan 0";
    return angka1 / angka2;
  }
  return "Operasi tidak dikenal";
}

rl.question("Masukkan angka pertama: ", (angka1) => {
  rl.question("Masukkan angka kedua: ", (angka2) => {
    rl.question("Operasi (tambah/kurang/kali/bagi): ", (operasi) => {
      const hasil = kalkulator(Number(angka1), Number(angka2), operasi);
      console.log("Hasil:", hasil);
      rl.close();
    });
  });
});