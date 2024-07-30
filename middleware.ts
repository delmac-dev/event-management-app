import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "./lib/supabase/middleware";
import { _dashboard, _dashboardOrgs, _dashboardProfile, _dashboardProfileEdit, _login } from "./lib/routes";

export async function middleware(request: NextRequest) {
  const { response, user } = await updateSession(request);

  const url = request.nextUrl.clone();
  const pathname = url.pathname;
  const params = url.searchParams;
  const hasParams = params.size != 0;
  const redirectTo = encodeURIComponent(`${pathname}${hasParams ? `?${params.toString()}` : ''}`);
  const isAuth = pathname.startsWith(_login);
  const isProtected = pathname.startsWith(_dashboard);
  const isPublic = /^\/(events|organisations|tickets|profile|api)|\/$/.test(pathname);

  // logged out users can't access protected pages
  if (!user && isProtected && !isAuth)
    return NextResponse.redirect(new URL(`${_login}?redirectTo=${redirectTo}`, url.origin));

  // _dashboard is not accessible
  if (pathname === _dashboard)
    return NextResponse.redirect(new URL(_dashboardOrgs, url.origin));

  // _dashboardProfile is not accessible
  if (pathname === _dashboardProfile)
    return NextResponse.redirect(new URL(_dashboardProfileEdit, url.origin));

  // signed-in users can't access login or join page
  if (user && isAuth)
    return NextResponse.redirect(new URL(_dashboard, url.origin));

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
