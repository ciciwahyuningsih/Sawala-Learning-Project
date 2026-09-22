interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const API_URL = "https://jsonplaceholder.typicode.com/users";

class ApiError extends Error {
  statusCode?: number;

  constructor(message: string, statusCode?: number) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
  }
}

async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new ApiError(
        `Gagal mengambil data (status ${response.status})`,
        response.status
      );
    }

    const data = (await response.json()) as User[];
    return data;

  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError("Tidak bisa terhubung ke server");
  }
}

async function getUserById(id: number): Promise<User> {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new ApiError(`User dengan id ${id} tidak ditemukan`, response.status);
  }

  const data = (await response.json()) as User;
  return data;
}

export type { User };
export { ApiError, getUsers, getUserById };