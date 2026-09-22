const API_URL = "https://jsonplaceholder.typicode.com/users/1";

async function ambilDataUser() {
    console.log("Mengambil data user dari API...");
    const response = await fetch(API_URL);

    console.log("Status code:", response.status);
    const data = await response.json();

    console.log("Data user:", data);
    return data;
}

ambilDataUser()