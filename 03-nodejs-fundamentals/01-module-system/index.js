// Bagian 1: memakai module dengan require (CommonJS)
const { tambah, kurang, kali, bagi } = require('./matematika');

console.log('--- CommonJS ---');
console.log('5 + 3 =', tambah(5, 3));
console.log('5 - 3 =', kurang(5, 3));
console.log('5 x 3 =', kali(5, 3));
console.log('6 / 3 =', bagi(6, 3));

// Bagian 2: demo event loop
console.log('--- Event Loop ---');
console.log('1. Sync mulai');
setTimeout(() => console.log('4. setTimeout'), 0);
Promise.resolve().then(() => console.log('3. Promise'));
console.log('2. Sync selesai');