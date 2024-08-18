import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.has("token");

  const isDashboard =
    req.nextUrl.pathname.includes("/user") ||
    req.nextUrl.pathname.includes("/resource");

  if (!token && isDashboard) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // If token exists and matches protected routes, set Authorization header
  if (token && isDashboard) {
    const url = new URL(req.nextUrl);
    url.searchParams.set("Authorization", `Bearer ${token}`);
    return NextResponse.rewrite(url);
  }

  // Proceed with the request if the token exists
  return NextResponse.next();
}

export const config = {
  matcher: ["/user/:path*", "/resource/:path*"],
};
