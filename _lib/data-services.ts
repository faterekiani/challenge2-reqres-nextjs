import apiRoutes, { baseUrl } from "@/_lib/constants";

import {
	CreateNewUser,
	PaginationParams,
	RegisterUserApiArgs,
	UpdateUser,
	loginUserApiArgs,
} from "./types/types";

import {
	ResourcesInfo,
	singleResorce,
} from "@/app/(dashboard)/resource/_types/type";

import { UsersInfo, singleUser } from "@/app/(dashboard)/user/_types/type";

// USER

export async function getAllUsersInfoApi(paginationParams: PaginationParams) {
	const { pageNumber, pageSize } = paginationParams;

	const res = await fetch(
		`${baseUrl + apiRoutes.users}?page=${pageNumber}&per_page=${pageSize}`,
	);

	if (!res.ok) {
		throw new Error("Network response was not ok");
	}

	const data: UsersInfo = await res.json();

	return data;
}

export async function getSingleUserInfoApi(userId: number) {
	const res = await fetch(`${baseUrl + apiRoutes.users}/${userId}`);

	if (!res.ok) {
		throw new Error("Network response was not ok");
	}

	const data: singleUser = await res.json();

	return data;
}

export async function createNewUserApi({ job, name }: CreateNewUser) {
	const res = await fetch(`${baseUrl + apiRoutes.users}`, {
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

export async function deleteUserApi(userId: number) {
	const res = await fetch(`${baseUrl + apiRoutes.users}/${userId}`, {
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

export async function updateUserApi({ userId, name, job }: UpdateUser) {
	const res = await fetch(`${baseUrl + apiRoutes.users}/${userId}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name,
			job,
		}),
	});

	if (!res.ok) {
		throw new Error("Error updating user");
	}

	const data = await res.json();
	return data;
}

// RESOURCE

export async function getAllResorcesApi({
	pageNumber,
	pageSize,
}: PaginationParams) {
	const res = await fetch(
		`${baseUrl + apiRoutes.resource}?page=${pageNumber}&per_page=${pageSize}`,
	);

	if (!res.ok) {
		throw new Error("Network response was not ok");
	}

	const data: ResourcesInfo = await res.json();
	return data;
}

export async function getSingleResourceInfoApi(resourceId: number) {
	const res = await fetch(`${baseUrl + apiRoutes.resource}/${resourceId}`);

	if (!res.ok) {
		throw new Error("Network response was not ok");
	}

	const data: singleResorce = await res.json();

	return data;
}

// AUTH

export async function loginUserApi({ email, password }: loginUserApiArgs) {
	const response = await fetch(baseUrl + apiRoutes.Login, {
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

export async function registerUserApi({
	email,
	password,
}: RegisterUserApiArgs) {
	const response = await fetch(baseUrl + apiRoutes.register, {
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
