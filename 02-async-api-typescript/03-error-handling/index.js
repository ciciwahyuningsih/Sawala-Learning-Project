const API_URL_VALID = "https://jsonplaceholder.typicode.com/users/1";
const API_URL_NOT_FOUND = "https://jsonplaceholder.typicode.com/users/9999";
const API_URL_SALAH = "https://domain-tidak-ada-xyz123.com/data";

class AppError extends Error {
    
    constructor(message, statuscode) {
        super(message);
        this.name = "AppError";
        this.statuscode = statuscode;
    }
    }

    async function ambilData(url) {
        try{
            const response = await fetch(url);

            if (!response.ok) {
                throw new AppError(
                    `Request gagal dengan status ${response.status}`,
                    response.status
                );
            }
            
            const data = await response.json();
            console.log ("Berhasil ambil data:", data);
            return data;

        }catch (error) {
            if (error instanceof AppError) {
                console.log(`[HTTP ERROR ${error.statuscode}]`, error.message);
            }else {
                console.log("[NETWOEK ERROR]", error.message);
            }

            return null;
        }
    }
    async function main() {
        console.log ("--- Skenario 1: URL Valid ---");
        await ambilData(API_URL_VALID);

        console.log ("\n--- Skenario 2: Data tidak di temukan (404) ---");
        await ambilData(API_URL_NOT_FOUND);

        console.log ("\n--- Skenario 3: Domain salah (network error) ---");
        await ambilData(API_URL_SALAH);
    }
    main();