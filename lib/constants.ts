export const baseUrl =
	process.env.NEXT_PUBLIC_BASE_URL || "https://reqres.in/api";

const apiRoutes = {
	Login: "/login",
	register: "/register",
	resource: "/unknown",
	resources: "/resource",
	users: "/users",
	user: "/user",
	userList: "/user-list",
};
export default apiRoutes;
