function ambilDataSederhana() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const berhasil = true;

      if (berhasil) {
        resolve({ id: 1, nama: "Budi" });
      } else {
        reject(new error("Gagal Mengambil Data"));
      }  
    }, 1000);
    });
}

console.log("Mulai mengambil Data (.then/ .catch)...");
ambilDataSederhana()
    .then((data) => {
      console.log("Berhasil:", data);
    })
    .catch((error) => {
      console.log("error:", error.message);
    });

async function ambilDataAsync() {
  try{
    console.log("Mulai mengambil data (async/await)...");
    const hasil = await ambilDataSederhana();

    console.log("Berhasil (async/await):", hasil);
    return hasil;
  }catch (error) {
    console.log("error (async/await):", error, message);
  }
}

ambilDataAsync();