import { USER_API_URL } from "@/app/_lib/constant";

// All Users
export async function getAllUsersInfo(pageNumber: number, pageSize: number) {
  const res = await fetch(
    `${USER_API_URL}/users?page=${pageNumber}&per_page=${pageSize}`
  );

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await res.json();

  return data;
}

// Single Users
export async function getSingleUserInfo(userId: number) {
  const res = await fetch(`${USER_API_URL}/users/${userId}`);

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await res.json();

  return data;
}

// Create User
export async function createNewUser({
  name,
  job,
}: {
  name: string;
  job: string;
}) {
  const res = await fetch(`${USER_API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, job }),
  });
  if (!res.ok) {
    throw new Error("user could not be created");
  }
  const data = await res.json();

  return data;
}

// Delete Users
export async function deleteUser(userId: number) {
  const res = await fetch(`${USER_API_URL}/users/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("User could not be deleted");
  }

  return res;
}
