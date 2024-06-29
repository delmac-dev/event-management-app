import { auth } from "./auth";
import { _dashboard, _events, _home, _join, _login } from "./lib/routes";

export default auth((request) => {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;
  const params = url.searchParams;
  const hasParams = params.size != 0;
  const redirectTo = encodeURIComponent(`${pathname}${hasParams? `?${params.toString()}`: ''}`);
  
  const isAuth = pathname.startsWith(_login) || pathname.startsWith(_join);
  const isPublic = (pathname: string) => /^\/(events|organisations|tickets|profile|api)|\/$/.test(pathname);

  // logged out users can only access public pages or auth pages
  if(!request.auth && !isPublic(pathname) && !isAuth){
    return Response.redirect(new URL(`${_login}?redirectTo=${redirectTo}`, url.origin));
  }

  // signed in users cant access login or join page
  if(isAuth) return Response.redirect(new URL(_dashboard, url.origin));
})

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
