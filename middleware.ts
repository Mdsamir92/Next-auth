import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret:"samir",
  });

  // 🔴 Not logged in
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  // ✅ Logged in
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
};
