import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.has("token");

  const isDashboard =
    req.nextUrl.pathname.includes("/user") ||
    req.nextUrl.pathname.includes("/resource");

  if (!token && isDashboard) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  const protectedRoutes = ["/login", "/register"];

  if (token && protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/user", req.url));
  }

  if (token && isDashboard) {
    // If token exists and matches protected routes, set Authorization header
    const url = new URL(req.nextUrl);
    url.searchParams.set("Authorization", `Bearer ${token}`);
    return NextResponse.rewrite(url);
  }

  // Proceed with the request if the token exists
  return NextResponse.next();
}

export const config = {
  matcher: ["/user/:path*", "/resource/:path*", "/login", "/register"],
};
