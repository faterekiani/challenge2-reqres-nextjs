"use server";

import { cookies } from "next/headers";

export async function setCookie(token: string) {
  await cookies().set("token", token);
}

export async function removeCookie() {
  await cookies().delete("token");
}
