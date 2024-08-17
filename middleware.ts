import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("token");

  console.log(token);
  const requestHeaders = new Headers(req.headers);

  if (token) {
    req.headers.set("Authorization", `Bearer ${token}`);
  } else return NextResponse.redirect(new URL("/login", req.url));

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
