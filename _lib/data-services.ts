import {
  LOGIN_API_URL,
  RESOURCE_API_URL,
  REGISTER_API_URL,
  USER_API_URL,
} from "@/_lib/constant";

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
  job,
  name,
}: {
  job: string;
  name: string;
}) {
  const res = await fetch(`${USER_API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ job, name }),
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

type Props = {
  userId: number;
  name: string;
  job: string;
};

// Update User
export async function updateUserApi({ userId, name, job }: Props) {
  const res = await fetch(`${USER_API_URL}/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      job,
      // name: "morpheus",
      // email: "zion resident",
    }),
  });

  if (!res.ok) {
    throw new Error("Error updating user");
  }

  const data = await res.json();
  return data;
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

//////////////////////////////////////////////////////////
// AUTH

// login
export async function loginUserApi({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const response = await fetch(LOGIN_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();

  return data;
}

// Register
export async function registerUserApi({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const response = await fetch(REGISTER_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Registration  failed");
  }

  const data = await response.json();

  return data;
}
