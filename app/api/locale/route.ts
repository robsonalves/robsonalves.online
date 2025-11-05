import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { locale } = await request.json();

    if (!locale || !["en", "pt"].includes(locale)) {
      return NextResponse.json({ error: "Invalid locale" }, { status: 400 });
    }

    const cookieStore = await cookies();
    cookieStore.set("locale", locale, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: "/",
      sameSite: "lax",
    });

    return NextResponse.json({ success: true, locale });
  } catch (error) {
    return NextResponse.json({ error: "Failed to set locale" }, { status: 500 });
  }
}
