import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname ===
    "/m2decext/declaration/dc/print/gccPrint-key-f0477baff36540e0911cd9fd34b3a107.pdf"
  ) {
    return NextResponse.next();
  }

  return NextResponse.redirect(
    new URL("https://www.dubaitrade.ae/", request.url)
  );
}

export const config = {
  matcher: "/:path*",
};
