import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.has("token");
  const isDashboard =
    req.nextUrl.pathname.includes("/user") ||
    req.nextUrl.pathname.includes("/resource");

  if (!token && isDashboard) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // Proceed with the request if the token exists
  return NextResponse.next();
}

export const config = {
  matcher: ["/user/:path*", "/resource/:path*"],
};

// import { NextRequest, NextResponse } from "next/server";

// export default function middleware(req: NextRequest) {
//   const token = req.cookies.get("token");

//   console.log(token);
//   const requestHeaders = new Headers(req.headers);

//   if (token) {
//     req.headers.set("Authorization", `Bearer ${token}`);
//   } else return NextResponse.redirect(new URL("/login", req.url));

//   return NextResponse.next();
// }

// export const config = {
//   matcher: "/",
// };
