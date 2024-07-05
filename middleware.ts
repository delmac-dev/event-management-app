import { type NextRequest } from "next/server";
import { updateSession } from "./lib/supabase/middleware";
import { _dashboard, _join, _login } from "./lib/routes";

export async function middleware(request: NextRequest) {
  const { response, supabase } = await updateSession(request);
  // const { data: user } = await supabase.auth.getUser();
  const user = {user:null};
  const url = request.nextUrl.clone();
  const pathname = url.pathname;
  const params = url.searchParams;
  const hasParams = params.size != 0;
  const redirectTo = encodeURIComponent(`${pathname}${hasParams? `?${params.toString()}`: ''}`);
  const isAuth = pathname.startsWith(_login) || pathname.startsWith(_join);
  const isProtected = pathname.startsWith(_dashboard);
  const isPublic = /^\/(events|organisations|tickets|profile|api)|\/$/.test(pathname);

  // logged out users cant access protected pages
  if(!user.user && isProtected && !isAuth)
    return Response.redirect(new URL(`${_login}?redirectTo=${redirectTo}`, url.origin));

  // signed in users cant access login or join page
  if(user.user&& isAuth)
    return Response.redirect(new URL(_dashboard, url.origin));

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
