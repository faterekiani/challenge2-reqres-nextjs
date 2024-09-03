export const USER_API_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const RESOURCE_API_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/unknown`;

export const LOGIN_API_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/login`;

export const REGISTER_API_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/register`;

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const apiRoutes = {
  Login: "/login",
  register: "/register",
};

fetch(baseUrl + route);
