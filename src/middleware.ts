import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(
    new URL("https://www.dubaitrade.ae/", request.url)
  );
}

export const config = {
  matcher: "/:path*",
};
