"use server";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function setCookie(token: string) {
  await cookies().set("token", token);
}

export async function POST(request: Request) {
  cookies().delete("token");
  return NextResponse.json({ message: "Logged out successfully" });
}
