import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // return NextResponse.redirect(new URL("/", req.url));

  const response = NextResponse.next();

  const themePres = req.cookies.get("theme");
  if (!themePres) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "custom-value");

  return response;
}

// export const config = {
//   matcher: "/profile",
// };
