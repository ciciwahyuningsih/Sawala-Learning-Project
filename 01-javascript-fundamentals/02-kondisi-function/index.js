function cekHarga(harga) {
    if (harga >=70000) {
       return "Harga Terlalu Mahal";
    } else if (harga >=50000) {
        return "Harga Cukup";
    } else {
        return "Harga Murah";
    }
}

console.log(cekHarga(90000));
console.log(cekHarga(70000));
console.log(cekHarga(40000));


function hitungDiskon(harga,persen) {
    return harga- (harga * persen / 100);
}
console.log("harga setelah diskon:", hitungDiskon (100000, 10));