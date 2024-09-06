import { NextResponse, NextRequest } from "next/server";
import apiRoutes from "./lib/constants";

export function middleware(req: NextRequest) {
	const token = req.cookies.has("token");

	const isDashboard =
		req.nextUrl.pathname.includes(apiRoutes.user) ||
		req.nextUrl.pathname.includes(apiRoutes.resources);

	if (!token && isDashboard) {
		return NextResponse.redirect(new URL(apiRoutes.Login, req.nextUrl));
	}

	const protectedRoutes = [apiRoutes.Login, apiRoutes.register];

	if (token && protectedRoutes.includes(req.nextUrl.pathname)) {
		return NextResponse.redirect(new URL(apiRoutes.user, req.url));
	}

	if (token && isDashboard) {
		// If token exists and matches protected routes, set Authorization header
		const url = new URL(req.nextUrl);
		url.searchParams.set("Authorization", `Bearer ${token}`);
		return NextResponse.rewrite(url);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/user/:path*", "/resource/:path*", "/login", "/register"],
};
