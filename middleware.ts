// import { NextResponse, type NextRequest } from "next/server";
// import { updateSession } from "@/lib/supabase/middleware";
// import { _dashboard, _events, _home, _join, _login } from "./lib/routes";

// export async function middleware(request: NextRequest) {
//   const url = request.nextUrl.clone();
//   const pathname = url.pathname;
//   const params = url.searchParams;
//   const hasParams = params.size != 0;
//   const redirectTo = encodeURIComponent(`${pathname}${hasParams? `?${params.toString()}`: ''}`);
  
//   const isAuth = pathname.startsWith(_login) || pathname.startsWith(_join);
//   const isPublic = (pathname: string) => /^\/(events|organisations|tickets|profile|api)|\/$/.test(pathname);
//   const { user, response } = await updateSession(request);

//   // logged out users can only access public pages or auth pages
//   if(!user){
//     if(isPublic(pathname) || isAuth) return response;
//     if(pathname.startsWith("/auth")) return response;
//     return NextResponse.redirect(new URL(`${_login}?redirectTo=${redirectTo}`, url.origin));
//   }

//   // signed in users cant access login or join page
//   if(isAuth) return NextResponse.redirect(new URL(_dashboard, url.origin));

//   return response;
  
// }

// export const config = {
//   matcher: [
//     "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
//   ],
// };

import { type NextRequest } from "next/server";
import { updateSession } from "./lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
