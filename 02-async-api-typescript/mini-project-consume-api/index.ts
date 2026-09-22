import type { User } from "./api.ts";
import { ApiError, getUsers } from "./api.ts";

type Status = "idle" | "loading" | "success" | "error";

interface AppState {
  status: Status;
  data: User[] | null;
  errorMessage: string | null;
}

let state: AppState = {
  status: "idle",
  data: null,
  errorMessage: null,
};

function render() {
  console.log("\n=== STATUS SAAT INI:", state.status.toUpperCase(), "===");

  if (state.status === "loading") {
    console.log("Sedang mengambil data, mohon tunggu...");
  }

  if (state.status === "error") {
    console.log("Terjadi kesalahan:", state.errorMessage);
  }

  if (state.status === "success" && state.data) {
    console.log(`Berhasil! Total user: ${state.data.length}`);
    state.data.forEach((user) => {
      console.log(`- [${user.id}] ${user.name} (${user.email})`);
    });
  }
}

async function muatDataUser() {
  state.status = "loading";
  render();

  try {
    const users = await getUsers();

    state.status = "success";
    state.data = users;
    state.errorMessage = null;

  } catch (error) {
    state.status = "error";
    state.data = null;

    if (error instanceof ApiError) {
      state.errorMessage = error.message;
    } else {
      state.errorMessage = "Terjadi kesalahan yang tidak diketahui";
    }
  }

  render();
}

muatDataUser();