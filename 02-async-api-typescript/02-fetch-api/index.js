const API_URL = "https://jsonplaceholder.typicode.com/users/1";
const API_URL_LIST = "https://jsonplaceholder.typicode.com/users";

// GET - yang sudah ada, TIDAK diubah
async function ambilDataUser() {
    console.log("Mengambil data user dari API...");
    const response = await fetch(API_URL);
    console.log("Status code:", response.status);
    const data = await response.json();
    console.log("Data user:", data);
    return data;
}

// POST - tambahan baru, buat kirim data baru
async function tambahDataUser() {
    console.log("Menambahkan user baru...");
    const response = await fetch(API_URL_LIST, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: "Kafka",
            username: "kafka123",
            email: "kafka@example.com",
        }),
    });
    console.log("Status code:", response.status);
    const data = await response.json();
    console.log("User baru:", data);
    return data;
}

// PUT - tambahan baru, buat update data
async function updateDataUser() {
    console.log("Mengupdate data user...");
    const response = await fetch(API_URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Kafka Updated" }),
    });
    console.log("Status code:", response.status);
    const data = await response.json();
    console.log("User setelah diupdate:", data);
    return data;
}

// DELETE - tambahan baru, buat hapus data
async function hapusDataUser() {
    console.log("Menghapus user...");
    const response = await fetch(API_URL, {
        method: "DELETE",
    });
    console.log("Status code:", response.status);
    console.log("User berhasil dihapus");
}

// Panggil semuanya biar keliatan hasilnya
async function main() {
    await ambilDataUser();
    console.log("\n---\n");
    await tambahDataUser();
    console.log("\n---\n");
    await updateDataUser();
    console.log("\n---\n");
    await hapusDataUser();
}

main();