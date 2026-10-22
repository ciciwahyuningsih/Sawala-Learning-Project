const tambah = (a, b) => a + b;
const kurang = (a, b) => a - b;
const kali = (a, b) => a * b;
const bagi = (a, b) => {
  if (b === 0) throw new Error('Tidak bisa membagi dengan nol');
  return a / b;
};

module.exports = { tambah, kurang, kali, bagi };