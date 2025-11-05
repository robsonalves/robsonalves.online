"use server";

import { cookies } from "next/headers";
import type { Locale } from "./translations";

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  return (cookieStore.get("locale")?.value as Locale) || "en";
}

export async function setLocale(locale: Locale) {
  const cookieStore = await cookies();
  cookieStore.set("locale", locale, {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: "/",
  });
}
