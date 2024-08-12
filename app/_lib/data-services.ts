import { USER_API_URL } from "@/app/_lib/constant";
import { RESOURCE_API_URL } from "@/app/_lib/constant";

// USER

// All Users
export async function getAllUsersInfoApi(pageNumber: number, pageSize: number) {
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
export async function getSingleUserInfoApi(userId: number) {
  const res = await fetch(`${USER_API_URL}/users/${userId}`);

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await res.json();

  return data;
}

// Create User
export async function createNewUserApi({
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
export async function deleteUserApi(userId: number) {
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

//////////////////////////////////////////////////////////
// RESOURCE

// Recource List
export async function getAllResorcesApi(pageNumber: number, pageSize: number) {
  const res = await fetch(
    `${RESOURCE_API_URL}?page=${pageNumber}&per_page=${pageSize}`
  );

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await res.json();
  return data;
}

// Single resource
export async function getSingleResourceInfoApi(resourceId: number) {
  const res = await fetch(`${RESOURCE_API_URL}/${resourceId}`);

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await res.json();

  return data;
}
