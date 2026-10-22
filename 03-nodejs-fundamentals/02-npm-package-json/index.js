const dayjs = require('dayjs');

const sekarang = dayjs();

console.log('Sekarang   :', sekarang.format('DD MMMM YYYY HH:mm:ss'));
console.log('Besok      :', sekarang.add(1, 'day').format('DD-MM-YYYY'));
console.log('Awal bulan :', sekarang.startOf('month').format('DD-MM-YYYY'));